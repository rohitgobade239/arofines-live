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
    title: "AROVYL 240400",
    description:
      "for high speed paper-bag making by wheel application for side pasting and handle pasting",
    viscosity: "3000-6000 CPS",
    compatibility: "Plain Kraft paper to Kraft paper",
    method: "Machine with roller/nozzle /stereo application.",
  },
  {
    title: "AROVYL 816",
    description:
      "economical grade emulsion for e-flute lamination and other Kraft paper to Kraft paper application.",
    viscosity: "900-1200 CPS",
    compatibility: "Plain Kraft paper to Kraft paper",
    method: "Plain Kraft paper to Kraft paper",
  },
  {
    title: "AROVYL 812",
    description:
      "ready-to-use adhesive for lamination of Honeycomb cell core to liner board. Also recommended for side pasting of corrugated boxes ",
    viscosity: "2500-3500 CPS",
    compatibility: "Plain Kraft paper to Kraft paper",
    method: "Machine with Disc/wheel Application",
  },
  {
    title: "AROVYL 603",
    description:
      "Pasting adhesive for master carton (Shipper Boxes) making and flap pasting by manual application & machine with disc application.",
    viscosity: "20,000-30,000 CPS",
    compatibility: "Plain Kraft Paper to Kraft Paper",
    method: "Application Manual",
  },
  {
    title: "AROVYL 606",
    description:
      "Economical grade pasting adhesive for master carton making and flap pasting by manual application.",
    viscosity: "25,000-35,000 CPS",
    compatibility: "Plain Kraft Paper to Kraft Paper",
    method: "Application Manual",
  },
  {
    title: "AROVYL 801",
    description:
      "Pasting adhesive for master carton making and flap pasting by manual and machine application.",
    viscosity: "24,000-35,000 CPS",
    compatibility: "Plain Kraft Paper to Kraft Paper",
    method: "Application Manual",
  },
  {
    title: "AROVYL 803",
    description:
      "Pasting adhesive for master carton making and e flute lamination by machine application.",
    viscosity: "2000-8000 CPS",
    compatibility: "Plain Kraft Paper to Kraft Paper",
    method: "Application Manual",
  },
  {
    title: "AROVYL 811",
    description:
      "Superior pasting adhesive for master carton making and flap pasting by machine application offering excellent bonding strength with low consumption.",
    viscosity: "1500-3000 CPS",
    compatibility: "Plain Kraft Paper to Kraft Paper",
    method: "Application Manual",
  },
  {
    title: "AROVYL 813",
    description:
      "Specially developed emulsion for flute lamination application. The product has excellent flow characteristics and can also be used for board to board pasting using roller application.",
    viscosity: "500-2000 CPS",
    compatibility: "Plain Kraft Paper to Kraft Paper",
    method: "Application Manual",
  },
  {
    title: "AROVYL 815",
    description:
      "Economical pasting adhesive for master carton making and flap pasting by machine application.",
    viscosity: "4000-7000 CPS",
    compatibility: "Plain Kraft Paper to Kraft Paper",
    method: "Application Manual",
  },
  {
    title: "AROVYL 817",
    description:
      "Economical pasting adhesive for master carton making and flap pasting using wheel/disc application. Suitable for machine where adhesive tank is present on top.",
    viscosity: "1500-3500 CPS",
    compatibility: "Plain Kraft Paper to Kraft Paper",
    method: "Application Manual",
  },
  {
    title: "AROVYL 826",
    description:
      "Pasting adhesive for paper bag and master carton making. Suitable for wheel, nozzle and stereo application.",
    viscosity: "500-2500 CPS",
    compatibility: "Plain Kraft Paper to Kraft Paper",
    method: "Application Machine (Wheel & Nozzle Application)",
  },
  {
    title: "AROVYL 828",
    description:
      "Pasting adhesive for master carton making. Suitable for wheel and nozzle application.",
    viscosity: "500-2000 CPS",
    compatibility: "Plain Kraft Paper to Kraft Paper",
    method: "Application Machine (Wheel & Nozzle Application)",
  },
  {
    title: "AROVYL 832",
    description:
      "Pasting adhesive for paper side pasting using nozzle application. Offers execellent bonding strength with quick drying properties.",
    viscosity: "500-2000 CPS",
    compatibility: "Plain Kraft Paper to Kraft Paper",
    method: "Application Machine (Wheel & Nozzle Application)",
  },
  {
    title: "AROVYL 806",
    description:
      "Pasting adhesive for master carton making and e flute lamination by machine application.",
    viscosity: "400-1000 CPS",
    compatibility: "Plain Kraft Paper to Kraft Paper",
    method: "Application Machine (Wheel & Nozzle Application)",
  },
  {
    title: "AROSTIK 25S049",
    description:
      "AROSTIK 25S049 is specially developed Solvent based PSA that offers high tack and superior bonding strength. The PSA can be applied by roller coating application and force dried by zoned oven ~ 120°C to give dry film with high tack, peel and shear properties.",
    viscosity: "6000-15000 CPS",
    method: "Roller coating application",
  },
  {
    title: "AROCROSS CX65",
    description:
      "2%  to 6% of AROCROSS-23S074(B) can be slowly added in AROSTIK 25S049",
    viscosity: "6000-15000 CPS",
    method: "MIXING",
  },
  {
    title: "AROSTIK 20S010",
    description:
      "Specially developed solvent-based PSA that offers high tack and superior bonding strength. The PSA can be applied by roller coating and force dried in a zoned oven at 120°C to give a dry film with high tack, peel, and shear properties.",
    viscosity: "2000-6000 CPS",
    compatibility: "PU/EPE/Bonded PU Foams",
    method: "MIXING",
  },
  {
    title: "ADDITIVE 19S037",
    description:
      "1% to 1.25% of ADDITIVE - A - 19S037 can be slowly added to AROSTIK - 20S010.",
    viscosity: "2000-6000 CPS",
    compatibility: "Roller Coating Application",
    method: "MIXING",
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
              <h1 className="banner-title">Pasting Adhesive Emulsions</h1>
              <p className="banner-ind">Industries</p>
              <div className="industries">
                <span>
                  <Image
                    src="/images/productcategory/PastingAdhesiveEmulsions/industries.svg"
                    width={18}
                    height={18}
                    alt="industries iocn"
                  />{" "}
                  Printing and Packaging
                </span>
                <span>
                  <Image
                    src="/images/productcategory/PastingAdhesiveEmulsions/industries.svg"
                    width={18}
                    height={18}
                    alt="industries iocn"
                  />{" "}
                  Corrugation
                </span>
                {/* <span>
                  <Image
                    src="/images/productcategory/Pastingimg/industries.svg"
                    width={18}
                    height={18}
                    alt="industries iocn"
                  />{" "}
                  Stationery
                </span> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="leading-con mobile-only" style={{ padding: "50px 0px" }}>
        <Image
          src={"/images/productcategory/Mobile/Corrugation_Pasting_ Adhesive_M.png"}
          width={320}
          height={250}
          alt={"kkkkk"}
          className="leading-img"
          style={{ width: "100%" }}
        />
        <Container style={{ padding: "0px 10px" }}>
          <div className="leading-singel" style={{ paddingTop: "10px" }}>
            <h2 style={{ color: "#212529", fontSize: "22px", paddingTop: "10px", fontWeight: "700" }}>Pasting Adhesive Emulsions</h2>
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
            </div>
          </div>
        </Container>
      </div>

      {/* Brands Section */}
      <section className="brands text-center">
        <Container>
          <p>Brands Associated with Pasting Adhesive Emulsions</p>

          <Image
            src="/images/productcategory/PastingAdhesiveEmulsions/Brand_corrugation_pasting_adhesive.png"
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
                img: "/images/productcategory/PastingAdhesiveEmulsions/Superior Bonding Strength.svg",
              },
              {
                text: "Food Grade Adhesive",
                img: "/images/productcategory/PastingAdhesiveEmulsions/Food Grade Adhesive.svg",
              },
              {
                text: "RoHS Certified",
                img: "/images/productcategory/PastingAdhesiveEmulsions/RoHS Certified.svg",
              },
              {
                text: "Excellent Rheological Properties",
                img: "/images/productcategory/PastingAdhesiveEmulsions/Excellent Rheological Properties.svg",
              },
              {
                text: "High Yield",
                img: "/images/productcategory/PastingAdhesiveEmulsions/High Yield.svg",
              },
              {
                text: "Anti-Fungal Properties",
                img: "/images/productcategory/PastingAdhesiveEmulsions/Anti-Fungal Properties.svg",
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
