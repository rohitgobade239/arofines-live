"use client";
import React, { useState } from "react";
import { Button, Col, Form, Row, Card, Container } from "react-bootstrap";
import "./style.css";
import { ThankYou } from "@/components/thank-you/page";
import ReCAPTCHA from "react-google-recaptcha";

// Ensure your CSS file is named style.css and is in the same directory

const steps = [
  "Product Information",
  "Design Inputs & Properties",
  "Application Input & Conditions",
  "Application Procedure & Scope",
  "Review & Submit", // Step 5
];

// --- REVISED HELPER COMPONENTS (Uses external CSS classes & non-editable logic) ---

/**
 * Helper component to display a single field in the review section.
 * It uses a non-editable <div> styled like a disabled input.
 */
const ReviewItem = ({ label, value }) => {
  // Determine the content to display. If empty, use the non-editable placeholder text.
  const displayValue = value ? (
    value
  ) : (
    <span className="review-placeholder-text">Not provided</span>
  );

  return (
    <div className="mb-3">
      {/* Label (Black, smaller font) */}
      <div className="review-label-text mb-1">{label}</div>
      {/* Value (Gray box, explicitly a non-editable <div>) */}
      <div
        className="form-control review-value-box py-2"
        // The form-control and review-value-box classes apply the non-editable appearance
      >
        {displayValue}
      </div>
    </div>
  );
};

// Helper component to structure the review sections
const ReviewSection = ({ stepNum, title, children }) => (
  <div className="review-section-container mb-4">
    {/* Section Header with Green Background look */}
    <h6 className="review-section-header py-2 px-3 fw-bold text-black mb-3">
      Step {stepNum}: {title}
    </h6>
    {/* The content of the section */}
    <Row className="px-3">{children}</Row>

    {/* Separator between main sections */}
  </div>
);
// --- END REVISED HELPER COMPONENTS ---

