"use client";
import React, { useState } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import { Form, Button, Row, Col, Container, Alert } from "react-bootstrap";
import "./style.css";
import ReCAPTCHA from "react-google-recaptcha";

const TalkToExpert = ({ setOpenTalkToExpert }) => {

  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    email: "",
    company: "",
    subject: "",
    category: "",
    message: ""
  });

  const [captcha, setCaptcha] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

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
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    if (!captcha) {
      alert("Please verify reCAPTCHA");
      return;
    }

    try {
      const res = await fetch("/api/send-email-Talk-to-expert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          token: captcha
        })
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
          message: ""
        });
        setCaptcha(null);
      } else {
        alert(result.message || "Failed to send email");
      }

    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="talk-overly">
      <Container className="talk-to-expert-container shadow-box position-relative">

        <CloseButton className="close-btn" onClick={() => setOpenTalkToExpert(false)} />

        <div className="talk-header">
          <h2>Talk to us, directly.</h2>
          <p className=" mobile-only">Get in touch with us for the widest range of customized adhesives.</p>
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

          <div className="my-3">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={(value) => setCaptcha(value)}
            />
          </div>

          <Button type="submit" className="submit-btn">
            Submit <span className="talk-btn-arrow">→</span>
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default TalkToExpert;
