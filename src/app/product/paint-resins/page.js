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
    title: "AROSET 720",
    description:
      "High-gloss PU Paints and Clear Coats Ideal for MS/AL and Plastic Substrates like ABS.",
    viscosity: "800-2000 CPS",
    compatibility: "Xylene/Butylacetate",
    method: "Acrylic Polyol Resin",
  },
  {
    title: "AROSET 750",
    description:
      "High-gloss PU Paint with a good balance of flexibility and hardness for MS and ABS Substrates.",
    viscosity: "3000-5000 CPS",
    compatibility: "Xylene",
    method: "Acrylic Polyol Resin",
  },
  {
    title: "AROSET 753",
    description:
      "For top coat/lacquer with moderate chemical resistance on MS Substrates.",
    viscosity: "3000-5000 CPS",
    compatibility: "Xylene",
    method: "Acrylic Polyol Resin",
  },
  {
    title: "AROSET 760",
    description:
      "High Gloss PU Paint with Good Balance of flexibility and hardness for MS & ABS Substrates.",
    viscosity: "2000-4000 CPS",
    compatibility: "Xylene",
    method: "Acrylic Polyol Resin",
  },
  {
    title: "AROSET 767",
    description:
      "High Solid Acrylic polyol for automotive/Industrial PU Paints.",
    viscosity: "12000-20,000 CPS",
    compatibility: "Xylene",
    method: "Acrylic Polyol Resin",
  },
  {
    title: "AROSET 769",
    description: "Low viscosity Acrylic Polyol for PU Paints.",
    viscosity: "1000-2000 CPS",
    compatibility: "Xylene",
    method: "Acrylic Polyol Resin",
  },
  {
    title: "AROSET 919",
    description: "TSA with good flexibility recommended for MS Substrates.",
    viscosity: "1000-2000 CPS",
    compatibility: "Xylene",
    method: "Thermosetting Acrylic Resin",
  },
  {
    title: "AROSET 926",
    description: "TSA with good flexibility recommended for MS Substrates.",
    viscosity: "1000-3000 CPS",
    compatibility: "Xylene",
    method: "Thermosetting Acrylic Resin",
  },
  {
    title: "AROSET 926",
    description:
      "Metallic/Pigmented Paints for Plastic Substrates like ABS/HIPS",
    viscosity: "2000-4000 CPS",
    compatibility: "Toluene/Ethyl Acetate",
    method: "Thermoplastic Acrylic Resin",
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
              <h1 className="banner-title">Paint Resins</h1>
              <p className="banner-ind">Industries</p>
              <div className="industries">
                <span>
                  <Image
                    src="/images/productcategory/PaintResins/industries.svg"
                    width={18}
                    height={18}
                    alt="industries iocn"
                  />{" "}
                  Printing and Packaging
                </span>
                <span>
                  <Image
                    src="/images/productcategory/PaintResins/industries.svg"
                    width={18}
                    height={18}
                    alt="industries iocn"
                  />{" "}
                  Corrugation
                </span>
                <span>
                  <Image
                    src="/images/productcategory/PaintResins/industries.svg"
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
          src={"/images/productcategory/Mobile/Paint_Resins_M.png"}
          width={320}
          height={250}
          alt={"kkkkk"}
          className="leading-img"
          style={{ width: "100%" }}
        />
        <Container style={{ padding: "0px 10px" }}>
          <div className="leading-singel" style={{ paddingTop: "10px" }}>
            <h2 style={{ color: "#212529", fontSize: "22px", paddingTop: "10px", fontWeight: "700" }}>Paint Resins</h2>
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
          <p>Brands Associated with Paint Resins</p>
          <Image
            src="/images/productcategory/PaintResins/Aroset77.png"
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
