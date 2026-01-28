"use client";
import React, { useEffect, useState, useMemo } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Badge,
} from "react-bootstrap";
import "./style.css";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";


const CarrersMain = () => {
  const [jobs, setJobs] = useState([]);
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("Location");
  const [datePosted, setDatePosted] = useState("All");

  // Load jobs JSON
  useEffect(() => {
    fetch("/data/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error loading job data", err));
  }, []);

  const categories = useMemo(
    () => [
      "Business",
      "Logistics & Supply",
      "Operations",
      "R & D",
    ],
    []
  );
  const locations = useMemo(
    () => ["Location", ...new Set(jobs.map((j) => j.location))],
    [jobs]
  );

  const filtered = useMemo(() => {
    let arr = [...jobs];
    if (q.trim()) {
      const term = q.toLowerCase();
      arr = arr.filter(
        (j) =>
          j.title.toLowerCase().includes(term) ||
          j.category.toLowerCase().includes(term)
      );
    }
    if (category !== "All") arr = arr.filter((j) => j.category === category);
    if (location !== "Location") arr = arr.filter((j) => j.location === location);
    return arr;
  }, [jobs, q, category, location]);

  return (
    <div className="careers-page">
      {/* HERO */}
      <section className="careers-main-pmall desktop-only">
        <div className="careers-hero">
          <div className="hero-content">
            <h1 className="title-banner-txt">
              Where <span className="highlight">innovation</span> meets{" "}
              <span className="highlight">collaboration</span>, and every day
              brings <span className="highlight">new possibilities</span>
            </h1>
            <p>Join our teams in advancing innovation</p>
          </div>
        </div>
      </section>

      <section className="mobile-only" style={{ paddingTop: "60px" }}>
        <Image
          src={"/images/carrers/Banner_careers-Mobile.jpg"}
          width={320}
          height={250}
          alt={"kkkkk"}
          className="leading-img"
          style={{ width: "100%" }}
        />
        <Container style={{ padding: "0px 10px", paddingTop: "10px", paddingBottom: "10px" }}>
          <div className="leading-singel">
            <h2 style={{ color: "#212529", fontSize: "22px", paddingTop: "10px", fontWeight: "700" }}>Where innovation meets collaboration, and every day brings new possibilities
              Join our teams in advancing innovation </h2>
          </div>
        </Container>
      </section>


      {/* HOW WE HIRE SECTION */}
      <section className="how-we-hire-section">
        <div className="container text-center">
          <h2 className="section-heading">How We Hire</h2>
          <p className="section-sub">
            At Arofine Polymers, we believe that strong teams build strong brands. Our hiring process is designed to be transparent, structured, and merit-based, focused on identifying individuals who bring technical capability, integrity, and a customer-first mindset.
          </p>

          <div className="hire-cards">
            {/* Step 1 */}
            <div className="hire-card hire-card-application">
              <div className="hire-card-icon">
                <img
                  src="/images/carrers/Application.svg"
                  alt="Application"
                  className="hire-card-img"
                  height={56}
                  width={56}
                />
              </div>
              <div className="application-number">1</div>
              <h5 className="application-title">Application</h5>
            </div>

            {/* Step 2 */}
            <div className="hire-card hire-card-screening">
              <div className="hire-card-icon">
                <img
                  src="/images/carrers/Screening.svg"
                  alt="Screening"
                  className="hire-card-img"
                  height={56}
                  width={56}
                />
              </div>
              <div className="screening-number">2</div>
              <h5 className="screening-title">Screening</h5>
            </div>

            {/* Step 3 */}
            <div className="hire-card hire-card-interview">
              <div className="hire-card-icon">
                <img
                  src="/images/carrers/Interview.svg"
                  alt="Interview"
                  className="hire-card-img"
                  height={56}
                  width={56}
                />
              </div>
              <div className="interview-number">3</div>
              <h5 className="interview-title">Interview</h5>
            </div>

            {/* Step 4 */}
            <div className="hire-card hire-card-onboarding">
              <div className="hire-card-icon">
                <img
                  src="/images/carrers/Onboarding.svg"
                  alt="Onboarding"
                  className="hire-card-img"
                  height={56}
                  width={56}
                />
              </div>
              <div className="onboarding-number">4</div>
              <h5 className="onboarding-title">Onboarding</h5>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="careers-values text-center">
        <h2 className="our-value-section-title">Our Values</h2>
        <p className="our-value-section-sub">
          that shape how we work, innovate, and grow together every day.
        </p>

        <div className="value-cards">
          <div className="value-card">
            <img
              src="/images/carrers/value1.jpg"
              alt="Customer Focus"
              className="value-img"
            />
            <h5 className="value-title">Customer Focus</h5>
            <p className="value-text">
              At Arofine Polymers, customer focus means proactively understanding evolving customer requirements and developing new products and solutions for emerging applications. We work closely with customers on new projects, trials, and process improvements to deliver consistent quality, faster implementation, and long-term performance. Our commitment is to be a solution partner, not just a supplier.
            </p>
          </div>

          <div className="value-card">
            <img
              src="/images/carrers/value2.jpg"
              alt="Teamwork & Collaboration"
              className="value-img"
            />
            <h5 className="value-title">Teamwork & Collaboration</h5>
            <p className="value-text">
              Strong results come from strong teamwork. We promote open communication, cross-functional collaboration, and mutual respect to achieve shared goals, solve problems efficiently, and drive continuous improvement across the organization.
            </p>
          </div>

          <div className="value-card">
            <img
              src="/images/carrers/value3.jpg"
              alt="Problem-Solving Ability"
              className="value-img"
            />
            <h5 className="value-title">Problem-Solving Ability</h5>
            <p className="value-text">
              As a technical product company where our adhesives directly impact the final product, we emphasize root-cause analysis, process optimization, and fast technical support to deliver consistent and reliable customer outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* JOB LIST */}
      <section className="careers-main">
        <Container>
          {/* Header */}
          <div className="text-center mb-4">
            <h2 className="careers-title">One mission, many teams</h2>
            <p className="careers-subtitle">
              Join our teams in advancing innovation
            </p>
          </div>

          {/* Search Bar */}
          <Row className="align-items-center mb-4 g-2 search-row">
            <Col lg={4} md={12} className="main-search-bg">
              <Form.Control
                placeholder="Search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="search-input"
              />
            </Col>
            <Col lg={2} md={6} className="location-all-btn">
              <Form.Select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="search-select"
              >
                {locations.map((loc) => (
                  <option key={loc}>{loc}</option>
                ))}
              </Form.Select>
            </Col>
            <Col lg={2} md={6} className="psted-all-btn">
              <Form.Select
                value={datePosted}
                onChange={(e) => setDatePosted(e.target.value)}
                className="search-select"
              >
                <option>Date Posted</option>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </Form.Select>
            </Col>
            <Col lg={2} md={12} className="search-with-btn">
              <Button className="search-btn w-100">
                Search <BiSearch className="ms-2" size={18} />
              </Button>
            </Col>
          </Row>

          {/* Category Buttons */}
          <div className="d-flex flex-wrap gap-4 mb-4 category-bar">
            {categories.map((cat) => (
              <Button
                key={cat}
                className={`category-btn ${category === cat ? "active" : ""}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Job Cards */}
          <Row className="g-4">
            {filtered.length === 0 && (
              <p className="text-center text-muted"><h2 className="Currently-no-openings">
                Currently, there are no job openings. Please check back soon.
              </h2></p>
            )}
            {filtered.map((job) => {
              const daysAgo = Math.max(
                1,
                Math.ceil(
                  (Date.now() - new Date(job.datePosted)) /
                  (1000 * 60 * 60 * 24)
                )
              );

              /* Start Hide list */
              return (
                <Col lg={4} md={6} key={job.id}>
                  <Card className="job-card">
                    <Card.Body>
                      <div className="d-flex align-items-center text-muted small mb-2">
                        {/* Replacing the icon */}
                        <img
                          src="/images/carrers/postdate.svg" // Updated path
                          alt="Posted Date"
                          className="me-1"
                          style={{ width: 16, height: 16 }}
                        />
                        Posted {daysAgo} days ago
                        {/* Replacing the location icon */}
                        <img
                          src="/images/carrers/location.svg" // Updated path
                          alt="Location"
                          className="ms-3 me-1"
                          style={{ width: 16, height: 16 }}
                        />
                        {job.location}
                      </div>
                      <h5 className="job-title">{job.title}</h5>
                      <Link href={job?.link} className="job-readmore">
                        Read more
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              );

              /* Start Hide list */
            })}
          </Row>
        </Container>
      </section>

      {/* <section>
        <h2 className="Currently-no-openings">
          Currently, there are no job openings. Please check back soon.
        </h2>
      </section> */}

    </div>
  );
};

export default CarrersMain;
