
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
            style={{ backgroundImage: `url(/images/blog/Hero_dealer_focus_homer.jpg)` }}
          >
           
          </div>

          <Row className="blog-bottom-section">
            {/* LEFT BLOG CONTENT */}
            <Col lg={8} md={12}>
              <div className="blog-feature-box">

                <div>
               <h1 className="blog-feature-title-banner-inne">Dealer Focus Homer</h1>

                  <p className="blog-feature-text ">
                    <strong>One Decade, One Partnership:</strong> How Arofine Became a Trusted Name in Mizoram’s Flooring Market
                  </p>

                  <p className="blog-feature-text pt-2">
                    In the lush hills of Mizoram, where rugged terrain meets thoughtful architecture, finding the right building materials isn’t always easy. But for Mr. L. Renthlei, fondly known as Robby, this challenge led to an enduring partnership that has transformed local flooring solutions.
                  </p>

                  <p className="blog-feature-text pt-2">
                    Robby, the proprietor of Homer Hardware and Arofine’s authorized distributor in Mizoram, has been associated with the brand for over 14 years. His journey with Arofine Polymers is a testament to what happens when quality meets need.
                  </p>

                  <p className="blog-feature-text pt-2">
                   <strong> From a Product Search to a Powerful Partnership</strong><br/>
                    "When we started selling vinyl planks, there was no perfect adhesive in the market. We tried several brands, but nothing seemed to stick literally," Robby laughs. "That’s when my brother came across an Arofine product, and we decided to give it a shot."
                  </p>

                  <p className="blog-feature-text pt-2">
                    What started as a search soon turned into a long-term business relationship. Robby was among the first to bring Arofine adhesives to Mizoram, a move that quickly paid off.
                  </p>


                  <p className="blog-feature-text pt-2">
                    <strong>Meeting the Needs of a Hilly Region</strong><br/>
                    Mizoram's climate and construction style are distinct. The buildings are often concrete-heavy, designed to withstand the region’s topography and weather patterns. As a result, lighter flooring options like vinyl planks are preferred across residential and institutional projects.
                  </p>


                  < p className="blog-feature-text pt-2">
                    "People here are practical," says Robby. "They want something easy to install and easy to maintain. Aerofine products fit perfectly into that need."
                  </p>

                  < p className="blog-feature-text pt-2">
                    <strong>The Go-To Products: Arobond 44, Arobond 44 Pro and Aquapol 77 </strong><br/>
                    Among the adhesives that gained popularity, Arobond 44, Arobond 144 Pro and Aquapol 77 stand out. Designed for horizontal and vertical vinyl applications, these adhesives are water-based, VOC-compliant, and fire-resistant making them ideal for both residential and government office projects.
                  </p>

                  < p className="blog-feature-text pt-2">
                    "Our customers love that they only need to apply the adhesive on one side. It saves time, labor, and cost," Robby adds. "Plus, the quality is consistent. Once they use it, they rarely go back to any other brand."
                  </p>

                  < p className="blog-feature-text pt-2">
                   <strong> Why Aerofine Stands Out in the North East </strong><br/>
                    For a market that’s often underserved in terms of supply chain and technical support, Robby believes Arofine’s biggest advantage is value for money.

                  </p>

                  < p className="blog-feature-text pt-2">
                    "Compared to oil-based adhesives, Arofine’s water-based range is not only safer and more eco-friendly, but also more affordable," he explains. "It’s this combination of cost-effectiveness and performance that keeps customers coming back."
                  </p>



                  < p className="blog-feature-text pt-2">
                    <strong>Built on Trust, Backed by Results</strong> <br/>
                    Over the years, Homer Hardware has grown to become a reliable source of quality adhesives in Mizoram, thanks largely to Robby’s belief in Arofine’s products.
                  </p>

                  < p className="blog-feature-text pt-2">
                    "I’ve stuck with Arofine for 14 years because it delivers. My customers trust me because the product never fails them. That’s the kind of reputation money can’t buy."
                  </p>

                  < p className="blog-feature-text pt-2">
                    As Mizoram continues to modernize and embrace newer building materials, one thing remains constant: Robby and Aerofine will be there, helping customers lay down stronger, smarter foundations.
                  </p>


                  < p className="blog-feature-text pt-2">
                    <strong>Interested in Arofine Products?</strong> <br/>
                    If you're in the North East and looking for premium adhesive solutions for your flooring or furnishing needs, reach out to your local Arofine distributor today. Quality, value, and time-tested performance are just a call away.
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
