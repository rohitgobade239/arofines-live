"use client";
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Badge,
} from "react-bootstrap";
import Image from "next/image";
import "./style.css";
import { ThankYou } from "@/components/thank-you/page";
import { useRouter } from "next/navigation";
import { EnquireNow } from "@/components/enquire-now/enquireNow";
import Link from "next/link";

const products = [
  {
    title: "AROCOM 134",
    description:
      "Arocom 134 is flexible and fast setting and is applied using high-speed automatic machines with pumping arrangement.",
    viscosity: "400-1000 CPS",
    compatibility: "Semi Automatic / Automatic Machine",
    method: "Brown Solid slab",
  },
  {
    title: "AROCOM 5",
    description:
      "AROCOM - 5 is a fast-setting adhesive recommended for short open times on high-speed automatic machines like kolbus or reboard.",
    viscosity: "2000-4000 CPS",
    compatibility: "Light Brown Solid Soft Slab",
    method: "Application-Semi Automatic Machine",
  },
  {
    title: "AROCOM 7",
    description:
      "Arocom - 7 is a flexible and fast-setting adhesive applied  using a high-speed automatic machine like kolbus or reboard.",
    viscosity: "2000-5000 CPS",
    compatibility: "Light Brown Solid Soft Slab",
    method: "Application-Semi Automatic Machine",
  },
  {
    title: "AROCOM 144",
    description:
      "Arocom - 144 is a flexible and fast-setting adhesive applied using high-speed automatic machines with pumping arrangements. The open time is between 35 to 60 seconds.",
    viscosity: "500-1500 CPS",
    compatibility: "Brown Solid Slab",
    method: "Application-Semi Automatic Machine",
  },
  {
    title: "AROCOM 244",
    description:
      "Arocom - 244 is a flexible and fast-setting adhesive applied using a high-speed automatic machine like kolbus or reboard. The open time is between 25 to 50 seconds.",
    viscosity: "2000-4000 CPS",
    compatibility: "Brown Solid Slab",
    method: "Application-Semi Automatic Machine",
  },
  {
    title: "AROCOM 344",
    description:
      "AROCOM-344 is a quick-setting adhesive recommended for short open times on high-speed automatic machines like kolbus or reboard. Open time between 15 to 35 seconds.",
    viscosity: "2000-4000 CPS",
    compatibility: "Brown Solid Slab",
    method: "Application-Semi Automatic Machine",
  },
];

