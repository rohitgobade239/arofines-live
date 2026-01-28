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
            Area Sales Manager - Hyderabad
          </h2>


          <p className="jd-location">
            <strong>Location:</strong> Hyderabad
          </p>
          <h4 className="jd-heading"></h4>
          <p className="jd-pragrap">The position of Area Sales Manager (Hyderabad) reports to the National Head of Sales & Marketing. The
            candidate will be responsible for managing the sales operations of the organization in Hyderabad & Andhra
            Pradesh in line with organizational strategy in a fully compliant manner. The position requires that the candidate
            be of high integrity and good moral values.</p>

          <p className="jd-pragrap1">The candidate must possess high energy levels as the position entails extensive travel in the assigned territory
            and will require a minimum travel of 20 to 22 days a month. The candidate needs to be a self- starter and will be
            responsible for achieving the set goals: individually as well as the team. </p>

          <p className="jd-pragrap1">The candidate will work collaboratively across the Organization to optimize performance, drive growth of the
            business and maintain the integrity of the sales operations. The candidate's role would involve working with key
            clients and dealers to grow the sales for the organisation across assigned regions and products.</p>

          <p className="jd-pragrap1">The candidate will be solely responsible for the business coming from Hyderabad & AP assigned territory by
            servicing existing clients & dealers; reviving old clients and dealers if the need be, identifying new clients, new
            geographies, new products and identifying new dealers. The candidate would also be responsible for identifying
            clients using products from competitions and suggesting our products as an alternative thus providing the client
            with a complete basket of products to cater to their needs as a preferred one stop shop. </p>

          <p className="jd-pragrap1">Since the product is a technical product, the candidate is expected to have a techno commercial bent of mind
            and will be involved in conducting trials at the client's end, understanding their area of concern /problems faced
            by them and convey the same to the RND team in a technical language, so that they are able to relate to the
            client's problems and can provide them with a timely, lasting and an economically viable solution.
          </p>


          <h3 className="jd-heading">The position interacts with:</h3>
          <p className="jd-pragrap"><strong>Internally:</strong> With National Head, Sales support team, RND Team </p>
          <p className="jd-pragrap1"><strong>Externally:</strong> Clients and Dealers, Dealer's Representative, Production/ QC personnels from Client Side.</p>


          <h4 className="jd-heading">Key deliverables include:</h4>
          <p className="jd-pragrap">1. Responsible for the sales and marketing for Hyderabad and Andhra Pradesh Region.</p>
          <p className="jd-pragrap">2. Maintaining relations with customers/ dealers and exploring new business opportunities</p>
          <p className="jd-pragrap">3. Perform Sales Activities:</p>
          <ul className="jd-list">
            <li>Lead Generation & Conversions.</li>
            <li>Reporting status of Leads in Excel/CRM.</li>
            <li>Arranging Product Trials.</li>
            <li>Timely Payment Recovery</li>
            <li>Attending and resolving product complaints, if and when received.</li>
            <li>Developing and maintaining relations with Machine manufacturers for leads.</li>
            <li>Achieve Sales targets and company growth by Identifying and developing new customers.</li>
          </ul>
          <p className="jd-pragrap">4. Regular reporting to Head office on customers / dealers visits, market insights & trends.</p>
          <p className="jd-pragrap">5. Active participation in weekly / monthly/ quarterly/ yearly review.</p>

          <h5 className="jd-heading-cust">Candidate Profile :</h5>


          <p className="jd-location">
            <strong>Nationality:</strong> <span className="js-text-p">Indian</span>
          </p>

          <p className="jd-location">
            <strong>Age:</strong> <span className="js-text-p">30-35 years.</span>
          </p>

          <p className="jd-location">
            <strong>Education:</strong> <span className="js-text-p">B.E. / B. Tech - Chemical (preferred) / B.Sc / M.Sc /Diploma in Chemical Engineering + MBA (Preferred)</span>
          </p>

          <p className="jd-location">
            <strong>Experience:</strong> <span className="js-text-p">5+ years of experience of sales. Preferably Adhesive industry</span>
          </p>

          <p className="jd-location">
            <strong>Professional Attributes:</strong>
            <ul className="jd-list">
              <li>Strong Strategic & Analytical Ability</li>
              <li>Excellent Communication & Presentation Skills with high networking abilities</li>
              <li>Strong negotiating & influencing skills</li>
              <li>High Interpersonal skills and ability to work collaboratively</li>
            </ul>

          </p>

          <p className="jd-location">
            <strong>Personal Characteristics:</strong>
            <ul className="jd-list">
              <li>Pleasant personality</li>
              <li>Goal/Result orientation</li>
              <li>Energy & Drive</li>
              <li>Flexible and high on initiative</li>
            </ul>

          </p>
          <p className="jd-location">
            <strong>Compensation:</strong> <span className="js-text-p">As per company norms</span>
          </p>
          <h6 className="jd-apply">How to Apply</h6>
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
