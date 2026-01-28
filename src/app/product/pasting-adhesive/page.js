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
    title: "AROBOND 30",
    description:
      "AROBOND - 30 is a specially developed adhesive for pasting paper label to tin.",
    viscosity: "Viscosity: 1000-4000 CPS",
    compatibility: "Paper Labels",
    method: "Manual Application",
  },
  {
    title: "AROBOND 39",
    description:
      "AROBOND - 39 is a specially developed pasting adhesive for loose paper pad manufacturing by hand or by brush application.",
    viscosity: "Viscosity: 6000-10,000 CPS",
    compatibility: "Plain Paper",
    method: "Manual Application",
  },
  {
    title: "AROBOND 46",
    description:
      "AROBOND - 46 is a specially developed pasting adhesive for paper pad and paper cube manufacturing by hand or by brush application.",
    viscosity: "Viscosity: 20,000-30,000 CPS",
    compatibility: "Plain Paper",
    method: "Manual Application",
  },
  {
    title: "AROBOND 72",
    description:
      "AROBOND - 72 is a specially developed Side Pasting Adhesive for polycoated cartons having Deep Freeze Resistence.",
    viscosity: "Viscosity: 18,000-25,000 CPS",
    compatibility: "Polycoated",
    method: "Manual Application",
  },
  {
    title: "AROBOND 90",
    description:
      "AROBOND - 90 is a specially developed adhesive for Skin packaging of PVC film to paper/board by manual application.",
    viscosity: "Viscosity: 6,000-12,000 CPS",
    compatibility: "PVC film to board",
    method: "Manual Application",
  },
  {
    title: "AROBOND 333",
    description:
      "AROBOND - 333 is a specially developed Pasting Adhesive suitable For Polycoated Cartons making, flap pasting & thermal Laminated Cartons making. It is also suitable for flap pasting in case of low film treatment (Upto 36 Dynes).",
    viscosity: "Viscosity: 3000-7000 CPS",
    compatibility:
      "MET PET, Laminated, Unlaminated, Aqueous Coated & Polycoated",
    method: "Manual Application",
  },
  {
    title: "AROBOND 555",
    description:
      "AROBOND - 555 is a specially developed Pasting Adhesive for Carton making and side flap pasting by manual application.",
    viscosity: "Viscosity: 30,000-45,000 CPS",
    compatibility: "MET PET, Laminated, Unlaminated",
    method: "Manual Application",
  },
  {
    title: "AROBOND 32",
    description:
      "AROBOND - 32 is a specially developed re-moisturable adhesive for making envelop by automatic machine application.",
    viscosity: "Viscosity: 3000-6000 CPS",
    compatibility: "Unlaminated Paper",
    method: "Machine Application",
  },
  {
    title: "AROBOND 55",
    description:
      "AROBOND - 55 is a specially developed adhesive for labeling of Paper labels on both PET, PVC & Glass bottles using cup type Automatic/Semi-automatic machines.",
    viscosity: "Viscosity: 80,000-1,20,000 CPS",
    compatibility: "Paper Labels",
    method: "Machine Application",
  },
  {
    title: "AROBOND 61",
    description:
      "AROBOND - 61 is a specially developed Pasting Adhesive for Rigid Box pasting application on high speed Rigid Box Making machine.",
    viscosity: "Viscosity: 14,000-24,000 CPS",
    compatibility: "MET PET, Laminated, Unlaminated, Aqueous coated",
    method: "Machine Application",
  },
  {
    title: "AROBOND 636",
    description:
      "AROBOND - 636 is a specially developed fast grab adhesive for paper to paper pasting by roller coating application with pumping arrangement. AROBOND - 636 can be applied by roller/nozzle/stereo application",
    viscosity: "Viscosity: 1000-3000 CPS",
    compatibility: "Kraft Paper",
    method: "Machine Application",
  },
  {
    title: "AROBOND 73",
    description:
      "AROBOND - 73 is a specially developed Pasting Adhesive for manufacturing of paper straws. The adhesive forms a strong bond that has very good short term resistance to cold/warm water or beverages.",
    viscosity: "Viscosity: 4000-10,000 CPS",
    compatibility: "Paper Straws",
    method: "Machine Application",
  },
  {
    title: "AROBOND 78",
    description:
      "AROBOND - 78 is a specially developed Pasting Adhesive for pasting ceramic tile to nylon net. The adhesive forms a strong bond that has very good short term resistance to cold water.",
    viscosity: "Viscosity: 17000-25,000 CPS",
    compatibility: "Ceramic Tile to Nylon Net Pasting",
    method: "Machine Application",
  },
  {
    title: "AROBOND 221",
    description:
      "AROBOND - 221 is a specially developed Pasting Adhesive for side flap pasting of PVC/BOPP/Polyester Laminated duplex Board folding boxes.",
    viscosity: "Viscosity: 8000-15,000 CPS",
    compatibility: "PVC/BOPP/Polyester Laminated Duplex Board",
    method: "Machine Application",
  },
  {
    title: "AROBOND 58",
    description:
      "AROBOND - 58 is a specially developed Adhesive for Carton making and flap pasting on high speed folder gluer machine (Machine Speed up to 200 meters/min).",
    viscosity: "Viscosity: 7000-15,000 CPS",
    compatibility:
      "BOPP, PET, MET PET Laminated, Unlaminated and Aqueous coated",
    method: "High Speed Machine, Wheel Application",
  },
  {
    title: "AROBOND 62",
    description:
      "AROBOND - 62 is a specially developed Pasting Adhesive for Carton making and flap pasting on high speed folder gluer machine (Machine Speed Upto 450 meters/min).",
    viscosity: "Viscosity: 5,500-8000 CPS",
    compatibility:
      "BOPP, PET, MET PET Laminated, Unlaminated and Aqueous coated",
    method: "High Speed Machine, Wheel Application",
  },
  {
    title: "AROBOND 64",
    description:
      "AROBOND - 64 is a specially developed Pasting Adhesive for Carton making and flap pasting on high speed folder gluer machine (Machine Speed up to 350 meters/min).",
    viscosity: "Viscosity: 2000-5000 CPS",
    compatibility:
      "BOPP, PET, MET PET Laminated, Unlaminated and Aqueous coated",
    method: "High Speed Machine, Wheel Application",
  },



  {
    title: "AROFIX 6",
    description:
      "AROFIX - 6 is a specially developed adhesive for paper-to-glass labeling by hand application.",
    viscosity: "2000-5000 CPS",
    method: "Machine Application",
  },
  {
    title: "AROFIX 15",
    description:
      "AROFIX - 15 is a specially developed low-cost adhesive for paper-to-paper pasting by machine or by brush application.",
    viscosity: "500-2000 CPS",
    method: "Machine Application",
  },
  {
    title: "AROFIX 51",
    description:
      "AROFIX - 51 is a specially developed economical-grade adhesive for paper-to-paper pasting by machine or by brush application.",
    viscosity: "500-2000 CPS",
    method: "Machine Application",
  },
  {
    title: "AROFIX 16",
    description:
      "AROFIX - 16 is a specially developed fast-grab adhesive for use in the transformer industry. AROFIX - 16 is used for the pasting of Pre Compressed Pressboards that are used as the insulating material in the form of winding cylinders, spacers, strips, etc. ",
    viscosity: "6000-12000 CPS",
    method: "Machine Application",
  },
  {
    title: "AROFIX 47",
    description:
      "AROFIX - 47 is a multi-purpose, low-cost adhesive for a wide range of applications. For permanent bonding of decorative laminates to wood or hard Board. Furniture block boards, wooden frames, Radio, TV, and Speaker cabinets. For fixing cloth and velvet to boards, Billiard tables, etc",
    viscosity: "20,000-30,000 CPS",
    method: "Machine Application",
  },
  {
    title: "AROFIX 977",
    description:
      "AROCRYL - 977 is a specially developed Pasting Adhesive for spine pasting on KOLBUS machines.",
    viscosity: "2000-5000 CPS",
    method: "Machine Application",
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
              <h1 className="banner-title">Pasting Adhesive</h1>
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
          src={"/images/productcategory/Mobile/Pasting_Adhesive_M.png"}
          width={320}
          height={250}
          alt={"kkkkk"}
          className="leading-img"
          style={{ width: "100%" }}
        />
        <Container style={{ padding: "0px 10px" }}>
          <div className="leading-singel" style={{ paddingTop: "10px" }}>
            <h2 style={{ color: "#212529", fontSize: "22px", paddingTop: "10px", fontWeight: "700" }}>Pasting Adhesive</h2>
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
          <p>Brands Associated with Pasting Adhesive</p>
          <Image
            src="/images/productcategory/Pastingimg/arobon-pa.svg"
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
