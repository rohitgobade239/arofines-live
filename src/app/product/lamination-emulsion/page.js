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
    title: "AROCRYL 122",
    description:
      "Economical grade of wet print lamination emulsion for treated PVC/BOPP film lamination.",
    viscosity: "Viscosity: 2000-3000 CPS",
    compatibility: "BOPP/PVC Film",
    method: "Wet Lamination (Manual/Auto Feeding)",
  },
  {
    title: "AROCRYL 126",
    description:
      "Economical grade of wet print lamination emulsion for treated PVC/BOPP film lamination.",
    viscosity: "Viscosity: 2000-3000 CPS",
    compatibility: "BOPP/PVC Film",
    method: "Wet Lamination (Manual/Auto Feeding)",
  },
  {
    title: "AROCRYL 155",
    description:
      "Wet print lamination emulsion offering high gloss and high peel strength is suitable for laminating treated BOPP, PVC, and MET-PET films to printed board. For MET-PET films, the lamination emulsion must be coated on the metallized side.",
    viscosity: "Viscosity: 6000-10,000 CPS",
    compatibility: "BOPP/PVC/MET-PET Film",
    method: "Wet Lamination (Manual/Auto Feeding)",
  },
  {
    title: "AROCRYL 156",
    description:
      "Wet print lamination emulsion offering high gloss and high peel strength is suitable for laminating treated BOPP, PVC, MET, and PET films to printed board. AROCRYL - 156 also offers excellent anti-tarnishing properties for BOPP and PVC lamination on metallic-ink printed boards and sheets. For MET-PET films, the lamination emulsion must be coated on the metallized side.",
    viscosity: "Viscosity: 6000-10,000 CPS",
    compatibility: "BOPP/PVC/MET-PET Film",
    method: "Wet Lamination (Manual/Auto Feeding)",
  },
  {
    title: "AROCRYL 159",
    description:
      "Cost-effective lamination emulsion for laminating BOPP and PVC film to printed paper board, offering excellent gloss and clarity on high-speed automatic print lamination machines with offline cutting arrangements.",
    viscosity: "Viscosity: 200-800 CPS",
    compatibility: "BOPP Film to Chomo Paper",
    method: "Wet Lamination (Manual/Auto Feeding)",
  },
  {
    title: "AROCRYL 165",
    description:
      "Wet print lamination emulsion offers high bond strength on treated MET, PET, and Clear Polyester film for paper board lamination.",
    viscosity: "Viscosity: 1000-2500 CPS",
    compatibility: "MET-PET/ Polyester Film",
    method: "Wet Lamination (Manual/Auto Feeding)",
  },
  {
    title: "AROCRYL 208",
    description:
      "Wet print lamination emulsion offering high gloss and very high peel strength is suitable for laminating treated BOPP, PVC, MET and PET films to printed board. For MET-PET films, the lamination emulsion must be coated on the metallized side.",
    viscosity: "Viscosity: 8000-12000 CPS",
    compatibility: "BOPP/PVC/ MET-PET Film",
    method: "Wet Lamination (Manual/Auto Feeding)",
  },
  {
    title: "AROCRYL 255",
    description:
      "Wet print lamination emulsion offering high gloss and high peel strength is suitable for laminating treated BOPP, PVC, and MET-PET films to printed board. For MET PET films, the lamination emulsion must be coated on the metallized side.",
    viscosity: "Viscosity: 4000-6000 CPS",
    compatibility: "BOPP/PVC/ MET-PET Film",
    method: "Wet Lamination (Manual/Auto Feeding)",
  },
  {
    title: "AROCRYL 256",
    description:
      "Wet print lamination emulsion offering high gloss and high peel strength is suitable for laminating treated BOPP, PVC, MET, and PET films to printed board. AROCRYL - 256 also offers excellent anti-tarnishing properties for BOPP and PVC lamination on metallic ink-printed boards and sheets. For MET-PET films, the lamination emulsion must be coated on the metallized side.",
    viscosity: "Viscosity: 4000-7000 CPS",
    compatibility: "BOPP/PVC/ MET-PET Film",
    method: "Wet Lamination (Manual/Auto Feeding)",
  },
  {
    title: "AROCRYL 311",
    description:
      "Lamination emulsion for laminating treated BOPP & PVC film to printed board surfaces offers high yield.",
    viscosity: "Viscosity: 2000-5000 CPS",
    compatibility: "BOPP/PVC Film",
    method: "Wet Lamination (Manual/Auto Feeding)",
  },
  {
    title: "AROCRYL 315",
    description:
      "Economical Lamination emulsion for laminating treated BOPP & PVC film to printed board surface, offering high yield.",
    viscosity: "Viscosity: 2000-4000 CPS",
    compatibility: "BOPP/PVC Film",
    method: "Wet Lamination (Manual/Auto Feeding)",
  },
  {
    title: "AROCRYL 355",
    description:
      "Wet print lamination emulsion, offering good gloss and high yield, is suitable for laminating treated BOPP, PVC, MET-PET films to printed board. For MET-PET films, the lamination emulsion must be coated on the metallized side.",
    viscosity: "Viscosity: 2000-5000 CPS",
    compatibility: "BOPP/PVC/MET-ET Film",
    method: "Wet Lamination (Manual/Auto Feeding)",
  },
  {
    title: "AROCRYL 356",
    description:
      "Wet lamination of BOPP, MET-PET, & Polyester films to printed board/paper surfaces offers excellent gloss & adhesion. It also offers excellent anti-tarnishing properties for BOPP/Polyester film lamination on metallic-ink printed boards/sheets.",
    viscosity: "Viscosity: 2000-3000 CPS",
    compatibility: "BOPP/PVC Film",
    method: "Wet Lamination (Manual/Auto Feeding)",
  },
  {
    title: "AROCRYL 455",
    description:
      "Wet print lamination emulsion offers high gloss and high yield, making it suitable for laminating treatedBOPP/MET-PET films to printed board. For treated MET-PET films, the lamination emulsion must be coated on the metallized side. ",
    viscosity: "Viscosity: 1800-3500 CPS",
    compatibility: "BOPP/PVC Film",
    method: "Wet Lamination (Manual/Auto Feeding)",
  },
  {
    title: "AROCRYL 853",
    description:
      "Superior Dry print lamination emulsion for laminating treated BOPP, Matt BOPP, MET PET & Polyester film for pre print and post print jobs offering excellent gloss and clarity on high speed automatic print lamination machine with online cutting arrangment.",
    viscosity: "50-150 CPS",
    compatibility: "AROCRYL 853BOPP / Matt BOPP / MET PET / Polyester Film",
    method: "HS Dry Lamination Auto (Online Cut)",
  },
  {
    title: "AROCRYL 855",
    description:
      "Superior Dry print lamination emulsion for laminating treated BOPP, Matt BOPP, MET PET & Polyester film for pre print and post print jobs offering excellent gloss and clarity on high speed automatic print lamination machine with online cutting arrangment.",
    viscosity: "50-150 CPS",
    compatibility: "BOPP / Matt BOPP / MET PET / Polyester Film",
    method: "HS Dry Lamination Auto (Online Cut)",
  },
  {
    title: "AROCRYL 835",
    description:
      "Economical dry print lamination emulsion for laminating treated BOPP, MET-PET for pre-print and post-print jobs It offers high gloss and has excellent rheological properties on high-speed automatic print lamination machines with online cutting arrangements.",
    viscosity: "Viscosity: 50-100 CPS",
    compatibility: "BOPP/MET PET Film",
    method: "Dry Lamination – Automatic with Online Cutting",
  },
  {
    title: "AROCRYL 845",
    description:
      "Economical dry print lamination emulsion for laminating treated BOPP, MET PET, & Polyester film for pre-print and post-print jobs It offers high gloss and has good rheological properties on high-speed automatic print lamination machines with online cutting arrangements.",
    viscosity: "Viscosity: 40-150 CPS",
    compatibility: "BOPP/MET PET/Polyester Film",
    method: "Dry Lamination – Automatic with Online Cutting",
  },
  {
    title: "AROCRYL 852",
    description:
      "Superior dry print lamination emulsion for laminating treated BOPP, Matt BOPP, MET-PET & Polyester film for pre-print and post-print jobs offers excellent gloss and clarity on high-speed automatic print lamination machines with online cutting arrangements.",
    viscosity: "Viscosity: 50-150 CPS",
    compatibility: "BOPP/MET PET/Polyester Film",
    method: "Dry Lamination – Automatic with Online Cutting",
  },
  {
    title: "AROCRYL 854",
    description:
      "Superior dry print lamination emulsion for laminating treated BOPP, Matt BOPP, MET-PET, & Polyester film for pre-print and post-print jobs offers excellent gloss and clarity on high-speed automatic print lamination machines with online cutting arrangements.",
    viscosity: "Viscosity: 50-300 CPS",
    compatibility: "BOPP/MET PET/Polyester Film",
    method: "Dry Lamination – Automatic with Online Cutting",
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
              <h1 className="banner-title">Lamination Emulsion</h1>
              <p className="banner-ind">Industries</p>
              <div className="industries">
                <span>
                  <Image
                    src="/images/productcategory/LaminationEmulsion/industries.svg"
                    width={18}
                    height={18}
                    alt="industries iocn"
                  />{" "}
                  Printing and Packaging
                </span>
                <span>
                  <Image
                    src="/images/productcategory/LaminationEmulsion/industries.svg"
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
          src={"/images/productcategory/Mobile/Lamination_Emulsion_M.png"}
          width={320}
          height={250}
          alt={"kkkkk"}
          className="leading-img"
          style={{ width: "100%" }}
        />
        <Container style={{ padding: "0px 10px" }}>
          <div className="leading-singel" style={{ paddingTop: "10px" }}>
            <h2 style={{ color: "#212529", fontSize: "22px", paddingTop: "10px", fontWeight: "700" }}>Lamination Emulsion</h2>
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
            </div>
          </div>
        </Container>
      </div>

      {/* Brands Section */}
      <section className="brands text-center">
        <Container>
          <p>Brands Associated with Lamination Emulsion</p>
          <Image
            src="/images/productcategory/LaminationEmulsion/Brand_lamination_emulsion.png"
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
                text: "Superior Peel Strength",
                img: "/images/productcategory/LaminationEmulsion/Superior Peel Strength.svg",
              },
              {
                text: "High Gloss",
                img: "/images/productcategory/LaminationEmulsion/High Gloss.svg",
              },
              {
                text: "High Yield",
                img: "/images/productcategory/LaminationEmulsion/High Yield.svg",
              },
              {
                text: "High Speed Machine Runnability ",
                img: "/images/productcategory/LaminationEmulsion/High Speed Machine Runnability.svg",
              },
              {
                text: "RoHS Compliant",
                img: "/images/productcategory/LaminationEmulsion/RoHS Compliant.svg",
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
            />{" "}
          </Row>
        </Container>
      </section>
      {success && <ThankYou onClose={onClose} />}
    </div>
  );
}
