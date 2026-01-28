
"use client";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch("/data/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error loading job data", err));
  }, []);
  return (
    <>
      <section className="blog-main-section">
        <Container>
          <div
            className="blog-bannner "
            style={{ backgroundImage: `url(/images/blog/Hero_Why_Professionals_Trust.jpg)` }}
          >
           
          </div>

          <Row className="blog-bottom-section">
            {/* LEFT BLOG CONTENT */}
            <Col lg={8} md={12}>
              <div className="blog-feature-box">

                <div>
                  <h1 className="blog-feature-title-banner-inne">Why Professionals Trust Arobond 44 Pro for Vinyl Flooring Adhesion</h1>
                  
                  <p className="blog-feature-text ">
                    When it comes to flooring, the final look is only as strong as what holds it together. Behind every smooth vinyl tile or roll is a dependable adhesive that ensures long-term performance, safety, and efficiency. That’s where Arobond 44 Pro, a water-based vinyl flooring adhesive by Aerofine Polymers, stands out as the professional’s preferred choice.                  </p>

                  <h3 className="blog-h3">What Makes Arobond 44 Pro Different?</h3>

                  <p className="blog-feature-text pt-2">
                    Most traditional adhesives are solvent-based, emitting high levels of VOCs (Volatile Organic Compounds) that are not just harmful to the environment, but also to workers who handle them. Arobond 44 Pro turns this around by offering a water-based formulation that is VOC compliant, fire-resistant, and eco-friendly, without compromising on strength or versatility.
                  </p>
                  <p className="blog-feature-text pt-2">
                    In short: It’s tough on adhesion, gentle on the environment. </p>

                  <h3 className="blog-h3">Engineered for Versatility</h3>
                  <p className="blog-feature-text pt-2">
                    Whether you’re a flooring contractor, interior designer, or facility manager, one of your biggest challenges is compatibility. Different surfaces behave differently and finding one adhesive that works across multiple substrates is rare.</p>

                  <p className="blog-feature-text pt-2">
                    Arobond 44 Pro offers seamless bonding for: </p>

                  <ul className="cust-bullet-pointm">
                    <li>Vinyl to Plywood</li>
                    <li>Vinyl to Concrete</li>
                    <li>Vinyl to Asphalt</li>
                    <li>Vinyl to GI (Galvanized Iron)</li>
                    <li>And more…</li>

                  </ul>
                  <p className="blog-feature-text">
                    It’s engineered for both horizontal and vertical applications, making it ideal not just for floors, but for walls, partitions, and decorative panel installations.                  </p>

                  <h3 className="blog-h3">Single-Side Application for Time-Saving Efficiency</h3>
                  <p className="blog-feature-text">
                    Many adhesives require two-side application, adding time and complexity to the job. Arobond 44 Pro eliminates that hassle. Its high spreadability and quick tack time allow for single-side application, saving you both labor hours and material costs.
                  </p>
                  <p className="blog-feature-text">
                    This is especially useful on large commercial sites or tight project timelines where every minute counts.    </p>
                  <p className="blog-feature-text">
                    Fire-Safe, Eco-Safe- No Compromise on Safety has become non-negotiable in modern construction and renovation practices.                   </p>

                  <p className="blog-feature-text">
                    Arobond 44 Pro checks every safety box:      </p>
                  <ul className="cust-bullet-pointm">
                    <li>Low VOC Emissions: Healthier indoor air quality</li>
                    <li>Fire Resistant: Contributes to safer spaces</li>
                    <li>Non-Flammable & Odor-Free: Easier to work with in enclosed or occupied spaces</li>

                  </ul>
                  <p className="blog-feature-text">
                    These properties make it suitable for schools, hospitals, hotels, and residential complexes, places where people’s health and safety come first.     </p>

                  <h3 className="blog-h3">Technical Highlights at a Glance</h3>
                  <table className="tech-table" style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid #000' }}>
                    <tbody>
                      <tr>
                        <td style={{ border: '1px solid #000', padding: '8px', color: '#444' }}>Feature</td>
                        <td style={{ border: '1px solid #000', padding: '8px', color: '#444' }}>Arobond 44 Pro</td>
                      </tr>
                      <tr>
                        <td style={{ border: '1px solid #000', padding: '8px', color: '#444' }}>Type</td>
                        <td style={{ border: '1px solid #000', padding: '8px', color: '#444' }}>Water-based adhesive</td>
                      </tr>
                      <tr>
                        <td style={{ border: '1px solid #000', padding: '8px', color: '#444' }}>Use</td>
                        <td style={{ border: '1px solid #000', padding: '8px', color: '#444' }}>Vinyl rolls & tiles</td>
                      </tr>
                      <tr>
                        <td style={{ border: '1px solid #000', padding: '8px', color: '#444' }}>Surfaces</td>
                        <td style={{ border: '1px solid #000', padding: '8px', color: '#444' }}>Concrete, plywood, GI, asphalt</td>
                      </tr>
                      <tr>
                        <td style={{ border: '1px solid #000', padding: '8px', color: '#444' }}>Application</td>
                        <td style={{ border: '1px solid #000', padding: '8px', color: '#444' }}>Horizontal & vertical</td>
                      </tr>
                      <tr>
                        <td style={{ border: '1px solid #000', padding: '8px', color: '#444' }}>Spreadability</td>
                        <td style={{ border: '1px solid #000', padding: '8px', color: '#444' }}>High single-side</td>
                      </tr>
                      <tr>
                        <td style={{ border: '1px solid #000', padding: '8px', color: '#444' }}>VOC</td>
                        <td style={{ border: '1px solid #000', padding: '8px', color: '#444' }}>Compliant</td>
                      </tr>
                      <tr>
                        <td style={{ border: '1px solid #000', padding: '8px', color: '#444' }}>Safety</td>
                        <td style={{ border: '1px solid #000', padding: '8px', color: '#444' }}>Fire-resistant, eco-friendly</td>
                      </tr>
                    </tbody>
                  </table>

                  <h3 className="blog-h3">Why Choose Aerofine Polymers?</h3>
                  <p className="blog-feature-text">
                    With decades of experience in industrial adhesives and polymer technology, Arofine Polymers is committed to developing solutions that are practical, performance-driven, and planet-friendly. Arobond 44 Pro is just one of the many innovations designed to simplify installation without compromising on quality.                  </p>

                  <h3 className="blog-h3">Final Thoughts</h3>
                  <p className="blog-feature-text">
                    If you're working with vinyl whether in commercial spaces, high-traffic zones, or sensitive environments you need an adhesive that’s safe, strong, and simple. Arobond 44 Pro delivers all three, with the backing of Aerofine’s trusted quality.
                  </p>

                  <p className="blog-feature-text">
                    Ready to upgrade your flooring game? <br/>
                    Contact Arofine Polymers today or visit our website to know more.
                  </p>

                </div>
              </div>
            </Col>

            {/* RIGHT SIDEBAR */}
            <Col lg={4} md={12}>
              <div className="blog-side-list">
                <h4 className="title-more-blogt">More Blogs</h4>
                <Link href="/blogs" className="read-link">
                  ← Back to all blogs
                </Link>
              </div>
              <div className="blog-side-list-sm">
                {blogs.map((item, i) => (
                  <div className="blog-card-rect" key={i}>
                    <Image
                      src={item.imgSrc}
                      width={120}
                      height={100}
                      alt={item.title}
                      className="blog-card-img"
                    />
                    <div className="blog-card-content">
                      <span className="blog-date">{item.date}</span>
                      <h5>{item.title}</h5>
                      <Link href={item.link} className="read-link">
                        Read Now →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
