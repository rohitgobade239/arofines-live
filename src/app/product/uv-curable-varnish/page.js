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

const products = [
  {
    title: "ACROTECH UV 24 C",
    description:
      "Top Layer UV Varnish to be applied by Roller Coating on UV Curable Primer/Matte Varnish (Wet on Wet Application) for Drip Off Effect",
    viscosity: "Viscosity: 60-80 CPS",
    // compatibility: "Plain Kraft paper to Kraft paper",
    method: "Application-Coater Machine",
  },
  {
    title: "ACROTECH UV 275",
    description:
      "Odorless, UV-curable Overprint Medium offers high gloss and slip for offline application on conventional roller coating or varnishing machines. Rollers can be cleaned using UV Cleansol 106.",
    viscosity: "Viscosity: 200-500 CPS",
    // compatibility: "Plain Kraft paper to Kraft paper",
    method: "Application-Coater Machine",
  },
  {
    title: "ACROTECH UV 275 (H)",
    description:
      "Odorless, UV-curable Overprint Medium offers high gloss and slip for offline and online application on conventional roller coating or varnishing machines. Rollers can be cleaned using UV Cleansol 106.",
    viscosity: "Viscosity: 60-80 CPS",
    // compatibility: "Plain Kraft paper to Kraft paper",
    method: "Application-Online Coater Machine",
  },
  {
    title: "ACROTECH UV 275 (H)",
    description:
      "Odorless, UV-curable Overprint Medium offers high gloss and slip for offline and online application on conventional roller coating or varnishing machines. Rollers can be cleaned using UV Cleansol 106.",
    viscosity: "Viscosity: 60-80 CPS",
    // compatibility: "Plain Kraft paper to Kraft paper",
    method: "Application-Online Coater Machine",
  },
  {
    title: "ACROTECH UV 46 D",
    description:
      "Top Layer UV Varnish to be applied through Ink Duct on UV Curable Primer/ Matte Varnish (Wet on Wet Application) for Drip Off Effect",
    viscosity: "Viscosity: 2000-4000 CPS",
    // compatibility: "Plain Kraft paper to Kraft paper",
    method: "Application-Ink Duct Offset Machine",
  },
  {
    title: "ACROTECH UV 47 D",
    description:
      "Premium Top Layer UV Varnish to be applied through Ink Duct on UV curable primer or matte (Wet on Wet Application) Varnish for Drip-Off Effect",
    viscosity: "Viscosity: 2000-4000 CPS",
    // compatibility: "Plain Kraft paper to Kraft paper",
    method: "Application-Ink Duct Offset Machine",
  },
  {
    title: "ACROTECH UV 50 P",
    description:
      "The UV-curable primer ACROTECH-UV-50P is partially or fully applied through an ink duct of the coating unit, which is followed by a full gloss coating, i.e., ACROTECH UV 24C by roller coating or ACROTECH UV 46D for coating through an ink duct.",
    viscosity: "Viscosity: 40,000-80,000 CPS",
    // compatibility: "Plain Kraft paper to Kraft paper",
    method: "Application-Ink Duct Offset Machine",
  },
  {
    title: "ACROTECH UV 52 P",
    description:
      "The UV-curable primer ACROTECH - UV - 52P is partially or fully applied through an ink duct of the coating unit, which is followed by a full gloss coating, i.e., ACROTECH - UV - 24C by roller coating or ACROTECH - UV - 46D for coating through an ink duct. The drip-off effect with  ACROTECH - UV - 52 (P) is a fine or small grain effect.",
    viscosity: "Viscosity: 40,000-80,000 CPS",
    // compatibility: "Plain Kraft paper to Kraft paper",
    method: "Application-Ink Duct Offset Machine",
  },
  {
    title: "ACROTECH UV 44",
    description:
      "UV-cured overprint medium for online coating through the ink duct on a high-speed offset machine, offering good gloss and good scuff resistance.",
    viscosity: "Viscosity: 1000-2000 CPS",
    // compatibility: "Plain Kraft paper to Kraft paper",
    method: "Application-Ink Duct Offset Machine",
  },
  {
    title: "ACROTECH UV 33",
    description:
      "Spot UV-cured overprint medium for screen applications with high gloss.",
    viscosity: "Viscosity: 80-110 CPS",
    // compatibility: "Plain Kraft paper to Kraft paper",
    method: "Method of Application-Screen",
  },
  {
    title: "ACROTECH UV 34",
    description:
      "Texture-effect spot UV-curable OPM applied using a screen manually It gives a texture finish on printed board, and the recommended size of mesh is 20 or 40T.",
    viscosity: "Viscosity: 500-1000 CPS",
    // compatibility: "Plain Kraft paper to Kraft paper",
    method: "Method of Application-Screen",
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
              <h1 className="banner-title">UV Curable Varnish</h1>
              <p className="banner-ind">Industries</p>
              <div className="industries">
                <span>
                  <Image
                    src="/images/productcategory/UVCurableVarnish/industries.svg"
                    width={18}
                    height={18}
                    alt="industries iocn"
                  />{" "}
                  Printing and Packaging
                </span>

                <span>
                  <Image
                    src="/images/productcategory/UVCurableVarnish/industries.svg"
                    width={18}
                    height={18}
                    alt="industries iocn"
                  />{" "}
                  Stationery
                </span>
                <span>
                  <Image
                    src="/images/productcategory/UVCurableVarnish/industries.svg"
                    width={18}
                    height={18}
                    alt="industries iocn"
                  />{" "}
                  Corrugation
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="leading-con mobile-only" style={{ padding: "50px 0px" }}>
        <Image
          src={"/images/productcategory/Mobile/UV_Curable_Varnish_M.png"}
          width={320}
          height={250}
          alt={"kkkkk"}
          className="leading-img"
          style={{ width: "100%" }}
        />
        <Container style={{ padding: "0px 10px" }}>
          <div className="leading-singel" style={{ paddingTop: "10px" }}>
            <h2 style={{ color: "#212529", fontSize: "22px", paddingTop: "10px", fontWeight: "700" }}>UV Curable Varnish</h2>
            <p className="banner-ind" style={{ color: "#212529", fontSize: "18px" }}>Industries</p>
            <div className="industries" >
              <span style={{ color: "#212529" }}>
                ●
                Printing and Packaging
              </span>
              <span style={{ color: "#212529" }}>
                ●
                Stationery
              </span>
              <span style={{ color: "#212529" }}>
                ●
                Corrugation
              </span>

            </div>
          </div>
        </Container>
      </div>


      {/* Brands Section */}
      <section className="brands text-center">
        <Container>
          <p>Brands Associated with UV Curable Varnish</p>
          <Image
            src="/images/productcategory/UVCurableVarnish/Brand_uv_curable_varnish.png"
            alt="Brands"
            width={172}
            height={48}
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
                text: "High Gloss",
                img: "/images/productcategory/UVCurableVarnish/High Gloss.svg",
              },
              {
                text: "High-speed Machine Runnability",
                img: "/images/productcategory/UVCurableVarnish/High Speed Machine Runnability.svg",
              },
              {
                text: "Low Odour",
                img: "/images/productcategory/UVCurableVarnish/Low Odour.svg",
              },
              {
                text: "High Slip",
                img: "/images/productcategory/UVCurableVarnish/High Slip.svg",
              },
              {
                text: "Fast Drying",
                img: "/images/productcategory/UVCurableVarnish/Fast Drying.svg",
              },
              {
                text: "High Scuff Resistance",
                img: "/images/productcategory/UVCurableVarnish/High Scuff Resistance.svg",
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
                            <Button
                              className="enquiry-btn w-100"
                              onClick={() =>
                                SetProductSelected([...productSelected, p])
                              }
                            >
                              Add to enquiry
                              <Image
                                height={17}
                                width={17}
                                alt="Subtract"
                                src="/images/productcategory/Pastingimg/Subtract.svg"
                                className="ms-2"
                              />
                            </Button>
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
                            <Button
                              className="enquiry-btn w-100"
                              onClick={() =>
                                SetProductSelected([...productSelected, p])
                              }
                            >
                              Add to enquiry
                              <Image
                                height={17}
                                width={17}
                                alt="Subtract"
                                src="/images/productcategory/Pastingimg/Subtract.svg"
                                className="ms-2"
                              />
                            </Button>
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
