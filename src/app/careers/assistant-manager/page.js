"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import Link from "next/link";


export default function PastingAdhesivePage() {
  return (
    <div className="pasting-page">
      {/* Banner Section */}
      <section className="banner d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="banner-title"><Link href="/careers">Careers</Link></h1>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== NEW JOB DESCRIPTION DESIGN BELOW ===== */}
      <section className="jd-section">
        <Container>
          <h2 className="jd-title">
            Assistant Manager/ Manager – Technical Services
          </h2>


          <p className="jd-location">
            <strong>Location:</strong> Head Office – S-42- MIDC Bhosari, Pune 411026
          </p>
          <h3 className="jd-heading">About Arofine Polymers Pvt Ltd:</h3>
          <p className="jd-pragrap">Arofine Polymers Pvt Ltd is a leading manufacturer of high-performance adhesive solutions for the printing and packaging industry. With a strong focus on innovation, quality, and customer service, we partner with leading converters and packaging companies to deliver adhesives that drive productivity and performance.</p>

          <h4 className="jd-heading">Role Overview:</h4>
          <p className="jd-pragrap">We are seeking an experienced Technical Service professional as a product solution specialist who will conduct on- site technical trials, and address customer complaints effectively. This role demands a blend of technical expertise, customer interaction skills, and hands-on problem-solving, with extensive travel to customer locations. </p>
          <p className="jd-pragrap1">This is a dual reporting position, reporting to R&D Head and Business Manager (Domestic & Export) Sales to align product solutions with customer and market needs. </p>


          <h5 className="jd-heading-cust">Key Responsibilities :</h5>

          <h4 className="jd-heading">Technical Service & Support:</h4>
          <ul className="jd-list">
            <li>Conduct on-site product trials at customer facilities and submit a detailed report.</li>
            <li>Product & Competitor mapping by obtaining market intelligence and performance evaluation.</li>
            <li>Provide prompt and effective resolution for customer complaints, including root cause analysis and corrective action.</li>
            <li>Deliver technical presentations and training sessions to customers and internal teams.</li>
            <li>Conduct in-house performance analysis on new/existing product range.</li>
            <li>Converting customer requirements into technical documents and communicating them to R&D.</li>
            <li>Creating product documentation: TDS, Brochures, Product information sheets, and comparison reports.</li> <li>Proposing new applications for existing products.</li>
            <li>Tracking industry trends and providing inputs on new applications and products.</li>
          </ul>

          <h6 className="jd-heading">Collaboration & Reporting:</h6>
          <ul className="jd-list">
            <li>Work closely with the Business Manager (Domestic & Export) to support customer requirements and market expansion..</li>
            <li>Coordinate with R&D, quality control teams to ensure timely execution of technical service activities.</li>
          </ul>


          <h4 className="jd-heading-cust">Candidate Profile :</h4>

          <h4 className="jd-heading">Age</h4>
          <p className="jd-pragrap">Ideally in the range of 35 – 45 years. However, could vary depending on the attributes & energy levels of the individual</p>

          <h4 className="jd-heading">Education</h4>
          <p className="jd-pragrap">Bachelors or Master's degree in Polymer Science, Chemistry, or Chemical
            Engineering.</p>

          <h4 className="jd-heading">Experience</h4>
          <p className="jd-pragrap">8-10 years of experience in adhesives, coatings, or polymer formulation,
            preferably in the packaging industry. </p>

          <h4 className="jd-heading">Professional Attributes</h4>
          <ul className="jd-list">
            <li>Strong knowledge of adhesive chemistry (water-based, hot-melt, or
              solvent-based systems).</li>
            <li>Hands-on experience with lab testing and performance analysis.</li>
            <li>Excellent troubleshooting and analytical skills.</li>
            <li>Good communication and presentation abilities.</li>
            <li>Willingness to travel extensively for customer trials, support, and
              training.</li>
            <li>Excellent Communication (both written and verbal) & Presentation Skills
              with high networking abilities.</li>
            <li>High Interpersonal skills and ability to work collaboratively.</li>
            <li>Ability to represent Organization at stakeholder forums/Stakeholder
              management.</li>
            <li>Ability to handle demanding business environment and work well under
              pressure.</li>
            <li>Should be able to prioritize and use initiative, able to shift priorities within strict timeframes.</li>
          </ul>

          <h4 className="jd-heading">Personal Characteristics</h4>
          <ul className="jd-list">
            <li>Goal/Result orientation</li>
            <li>Good Personal Values</li>
            <li>Energy & Drive</li>
            <li>Flexible and high on initiative</li>
            <li>High on integrity</li>
            <li>Good attitude</li>
          </ul>


          <p className="jd-location">
            <strong>Travel Requirements:</strong> <span className="js-text-p">10-12 Days/Month (Pan India)</span>
          </p>

          <p className="jd-location">
            <strong>Working Days:</strong> <span className="js-text-p">6 Days/week (Sunday – Weekly off)</span>
          </p>

          <p className="jd-location">
            <strong>Compensation:</strong> <span className="js-text-p">As per company norms</span>
          </p>

          <p className="jd-location">
            <strong>Re-location Bonus:</strong> <span className="js-text-p">NO - We do not offer any job relocation bonus</span>
          </p>

          <h4 className="jd-apply">How to Apply</h4>
          <p>
            If you are passionate about excellence, apply now & send your CV to{" "}
            <a
              href="mailto:Info@arofines.in"
              aria-label="Send CV to Info at Arofines"
            >
              <strong>Info@arofines.in</strong>
            </a>
          </p>
        </Container>
      </section>
    </div>
  );
}
