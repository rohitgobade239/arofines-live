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
    title: "ACROSOL 11",
    description:
      "Aqueous OPM for online application on printed surfaces through Ink ducts offers good gloss.",
    viscosity: "1000-3000 CPS",
    // compatibility:
    //   "BOPP, PET , MET PET Laminated, Unlaminted and Aqueous Coated",
    method: "Application-Ink Duct Offset Machine",
  },
  {
    title: "ACROSOL 18",
    description:
      "Economical Aqueous OPM for coating on printed board/chromo paper by offline application using a high-speed roller coater machine Moderate scuff resistance with good gloss.",
    viscosity: "50-250 CPS",
    // compatibility:
    //   "BOPP, PET , MET PET Laminated, Unlaminted and Aqueous Coated",
    method: "Application-Coater Machine",
  },
  {
    title: "ACROSOL 20",
    description:
      "Economical Aqueous OPM for coating on printed board/chromo paper by offline application using a high-speed roller coater machine Moderate scuff resistance with good gloss.",
    viscosity: "100-300 CPS",
    // compatibility:
    //   "BOPP, PET , MET PET Laminated, Unlaminted and Aqueous Coated",
    method: "Application-Coater Machine",
  },
  {
    title: "ACROSOL 21",
    description:
      "Aqueous OPM for coating on printed board/chromo paper by offline application using a high-speed roller coater machine offering good scuff resistance and gloss.",
    viscosity: "50-250 CPS",
    // compatibility:
    //   "BOPP, PET , MET PET Laminated, Unlaminted and Aqueous Coated",
    method: "Application-Coater Machine",
  },
  {
    title: "ACROSOL 22",
    description:
      "Aqueous OPM for coating on printed board/paper by offline or online coater machines offering good gloss and good scuff resistance.",
    viscosity: "100-300 CPS",
    // compatibility:
    //   "BOPP, PET , MET PET Laminated, Unlaminted and Aqueous Coated",
    method: "Application-Coater Machine",
  },
  {
    title: "ACROSOL 23",
    description:
      "Aqueous OPM for coating on printed/unprinted board or Paper by off-line application using a high-speed roller coater machine with high gloss and high scuff resistance.",
    viscosity: "100-400 CPS",
    // compatibility:
    //   "BOPP, PET , MET PET Laminated, Unlaminted and Aqueous Coated",
    method: "Application-Coater Machine",
  },
  {
    title: "ACROSOL 25",
    description:
      "Aqueous OPM is used for coating printed board/aper by offline or online coater machines, offering good gloss and scuff resistance.",
    viscosity: "50-300 CPS",
    // compatibility:
    //   "BOPP, PET , MET PET Laminated, Unlaminted and Aqueous Coated",
    method: "Application-Coater Machine",
  },
  {
    title: "ACROSOL 29",
    description:
      "Aqueous Matt OPM for coating on printed board/paper by an automatic roller coating machine Mix well before use.",
    viscosity: "50-250 CPS",
    // compatibility:
    //   "BOPP, PET , MET PET Laminated, Unlaminted and Aqueous Coated",
    method: "Application-Coater Machine",
  },
  {
    title: "ACROSOL 43",
    description:
      "Aqueous anchor coat to promote adhesion of the aqueous or UV coating to the board surface Offline coating application.",
    viscosity: "5-50 CPS",
    // compatibility:
    //   "BOPP, PET , MET PET Laminated, Unlaminted and Aqueous Coated",
    method: "Application-Coater Machine",
  },
  {
    title: "ACROSOL 43 (H)",
    description:
      "Aqueous anchor coat to promote higher yield and adhesion of Aqueous/UV coating to the board surface.",
    viscosity: "100-300 CPS",
    // compatibility:
    //   "BOPP, PET , MET PET Laminated, Unlaminted and Aqueous Coated",
    method: "Application-Coater Machine",
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
              <h1 className="banner-title">Aqueous Varnish</h1>
              <p className="banner-ind">Industries</p>
              <div className="industries">
                <span>
                  <Image
                    src="/images/productcategory/AqueousVarnish/industries.svg"
                    width={18}
                    height={18}
                    alt="industries iocn"
                  />{" "}
                  Printing and Packaging
                </span>
                <span>
                  <Image
                    src="/images/productcategory/AqueousVarnish/industries.svg"
                    width={18}
                    height={18}
                    alt="industries iocn"
                  />{" "}
                  Corrugation
                </span>
                <span>
                  <Image
                    src="/images/productcategory/AqueousVarnish/industries.svg"
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
          src={"/images/productcategory/Mobile/Aqueous_Varnish_M.png"}
          width={320}
          height={250}
          alt={"kkkkk"}
          className="leading-img"
          style={{ width: "100%" }}
        />
        <Container style={{ padding: "0px 10px" }}>
          <div className="leading-singel" style={{ paddingTop: "10px" }}>
            <h2 style={{ color: "#212529", fontSize: "22px", paddingTop: "10px", fontWeight: "700" }}>Printing and Packaging</h2>
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
          <p>Brands Associated with Aqueous Varnish</p>
          <Image
            src="/images/productcategory/AqueousVarnish/Brand_aqueous_varnish.png"
            alt="Brands"
            width={171}
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
                img: "/images/productcategory/AqueousVarnish/High Gloss.svg",
              },
              {
                text: "High-speed Machine Runnability",
                img: "/images/productcategory/AqueousVarnish/High Speed Machine Runnability.svg",
              },
              {
                text: "Low Odour",
                img: "/images/productcategory/AqueousVarnish/Low Odour.svg",
              },
              {
                text: "High Slip",
                img: "/images/productcategory/AqueousVarnish/High Slip.svg",
              },
              {
                text: "Fast Drying",
                img: "/images/productcategory/AqueousVarnish/Fast Drying.svg",
              },
              {
                text: "High Scuff Resistance",
                img: "/images/productcategory/AqueousVarnish/High Scuff Resistance.svg",
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
                          ) : i <= 4 ? (
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
                          ) : <Link href="#enquiry-form" onClick={() =>
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
                          </Link>}
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
