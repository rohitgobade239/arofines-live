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
    title: "ACROSOL 33 (H)",
    description:
      "Specially developed water repellent and OGR coating for Paper Boards and Kraft Papers. Suitable for roller, Anilox & Gravure Coating application. Dry coating weight 5-9 μ is recommended for good results. For higher kit values, double coat is recommneded.",
    viscosity: "40-60 CPS",
    compatibility: "Gravure, Anilox & roller  coating machine. ",
    method: "OGR Coating",
  },
  {
    title: "ACROSOL 33 (AK)",
    description:
      "Specially developed water repellent and OGR coating for Paper Boards and Kraft Papers. Suitable for Air knife Coating application. Dry coating weight 7 -9 μ is recommended for good results. For higher kit values, double coat is recommneded.",
    viscosity: "12-16 CPS",
    compatibility: "Air knife coater",
    method: "OGR Coating",
  },
  {
    title: "ACROSOL 35 (H)",
    description:
      "Specially developed Heat Sealable water repellent and OGR coating for Paper Boards and Kraft Papers. Suitable for Anilox & Gravure Coating application. Dry coating weight 7 -9 μ is recommended for good results. For higher kit values, double coat is recommneded.",
    viscosity: "70-100 CPS",
    compatibility: "Gravure, Anilox & roller  coating machine. ",
    method: "Heat Sealable water repellent ",
  },
  {
    title: "ACROSOL 35 (AK)",
    description:
      "Specially developed Heat Sealable water repellent and OGR coating for Paper Boards and Kraft Papers. Suitable for Air knife Coating application. Dry coating weight 7 -9 μ is recommended for good results. For higher kit values, double coat is recommneded.",
    viscosity: "Viscosity: 12-16 CPS",
    compatibility: "Air knife coater",
    method: "Heat Sealable water repellent ",
  },
  {
    title: "ACROSOL 41",
    description:
      "Acrosol 41 can be used as heat seal coating for flexible substrates like foil, paper, aluminum/paper laminated structures ",
    viscosity: "Viscosity: 100-300 CPS",
    compatibility: "gravure coating process. ",
    method: "Heat Sealable Coating ",
  },
  {
    title: "ACROSOL 33",
    description:
      "Specially developed heat-sealable water repellent and OGR coating for Paper Boards and Kraft Papers. Suitable for gravure and air knife coating applications. A minimum of 6 μ dry coating weight is recommended for good results. For higher kit values, a double coat is recommended.",
    viscosity: "Viscosity: 50-150 CPS",
    compatibility: "OGR Coating ",
    method: "Application-Coater Machine ",
  },
  {
    title: "ACROSOL 35",
    description:
      "Specially developed heat-sealable water repellent and OGR coating for Paper Boards and Kraft Papers. Suitable for Anilox & Gravure Coating applications. A minimum of 6 μ dry coating weight is recommended for good results. For higher kit values, a double coat is recommended.",
    viscosity: "Viscosity: 150-350 CPS",
    compatibility: "OGR Coating ",
    method: "Application-Coater Machine ",
  },
  {
    title: "ACROSOL 86",
    description:
      "Water-based Heat Seal Lacquer for blister sealing of PVC Blisters for application on varnishing machines and offline coater machines The ideal sealing conditions are: Platen Temperature: 140°C Dwell Time: 4 seconds, Pressure: 90 to 95 psi, & Coating Thickness: 6 to 8 GSM Note: This product is not recommended for FBB boards.",
    viscosity: "Viscosity: 50-300 CPS",
    compatibility: "Blister Coating ",
    method: "Application-Coater Machine ",
  },
  {
    title: "ACROSOL 85",
    description:
      "Water-based overprint medium for PVC/PET Blister packaging ACROSOL-85 can be applied by brush or by a varnishing machine to give a uniform coat on the board. The ideal sealing conditions are: Platen Temperature: 140°C Dwell Time: 4 seconds, Pressure: 90 to 95 psi, & Coating Thickness: 6 to 8 GSM Note: This product is not recommended for FBB boards and R-PET Blisters.",
    viscosity: "Viscosity: 100-300 CPS",
    compatibility: "Blister Coating ",
    method: "Application-Coater Machine ",
  },
  {
    title: "ACROTECH QS 86",
    description:
      "Heat Seal Lacquer for blister sealing of PVC Blisters for application on varnishing machines and offline coater machines The ideal sealing conditions are: Platen Temperature: 140°C Dwell Time: 4 seconds, Pressure: 90 to 95 psi, & Coating Thickness: 6 to 8 GSM Note: This product is not recommended for FBB boards.",
    viscosity: "Viscosity: 45-65 CPS",
    compatibility: "Blister Coating ",
    method: "Application-Coater Machine ",
  },
  {
    title: "ACROTECH 488",
    description:
      "Water-based overprint medium for paper for pouch making AROCRYL-488 can be applied by a gravure machine. The ideal sealing conditions are: Platen Temperature: 140°C Dwell Time: 2 seconds, Pressure: 6 bar, & Coating Thickness: 6 to 8 GSM.",
    viscosity: "Viscosity: 50-300 CPS",
    compatibility: "Heat Sealable Coating ",
    method: "Application-Coater Machine ",
  },
  {
    title: "AROCRYL S - 230180",
    description:
      "Water-based overprint medium for paper for pouch making AROCRYL - S - 230180 can be applied by a gravure machine. The ideal sealing conditions are: Platen Temperature: 140°C Dwell Time: 2 seconds, Pressure: 6 bar, & Coating Thickness: 6 to 8 GSM.",
    viscosity: "Viscosity: 100-300 CPS",
    compatibility: "Heat Sealable Coating ",
    method: "Application-Coater Machine ",
  },
  {
    title: "AQUAPEEL 92",
    description:
      "Single component peelable coating that can be applied on SS, MS, Aluminum, Formica, and Glass surfaces by Brush, roller, or Spray Gun It serves as a guard film for temporary protection against dust, grease, and paint overspray. When using air-assisted Spray guns, 4.5 bar pressure for a 1.2 mm nozzle aperture is adequate for spray application. Not suitable for outdoor application and direct sunlight exposure.",
    viscosity: "Viscosity: 1500-4500 CPS",
    compatibility: "Peelable Coating ",
    method: "Application-Spray Gun, Brush Application ",
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
              <h1 className="banner-title">Functional Coating</h1>
              <p className="banner-ind">Industries</p>
              <div className="industries">
                <span>
                  <Image
                    src="/images/productcategory/FunctionalCoating/industries.svg"
                    width={18}
                    height={18}
                    alt="industries iocn"
                  />{" "}
                  Printing and Packaging
                </span>
                <span>
                  <Image
                    src="/images/productcategory/FunctionalCoating/industries.svg"
                    width={18}
                    height={18}
                    alt="industries iocn"
                  />{" "}
                  Food Packaging
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="leading-con mobile-only" style={{ padding: "50px 0px" }}>
        <Image
          src={"/images/productcategory/Mobile/Functional_Coating_M.png"}
          width={320}
          height={250}
          alt={"kkkkk"}
          className="leading-img"
          style={{ width: "100%" }}
        />
        <Container style={{ padding: "0px 10px" }}>
          <div className="leading-singel" style={{ paddingTop: "10px" }}>
            <h2 style={{ color: "#212529", fontSize: "22px", paddingTop: "10px", fontWeight: "700" }}>Functional Coating</h2>
            <p className="banner-ind" style={{ color: "#212529", fontSize: "18px" }}>Industries</p>
            <div className="industries" >
              <span style={{ color: "#212529" }}>
                ●
                Printing and Packaging
              </span>
              <span style={{ color: "#212529" }}>
                ●
                Food Packaging
              </span>

            </div>
          </div>
        </Container>
      </div>

      {/* Brands Section */}
      <section className="brands text-center">
        <Container>
          <p>Brands Associated with Functional Coating</p>
          <Image
            src="/images/productcategory/FunctionalCoating/Brand_functional_coating.png"
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
                text: "Water Repellent",
                img: "/images/productcategory/FunctionalCoating/Water Repellent.svg",
              },
              {
                text: "Oil Grease Resistant",
                img: "/images/productcategory/FunctionalCoating/Oil Grease Resistant.svg",
              },
              {
                text: "Heat Sealable",
                img: "/images/productcategory/FunctionalCoating/Heat Sealable.svg",
              },
              {
                text: "US-FDA Approved",
                img: "/images/productcategory/FunctionalCoating/US-FDA Approved.svg",
              },
              {
                text: "US-FDA Approved",
                img: "/images/productcategory/FunctionalCoating/High Yield.svg",
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