export default function PastingAdhesivePage() {
  const [productSelected, SetProductSelected] = useState([]);
  const [success, setSuccess] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("All");

  const deleteBtn = (e) => {
    SetProductSelected(productSelected.filter((i) => i.title !== e.title));
  };

  const onClose = () => {
    setSuccess(false);
    SetProductSelected([]);
  };

  const filteredProducts =
    selectedMethod === "All"
      ? products
      : products.filter((p) => p.method === selectedMethod);
  return (
    <div className="pasting-page">
      {/* Banner Section */}
      <section className="banner d-flex align-items-center desktop-only">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="banner-title">Jelly Glue</h1>
              <p className="banner-ind">Industries</p>
              <div className="industries">
                <span>
                  <Image
                    src="/images/productcategory/JellyGlue/industries.svg"
                    width={18}
                    height={18}
                    alt="industries iocn"
                  />{" "}
                  Printing and Packaging
                </span>
                <span>
                  <Image
                    src="/images/productcategory/JellyGlue/industries.svg"
                    width={18}
                    height={18}
                    alt="industries iocn"
                  />{" "}
                  Corrugation
                </span>
                <span>
                  <Image
                    src="/images/productcategory/JellyGlue/industries.svg"
                    width={18}
                    height={18}
                    alt="industries iocn"
                  />{" "}
                  Stationery
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="leading-con mobile-only" style={{ padding: "50px 0px" }}>
        <Image
          src={"/images/productcategory/Mobile/Jelly_Glue_M.png"}
          width={320}
          height={250}
          alt={"kkkkk"}
          className="leading-img"
          style={{ width: "100%" }}
        />
        <Container style={{ padding: "0px 10px" }}>
          <div className="leading-singel" style={{ paddingTop: "10px" }}>
            <h2 style={{ color: "#212529", fontSize: "22px", paddingTop: "10px", fontWeight: "700" }}>Jelly Glue</h2>
            <p className="banner-ind" style={{ color: "#212529", fontSize: "18px" }}>Industries</p>
            <div className="industries" >
              <span style={{ color: "#212529" }}>
                ●
                Printing and Packaging
              </span>
              <span style={{ color: "#212529" }}>
                ●
                Corrugation
              </span>
              <span style={{ color: "#212529" }}>
                ●
                Stationery
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* Brands Section */}
      <section className="brands text-center">
        <Container>
          <p>Brands Associated with Jelly Glue</p>
          <Image
            src="/images/productcategory/JellyGlue/Arocom3677.png"
            alt="Brands"
            width={179}
            height={50}
          />
        </Container>
      </section>

      {/* Advantages Section */}
      <section className="advantages">
        <Container>
          <h2>Advantages</h2>
          <Row className="text-center ">
            {[
              {
                text: "Superior Bonding Strength",
                img: "/images/productcategory/Pastingimg/Icons/Superior Bonding Strength.svg",
              },
              {
                text: "Food Grade Adhesive",
                img: "/images/productcategory/Pastingimg/Icons/Adhesive.svg",
              },
              {
                text: "RoHS Certified",
                img: "/images/productcategory/Pastingimg/Icons/RoHS Certified.svg",
              },
              {
                text: "High Speed Machine Runnability",
                img: "/images/productcategory/Pastingimg/Icons/High Speed Machine Runnability.svg",
              },
              {
                text: "Deep Freeze Resistance",
                img: "/images/productcategory/Pastingimg/Icons/Deep Freeze Resistance.svg",
              },
              {
                text: "Speciality Adhesive for Difficult Surface",
                img: "/images/productcategory/Pastingimg/Icons/Speciality Adhesive for Difficult Surface.svg",
              },
            ].map((adv, i) => (
              <Col md={2} sm={4} xs={6} key={i} className="mb-4">
                <div>
                  <Image src={adv?.img} alt="icon" width={110} height={110} />
                </div>
                <p className="adv-text-pm">{adv.text}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Filter Section */}
      <section className="filters">
        <Container>
          <h3 className="text-center">Find the right adhesive in 30 seconds</h3>
          <p className="text-center">
            Filter by substrate, application method or viscosity – then add
            products to your enquiry cart.
          </p>
          <Row className="justify-content-center g-5">
            <Col md={12} sm={12}>
              <p className="filters-text">Method</p>
              <Form.Select
                value={selectedMethod}
                onChange={(e) => setSelectedMethod(e.target.value)}
              >
                <option value="All">All Methods</option>

                {[...new Set(products.map((i) => i.method))].map(
                  (method, idx) => (
                    <option key={idx} value={method}>
                      {method}
                    </option>
                  )
                )}
              </Form.Select>
            </Col>
            {/* <Col md={5} sm={6}>
              <p className="filters-text">Viscosity (CPS)</p>

              <Form.Select>
                <option>1,000 – 1,20,000</option>
              </Form.Select>
            </Col> */}
          </Row>
        </Container>
      </section>

      {/* Products & Enquiry Form */}
      <section className="product-enquiry">
        <Container>
          <Row>
            {/* Product Cards */}
            <Col md={8}>
              <Row>
                {filteredProducts.map((p, i) => (
                  <Col md={6} sm={12} key={i} className="mb-4">
                    <Card className="product-card">
                      <Card.Body className="product-card-body">
                        <div>
                          <Card.Title className="title-productm">
                            {p.title}
                          </Card.Title>
                          <Card.Text className="descript-sub">
                            {p.description}
                          </Card.Text>
                          <Badge className="mb-3 mt-3 high-speed-bg ">
                            {p.method}
                          </Badge>
                          <p className="mb-2 comman-color">{p.viscosity}</p>
                          <p className="mb-2 comman-color">{p.compatibility}</p>
                        </div>
                        <div>
                          {productSelected?.length === 0 ? (
                            <Link href="#enquiry-form" onClick={() =>
                              SetProductSelected([...productSelected, p])
                            } className="enquiry-btn w-100 btn btn-primary">
                              Add to enquiry
                              <Image
                                height={17}
                                width={17}
                                alt="Subtract"
                                src="/images/productcategory/Pastingimg/Subtract.svg"
                                className="ms-2"
                              />
                            </Link>
                          ) : productSelected.some(
                            (item) => item?.title === p.title
                          ) ? (
                            <Button
                              className="enquiry-btn w-100 enquiry-btn-remove"
                              onClick={() => deleteBtn(p)}
                            >
                              Remove
                              <Image
                                height={17}
                                width={17}
                                alt="Remove"
                                src="/images/productcategory/Pastingimg/remove-icon.svg"
                                className="ms-2"
                              />
                            </Button>
                          ) : (
                            <Link href="#enquiry-form" onClick={() =>
                              SetProductSelected([...productSelected, p])
                            } className="enquiry-btn w-100 btn btn-primary">
                              Add to enquiry
                              <Image
                                height={17}
                                width={17}
                                alt="Subtract"
                                src="/images/productcategory/Pastingimg/Subtract.svg"
                                className="ms-2"
                              />
                            </Link>
                          )}
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>

            {/* Enquiry Form */}
            <EnquireNow
              productSelected={productSelected}
              setSuccess={setSuccess}
              deleteBtn={deleteBtn}
            />
          </Row>
        </Container>
      </section>
      {success && <ThankYou onClose={onClose} />}
    </div>
  );
}
