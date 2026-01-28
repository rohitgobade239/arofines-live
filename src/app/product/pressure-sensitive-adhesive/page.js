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
    title: "AROBOND 648",
    description:
      "AROBOND-648 is a specially formulated water-based side pasting adhesive for cartons using automatic glue pasting machines like “BOBST FFG” etc.",
    viscosity: "900-1200 CPS",
    compatibility:
      "BOPP, PET , MET PET Laminated, Unlaminted and Aqueous Coated",
    method: "High Speed Machine, Nozzle Application",
  },
  {
    title: "AROBOND 333 (L)",
    description:
      "Arobond - 333(L) is a specially formulated water-based side pasting adhesive which gives excellent fiber tear on laminated cartons with low film treatment. It is recommended for pasting of treated polycoated cartons i.e. ice cream cartons.",
    viscosity: "900-1200 CPS",
    compatibility:
      "MET PET, Laminated, Unlaminated,Aqueous coated & Polycoated",
    method: "High Speed Machine, Nozzle Application",
  },
  {
    title: "AROBOND 222",
    description:
      "AROBOND - 222 is a specially developed Pasting Adhesive for Carton making and side flap pasting by manual application.",
    viscosity: "30000-45000 CPS",
    compatibility: "MET PET, Laminated, Unlaminated",
    method: "Manual Application",
  },
  {
    title: "AROBOND 230525",
    description:
      "fast setting adhesive for Aluminum foil laminated paper Envelop/ Paper bag pasting on High Speed machine with nozzle application.",
    viscosity: "Viscosity: 2000-3000 CPS",
    compatibility: "Plain Kraft paper to Kraft paper",
    method: "Nozzle Application",
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
  {
    title: "AROCRYL 875",
    description:
      "specially developed pressure sensitive emulsion to be applied by high speed Roller coating application for manufacturing filmic labels. ",
    viscosity: "1200-2600 CPS",
    // compatibility: "High speed Roller coating application",
    method: "High speed Roller coating application",
  },
  {
    title: "AROCRYL 8700",
    description:
      "Specially developed high tack pressure sensitive emulsion to be applied by high speed Roller coating application for manufacturing filmic labels. ",
    viscosity: "600-1600 CPS",
    // compatibility:
    //   "MET PET, Laminated, Unlaminated,Aqueous coated & Polycoated",
    method: "High speed Roller coating application",
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
      <section className="banner d-flex align-items-center desktop-only ">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="banner-title">Pressure Sensitive Adhesive</h1>
              <p className="banner-ind">Industries</p>
              <div className="industries">
                <span>
                  <Image
                    src="/images/productcategory/Pastingimg/industries.svg"
                    width={18}
                    height={18}
                    alt="industries iocn"
                  />{" "}
                  Printing and Packaging
                </span>
                <span>
                  <Image
                    src="/images/productcategory/Pastingimg/industries.svg"
                    width={18}
                    height={18}
                    alt="industries iocn"
                  />{" "}
                  Corrugation
                </span>
                <span>
                  <Image
                    src="/images/productcategory/Pastingimg/industries.svg"
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
          src={"/images/productcategory/Mobile/Pressure_Sensitive_Adhesive_M.png"}
          width={320}
          height={250}
          alt={"kkkkk"}
          className="leading-img"
          style={{ width: "100%" }}
        />
        <Container style={{ padding: "0px 10px" }}>
          <div className="leading-singel" style={{ paddingTop: "10px" }}>
            <h2 style={{ color: "#212529", fontSize: "22px", paddingTop: "10px", fontWeight: "700" }}>Pressure Sensitive Adhesive</h2>
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
          <p>Brands Associated with Pressure Sensitive Adhesive</p>
          <Image
            src="/images/productcategory/Pastingimg/arobon-pa.svg"
            alt="Brands"
            width={179}
            height={50}
          />
          <Image
            src="/images/productcategory/Pastingimg/aroval-pa.svg"
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
                img: "/images/productcategory/PressureSensitiveAdhesive/Superior Peel Strength.svg",
              },
              {
                text: "Superior Heat Resistance",
                img: "/images/productcategory/PressureSensitiveAdhesive/Superior Heat Resistance.svg",
              },
              {
                text: "Superior Shear Strength",
                img: "/images/productcategory/PressureSensitiveAdhesive/Superior Shear Strength.svg",
              },
              {
                text: "Superior Peel Strength ",
                img: "/images/productcategory/PressureSensitiveAdhesive/Superior Peel Strength.svg",
              },
              {
                text: "High Speed Machine Runnability",
                img: "/images/productcategory/PressureSensitiveAdhesive/High Speed Machine Runnability.svg",
              },
              {
                text: "RoHS Certified",
                img: "/images/productcategory/PressureSensitiveAdhesive/RoHS Certified.svg",
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
