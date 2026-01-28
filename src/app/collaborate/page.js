"use client";
import React, { useState } from "react";
import { Button, Col, Form, Row, Card, Container } from "react-bootstrap";
import "./style.css";
import { ThankYou } from "@/components/thank-you/page";
import ReCAPTCHA from "react-google-recaptcha";
import Image from 'next/image';



const collaborateCustFeatures = [
  {
    icon: '/images/form/icons/1.svg',
    text: 'Consistent, reliable product quality',
  },
  {
    icon: '/images/form/icons/2.svg',
    text: 'Competitive margins and healthy profitability',
  },
  {
    icon: '/images/form/icons/3.svg',
    text: 'Strong repeat demand across applications',
  },
  {
    icon: '/images/form/icons/4.svg',
    text: 'Timely supply and dependable service',
  },
  {
    icon: '/images/form/icons/5.svg',
    text: 'Technical support and customized solutions',
  },
  {
    icon: '/images/form/icons/6.svg',
    text: 'Transparent, long-term partnership approach',
  },
];

const steps = [
  "Personal Info",
  "Business Info",
  "Partnership Details",
  "Review & Submit",
];

const Dealership_Application = () => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [step, setStep] = useState(1);
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const [formData, setFormData] = useState({
    // Step 1
    fullName: "",
    email: "",
    designation: "",
    companyName: "",
    mobileNumber: "",
    orgType: "",

    // Step 2
    // businessFullName: "",
    // businessMobileNumber: "",
    businessCompanyName: "",
    companyEstablishedYear: "",
    warehouseAddress: "",
    officePremises: "",
    hasWarehouse: "",

    // Step 3
    companyTurnover: "",
    existingDealerCompanies: "",
    fieldSalesStaff: "",
    promotionRegions: "",
    topAdhesiveCompany: "",
    productCategory: "",
    referenceName: "",
    referenceMobile: "",
    referenceEmail: "",
    hearAbout: "",
  });

  const handleChange = (e) => {
    const { id, value, name, type, checked } = e.target;
    const fieldName = id || name;

    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [fieldName]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [fieldName]: value }));
    }

    setErrors((prev) => ({ ...prev, [fieldName]: "" }));
  };

  // ✅ Master Validation Function
  const validateStep = async () => {
    const newErrors = {};

    // STEP 1 Validation
    if (step === 1) {
      if (!formData.fullName.trim())
        newErrors.fullName = "Full Name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/^\S+@\S+\.\S+$/.test(formData.email))
        newErrors.email = "Please enter a valid email";
      if (!formData.designation.trim())
        newErrors.designation = "Designation is required";
      if (!formData.companyName.trim())
        newErrors.companyName = "Company Name is required";
      if (!formData.mobileNumber.trim())
        newErrors.mobileNumber = "Mobile Number is required";
      else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber))
        newErrors.mobileNumber = "Enter a valid 10-digit mobile number";
      if (!formData.orgType.trim())
        newErrors.orgType = "Organization Type is required";
    }

    // STEP 2 Validation
    if (step === 2) {
      // if (!formData.businessFullName.trim())
      //   newErrors.businessFullName = "Full Name is required";
      // if (!formData.businessMobileNumber.trim())
      //   newErrors.businessMobileNumber = "Mobile Number is required";
      // else if (!/^[6-9]\d{9}$/.test(formData.businessMobileNumber))
      //   newErrors.businessMobileNumber = "Enter a valid 10-digit mobile number";
      if (!formData.businessCompanyName.trim())
        newErrors.businessCompanyName = "Company Name is required";
      if (!formData.companyEstablishedYear.trim())
        newErrors.companyEstablishedYear = "Year is required";
      if (!formData.warehouseAddress.trim())
        newErrors.warehouseAddress = "Warehouse Address is required";
      if (!formData.officePremises)
        newErrors.officePremises = "Select office premises";
      if (!formData.hasWarehouse)
        newErrors.hasWarehouse = "Select warehouse option";
    }

    // STEP 3 Validation
    if (step === 3) {
      if (!formData.companyTurnover.trim())
        newErrors.companyTurnover = "Company turnover is required";

      if (!formData.existingDealerCompanies.trim())
        newErrors.existingDealerCompanies =
          "Existing dealer companies are required";

      if (!formData.fieldSalesStaff.trim())
        newErrors.fieldSalesStaff = "Field sales staff is required";

      if (!formData.promotionRegions.trim())
        newErrors.promotionRegions = "Promotion regions are required";

      if (!formData.topAdhesiveCompany.trim())
        newErrors.topAdhesiveCompany =
          "Top performing adhesive company is required";

      if (!formData.productCategory.trim())
        newErrors.productCategory = "Product category is required";

      if (!formData.referenceName.trim())
        newErrors.referenceName = "Reference name is required";

      if (!formData.referenceMobile.trim())
        newErrors.referenceMobile = "Reference mobile is required";
      else if (!/^[6-9]\d{9}$/.test(formData.referenceMobile))
        newErrors.referenceMobile = "Enter valid 10-digit mobile number";

      if (!formData.referenceEmail.trim())
        newErrors.referenceEmail = "Reference email is required";
      else if (!/^\S+@\S+\.\S+$/.test(formData.referenceEmail))
        newErrors.referenceEmail = "Enter valid email address";
      if (!formData.hearAbout.trim()) {
        newErrors.hearAbout = "Please tell us how you heard about us";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = async () => {
    const valid = await validateStep();

    if (!valid) return;

    setValidated(false);
    setStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setValidated(false);
    setStep((prev) => prev - 1);
  };

  const onClose = () => {
    setSubmitted(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return; //  prevent double click

    const valid = await validateStep();
    if (!valid) return;

    if (!captchaToken) {
      alert("Please verify captcha");
      return;
    }

    try {
      setLoading(true); // disable form

      const response = await fetch("/api/send-dealershipapplicationform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          token: captchaToken,
        }),
      });

      if (!response.ok) {
        throw new Error("API failed");
      }

      await response.json();

      // ✅ success
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
      setLoading(false); // 🔓 re-enable on error
    }
  };

  const renderStepContent = () => {
    switch (step) {
      // ---------------- STEP 1 ----------------
      case 1:
        return (
          <>
            <h4 className="tilte-form-four">Personal Info</h4>
            <Row className="mb-3 g-3 form-column-gap">
              <Form.Group as={Col} md="6" controlId="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                    setFormData({ ...formData, fullName: value });
                  }}
                  isInvalid={!!errors.fullName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.fullName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3 g-3 form-column-gap">
              <Form.Group as={Col} md="6" controlId="designation">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Designation"
                  value={formData.designation}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                    setFormData({ ...formData, designation: value });
                  }}
                  isInvalid={!!errors.designation}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.designation}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="companyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                    setFormData({ ...formData, companyName: value });
                  }}
                  isInvalid={!!errors.companyName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.companyName}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-4 g-3 form-column-gap">
              <Form.Group as={Col} md="6" controlId="mobileNumber">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  required
                  type="tel"
                  placeholder="Mobile Number"
                  value={formData.mobileNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    if (value.length <= 10) {
                      setFormData({ ...formData, mobileNumber: value });
                    }
                  }}
                  maxLength={10}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  isInvalid={!!errors.mobileNumber}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.mobileNumber}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="orgType">
                <Form.Label>Organization Type</Form.Label>
                <Form.Select
                  required
                  value={formData.orgType}
                  onChange={handleChange}
                  id="orgType"
                  isInvalid={!!errors.orgType}
                >
                  <option value="">Select type</option>
                  <option value="sole">Sole Proprietorship</option>
                  <option value="partnership">Partnership</option>
                  <option value="private">Private Limited</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.orgType}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
          </>
        );

      // ---------------- STEP 2 ----------------
      case 2:
        return (
          <>
            <h4 className="tilte-form-four mb-4">Business Info</h4>
            <Row className="mb-3 g-3 form-column-gap">
              {/* <Form.Group as={Col} md="6" controlId="businessFullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Full Name"
                  value={formData.businessFullName}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide full name.
                </Form.Control.Feedback>
              </Form.Group> */}

              {/* <Form.Group as={Col} md="6" controlId="businessMobileNumber">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Mobile Number"
                  value={formData.businessMobileNumber}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide mobile number.
                </Form.Control.Feedback>
              </Form.Group> */}
            </Row>

            <Row className="mb-3 g-3 form-column-gap">
              <Form.Group as={Col} md="6" controlId="businessCompanyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Company Name"
                  value={formData.businessCompanyName}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                    setFormData({ ...formData, businessCompanyName: value });
                  }}
                  isInvalid={!!errors.businessCompanyName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.businessCompanyName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="companyEstablishedYear">
                <Form.Label>When was your company established</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Year (e.g. 2005)"
                  value={formData.companyEstablishedYear}
                  onChange={handleChange}
                  isInvalid={!!errors.companyEstablishedYear}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.companyEstablishedYear}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3 form-column-gap">
              <Form.Group as={Col} md="12" controlId="warehouseAddress">
                <Form.Label>Registered Address</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Registered Address"
                  value={formData.warehouseAddress}
                  onChange={handleChange}
                  style={{ paddingBottom: "30px" }}
                  isInvalid={!!errors.warehouseAddress}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.warehouseAddress}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3 g-3 form-column-gap">
              <Form.Group as={Col} md="6">
                <Form.Label>
                  Your office premises is self owned or rented?{" "}
                  <span className="text-danger">*</span>
                </Form.Label>

                <div>
                  <Form.Check
                    inline
                    label="Self Owned"
                    type="radio"
                    name="officePremises"
                    value="self owned"
                    checked={formData.officePremises === "self owned"}
                    onChange={handleChange}
                    isInvalid={!!errors.officePremises}
                  />

                  <Form.Check
                    inline
                    label="Rented"
                    type="radio"
                    name="officePremises"
                    value="rented"
                    checked={formData.officePremises === "rented"}
                    onChange={handleChange}
                    isInvalid={!!errors.officePremises}
                  />
                </div>

                {errors.officePremises && (
                  <div className="text-danger mt-1 small">
                    {errors.officePremises}
                  </div>
                )}
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>
                  Do you have warehouse facility?{" "}
                  <span className="text-danger">*</span>
                </Form.Label>

                <div>
                  <Form.Check
                    inline
                    label="Yes"
                    type="radio"
                    name="hasWarehouse"
                    value="yes"
                    checked={formData.hasWarehouse === "yes"}
                    onChange={handleChange}
                    isInvalid={!!errors.hasWarehouse}
                  />

                  <Form.Check
                    inline
                    label="No"
                    type="radio"
                    name="hasWarehouse"
                    value="no"
                    checked={formData.hasWarehouse === "no"}
                    onChange={handleChange}
                    isInvalid={!!errors.hasWarehouse}
                  />
                </div>

                {errors.hasWarehouse && (
                  <div className="text-danger mt-1 small">
                    {errors.hasWarehouse}
                  </div>
                )}
              </Form.Group>
            </Row>
          </>
        );

      // ---------------- STEP 3 ----------------
      case 3:
        return (
          <>
            <h4 className="tilte-form-four">Partnership Details</h4>

            <Row className="mb-3 g-3 form-column-gap">
              <Form.Group as={Col} md="6" controlId="companyTurnover">
                <Form.Label>
                  What was your company's turnover for last year?{" "}
                  <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Turnover"
                  value={formData.companyTurnover}
                  onChange={handleChange}
                  isInvalid={!!errors.companyTurnover}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.companyTurnover}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="existingDealerCompanies">
                <Form.Label>
                  You are existing dealer of which other Companies?{" "}
                  <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Existing dealer companies"
                  value={formData.existingDealerCompanies}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^A-Za-z0-9\s]/g, "");
                    setFormData({
                      ...formData,
                      existingDealerCompanies: value,
                    });
                  }}
                  isInvalid={!!errors.existingDealerCompanies}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.existingDealerCompanies}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3 g-3 form-column-gap">
              <Form.Group as={Col} md="6" controlId="fieldSalesStaff">
                <Form.Label>
                  How many field sales staff you have?{" "}
                  <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Number of staff"
                  value={formData.fieldSalesStaff}
                  onChange={handleChange}
                  isInvalid={!!errors.fieldSalesStaff}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.fieldSalesStaff}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="promotionRegions">
                <Form.Label>
                  Which regions you would like to promote our products?{" "}
                  <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Regions"
                  value={formData.promotionRegions}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                    setFormData({
                      ...formData,
                      promotionRegions: value,
                    });
                  }}
                  isInvalid={!!errors.promotionRegions}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.promotionRegions}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3 g-3 form-column-gap">
              <Form.Group as={Col} md="6" controlId="topAdhesiveCompany">
                <Form.Label>
                  Top-Performing Adhesive Company{" "}
                  <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Top Adhesive Company"
                  value={formData.topAdhesiveCompany}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                    setFormData({
                      ...formData,
                      topAdhesiveCompany: value,
                    });
                  }}
                  isInvalid={!!errors.topAdhesiveCompany}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.topAdhesiveCompany}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="productCategory">
                <Form.Label>
                  Product category to sell{" "}
                  <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Product category"
                  value={formData.productCategory}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                    setFormData({
                      ...formData,
                      productCategory: value,
                    });
                  }}
                  isInvalid={!!errors.productCategory}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.productCategory}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Label>
                References (Name & Contact Details){" "}
                <span className="text-danger">*</span>
              </Form.Label>

              <Form.Group as={Col} md="4" controlId="referenceName">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={formData.referenceName}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                    setFormData({
                      ...formData,
                      referenceName: value,
                    });
                  }}
                  isInvalid={!!errors.referenceName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.referenceName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="referenceMobile">
                <Form.Control
                  type="number"
                  placeholder="Mobile Number"
                  value={formData.referenceMobile}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    if (value.length <= 10) {
                      setFormData({ ...formData, referenceMobile: value });
                    }
                  }}
                  isInvalid={!!errors.referenceMobile}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.referenceMobile}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="referenceEmail">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  value={formData.referenceEmail}
                  onChange={handleChange}
                  isInvalid={!!errors.referenceEmail}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.referenceEmail}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3 form-column-gap">
              <Form.Group as={Col} md="12" controlId="hearAbout">
                <Form.Label>
                  How did you come to know about our organization?{" "}
                  <span className="text-danger">*</span>
                </Form.Label>

                <Form.Select
                  value={formData.hearAbout}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      hearAbout: e.target.value,
                    })
                  }
                  isInvalid={!!errors.hearAbout}
                >
                  <option value="">Select an option</option>
                  <option value="Website">Website</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Reference">Reference</option>
                  <option value="Reference">Other</option>
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                  {errors.hearAbout}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

          </>
        );
      // ---------------- STEP 4 ----------------

      // ---------------- STEP 4 ----------------
      case 4:
        return (
          <>
            <h5 className="mb-4">Step 1: Personal Info</h5>
            <Row className="mb-4 form-column-gap">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.fullName}
                    disabled
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="text" value={formData.email} disabled />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-4 form-column-gap">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Designation</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.designation}
                    disabled
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.companyName}
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-4 form-column-gap">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.mobileNumber}
                    disabled
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Organization Type</Form.Label>
                  <Form.Control type="text" value={formData.orgType} disabled />
                </Form.Group>
              </Col>
            </Row>

            <hr className="my-4" />
            <h5 className="mb-4">Step 2: Business Info</h5>
            <Row className="mb-4 form-column-gap">
              {/* <Col md={6}>
                <Form.Group>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.businessFullName}
                    disabled
                  />
                </Form.Group>
              </Col> */}
              {/* <Col md={6}>
                <Form.Group>
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.businessMobileNumber}
                    disabled
                  />
                </Form.Group>
              </Col> */}
            </Row>

            <Row className="mb-4 form-column-gap">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.businessCompanyName}
                    disabled
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Established Year</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.companyEstablishedYear}
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col md={12}>
                <Form.Group>
                  <Form.Label>Warehouse Address</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.warehouseAddress}
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-4 form-column-gap">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Office Premises</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.officePremises}
                    disabled
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Has Warehouse Facility</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.hasWarehouse}
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>

            <hr className="my-4" />
            <h5 className="mb-4">Step 3: Partnership Details</h5>
            <Row className="mb-3 g-3 form-column-gap">
              <Form.Group as={Col} md="6">
                <Form.Label>Company Turnover</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.companyTurnover}
                  disabled
                />
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>Existing Dealer Companies</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.existingDealerCompanies}
                  disabled
                />
              </Form.Group>
            </Row>

            <Row className="mb-3 g-3 form-column-gap">
              <Form.Group as={Col} md="6">
                <Form.Label>Field Sales Staff</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.fieldSalesStaff}
                  disabled
                />
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>Promotion Regions</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.promotionRegions}
                  disabled
                />
              </Form.Group>
            </Row>

            <Row className="mb-3 g-3 form-column-gap">
              <Form.Group as={Col} md="6">
                <Form.Label>Top Adhesive Company</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.topAdhesiveCompany}
                  disabled
                />
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>Product Category</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.productCategory}
                  disabled
                />
              </Form.Group>
            </Row>

            <Row className="mb-3 form-column-gap">
              <Form.Group as={Col} md="4">
                <Form.Label>Reference Name</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.referenceName}
                  disabled
                />
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Form.Label>Reference Mobile</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.referenceMobile}
                  disabled
                />
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Form.Label>Reference Email</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.referenceEmail}
                  disabled
                />
              </Form.Group>
            </Row>

            <Row className="mb-3 form-column-gap">
              <Form.Group as={Col} md="12">
                <Form.Label>How did you hear about us?</Form.Label>
                <Form.Control type="text" value={formData.hearAbout} disabled />
              </Form.Group>
            </Row>

            <div className="mb-3">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={(token) => setCaptchaToken(token)}
              />
            </div>
            <div className="d-flex mt-4 gap-4">
              <Button
                type="button"
                variant="secondary"
                className="Previous-submit-btn-deal"
                onClick={handlePrevious}
                disabled={loading}
              >
                Previous
              </Button>

              <Button
                variant="primary"
                className="submit-btn-dealership"
                type="submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </>
        );

        return (
          <>
            <Row className="mb-3 form-column-gap ">
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    What was your company's turnover for last year?*
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.companyTurnover}
                    disabled
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>How many field sales staff you have?</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.fieldSalesStaff}
                    disabled
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    Name of Top-Performing Adhesive Company in Your Region
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.topAdhesiveCompany}
                    disabled
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    How did you come to know about our organization?
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.hearAbout}
                    disabled
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    You are existing dealer of which other Companies?*
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.existingDealerCompanies}
                    disabled
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    Which are the regions you would like to promote our
                    products?
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.promotionRegions}
                    disabled
                  />
                </Form.Group>

                <Form.Group className="mb-3 g-3">
                  <Form.Label>
                    Can you tell us product category/product you are planning to
                    sell in your region?
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.productCategory}
                    disabled
                  />
                </Form.Group>

                <Row className="mb-3 form-column-gap">
                  <Form.Group as={Col} md="4">
                    <Form.Label>Reference Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.referenceName || ""}
                      disabled
                    />
                  </Form.Group>

                  <Form.Group as={Col} md="4">
                    <Form.Label>Reference Mobile</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.referenceMobile || ""}
                      disabled
                    />
                  </Form.Group>

                  <Form.Group as={Col} md="4">
                    <Form.Label>Reference Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={formData.referenceEmail || ""}
                      disabled
                    />
                  </Form.Group>
                </Row>
              </Col>
            </Row>

            <div className="d-flex mt-10 gap-5">
              <Button
                variant="secondary"
                className="Previous-submit-btn-deal"
                onClick={handlePrevious}
              >
                Previous
              </Button>
              <Button
                variant="primary"
                className="submit-btn-dealership"
                type="submit"
              >
                Submit Application
              </Button>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  const progressPercentage = ((step - 1) / (steps.length - 1)) * 100;
  if (submitted) {
    return <ThankYou onClose={onClose} />;
  }
  return (
    <section className="dealership-form-main">
      <div className="banner-section">
        <div className="banner-overlay">
          <div className="collaborate-banner-content desktop-only">
            <h1 className="collaborate-banner-title">
              Grow Your Business <br /> with Arofine
            </h1>

            <p className="collaborate-banner-text">
              Partner with a brand trusted by dealers across industries.
              At Arofine, we believe real growth happens when our partners
              succeed with us.
            </p>
          </div>

        </div>
      </div>
      <div className="mobile-only" style={{ margin: "20px", textAlign: "center" }}>
        <h2 style={{ color: "#212529", paddingTop: "10px", fontWeight: "700" }}> Grow Your Business <br /> with Arofine</h2>
        <p style={{ color: "#212529", paddingTop: "10px" }}>
          Partner with a brand trusted by dealers across industries.
          At Arofine, we believe real growth happens when our partners
          succeed with us.
        </p>
      </div>

      <Container className="collaborate-cust-section">
        {/* Title */}
        <div className="collaborate-cust-heading">
          <h2>Why Dealers Choose Arofine</h2>
          <p>
            We don’t just supply products — we build long-term, profitable partnerships.
          </p>
        </div>

        {/* Feature Cards */}
        <Row className="collaborate-cust-cards">
          {collaborateCustFeatures.map((item, index) => (
            <Col md={6} sm={6} lg={4} key={index}>

              <Card className="collaborate-cust-card">
                <Card.Body>
                  <div className="collaborate-cust-card-content">
                    <div className="collaborate-cust-icon-box">
                      <Image
                        src={item.icon}
                        alt=""
                        width={60}
                        height={60}
                      />
                    </div>
                    <span>{item.text}</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Gradient Banner */}
        <div className="collaborate-cust-advantage">
          <span className="collaborate-cust-advantage-label">
            The Arofine Advantage
          </span>

          <h3>
            Low Complaints. High Trust. Steady Business
          </h3>

          <p>
            That’s why our dealer network continues to grow.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="collaborate-cust-footer">
          <h3>Let’s Grow Together</h3>
          <p>
            Fill in the form below and our team will get in touch with you shortly.
          </p>
        </div>
      </Container>





      <Container className="form-main-cst">
        <Card className=" shadow">
          <Card.Body className="custom-card-body">
            {/* <h2 className="title-main-dealer">Dealership Application Form</h2>
            <p className="sub-title-main-dealer">
              Complete the following steps to submit your application.
            </p> */}

            {/* Stepper */}
            <div className="stepper-header">
              <div className="stepper-header-top d-flex justify-content-between align-items-center mb-2">
                <div>
                  <h5 className="wizard-title">Dealership Application</h5>
                  <p className="wizard-subtitle mb-0">
                    Step {step}: {steps[step - 1]}
                  </p>
                </div>
                <div className="wizard-step-count">
                  {step} of {steps.length}
                </div>
              </div>

              <div className="progress-bar-track-single">
                <div
                  className="progress-fill-single"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            <Form
              noValidate
              validated={validated}
              id="dealershipForm"
              onSubmit={handleSubmit}
            >
              {renderStepContent()}

              {step !== 4 && (
                <div className="d-flex gap-5 mt-4">
                  {step > 1 && (
                    <Button
                      variant="secondary"
                      className="previous-btn-dealership"
                      onClick={handlePrevious}
                    >
                      <i className="bi bi-arrow-left me-2"></i>Previous
                    </Button>
                  )}
                  <Button
                    variant="primary"
                    className="next-btn-dealership"
                    onClick={handleNext}
                  >
                    Next <i className="bi bi-arrow-right ms-2"></i>
                  </Button>
                </div>
              )}
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Dealership_Application;
