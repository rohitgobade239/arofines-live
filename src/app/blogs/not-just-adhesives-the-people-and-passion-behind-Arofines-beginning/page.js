
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
            style={{ backgroundImage: `url(/images/blog/Hero_Not_Just_Adhesives.jpg)` }}
          >
           
          </div>

          <Row className="blog-bottom-section">
            {/* LEFT BLOG CONTENT */}
            <Col lg={8} md={12}>
              <div className="blog-feature-box">

                <div>
                  <h1 className="blog-feature-title-banner-inne">Not Just Adhesives The People and Passion Behind Arofine’s Beginning</h1>

                  <p className="blog-feature-text ">
                    Every enduring brand has a story not just of products or profit, but of people, passion, and perseverance.
                  </p>

                  <p className="blog-feature-text pt-2">
                    For Arofine Polymers, the story began not in a boardroom, but over casual conversations between friends. Three or four of them, each from different walks of life, came together with a common dream: to build something of their own. Not just a business, but a space where ideas could take shape, chemistry could be explored, and quality would always speak louder than scale.
                  </p>

                  <p className="blog-feature-text pt-2">
                    In the early days, there were no titles or hierarchies, just long hours, heated discussions, and a tiny lab with big hopes. The team began by experimenting with perfumery and pharmaceutical chemicals, driven more by curiosity than commercial vision. It was a phase of trial, error, and unrelenting patience, seven to eight years of development, learning, and evolution.
                  </p>

                  <p className="blog-feature-text pt-2">
                    They didn’t set out to make adhesives. In fact, adhesives weren’t even on the radar. But as life would have it, a casual suggestion “Why don’t you try making adhesives?” changed everything.
                  </p>

                  <p className="blog-feature-text pt-2"><strong>That moment became a pivot point.</strong></p>

                  <p className="blog-feature-text pt-2">
                    Starting small, they purchased polyvinyl acetate emulsions, crafted basic adhesive formulations, and personally delivered them to users sometimes in 1 kg, 2 kgs or 5kgs containers. No fancy branding. No logistics team. Just commitment. Sales were made from the back of a scooter, riding from customer to customer, earning trust one bucket at a time.
                  </p>

                  <p className="blog-feature-text pt-2">
                    Those early days were gritty. Humbling. But also full of excitement.
                  </p>

                  <p className="blog-feature-text pt-2">
                    With time, what started as simple formulations grew into an ecosystem of water-based adhesives, emulsions, and specialty solutions. As customers returned not just for products, but for the trust and consistency Arofine promised, the brand began to take shape driven by values that were never written down but lived every day.
                  </p>

                  <p className="blog-feature-text pt-2">
                    Today, Arofine Polymers stands as a trusted name in the adhesives and coating chemicals industry. But it still carries that start-up spirit, the warmth of friendship, the fire of experimentation, and the belief that good chemistry starts with good people.
                  </p>

                  <p className="blog-feature-text pt-2">
                    Because in the end, Arofine was never just about polymers. It was always about possibilities.<br /> <strong>Stay tuned for Part 2 of our story, where grit meets growth.</strong>  </p>


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
