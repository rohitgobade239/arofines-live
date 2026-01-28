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
    title: "AROBOND 42 PRO",
    description:
      "VOC-compliant, water-based adhesive is recommended for Vinyl flooring on horizontal as well as vertical surfaces by spray application (air-assisted or airless). Spray guns with 2-3 bar pressure and a 1.2–2.0 mm aperture size are recommended.",
    viscosity: "Viscosity: 500-2000 CPS",
    compatibility:
      "Concrete, Asphalt, Suspended Wood, and Wood Underlayment Ceramic Tile, Terrazzo, and Polymeric-Poured Floors",
    method: "Flooring Adhesives",
  },
  {
    title: "AROBOND 43",
    description:
      "VOC-compliant, water-based Electrically conducting Polymer Adhesive suitable for both vinyl tiles and rolls pasting on horizontal surfaces using trowel application.",
    viscosity: "Viscosity: 20,000-40,000 CPS",
    compatibility:
      "Concrete, Asphalt, Ceramic Tile, Terrazzo, and Polymeric-Poured Floors",
    method: "Flooring Adhesives",
  },
  {
    title: "AROBOND 44",
    description:
      "VOC-compliant, water-based adhesive suitable for both vinyl tiles and rolls pasting on horizontal surfaces using trowel application. Offers excellent bonding strength.",
    viscosity: "Viscosity: 40,000-60,000 CPS",
    compatibility:
      "Concrete, Asphalt, Suspended Aood, and Wood Underlayment Ceramic Tile, Terrazzo, and Polymeric-Poured Floors",
    method: "Flooring Adhesives",
  },
  {
    title: "AROBOND 44 PRO",
    description:
      "VOC-compliant, water-based adhesive is recommended for Vinyl flooring on horizontal as well as vertical surfaces by trowel application.",
    viscosity: "Viscosity: 35,000-55,000 CPS",
    compatibility: "Vinyl to Dry Ply Wood, GI Surface, Concrete/ Asphalt",
    method: "Flooring Adhesives",
  },
  {
    title: "AROBOND 45",
    description:
      "Water-based adhesive for commercial and residential use of Linoleum Floor covering and Carpet Rolls, Vinyl Composition tile, Primer for wood and concrete, and self adhering tile.",
    viscosity: "Viscosity: 60,000-80,000 CPS",
    compatibility:
      "Concrete, Asphalt, Suspended Wood, and Wood Underlayment Ceramic Tile, Terrazzo, and Polymeric-Poured Floors",
    method: "Flooring Adhesives",
  },
  {
    title: "AROBOND WALL PRO",
    description:
      "AROBOND WALLPRO is a water-based, non-hazardous adhesive for wallpaper pasting. Application can be done with a brush, a finely notched spatula, or a trowel to ensure a smooth and even coating.",
    viscosity: "Viscosity: 50,000-70,000 CPS",
    compatibility: "By Brush, Trowel",
    method: "Wallpaper Pasting Adhesive",
  },
  {
    title: "AROCRYL 133",
    description:
      "Water-based tackifier designed for the installation of dimensionally stable vinyl-backed carpet tiles in a releasable application. It is also used for the installation of cushions or foam on the subfloor.",
    viscosity: "Viscosity: 6000-10,000 CPS",
    compatibility: "By Brush, Trowel",
    method: "Tackifier",
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
              <h1 className="banner-title">Construction Adhesive</h1>
              <p className="banner-ind">Industries</p>
              <div className="industries">
                {/* <span>
                  <Image
                    src="/images/productcategory/Pastingimg/industries.svg"
                    width={18}
                    height={18}
                    alt="industries iocn"
                  />{" "}
                  Printing and Packaging
                </span> */}
                <span>
                  <Image
                    src="/images/productcategory/ConstructionAdhesive/industries.svg"
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
          src={"/images/productcategory/Mobile/Constructio_ Adhesive_M.png"}
          width={320}
          height={250}
          alt={"kkkkk"}
          className="leading-img"
          style={{ width: "100%" }}
        />
        <Container style={{ padding: "0px 10px" }}>
          <div className="leading-singel" style={{ paddingTop: "10px" }}>
            <h2 style={{ color: "#212529", fontSize: "22px", paddingTop: "10px", fontWeight: "700" }}>Construction Adhesive</h2>
            <p className="banner-ind" style={{ color: "#212529", fontSize: "18px" }}>Industries</p>
            <div className="industries" >
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
          <p>Brands Associated with Construction Adhesive</p>
          <Image
            src="/images/productcategory/ConstructionAdhesive/Brand_construction_adhesive.png"
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
                img: "/images/productcategory/ConstructionAdhesive/Superior Bonding Strength.svg",
              },
              {
                text: "VOC Complaint Adhesive",
                img: "/images/productcategory/ConstructionAdhesive/VOC Complaint Adhesive.svg",
              },
              {
                text: "Non-Toxic",
                img: "/images/productcategory/ConstructionAdhesive/Non-Toxic.svg",
              },
              {
                text: "Non-Flammable",
                img: "/images/productcategory/ConstructionAdhesive/Non-Flammable.svg",
              },
              {
                text: "Odour Free",
                img: "/images/productcategory/ConstructionAdhesive/Odour Free.svg",
              },
              {
                text: "Eco-friendly",
                img: "/images/productcategory/ConstructionAdhesive/Eco-friendly.svg",
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
