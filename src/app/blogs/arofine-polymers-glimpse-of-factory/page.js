
"use client";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default  function page() {
  const [blogs,setBlogs]=useState([])
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
            style={{ backgroundImage: `url(/images/blog/Hero_glimpse_of_actory.jpg)` }}
          >
           
          </div>

          <Row className="blog-bottom-section">
            {/* LEFT BLOG CONTENT */}
            <Col lg={8} md={12}>
              <div className="blog-feature-box">
          
                <div>
                   <h1 className="blog-feature-title-banner-inne">Arofine Polymers Glimpse of Factory</h1>
                 
                  <p className="blog-feature-text ">
                   In the dynamic world of adhesives and emulsions, consistency, innovation, and trust form the backbone of long-term success. At Arofine Polymers, we’ve built that foundation over 40+ years, transforming a technocrats’ vision into a trusted brand across industries.
                  </p>

                  <p className="blog-feature-text pt-2">
                   From modest beginnings to a fully automated manufacturing powerhouse, our journey has always been rooted in quality and driven by innovation.
                  </p>
                   <h3 className="blog-h3">A World-Class Manufacturing Facility in Chakan, Pune</h3>
                  <p className="blog-feature-text pt-2">
                   Our manufacturing unit, strategically located in Chakan, Pune, is designed to meet high-volume demands with precision and speed. The facility is equipped with:
                  </p>
    <ul className="cust-bullet-pointm">
          <li>Multiple capacity reactors with a combined annual capacity of 8,400 MT</li>
          <li>Fully automated and programmed systems to ensure consistency in every batch</li>
         <li>In-process quality checks and automated packing systems for efficiency</li>
         <li>Material handling equipment for safe transfer and storage</li>
         <li>Underground and above-ground tank farms for secure raw material and product management</li>
         <li>A modern warehouse with an automated firefighting system</li>
         <li>Effluent Treatment Plant (ETP) and a robust fire hydrant network for environmental and operational safety</li>
         <li>A company-owned fleet ensuring timely and reliable delivery</li>
</ul>
                  <p className="blog-feature-text">
                   Every step from raw material intake to final dispatch is monitored and controlled for excellence.
                  </p>
                  <h3 className="blog-h3">Innovation at the Core: In-House R&D and QA</h3>
                  <p className="blog-feature-text">
                   We believe that quality starts in the lab.
                  </p>
                  <p className="blog-feature-text">
                   Our dedicated in-house R&D center constantly works on developing new formulations, improving performance, and tailoring products to client-specific requirements. Backed by 150+ years of collective team expertise, our R&D is where innovation meets practical application.
                  </p>
                   <p className="blog-feature-text">
                   To support this, we have a centralized Quality Assurance Lab equipped with state-of-the-art instruments. Here, every batch manufactured is rigorously tested because for us, there’s zero tolerance for sub-optimal materials or finished goods.
                  </p>
                  

                  <h3 className="blog-h3">People Behind the Process</h3>
                  <p className="blog-feature-text">
                  What truly powers Aerofine is our qualified production team of engineers and specialists with hands-on knowledge in chemical engineering and process control. Their contextual understanding ensures that each formulation is not just made right but made to perform.
                  </p>
                  <p className="blog-feature-text">
                   From the lab bench to the production line, every Aerofine team member is aligned with one goal: to deliver safe, high-quality, and customized solutions that perform under pressure.
                  </p>

                  
                  <h3 className="blog-h3">A Legacy Built on Confidence</h3>
                  <p className="blog-feature-text">
                  Arofine Polymers was founded by a group of passionate technocrats with one clear aim  to create reliable, consistent chemical solutions for industry. Today, as we celebrate over four decades of excellence, we also celebrate the enduring relationships we’ve built with our customers.
                  </p>
                  <p className="blog-feature-text">
                   We’re not just manufacturing adhesives and emulsions, we're delivering confidence, batch after batch.
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
