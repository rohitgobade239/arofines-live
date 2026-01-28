"use client";

import React, { useState, useRef, useEffect } from "react";
import { Tabs, Tab, Button, Container, Col, Row, Form } from "react-bootstrap";
import "./style.css";
import Carousel from "react-bootstrap/Carousel";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import images for the new section
import industrialSegmentsIcon from "../../../public/images/home/industrial_segments_icon.svg";
import countriesExportedIcon from "../../../public/images/home/countries_exported_icon.svg";
import experienceIcon from "../../../public/images/home/experience_icon.svg";
import industrialCustomersIcon from "../../../public/images/home/industrial_customers_icon.svg";
import brandsIcon from "../../../public/images/home/brands_icon.svg";
// import ROHSLogomain from "../../../public/images/home/ROHSLogo.png";
// import IAFLogomain from "../../../public/images/home/IAFLogo.png";
// import Ecovadislogomain from "../../../public/images/home/Ecovadislogo.png";

import Image from "next/image";
import Link from "next/link";
import TalkToExpert from "../talktoexpert/page";

export default function HomeMain({ blogData }) {
  const [key, setKey] = useState("Pasting"); // <-- Make sure this exists
  const tabListRef = useRef(null);
  const [openTalkToExpert, setOpenTalkToExpert] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/data/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error loading job data", err));
  }, []);

  const tabs = [
    {
      eventKey: "Pasting",
      title: "Pasting Adhesive",
      content: (
        <Link href="/product/pasting-adhesive">Explore Pasting Adhesive</Link>
      ),
      bg: "/images/home/products-cta-banner/1_Pasting_Adhesive.png",
      logs: [
        "/images/home/products-cta-banner/Brand_construction_adhesive.png",
      ],
    },
    {
      eventKey: "Emulsions",
      title: "Pasting Adhesive & Emulsions",
      content: (
        <Link href="/product/pasting-adhesive-emulsions">
          Explore Pasting Adhesive & Emulsions
        </Link>
      ),
      bg: "/images/home/products-cta-banner/2_Pasting_Adhesive_Emulsions.png",
      logs: [
        "/images/home/products-cta-banner/Brand_corrugation_pasting_adhesive.png",
      ],
    },
    {
      eventKey: "Lamination",
      title: "Lamination Emulsion",
      content: (
        <Link href="/product/lamination-emulsion">
          Explore Lamination Emulsion
        </Link>
      ),
      bg: "/images/home/products-cta-banner/3_Lamination_Emulsion.png",
      logs: ["/images/home/products-cta-banner/Brand_lamination_emulsion.png"],
    },
    {
      eventKey: "Pressure",
      title: "Pressure Sensitive Adhesive",
      content: (
        <Link href="/product/pressure-sensitive-adhesive">
          Explore Pressure Sensitive Adhesive
        </Link>
      ),
      bg: "/images/home/products-cta-banner/4_Pressure_ensitive_Adhesive.png",
      logs: [
        "/images/home/products-cta-banner/Brand_construction_adhesive.png",
        "/images/home/products-cta-banner/Brand_corrugation_pasting_adhesive.png",
      ],
    },

    {
      eventKey: "Functional",
      title: "Functional Coating",
      content: "Explore Functional Coating",
      content: (
        <Link href="/product/functional-coating">
          Explore Functional Coating
        </Link>
      ),
      bg: "/images/home/products-cta-banner/5_Functional_Coating.png",
      logs: ["/images/home/products-cta-banner/Brand_aqueous_varnish.png"],
    },

    {
      eventKey: "Jelly",
      title: "Jelly Glue",
      content: "Explore Jelly Glue ",
      content: <Link href="/product/jelly-glue">Explore Jelly Glue</Link>,
      bg: "/images/home/products-cta-banner/6_Jelly_Glue.png",
      logs: ["/images/home/products-cta-banner/Arocom3677.png"],
    },
    {
      eventKey: "Construction",
      title: "Construction Adhesive",
      content: (
        <Link href="/product/construction-adhesiv">
          Explore Construction Adhesiv
        </Link>
      ),
      bg: "/images/home/products-cta-banner/7_Construction_Adhesive.png",
      logs: [
        "/images/home/products-cta-banner/Brand_construction_adhesive.png",
      ],
    },

    {
      eventKey: "Aqueous",
      title: "Aqueous Varnish",
      content: (
        <Link href="/product/construction-adhesiv">
          Explore Aqueous Varnish
        </Link>
      ),
      bg: "/images/home/products-cta-banner/8_Aqueous_Varnish.png",
      logs: ["/images/home/products-cta-banner/Brand_aqueous_varnish.png"],
    },

    {
      eventKey: "UV",
      title: "UV Curable Varnish",
      content: (
        <Link href="/product/uv-curable-varnish">
          Explore UV Curable Varnish
        </Link>
      ),
      bg: "/images/home/products-cta-banner/9_UV_Curable.png",
      logs: ["/images/home/products-cta-banner/Brand_uv_curable_varnish.png"],
    },

    {
      eventKey: "Paint",
      title: "Paint Resins",
      content: <Link href="/product/paint-resins">Explore Paint Resins</Link>,
      bg: "/images/home/products-cta-banner/10_Paint_Resins.png",
      logs: ["/images/home/products-cta-banner/Aroset77.png"],
    },

    {
      eventKey: "Arofix",
      title: "Pasting Adhesive Arofix",
      content: (
        <Link href="/product/pasting-adhesive-arofix">
          Explore Pasting Adhesive Arofix
        </Link>
      ),
      bg: "/images/home/products-cta-banner/11_Adhesive_Arofix.png",
      logs: ["/images/home/products-cta-banner/Arofix6.png"],
    },
  ];

  const logos = [
    {
      img: "/images/home/Aroboond1.png",
      text:
        "Pasting adhesives for printing, packaging, flooring, furniture and labelling industries",
    },
    {
      img: "/images/home/Arocryl2.png",
      text:
        "Lamination and hi-tech emulsions for printing, packaging and stationary industry",
    },
    {
      img: "/images/home/Arocom3.png",
      text:
        "Jelly glue for notebooks, diaries and file manufacturing industry",
    },
    {
      img: "/images/home/Arosol4.png",
      text:
        "Water based over print mediums for printing, packaging industry and blister sealing application",
    },
    {
      img: "/images/home/Arostick5.png",
      text: "Solvent-based Pressure Sensitive Adhesive (PSA)",
    },
    {
      img: "/images/home/Arofix6.png",
      text:
        "Adhesive for multiple applications in labelling and furniture industry",
    },
    {
      img: "/images/home/Aroset7.png",
      text:
        "Thermoplastic, thermosetting and acrylic polyol binders for paint industry",
    },
    {
      img: "/images/home/Arovyl8.png",
      text:
        "Synthetic emulsions for pasting in corrugation industry",
    },
    {
      img: "/images/home/Arotech9.png",
      text:
        "UV and blister HSL over print mediums for printing and packaging industry",
    },
    {
      img: "/images/home/Aromelt10.png",
      text: "Hot melt adhesives",
    },
  ];


  let currentIndex = tabs.findIndex((tab) => tab.eventKey === key);

  // --- Tab navigation logic ---
  const goNext = () => {
    // debugger
    if (currentIndex !== tabs.length - 1) {
      const nextIndex = (currentIndex + 1) % tabs.length;
      setKey(tabs[nextIndex].eventKey);
      scrollTabs("right");
    }
  };

  const goPrev = () => {
    if (currentIndex !== 0) {
      const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      setKey(tabs[prevIndex].eventKey);
      scrollTabs("left");
    }
  };

  // --- Smooth scroll for the tab bar ---
  const scrollTabs = (direction) => {
    if (tabListRef.current) {
      const container = tabListRef.current;
      const scrollAmount = 200;

      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const newScrollLeft =
        direction === "left"
          ? Math.max(0, container.scrollLeft - scrollAmount)
          : Math.min(maxScrollLeft, container.scrollLeft + scrollAmount);

      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;

      setKey(tabs[nextIndex].eventKey);

      if (nextIndex === 0) {
        tabListRef.current?.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        scrollTabs("right");
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <>
      {openTalkToExpert && (
        <TalkToExpert setOpenTalkToExpert={setOpenTalkToExpert} />
      )}

      {/* Original Hero Carousel Section */}
      <section className="container-fluid p-0 hero-section">
        <Carousel controls={false} indicators={true} fade>
          {/* First Slide */}
          <Carousel.Item>
            <Image
              src="/images/home/Banner_1.webp"
              alt="Third slide background"
              className="d-block w-100 hero-image-sartmain desktop-only"
              height={100}
              width={100}
              layout="responsive"
            />
            <Image
              src="/images/home/mobile/Banner 1-Mobile.jpg"
              alt="Third slide background"
              className="d-block w-100 hero-image-sartmain mobile-only"
              height={100}
              width={100}
              layout="responsive"
            />

            <Carousel.Caption className="hero-caption">
              <div className="text-content">
                <h1>
                  High-performance flooring adhesives engineered for strength,
                  durability, and perfect finish.
                </h1>
              </div>
              <div className="button-group">
                <Link
                  href="/#"
                  className="btn-quote"
                  onClick={() => setOpenTalkToExpert(true)}
                >
                  Get a Quick Price Quote →
                </Link>
                <Link href="#innovative" className="btn-explore">
                  Explore Products →
                </Link>
              </div>
            </Carousel.Caption>

          </Carousel.Item>

          {/* Second Slide */}
          <Carousel.Item>
            <Image
              src="/images/home/Banner_2.webp"
              alt="Third slide background"
              className="d-block w-100 hero-image-sartmain desktop-only"
              height={100}
              width={100}
              layout="responsive"
            />
            <Image
              src="/images/home/mobile/Banner 2-Mobile.jpg"
              alt="Third slide background"
              className="d-block w-100 hero-image-sartmain mobile-only"
              height={100}
              width={100}
              layout="responsive"
            />
            <Carousel.Caption className="hero-caption">
              <div className="text-content">
                <h1>Powering Packaging with Performance Adhesives</h1>
              </div>
              <div className="button-group">
                <Link
                  href="/#"
                  className="btn-quote"
                  onClick={() => setOpenTalkToExpert(true)}
                >
                  Get a Quick Price Quote →
                </Link>
                <Link href="#innovative" className="btn-explore">
                  Explore Products →
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Third Slide */}
          <Carousel.Item>
            <Image
              src="/images/home/Banner_3.webp"
              alt="Third slide background"
              className="d-block w-100 hero-image-sartmain desktop-only"
              height={100}
              width={100}
              layout="responsive"
            />
            <Image
              src="/images/home/mobile/Banner 3-Mobile.jpg"
              alt="Third slide background"
              className="d-block w-100 hero-image-sartmain mobile-only"
              height={100}
              width={100}
              layout="responsive"
            />
            <Carousel.Caption className="hero-caption">
              <div className="text-content">
                <h1>Strong Bonds. Superior Performance.</h1>
                <p className="first-banner-Sec-title">
                  High-performance adhesive solutions engineered <br />
                  for the printing and packaging industry.
                </p>
              </div>
              <div className="button-group">
                <Link
                  href="/#"
                  className="btn-quote"
                  onClick={() => setOpenTalkToExpert(true)}
                >
                  Get a Quick Price Quote →
                </Link>
                <Link href="#innovative" className="btn-explore">
                  Explore Products →
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
        <div className="button-group mobile-only" >
          <Link
            href="/#"
            className="btn-quote"
            onClick={() => setOpenTalkToExpert(true)}
          >
            Get a Quick Price Quote →
          </Link>
          {/* <Link href="#innovative" className="btn-explore">
            Explore Products →
          </Link> */}
        </div>
      </section>

      {/* New Section: Engineered for Your Toughest Demands */}
      <section className="tough-demands-section container-fluid">
        <Container className="demands-content-wrapper">
          <div className="demands-text-badges">
            <h2>Engineered for Your Toughest Demands</h2>
            <p>
              committed to doing our bit to protect the planet. That's why we
              focus on reducing our environmental impact, through zero-waste
              manufacturing and optimal energy usage using solar power.
            </p>
            <div className="iso-certified">
              {/* <p className="iso-title">An ISO Certified Company</p> */}
              {/* <div className="iso-badges">
                <span className="iso-badges-ri-bor">ISO 9001:2015</span>
                <span className="iso-badges-ri-bor">ISO 14001:2015</span>
                <span>ISO 45001:2018</span>
              </div> */}
              <div className="certification-logos">
                {/* <img
                  src={ROHSLogomain.src}
                  alt="ISO 9001:2015 Logo"
                  width={158}
                  height={54}
                />
                <img
                  src={IAFLogomain.src}
                  alt="ISO 45001:2018 Logo"
                  width={83}
                  height={54}
                />
                <img
                  src={Ecovadislogomain.src}
                  alt="EcoVadis Logo"
                  width={66}
                  height={66}
                /> */}
                <Image
                  src="/images/home/Certificates.png"
                  height={154}
                  width={700}
                  alt="Certificates"
                  className="certification-logos-img "
                  style={{ width: "500px", height: "auto" }}
                />
              </div>
            </div>
          </div>
          <div className="demands-info-grid">
            <div className="info-card">
              <div className="card-icon">
                <img
                  src={industrialSegmentsIcon.src}
                  alt="Industrial Segments"
                />
              </div>
              <p className="card-text">
                <strong>10 Industry</strong> segments
              </p>
            </div>
            <div className="info-card info-card-yellow fourtyfiveyear">
              <div className="card-icon-45year">
                <img src={experienceIcon.src} alt="Years of Experience" />
              </div>
              <p className="card-text">
                <strong>45+ Years</strong> of experience
              </p>
            </div>
            <div className="info-card">
              <div className="card-icon">
                <img
                  src={countriesExportedIcon.src}
                  alt="Countries Exported To"
                />
              </div>
              <p className="card-text">
                <strong>8+ Countries</strong> exported to
              </p>
            </div>
            <div className="info-card">
              <div className="card-icon">
                <img
                  src={industrialCustomersIcon.src}
                  alt="Industrial Customers"
                />
              </div>
              <p className="card-text">
                <strong>5000+</strong> Industrial customers
              </p>
            </div>
            <div className="info-card">
              <div className="card-icon">
                <img src={brandsIcon.src} alt="Brands" />
              </div>
              <p className="card-text" id="innovative">
                <strong>10 Brands</strong>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="innovative-section">
        <Container fluid>
          <h2>Innovative Adhesives. Engineered for Impact.</h2>
          <p className="com-text">
            With more than 10 brands, exports to 8+ countries and a large
            customer base, Arofine Polymers is driving innovation and
            revolutionizing product creation.
          </p>
        </Container>

        <Container className="mt-4">
          {/* --- Tab Navigation Header --- */}
          <div className="align-items-center innovative-tab pb-4 d-none d-md-flex">
            <Button
              onClick={goPrev}
              variant="primary"
              className={`me-2`}
              disabled={currentIndex === 0}
            >
              <Image
                src="/images/home/arrow left.svg"
                height={12}
                width={11}
                alt="Prev"
                className={`${currentIndex === 0 && "cursor-no-drop"}`}
              />
            </Button>



            <div
              ref={tabListRef}
              style={{
                overflowX: "auto",
                flexGrow: 1,
                whiteSpace: "nowrap",
                scrollbarWidth: "none",
              }}
              className="hide-scrollbar"
            >
              <Tabs
                activeKey={key}
                onSelect={(k) => setKey(k)}
                id="controlled-tab-example"
                className="d-flex"
              >
                {tabs.map(({ eventKey, title }) => (
                  <Tab eventKey={eventKey} title={title} key={eventKey} />
                ))}
              </Tabs>
            </div>

            <Button
              onClick={goNext}
              variant="primary"
              className={`ms-2`}
              disabled={currentIndex === tabs.length - 1}
            >
              <Image
                src="/images/home/arrow right.svg"
                height={12}
                width={11}
                alt="Next"
                className={`${currentIndex === tabs.length - 1 && "cursor-no-drop"
                  }`}
              />
            </Button>
          </div>
          <Form.Select
            className="d-block d-md-none mb-3"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          >
            {tabs.map(({ eventKey, title }) => (
              <option key={eventKey} value={eventKey}>
                {title}
              </option>
            ))}
          </Form.Select>

          {/* --- Active Tab Content --- */}
          <div key={currentIndex} className="fade-wrapper">
            <div
              className="content-images-bg p-3"
              style={{
                backgroundImage: `url(${tabs[currentIndex].bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "10px",
              }}
            ></div>

            <div className="innovative-logo-section">
              <div className="innovative-logo-section-sm">
                <p className="need-sub-m">
                  Brands Associated with {tabs[currentIndex].title}
                </p>

                <div className="innovative-inner-logo-section">
                  {tabs[currentIndex].logs.map((item) => (
                    <Image
                      src={item}
                      height={50}
                      width={179}
                      key={item}
                      alt="brand logo"
                    />
                  ))}
                </div>
              </div>

              <div className="button-group">
                <Link href="#" className="btn-quote">
                  {tabs[currentIndex].content}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="precision-section">
        <Container>
          <h2>Precision. Performance. Proven.</h2>
          <p className="com-text mb-4">
            Continuous innovation, rigorous quality control and tailored
            solutions that fulfill customer needs and industry demands.
          </p>
        </Container>

        <Container>
          <Row className="justify-content-center presison-gapclm">
            {/* R & D */}
            <Col lg={3} md={6} sm={12} className="precision-col">
              <div className="card-wrapper">
                <div className="front">
                  <Image
                    src="/images/home/R & D.svg"
                    width={53}
                    height={52}
                    alt="R & D"
                  />
                  <p>R & D</p>
                </div>
                <div className="back">
                  <h4>R & D</h4>
                  <p>
                    In-house R&D drives innovation, creating custom formulas for
                    unique challenges.
                  </p>
                </div>
              </div>
            </Col>

            {/* Plant Operations */}
            <Col lg={3} md={6} sm={12} className="precision-col">
              <div className="card-wrapper">
                <div className="front">
                  <Image
                    src="/images/home/Plant Operations.svg"
                    width={53}
                    height={52}
                    alt="Plant Operations"
                  />
                  <p>Plant Operations</p>
                </div>
                <div className="back">
                  <h4>Plant Operations</h4>
                  <p>
                    Automated plants ensure efficient, global production and
                    storage.
                  </p>
                </div>
              </div>
            </Col>

            {/* Quality Control */}
            <Col lg={3} md={6} sm={12} className="precision-col">
              <div className="card-wrapper">
                <div className="front">
                  <Image
                    src="/images/home/Quality Control.svg"
                    width={53}
                    height={52}
                    alt="Quality Control"
                  />
                  <p>Quality Control</p>
                </div>
                <div className="back">
                  <h4>Quality Control</h4>
                  <p>
                    Rigorous batch testing and consistent manufacturing ensure
                    superior quality.
                  </p>
                </div>
              </div>
            </Col>

            {/* Support */}
            <Col lg={3} md={6} sm={12} className="precision-col">
              <div className="card-wrapper">
                <div className="front">
                  <Image
                    src="/images/home/Support.svg"
                    width={68}
                    height={52}
                    alt="Support"
                  />
                  <p>Support</p>
                </div>
                <div className="back">
                  <h4>Support</h4>
                  <p>
                    Dedicated technical support for expert assistance and
                    application solutions.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="need-section ">
        <Container
          className="need-section-bg desktop-only"
          style={{
            backgroundImage: `url("/images/home/Dealership_bg_Frame.jpg")`,
          }}
        >
          <div className="need-section-left text-center text-md-start py-5 px-3 px-md-5">
            <div className="overlay"></div>

            <h2 className="mb-3">
              <span style={{ color: "#E31F26" }}>Need something more?</span> We
              offer custom products as well.
            </h2>
            <p className="mb-4 need-sub-m">
              Share your detailed requirements through our Product Development
              Specification form.
            </p>
            <Link href="/forms/productdevelopmentform">
              <Button
                variant="danger"
                size="lg"
                className="become-dealerbtn custom-danger-button "
              >
                Proceed to Form <span className="apparrowclr">→</span>
              </Button>
            </Link>
          </div>
        </Container>

        <div className="leading-con mobile-only">
          <Image
            src={"/images/home/Customized_Solu_ion_background-Mobile.png"}
            width={320}
            height={250}
            alt={"kkkkk"}
            className="leading-img"
          />
          <div className="leading-singel">
            <span>Need something more? We
              offer custom products as well.</span>
            <p>Share your detailed requirements through our Product Development
              Specification form.</p>
            <Link href="/forms/productdevelopmentform" style={{ width: "100%", border: "none" }}>
              <Button
                variant="danger"
                size="lg"
                className="become-dealerbtn custom-danger-button "
              >
                Proceed to Form <span className="apparrowclr" style={{ color: "#fff" }}>→</span>
              </Button>
            </Link>          </div>
        </div>
      </section>

      <section className="brands-section">
        <Container>
          <h2 className="">
            Brands is built on a legacy of trust and innovation
          </h2>
          <p className="com-text mb-4">
            With a reach spanning over 8 countries and a foundation of more than
            10 brands, Arofine Polymers is a leader in its field. We partner
            with industries worldwide to fuel innovation and lead product
            development.
          </p>
        </Container>
        <Container>
          <div className="logo-grid desktop-only">
            {logos.map((logo, i) => (
              <div className="logo-item" key={i}>
                <Image src={logo.img} alt="logo" width={200} height={0} style={{ height: "auto" }} />
                <div className="logo-overlay">
                  <p className="logo-hover-all">{logo.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mobile-only">
            {mounted && (
              <Swiper
                modules={[Pagination]}
                slidesPerView={1.2}
                spaceBetween={20}
                centeredSlides={true}
                loop={true}
                pagination={{ clickable: true }}
              >
                {logos.map((logo, i) => (
                  <SwiperSlide key={i}>
                    <div className="logo-item">
                      <Image
                        src={logo.img}
                        alt="logo"
                        width={200}
                        height={0}
                        style={{ height: "auto", margin: "0 auto" }}
                      />
                      <div className="logo-overlay">
                        <p className="logo-hover-all">{logo.text}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>

        </Container>


      </section>

      <section className="map-section">
        <Container
          style={{
            backgroundImage: `url("/images/home/distributor_map_bg.png")`,
          }}
          className="map-section-bg"
        >
          <div className="map-section-left">
            <h2>More Than Adhesives. We're Your Partner in Innovation.</h2>
            <p className="more-sub-titl">
              With more than 10 brands, export to 8+ countries and forging
              associations across industries, regulating innovations and
              revolutionizing product creation.
            </p>
            <div className="map-btn">
              <span className="map-btn-span">
                <h3>90+</h3>
                <p>Distributors across all key industrial hubs in India</p>
              </span>
              <span className="map-btn-span">
                <h3>25,000</h3>
                <p>sq. ft. warehousing facility</p>
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="leading-section">
        <Container>
          <h2>Leading Through Market Insights</h2>
          <p className="com-text mb-4">
            As a leader in industrial adhesives, the Arofine brand offers a
            fresh perspective.
            <br />
            We share our innovative solutions and insights into the latest
            market trends.
          </p>
        </Container>

        <Container>
          <Row className="custom-row">
            {blogs.map((item, i) => (
              <Col key={i} lg="3" md="6" sm="12" className="mb-4">
                <div className="leading-con">
                  <Image
                    src={item.imgSrc}
                    width={320}
                    height={250}
                    alt={item.title}
                    className="leading-img"
                  />
                  <div className="leading-singel">
                    {/* <span>{item.date}</span> */}
                    <p>{item.title}</p>
                    <Link href={item.link}>Read now →</Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container className="become-dealer-banner">
          <Row className="align-items-center">
            {/* LEFT CONTENT */}
            <Col md={9} className="text-white">
              <h1 className=" become-dealer-title">
                Become an Authorized Dealer
              </h1>

              <div className="d-flex flex-column gap-3 my-3">
                {/* First pill */}
                <div className="become-dealer-pill-box">
                  <Image
                    src="/images/home/raphael_people.svg"
                    alt="people icon"
                    width={20}
                    height={20}
                  />
                  Join 90+ authorized dealers across India
                </div>

                {/* Second pill */}
                <div className="become-dealer-pill-box">
                  <Image
                    src="/images/home/fluent_person.svg"
                    alt="support icon"
                    width={20}
                    height={20}
                  />
                  Fast onboarding. Dedicated support
                </div>
              </div>

              <p className="mb-4 become-dealer-text">
                Join Arofine's growing network of trusted dealers and expand
                your industrial adhesives business opportunities.
              </p>
              <Link href="/collaborate">
                <Button
                  variant="danger"
                  size="lg"
                  className="become-dealerbtn custom-danger-button "
                >
                  Apply now <span className="apparrowclr">→</span>
                </Button>
              </Link>
            </Col>

            {/* RIGHT IMAGE (optional if you add a worker image) */}
          </Row>
        </Container>
      </section>
    </>
  );
}