const ProductDevelopmentSpecificationForm = () => {
  // Initial State Setup (Using dummy data, starting at step 1 for full form view)
  const [loading, setLoading] = useState(false);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Placeholder data to show the review screen content
    productName: "",
    developmentType: "",
    productDescription: "",
    endApplication: "",
    viscosity: "",
    viscosityB4: "",
    ph: "",
    solids: "",
    regulatory: "",
    certifications: "",
    Performance: "",
    applicationMethod: "manual",
    endUser: "",
    substrate: "",
    applicationClimate: "",
    serviceClimate: "",
    positioning: "",
    competitors: "",
    volume: "",
    benchmark: "",
    date: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleChange = (e) => {
    const { id, value, name } = e.target;
    const fieldName = id || name;
    if (id === "solids") {
      if (Number(value) <= 100) {
        setFormData((prev) => ({ ...prev, [fieldName]: value }));
        setErrors((prev) => ({ ...prev, [fieldName]: "" }));
      } else {
        setErrors((prev) => ({
          ...prev,
          [fieldName]: "Solids content must not exceed 100%",
        }));
      }
    }
    else if(id === "ph") {
      if (Number(value) <= 11) {
        setFormData((prev) => ({ ...prev, [fieldName]: value }));
        setErrors((prev) => ({ ...prev, [fieldName]: "" }));
      } else {
        setErrors((prev) => ({
          ...prev,
          [fieldName]: "maximum allowable pH value: 11",
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [fieldName]: value }));
      setErrors((prev) => ({ ...prev, [fieldName]: "" }));
    }
  };

  const validateStep = () => {
    const newErrors = {};

    // ✅ STEP 1 VALIDATION
    if (step === 1) {
      if (!formData.productName)
        newErrors.productName = "Product Name is required";

      if (!formData.developmentType)
        newErrors.developmentType = "Development Type is required";

      if (!formData.productDescription)
        newErrors.productDescription = "Product Description is required";

      if (!formData.endApplication)
        newErrors.endApplication = "End Application is required";
    }

    // ✅ STEP 2 VALIDATION
    if (step === 2) {
      if (!formData.viscosity) newErrors.viscosity = "Viscosity is required";

      if (!formData.viscosityB4)
        newErrors.viscosityB4 = "Viscosity (B4) is required";

      if (!formData.ph) newErrors.ph = "pH value is required";
      if (formData.ph > 11) newErrors.ph = "maximum allowable pH value: 11";

      if (!formData.solids) newErrors.solids = "Solids % is required";
      if (formData.solids > 100)
        newErrors.solids = "Solids content must not exceed 100%";

      if (!formData.regulatory)
        newErrors.regulatory = "Regulatory compliance is required";

      if (!formData.certifications)
        newErrors.certifications = "Certifications are required";

      if (!formData.Performance)
        newErrors.Performance = "Performance specification is required";
    }

    // ✅ STEP 3 VALIDATION
    if (step === 3) {
      if (!formData.applicationMethod)
        newErrors.applicationMethod = "Application Method is required";

      if (!formData.endUser) newErrors.endUser = "End User is required";

      if (!formData.substrate) newErrors.substrate = "Substrate is required";

      if (!formData.applicationClimate)
        newErrors.applicationClimate = "Application Climate is required";

      if (!formData.serviceClimate)
        newErrors.serviceClimate = "Service Climate is required";
    }

    // ✅ STEP 4 VALIDATION
    if (step === 4) {
      if (!formData.positioning)
        newErrors.positioning = "Positioning is required";

      if (!formData.competitors)
        newErrors.competitors = "Competitor details are required";

      if (!formData.volume) newErrors.volume = "Projected Volume is required";

      if (!formData.benchmark)
        newErrors.benchmark = "Benchmark price is required";

      if (!formData.date) newErrors.date = "Date is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;

    // Simplified validation for demonstration
    if (step === 1) {
      if (!formData.productName)
        newErrors.productName = "Product Name is required";
    }
    // ... add full validation for steps 1-4 here ...

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step < steps.length) {
      // Validate for steps 1-4 before moving forward
      if (step < 5) {
        if (validateStep()) {
          setStep((s) => s + 1);
        }
      } else {
        setStep((s) => s + 1);
      }
    }
  };

  const handlePrevious = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    if (!captchaToken) {
      alert("Please complete reCAPTCHA verification.");
      return;
    }

    if (step !== steps.length) return;

    try {
      setLoading(true);
      const res = await fetch("/api/send-send-specification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          token: captchaToken,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        alert("Email failed to send.");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      alert("Something went wrong!");
      setLoading(false);
    }
  };

  const progress = ((step - 1) / (steps.length - 1)) * 100;

  // ✅ STEP RENDERING
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h4 className="tilte-form-four">Product Information</h4>
            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <Form.Label>
                  Product Name<span style={{ color: "#e01e2e" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  id="productName"
                  placeholder="E.g., High Performance Adhesive 3010" // ✅ Placeholder
                  value={formData.productName || ""}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                    setFormData({
                      ...formData,
                      productName: value,
                    });
                  }}
                  isInvalid={!!errors.productName}
                  className="custom-placehold"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.productName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>
                  Development Type<span style={{ color: "#e01e2e" }}>*</span>
                </Form.Label>
                <div className="mt-2">
                  <Form.Check
                    inline
                    label="New Product"
                    name="developmentType"
                    type="radio"
                    value="new"
                    checked={formData.developmentType === "new"}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    label="Extension of Existing Product"
                    name="developmentType"
                    type="radio"
                    value="extension"
                    checked={formData.developmentType === "extension"}
                    onChange={handleChange}
                  />
                </div>
                {errors.developmentType && (
                  <div className="text-danger small">
                    {errors.developmentType}
                  </div>
                )}
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <Form.Label>
                  Core Product Description
                  <span style={{ color: "#e01e2e" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text" // ✅ use type="text" instead of as="text"
                  id="productDescription"
                  placeholder="A brief, high-level summary of the product and its function" // ✅ Placeholder
                  value={formData.productDescription || ""}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                    setFormData({
                      ...formData,
                      productDescription: value,
                    });
                  }}
                  isInvalid={!!errors.productDescription}
                  className="custom-placehold"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.productDescription}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>
                  Exact End Application (how it will be used)
                  <span style={{ color: "#e01e2e" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  id="endApplication"
                  placeholder="E.g., Bonding polycarbonate panels in automotive interiors" // ✅ Placeholder
                  value={formData.endApplication || ""}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                    setFormData({
                      ...formData,
                      endApplication: value,
                    });
                  }}
                  isInvalid={!!errors.endApplication}
                  className="custom-placehold"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.endApplication}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
          </>
        );

      case 2:
        return (
          <>
            <h4 className="tilte-form-four">Design Inputs & Properties</h4>
            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <Form.Label>
                  Viscosity (cps)<span style={{ color: "#e01e2e" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  id="viscosity"
                  value={formData.viscosity || ""}
                  placeholder="E.g., 5000" // ✅ Placeholder
                  onChange={handleChange}
                  isInvalid={!!errors.viscosity}
                  className="custom-placehold"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.viscosity}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>
                  Viscosity B4 Ford (sec)
                  <span style={{ color: "#e01e2e" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  id="viscosityB4"
                  value={formData.viscosityB4 || ""}
                  placeholder="E.g., 45" // ✅ Placeholder
                  onChange={handleChange}
                  isInvalid={!!errors.viscosityB4}
                  className="custom-placehold"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.viscosityB4}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <Form.Label>pH*</Form.Label>
                <Form.Control
                  type="number"
                  id="ph"
                  value={formData.ph || ""}
                  placeholder="E.g., 7.5" // ✅ Placeholder
                  onChange={handleChange}
                  isInvalid={!!errors.ph}
                  className="custom-placehold"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.ph}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>
                  % Solids<span style={{ color: "#e01e2e" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  id="solids"
                  value={formData.solids || ""}
                  placeholder="E.g., 55" // ✅ Placeholder
                  onChange={handleChange}
                  isInvalid={!!errors.solids}
                  className="custom-placehold"
                  max="100"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.solids}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <Form.Label>
                  Regulatory Requirements
                  <span style={{ color: "#e01e2e" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  id="regulatory"
                  value={formData.regulatory || ""}
                  placeholder="E.g., Direct/indirect food contact, VOC, etc." // ✅ Placeholder
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                    setFormData({
                      ...formData,
                      regulatory: value,
                    });
                  }}
                  isInvalid={!!errors.regulatory}
                  className="custom-placehold"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.regulatory}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>
                  Compliances & Certifications Required (if any)
                  <span style={{ color: "#e01e2e" }}>*</span>
                </Form.Label>
                <Form.Control
                  id="certifications"
                  value={formData.certifications || ""}
                  placeholder="E.g., ISO, ASTM, CE Mark, etc." // ✅ Placeholder
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                    setFormData({
                      ...formData,
                      certifications: value,
                    });
                  }}
                  isInvalid={!!errors.certifications}
                  className="custom-placehold"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.certifications}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>
                Add Performance Spec
                <span style={{ color: "#e01e2e" }}>*</span>
              </Form.Label>
              <Form.Control
                id="Performance"
                value={formData.Performance || ""}
                placeholder="E.g., 7.55" // ✅ Placeholder
                onChange={handleChange}
                isInvalid={!!errors.Performance}
                className="custom-placehold"
                type="number"
              />
              <Form.Control.Feedback type="invalid">
                {errors.certifications}
              </Form.Control.Feedback>
            </Form.Group>
          </>
        );

      case 3:
        return (
          <>
            <h4 className="tilte-form-four">Application Input & Conditions</h4>
            <Form.Group className="mb-3">
              <Form.Label>
                Application Method<span style={{ color: "#e01e2e" }}>*</span>
              </Form.Label>
              <div className="mt-2">
                <Form.Check
                  inline
                  label="Manual (hand-applied)"
                  name="applicationMethod"
                  type="radio"
                  value="manual"
                  checked={formData.applicationMethod === "manual"}
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  label="Machine (Automated/Equipment)"
                  name="applicationMethod"
                  type="radio"
                  value="machine"
                  checked={formData.applicationMethod === "machine"}
                  onChange={handleChange}
                />
              </div>
              {errors.applicationMethod && (
                <div className="text-danger small">
                  {errors.applicationMethod}
                </div>
              )}
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <Form.Label>
                  Who is the end user?
                  <span style={{ color: "#e01e2e" }}>*</span>
                </Form.Label>
                <Form.Control
                  id="endUser"
                  value={formData.endUser || ""}
                  placeholder="E.g., Industrial assembly worker, DIY consumer" // ✅ Placeholder
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                    setFormData({
                      ...formData,
                      endUser: value,
                    });
                  }}
                  isInvalid={!!errors.endUser}
                  className="custom-placehold"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.endUser}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>
                  Product applied on substrate
                  <span style={{ color: "#e01e2e" }}>*</span>
                </Form.Label>
                <Form.Control
                  id="substrate"
                  value={formData.substrate || ""}
                  placeholder="E.g., PVC, treated metal, paperboard" // ✅ Placeholder
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                    setFormData({
                      ...formData,
                      substrate: value,
                    });
                  }}
                  isInvalid={!!errors.substrate}
                  className="custom-placehold"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.substrate}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} md="6">
                <Form.Label>
                  Climatic condition: Application
                  <span style={{ color: "#e01e2e" }}>*</span>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  id="applicationClimate"
                  value={formData.applicationClimate || ""}
                  placeholder="E.g., AC/Non-AC, Temp, Humidity" // ✅ Placeholder
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                    setFormData({
                      ...formData,
                      applicationClimate: value,
                    });
                  }}
                  isInvalid={!!errors.applicationClimate}
                  className="custom-placehold"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.applicationClimate}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>
                  Climatic condition: Service Life
                  <span style={{ color: "#e01e2e" }}>*</span>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  id="serviceClimate"
                  value={formData.serviceClimate || ""}
                  placeholder="E.g., Temp, humidity, exposure" // ✅ Placeholder
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                    setFormData({
                      ...formData,
                      serviceClimate: value,
                    });
                  }}
                  isInvalid={!!errors.serviceClimate}
                  className="custom-placehold"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.serviceClimate}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
          </>
        );

      case 4:
        return (
          <>
            <h4 className="tilte-form-four">Application Procedure & Scope</h4>
            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <Form.Label>
                  Clear positioning of the product
                  <span style={{ color: "#e01e2e" }}>*</span>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  id="positioning"
                  value={formData.positioning || ""}
                  placeholder="E.g., Premium eco-friendly adhesive" // ✅ Placeholder
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                    setFormData({
                      ...formData,
                      positioning: value,
                    });
                  }}
                  isInvalid={!!errors.positioning}
                  className="custom-placehold"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.positioning}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>
                  Leading competitor products
                  <span style={{ color: "#e01e2e" }}>*</span>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  id="competitors"
                  value={formData.competitors || ""}
                  placeholder="List names and advantages" // ✅ Placeholder
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                    setFormData({
                      ...formData,
                      competitors: value,
                    });
                  }}
                  isInvalid={!!errors.competitors}
                  className="custom-placehold"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.competitors}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <Form.Label>
                  Potential Projected Volume (MT/PM)
                  <span style={{ color: "#e01e2e" }}>*</span>
                </Form.Label>
                <Form.Control
                  id="volume"
                  value={formData.volume || ""}
                  placeholder="E.g., 50 MT/PM" // ✅ Placeholder
                  onChange={handleChange}
                  isInvalid={!!errors.volume}
                  className="custom-placehold"
                  type="number"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.volume}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>
                  Date<span style={{ color: "#e01e2e" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="date"
                  id="date"
                  value={formData.date || ""}
                  placeholder="DD/MM/YYYY" // ✅ Placeholder (for browsers that support it)
                  onChange={handleChange}
                  isInvalid={!!errors.date}
                  className="custom-placehold"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.date}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>
                Market Price of Benchmark Product (INR/kg)
                <span style={{ color: "#e01e2e" }}>*</span>
              </Form.Label>
              <Form.Control
                id="benchmark"
                value={formData.benchmark || ""}
                placeholder="E.g., 150 INR/kg" // ✅ Placeholder
                onChange={handleChange}
                isInvalid={!!errors.benchmark}
                className="custom-placehold"
                type="number"
              />
              <Form.Control.Feedback type="invalid">
                {errors.benchmark}
              </Form.Control.Feedback>
            </Form.Group>
          </>
        );

      // ✅ STEP 5: Review and Submit (Using non-editable ReviewItem component)
      case 5:
        return (
          <>
            <h4 className="tilte-form-four">Review Your Specification</h4>
            <p className="mb-4 text-muted">
              Please check all details before final submission.
            </p>
            {/* Step 1: Product Information */}
            <ReviewSection stepNum={1} title="Product Information">
              <Col md={6}>
                <ReviewItem label="Product Name" value={formData.productName} />
                <ReviewItem
                  label="Development Type"
                  value={formData.developmentType}
                />
              </Col>
              <Col md={6}>
                <ReviewItem
                  label="Core Product Description"
                  value={formData.productDescription}
                />
                <ReviewItem
                  label="Exact End Application"
                  value={formData.endApplication}
                />
              </Col>
            </ReviewSection>
            {/* Step 2: Design Inputs & Properties */}
            <ReviewSection stepNum={2} title="Design Inputs & Properties">
              <Col md={6}>
                <ReviewItem
                  label="Viscosity (cps)"
                  value={formData.viscosity}
                />
                <ReviewItem
                  label="Viscosity B4 Ford (sec)"
                  value={formData.viscosityB4}
                />
                <ReviewItem label="pH" value={formData.ph} />
                <ReviewItem label="% Solids" value={formData.solids} />
              </Col>
              <Col md={6}>
                <ReviewItem
                  label="Regulatory Requirements"
                  value={formData.regulatory}
                />
                <ReviewItem
                  label="Compliances & Certifications"
                  value={formData.certifications}
                />
                <ReviewItem
                  label="Add Performance Spec"
                  value={formData.Performance}
                />
              </Col>
            </ReviewSection>
            {/* Step 3: Application Input & Conditions */}
            <ReviewSection stepNum={3} title="Application Input & Conditions">
              <Col md={6}>
                <ReviewItem
                  label="Application Method"
                  value={formData.applicationMethod}
                />
                <ReviewItem label="End User" value={formData.endUser} />
                <ReviewItem
                  label="Product Substrate"
                  value={formData.substrate}
                />
              </Col>
              <Col md={6}>
                <ReviewItem
                  label="Application Climate Condition"
                  value={formData.applicationClimate}
                />
                <ReviewItem
                  label="Service Life Climate Condition"
                  value={formData.serviceClimate}
                />
              </Col>
            </ReviewSection>
            {/* Step 4: Application Procedure & Scope */}
            <ReviewSection stepNum={4} title="Application Procedure & Scope">
              <Col md={6}>
                <ReviewItem
                  label="Clear positioning of the product"
                  value={formData.positioning}
                />
                <ReviewItem
                  label="Leading competitor products"
                  value={formData.competitors}
                />
                <ReviewItem
                  label="Potential Projected Volume (MT/PM)"
                  value={formData.volume}
                />
              </Col>
              <Col md={6}>
                <ReviewItem
                  label="Market Price of Benchmark Product (INR/kg)"
                  value={formData.benchmark}
                />
                <ReviewItem label="Price As on Date" value={formData.date} />
                {/* Placeholder to balance the column */}
                <div className="mb-3" style={{ height: "38px" }}></div>
              </Col>

              <div className="mt-4">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={(token) => setCaptchaToken(token)}
                />
              </div>
            </ReviewSection>
          </>
        );

      default:
        return null;
    }
  };
  const onClose = () => {
    setSubmitted(false);
  };
  if (submitted) {
    return <ThankYou onClose={onClose} />;
  }

  return (
    <section className="product-form-main">
      <div className="banner-section">
        <div className="banner-overlay"></div>
      </div>
      <Container className="form-main-cst">
        <Card className="product-box-form">
          <Card.Body className="p-4">
            {/* <h2 className="title-main-product">
              Product Development Specification Form
            </h2>
            <p className="sub-title-main-product">
              Five simple steps to define your technical specification.
            </p> */}

            {/* Progress Bar (Your original logic) */}
            {/* Progress Header + Progress Bar */}
            <div className="wizard-header mb-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <h5 className="wizard-title fw-bold mb-0">
                    Product Development Specification
                  </h5>
                  <small className="wizard-subtitle">
                    Step {step}: {steps[step - 1]}
                  </small>
                </div>
                <div className="wizard-step-count text-muted fw-semibold">
                  {step} of {steps.length}
                </div>
              </div>

              <div className="wizard-progress">
                <div
                  className="wizard-progress-fill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Form */}
            <Form noValidate onSubmit={handleSubmit}>
              {renderStepContent()}

              {/* Button Navigation (Alignment: Previous left, Next/Submit right) */}
              <div className="d-flex gap-3 mt-5">
                {step > 1 && (
                  <Button
                    variant="secondary"
                    className="previous-btn-dealership"
                    onClick={handlePrevious}
                  >
                    <i
                      className="bi bi-arrow-left me-2"
                      style={{ fontSize: "22px" }}
                    ></i>
                    Previous
                  </Button>
                )}

                {/* Next button for steps 1, 2, 3, 4 */}
                {step < steps.length && (
                  <Button
                    variant="primary"
                    className="next-btn-dealership " // ms-auto pushes it to the right
                    onClick={handleNext}
                    disabled={loading}
                  >
                    {step < 4 ? `Next ${[]}` : `Next`}
                    <i
                      className="bi bi-arrow-right ms-2"
                      style={{ fontSize: "22px" }}
                    ></i>
                  </Button>
                )}

                {/* Submit button only on the Review step (step 5) */}
                {step === steps.length && (
                  <Button
                    type="submit"
                    className="next-btn-dealership submit-btn-red" // Red button style, ms-auto alignment
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit Application"}
                  </Button>
                )}
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default ProductDevelopmentSpecificationForm;
