"use client";
import { useState, useRef } from "react";
import "./style.css";
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    email: "",
    company: "",
    subject: "",
    category: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [token, setToken] = useState(null);
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.contact.trim()) newErrors.contact = "Contact is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.category.trim()) newErrors.category = "Category is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (!token) {
      alert("Please verify you are not a robot.");
      return;
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }
    try {
      const res = await fetch("/api/send-email-Talk-to-expert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          token,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          fullName: "",
          contact: "",
          email: "",
          company: "",
          subject: "",
          category: "",
          message: "",
        });
        recaptchaRef.current.reset();
        setToken(null);
      } else {
        alert("Failed to send email");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      {/* Banner Section */}
      <section className="banner d-flex align-items-center desktop-only">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="banner-title">Contact</h1>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mobile-only">
        <Image
          src={"/images/contact/Contact_banner-Mobile.jpg"}
          width={320}
          height={250}
          alt={"kkkkk"}
          className="leading-img"
          style={{ width: "100%" }}
        />
        <Container style={{ padding: "0px 10px", paddingTop: "10px", paddingBottom: "10px" }}>
          <div className="leading-singel">
            <h2 style={{ color: "#212529", fontSize: "22px", paddingTop: "10px", fontWeight: "700" }}>Contact</h2>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="ArofineContact" id="ArofineContact">
        <Container>
          <Row>
            {/* Form */}
            <Col lg={6} md={6} sm={12} className="pd-no customCol">
              <div className="talk-header-custt">
                <h2>Talk to us, directly.</h2>
                <p>
                  Get in touch with us for the widest range of customized
                  adhesives.
                </p>
              </div>

              {submitted && (
                <Alert variant="success" className="mb-3">
                  We have received your request. Our team will get back to you within the next 24 hours.
                </Alert>
              )}

              <Form className="talk-form" onSubmit={handleSubmit} noValidate>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="fullName"
                    placeholder="Full Name*"
                    value={formData.fullName}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                      setFormData({
                        ...formData,
                        fullName: value,
                      });
                    }}
                    isInvalid={!!errors.fullName}
                    className="plceholder-cust-talk"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.fullName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="number"
                        name="contact"
                        placeholder="Contact*"
                        value={formData.contact}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, "");
                          if (value.length <= 10) {
                            setFormData({ ...formData, contact: value });
                          }
                        }}
                        isInvalid={!!errors.contact}
                        className="plceholder-cust-talk"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.contact}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email*"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                        className="plceholder-cust-talk"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="company"
                        placeholder="Company*"
                        value={formData.company}
                        onChange={(e) => {
                          const value = e.target.value.replace(
                            /[^A-Za-z\s]/g,
                            ""
                          );
                          setFormData({
                            ...formData,
                            company: value,
                          });
                        }}
                        isInvalid={!!errors.company}
                        className="plceholder-cust-talk"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.company}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="subject"
                        placeholder="Subject*"
                        value={formData.subject}
                        onChange={(e) => {
                          const value = e.target.value.replace(
                            /[^A-Za-z\s]/g,
                            ""
                          );
                          setFormData({
                            ...formData,
                            subject: value,
                          });
                        }}
                        isInvalid={!!errors.subject}
                        className="plceholder-cust-talk"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.subject}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    isInvalid={!!errors.category}
                    className="plceholder-cust-talk"
                  >
                    <option value="">
                      Select Product Category or Industry*
                    </option>
                    <option>Adhesives</option>
                    <option>Sealants</option>
                    <option>Tapes</option>
                    <option>Custom Solutions</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.category}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder="Message*"
                    value={formData.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                    className="plceholder-cust-talk"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={(value) => setToken(value)}
                    ref={recaptchaRef}
                  />
                </Form.Group>

                <Button type="submit" className="submit-btn">
                  Submit <span className="talk-btn-arrow">→</span>
                </Button>
              </Form>
            </Col>

            {/* Office Details */}
            <Col
              lg={5}
              md={5}
              sm={12}
              className="offset-lg-1 offset-md-1 customCol"
            >
              <div className="Details card p-5">
                <h4>Head Office:</h4>
                <h5>Address</h5>
                <p>S-42, MIDC, Bhosari, Pune 411026</p>

                <p>
                  <b>Email</b>:{" "}
                  <a href="mailto:sales@arofines.in">sales@arofines.in</a> •{" "}
                  <a href="mailto:info@arofines.in">info@arofines.in</a>
                </p>

                <p>
                  <b>Phone</b>: <a href="tel:+918007178642">+91 800 717 8642</a>{" "}
                  / <a href="tel:+919325981890">+91 93259 818 90</a>
                </p>

                <Button
                  className="btnTwo mb-3"
                  href="https://goo.gl/maps/5KwqpvwtCX6GtRZ36"
                  target="_blank"
                >
                  Get Directions
                </Button>

                <hr />

                <h4>Manufacturing Plant:</h4>
                <h5>Address</h5>
                <p>C-33 MIDC, Chakan, Pune 410501</p>

                <p>
                  <b>Email</b>:{" "}
                  <a href="mailto:sales@arofines.in">sales@arofines.in</a> •{" "}
                  <a href="mailto:info@arofines.in">info@arofines.in</a>
                </p>

                <p>
                  <b>Phone</b>: <a href="tel:+918007178642">+91 800 717 8642</a>{" "}
                  / <a href="tel:+919325981890">+91 93259 818 90</a>
                </p>

                <Button
                  className="btnTwo"
                  href="https://goo.gl/maps/PxdFpq2jPcZTcMyd8"
                  target="_blank"
                >
                  Get Directions
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Retail Outlets & Regional Contacts */}
      <section className="ArofineBranches">
        <Container>
          <Row>
            <Col className="head text-center">
              <h2 className="title-mn-contact">Retail Outlets</h2>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <div className="DetailsBox yellowBorder">
                <h4>Pune</h4>
                <p>352 / 353 Shaniwar Peth, Pune 411030</p>

                <p>
                  <b>Email:</b>{" "}
                  <a href="mailto:sales@arofines.in">sales@arofines.in</a>
                </p>

                <p>
                  <b>Phone:</b> <a href="tel:+918007178642">+91 800 717 8642</a>
                </p>

                <Button
                  href="https://goo.gl/maps/Q8XP2oNBWoSqzais9"
                  target="_blank"
                  className="btnTwo"
                >
                  Get Directions
                </Button>
              </div>
            </Col>

            <Col md={6}>
              <div className="DetailsBox yellowBorder">
                <h4>Mumbai</h4>
                <p>Dadar East, Mumbai 400014</p>

                <p>
                  <b>Email:</b>{" "}
                  <a href="mailto:sales@arofines.in">sales@arofines.in</a>
                </p>

                <p>
                  <b>Phone:</b> <a href="tel:+918605017008">+91 8605017008</a>
                </p>

                <Button
                  href="https://goo.gl/maps/6tR6wR4e5GZJ1CCH7"
                  target="_blank"
                  className="btnTwo"
                >
                  Get Directions
                </Button>
              </div>
            </Col>
          </Row>

          {/* Regional Contacts */}
          <Row className="mt-4 text-center ">
            {[
              { city: "Bangalore", phone: "+91 93 2598 1891" },
              { city: "Hyderabad", phone: "+91 93 2598 1890" },
              { city: "Delhi", phone: "+91 93 2598 1893" },
              { city: "Chennai", phone: "+91 93 2598 1892" },
            ].map((region, i) => (
              <Col md={3} sm={6} key={i}>
                <div
                  className={`DetailsBox city-cust-r ${i % 2 ? "yellowBorder" : "yellowBorder"
                    }`}
                >
                  <h4>{region.city}</h4>

                  <p>
                    Phone:{" "}
                    <a href={`tel:${region.phone.replace(/\s+/g, "")}`}>
                      {region.phone}
                    </a>
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
