"use client";
import {
  Container,  
  Row,
  Col,
 } from "react-bootstrap";
import "./style.css";
import Link from "next/link"; // Use Next.js Link for navigation

// Import images
import AboutMain from "../../../../public/images/home/aboutmb.png";

// Sub-Component for each link item
const MegaMenuItem = ({ title, href }) => (
  <Link href={href} passHref legacyBehavior>
    <a className="mega-menu-link-item d-flex justify-content-between align-items-center py-2 text-decoration-none">
      <span className="mega-menu-link-text">{title}</span>
      <span className="mega-menu-link-arrow">&rarr;</span>
    </a>
  </Link>
);

const AboutMega = () => {
  return (
    <>
      <section>
        <div className="mega-menu-content p-4 shadow-lg rounded-3">
          <Container fluid>
            <Row>
              {/* =========== Column 1: Introduction (approx 25% width) =========== */}
              <Col md={4} lg={3} className=" pe-4">
                <h3 className="mega-menu-title">About Arofine Polymers</h3>
                <p className="mega-menu-text">
                  Arofine Polymers Pvt. Ltd. is a trusted Indian manufacturer of high-performance industrial adhesives across 9 different industry and more than 150 diverse applications. We combine quality, innovation, and responsive service to deliver reliable bonding solutions.
                </p>
              </Col>

              {/* =========== Column 2: Links (takes up middle space) =========== */}
              <Col md={5} lg={6} className="px-4">
                <Row>
                  {/* Top Row Links */}
                  <Col sm={4}>
                    <MegaMenuItem
                      title="Company Profile"
                      href="/about/#company-profile"
                    />
                  </Col>
                  <Col sm={4}>
                    <MegaMenuItem title="Our Journey" href="/about/#our-journey" />
                  </Col>
                  <Col sm={4}>
                    <MegaMenuItem title="CSR" href="/about/#csr" />
                  </Col>
                </Row>
              </Col>

              {/* =========== Column 3: Image (approx 25% width) =========== */}
              <Col md={3} className="d-none d-md-block ps-4">
                <div className="mega-menu-image-container">
                  <img
                    src={AboutMain.src}
                    className="d-block w-100 hero-image mega-menu-image"
                    alt="ArofineLogo"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default AboutMega;
