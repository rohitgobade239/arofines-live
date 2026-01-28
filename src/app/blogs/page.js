"use client";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/data/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error loading job data", err));
  }, []);

  return (
    <>
      <section className="banner d-flex align-items-center desktop-only">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="banner-title"></h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mobile-only">
        <Image
          src={"/images/blog/Blogs_banner_m.jpg"}
          width={320}
          height={250}
          alt={"kkkkk"}
          className="leading-img"
          style={{ width: "100%" }}
        />
        <Container style={{ padding: "0px 10px", paddingTop: "10px" }}>
          <div className="leading-singel">
            <h2 style={{ color: "#212529", fontSize: "22px", paddingTop: "10px", fontWeight: "700" }}>Blogs</h2>
          </div>
        </Container>
      </section>

      <section className="leading-section mt-5 mt-sm-0">
        <Container>
          <Row className="custom-row">
            {blogs.map((item, i) => (
              <Col key={i} lg="3" md="6" sm="12" className="mb-4">
                <div className="leading-con">
                  <Image
                    src={item.imgSrc}
                    width={320}
                    height={250}
                    alt={item.title}
                    className="leading-img"
                  />
                  <div className="leading-singel">
                    <span>{item.date}</span>
                    <p>{item.title}</p>
                    <Link href={item.link}>Read now →</Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
