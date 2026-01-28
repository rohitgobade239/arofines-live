"use client";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useEffect, useState } from "react";
import { Col, Button, Form, Badge, Row } from "react-bootstrap";
import { usePathname } from "next/navigation";

export const EnquireNow = ({ productSelected, setSuccess, deleteBtn }) => {
  const pathname = usePathname();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    orgType: "",
    message: "",
    location: "",
    company: "",
    url: "",
    state: "",
    stateName: "",
    city: "",
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      url: `${window.location.origin}${pathname}`,
    }));
  }, [pathname]);

  const [errors, setErrors] = useState({});
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [isSendingEmailOtp, setIsSendingEmailOtp] = useState(false);
  const [emailOtpVerified, setEmailOtpVerified] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [fullAddress, setFullAddress] = useState("");
  const [emailOtpError, setEmailOtpError] = useState("");
  const [emailOtpCode, setEmailOtpCode] = useState("");
  const [isVerifyingEmailOtp, setIsVerifyingEmailOtp] = useState(false);

  const [captchaToken, setCaptchaToken] = useState(null);
  const [captchaError, setCaptchaError] = useState("");
  const [stateCityMap, setStateCityMap] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const API_KEY = process.env.NEXT_PUBLIC_CSC_API_KEY;

    fetch("https://api.countrystatecity.in/v1/countries/IN/states", {
      headers: {
        "X-CSCAPI-KEY": API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setStateCityMap(data);
      })
      .catch((err) => console.error(err));
  }, []);

  // useEffect(() => {
  //   getLoction();
  // }, []);

  const onSubmitEnquire = async (e) => {
    e.preventDefault();
    // getLoction();
    const validationErrors = validate();
    if (!captchaToken) {
      setCaptchaError("Please verify reCAPTCHA");
      return;
    }

    // if(formData.location==="") { return getLoction();}
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    let res = await fetch("/api/send-email-product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        productSelected,
        token: captchaToken,
      }),
    });
    res = await res.json();
    if (res.success) {
      setSuccess(true);
    } else {
      alert(res);
    }

    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      orgType: "",
      message: "",
      location: "",
      company: "",
      state: "",
      stateName: "",
      city: "",
    });
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    if (name === "state") {
      try {
        const res = await fetch(
          `https://api.countrystatecity.in/v1/countries/IN/states/${value}/cities`,
          {
            headers: {
              "X-CSCAPI-KEY": process.env.NEXT_PUBLIC_CSC_API_KEY,
            },
          }
        );

        const data = await res.json();

        // Store only city names
        setCities(data.map((city) => city.name));
        stateCityMap.map((state) => {
          state?.iso2 === value &&
            setFormData({ ...formData, stateName: state?.name });
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const sendEmailOtp = async () => {
    setIsSendingEmailOtp(true);
    try {
      const res = await fetch("/api/send-email-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });
      const data = await res.json();
      if (data.success) setEmailOtpSent(true);
      else setEmailOtpError(data.error || "Failed to send OTP");
    } catch (err) {
      setEmailOtpError("Error sending OTP");
    }
    setIsSendingEmailOtp(false);
  };

  const verifyEmailOtp = async () => {
    setIsVerifyingEmailOtp(true);
    try {
      const res = await fetch("/api/verify-email-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, code: emailOtpCode }),
      });
      const data = await res.json();
      if (data.valid) setEmailOtpVerified(true);
      else setEmailOtpError(data.message);
    } catch {
      setEmailOtpError("Verification failed");
    }
    setIsVerifyingEmailOtp(false);
  };
  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }
    // if (!formData.orgType) newErrors.orgType = "Select organization type";
    if (!productSelected || productSelected.length === 0)
      newErrors.productSelected = "Please select at least one product";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    // ✅ Add location validation
    // if (!fullAddress || fullAddress === "Unknown City") {
    //   newErrors.location = "Please enter your location";
    //   getLoction();
    // }
    // if (!formData?.location) {
    //   newErrors.location = "Please enter your location";
    // }
    if (!formData?.company) {
      newErrors.company = "Please enter your company";
    }
    return newErrors;
  };

  const getLoction = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await res.json();
            const userCity =
              data.address.city ||
              data.address.town ||
              data.address.village ||
              data.address.county ||
              "Unknown City";
            setFullAddress(data.display_name || userCity);
            setFormData({
              ...formData,
              location: data.display_name || userCity,
            });
          } catch (error) {
            console.error(
              "Error fetching location:",
              data.display_name || userCity
            );
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          setErrors((prev) => ({
            ...prev,
            location: "Please allow GPS permission to autofill location",
          }));
        }
      );
    } else {
      setErrors((prev) => ({
        ...prev,
        location: "Geolocation is not supported by your browser",
      }));
    }
  };

  return (
    <Col md={4} id="enquiry-form">
      <div className="enquiry-form">
        <h4 className="border-bottom pb-2">Enquire Now</h4>

        <Form className="pt-1" onSubmit={onSubmitEnquire}>
          <Form.Group className="mb-3">
            <Form.Label>
              Full Name<span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) => {
                const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                setFormData({
                  ...formData,
                  fullName: value,
                });
              }}
              isInvalid={!!errors.fullName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.fullName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              Email Address<span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
              disabled={emailOtpSent}
            />
            {/* 
              {!emailOtpSent ? (
                <Button
                  type="button"
                  className="mt-2"
                  variant="danger"
                  onClick={sendEmailOtp}
                  disabled={formData.email.length === 0}
                >
                  {isSendingEmailOtp ? "Sending..." : "Send OTP"}
                </Button>
              ) : (
                <Button type="button" disabled className="mt-2" variant="danger">
                  OTP Sent
                </Button>
              )} */}

            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          {/* OTP input section */}
          {emailOtpSent && !emailOtpVerified && (
            <Form.Group className="mb-3">
              <Form.Label>Enter OTP</Form.Label>
              <Form.Control
                type="text"
                placeholder="OTP"
                value={emailOtpCode}
                onChange={(e) => setEmailOtpCode(e.target.value)}
              />
              <Button
                type="button"
                className="mt-2"
                variant="danger"
                onClick={verifyEmailOtp}
                disabled={isVerifyingEmailOtp}
              >
                {isVerifyingEmailOtp ? "Verifying..." : "Verify OTP"}
              </Button>
              {emailOtpError && (
                <div className="text-danger small">{emailOtpError}</div>
              )}
            </Form.Group>
          )}

          {emailOtpVerified && (
            <div className="text-success mb-3">Email verified ✅</div>
          )}

          <Form.Group className="mb-3">
            <Form.Label>
              Mobile Number<span className="text-danger">*</span>
            </Form.Label>
            <>
              <Form.Control
                type="number"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                // onChange={handleChange}
                 onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    if (value.length <= 10) {
                      setFormData({ ...formData, mobile: value });
                    }
                  }}
                isInvalid={!!errors.mobile}
                disabled={otpSent}
              />
              {/* {!otpSent ? (
                        <Button
                          type="button"
                          onClick={sendOtp}
                          disabled={formData.mobile.length === 0}
                          className="mt-2"
                          variant="danger"
                        >
                          {isSendingOtp ? "Sending..." : "Send OTP"}
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          disabled
                          className="mt-2"
                          variant="danger"
                        >
                          OTP Sent
                        </Button>
                      )} */}
            </>
            <Form.Control.Feedback type="invalid">
              {errors.mobile}
            </Form.Control.Feedback>
          </Form.Group>

          {otpSent && !otpVerified && (
            <Form.Group className="mb-3">
              <Form.Label>Enter OTP</Form.Label>
              <>
                <Form.Control
                  type="text"
                  placeholder="OTP"
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value)}
                />
                <Button
                  type="button"
                  onClick={verifyOtp}
                  disabled={isVerifyingOtp}
                  className="mt-2"
                  variant="danger"
                >
                  {isVerifyingOtp ? "Verifying..." : "Verify OTP"}
                </Button>
              </>
              {otpError && <div className="text-danger small">{otpError}</div>}
            </Form.Group>
          )}

          {otpVerified && (
            <div className="text-success mb-3">Phone verified ✅</div>
          )}

          {/*
                  <Form.Group className="mb-3">
                    <Form.Label>
                      What is your organisation type?
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      name="orgType"
                      value={formData.orgType}
                      onChange={handleChange}
                      isInvalid={!!errors.orgType}
                    >
                      <option value="">Select Organization Type</option>
                      <option>Manufacturer</option>
                      <option>Distributor</option>
                      <option>Retailer</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.orgType}
                    </Form.Control.Feedback>
                  </Form.Group>*/}

          <Form.Group className="mb-3">
            <Form.Label>
              Company Name <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              rows={3}
              name="company"
              placeholder="Enter company name"
              value={formData.company}
              onChange={(e) => {
                const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                setFormData({
                  ...formData,
                  company: value,
                });
              }}
              isInvalid={!!errors.company}
            />
            <Form.Control.Feedback type="invalid">
              {errors.company}
            </Form.Control.Feedback>
          </Form.Group>

          {/* <Form.Group className="mb-3">
            <Form.Label>
              Location <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="location"
              placeholder="Enter or allow location"
              value={formData.location}
              // onChange={(e) => setFullAddress(e.target.value)}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  location: e.target.value,
                });
              }}
              isInvalid={!!errors.location}
            />
            <Form.Control.Feedback type="invalid">
              {errors.location}
            </Form.Control.Feedback>
          </Form.Group> */}

          <Row className="g-4">
            {/* Select State */}
            <Col md={6}>
              <Form.Group>
                <Form.Label>
                  <span className="text-danger">*</span> Select State
                </Form.Label>
                <Form.Select name="state" onChange={handleChange}>
                  <option value="">Select State</option>
                  {stateCityMap.length !== 0 &&
                    stateCityMap.map((state) => (
                      <option key={state.iso2} value={state.iso2}>
                        {state.name}
                      </option>
                    ))}
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Select City */}
            <Col md={6}>
              <Form.Group>
                <Form.Label>
                  <span className="text-danger">*</span> Select City
                </Form.Label>
                <Form.Select name="city" onChange={handleChange}>
                  <option value="">Select City</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>
              Selected Product<span className="text-danger">*</span>
            </Form.Label>
            <div className="tags title-form-input">
              {productSelected?.length ? (
                productSelected.map((i, index) => (
                  <Badge key={index} className="badge-btn">
                    <p>{i?.title}</p>
                    <Button
                      className="close-btn-badge"
                      onClick={() => deleteBtn(i)}
                      size="sm"
                      variant="light"
                    >
                      ✕
                    </Button>
                  </Badge>
                ))
              ) : (
                <Badge className="p-3" bg="danger">
                  Product selection is required to continue.
                </Badge>
              )}
            </div>
            {errors.productSelected && (
              <div className="text-danger small">{errors.productSelected}</div>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              Message<span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={(e) => {
                const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                setFormData({
                  ...formData,
                  message: value,
                });
              }}
              isInvalid={!!errors.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.message}
            </Form.Control.Feedback>
          </Form.Group>
          <div className="mb-3">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={(value) => {
                setCaptchaToken(value);
                setCaptchaError("");
              }}
            />
            {captchaError && (
              <div className="text-danger small mt-1">{captchaError}</div>
            )}
          </div>
          <Button className="submit-btn w-100" type="submit">
            Enquire Now
          </Button>
        </Form>
      </div>
      <div className="enquiry-form-product-count"> {productSelected?.length}</div>

    </Col>
  );
};
