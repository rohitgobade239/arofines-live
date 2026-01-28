"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Carousel,
  Form,
} from "react-bootstrap";
import "./style.css";

const journeyData = [
  {
    year: "1976",
    img: "/images/about/OurJourney/1976.png",
    text: "First envisaged in a small garage in Bhosari, India.  ",
  },
  {
    year: "1985",
    img: "/images/about/OurJourney/1985.png",
    text: "One of the few companies in India to successfully develop adhesives for BOPP packaging.",
  },
  {
    year: "1995",
    img: "/images/about/OurJourney/1995.png",
    text: "Arobond 555, one of the earliest development of side pasting adhesive on laminated cartons launched in the market.",
  },
  {
    year: "2002",
    img: "/images/about/OurJourney/2002.png",
    text: "Introduces a range of flooring adhesives.",
  },
  {
    year: "2008",
    img: "/images/about/OurJourney/2008.png",
    text: "State-of-the art fully automated plant at Chakan with 5,000 MT capacity begins production.",
  },
  {
    year: "2014",
    img: "/images/about/OurJourney/2014.png",
    text: "25,000 sq.ft. world-class warehousing capacity at Chakan, India.",
  },
  {
    year: "2017",
    img: "/images/about/OurJourney/2017.png",
    text: "OHSAS 18001 certification ISO 14001 certification.",
  },
  {
    year: "2018",
    img: "/images/about/OurJourney/2018.png",
    text: "118 kW solar plant installed at Chakan, India.",
  },
  {
    year: "2021",
    img: "/images/about/OurJourney/2021.png",
    text: "Started exports to multiple countries worldwide.",
  },
  {
    year: "2023",
    img: "/images/about/OurJourney/2023.png",
    text: "EcoVadis Sustainability Rating.",
  },
  {
    year: "2024",
    img: "/images/about/OurJourney/2024.png",
    text: "Increased production capacity to 9000 MT at Chakan plant.",
  },
];

const organizations = [
  {
    img: "/images/about/shree_chaitanya_seva_trust.png",
    title: "Shree Chaitanya Seva Trust",
    desc: "This trust runs various community initiatives for the welfare of rural and tribal populations in Maharashtra. They support holistic healthcare practices, community service, education, and research through the not-for-profit Bhaktivedanta Hospital & Research Institute.",
  },
  {
    img: "/images/about/annamrita_foundation.png",
    title: "Rajeev Rajan Lad Trust",
    desc: "The Rajeev Rajan Lad Trust offers care to those suffering from non-contagious diseases such as cancer, Alzheimer’s, and SLE, as well as to those who have become physically dependent on others.",
  },
  {
    img: "/images/about/vidya_prasarak_mandal.png",
    title: "Vidya Prasarak Mandal",
    desc: "The Vidya Prasarak Mandal provides school education to and organizes extra-curricular activities for local children for the benefit of the students, parents, staff, and society in general. Starting with 89 students in 1962, they now serve thousands.",
  },
  {
    img: "/images/about/aadhar_mandal.png",
    title: "Anandi Narayan KrupaNyas",
    desc: "Based in Pune, this organization is committed to the eradication of malnutrition in children.",
  },
  {
    img: "/images/about/vanvasi_kalyan_ashram.png",
    title: "Vanvasi Kalyan Ashram",
    desc: "VKA is committed to the welfare of the Vanvasis, the tribal communities that make up around 10% of India’s population. They seek to bridge the chasm between the Hindu community and their Vanvasi brethren through educational, health, and developmental projects.",
  },
  {
    img: "/images/about/iskcon_pune.png",
    title: "ISKCON Pune",
    desc: "Through ‘Food for Life’ – a unique free food distribution program - ISKCON Pune offers food prepared by temple devotees to thousands of visitors every day.",
  },
  {
    img: "/images/about/pradnya_prabodhini.png",
    title: "Pradnya Prabodhini",
    desc: "This is a Social NGO working to improve the social and economic status of the 'Pradhi' community across the Amravati District of Maharashtra state through various programs, including their residential hostel, 'Vivekanand Chatravas', for underprivileged Pardhi children.",
  },
  {
    img: "/images/about/matruchhaya.png",
    title: "Matruchhaya",
    desc: "Matruchhaya is a full-fledged home in Goa that houses over 75 destitute or orphan girls. Their onsite nursery addresses the needs of toddlers. They work to prevent infanticide, to counter child trafficking, and to support child rehabilitation.",
  },
  {
    img: "/images/about/the_goa_hindu_association_sneha_mandir.png",
    title: "The Goa Hindu Association, Sneha Mandir",
    desc: "Sneha Mandir offers a “home away from home” to the elderly in need. They work to create a space that gives new meaning to the lives of these senior citizens.",
  },
  {
    img: "/images/about/aadhar_mandal.png",
    title: "Aadhar Mandal",
    desc: "Aadhar Mandal works to educate and rehabilitate differently-abled children from rural and economically-backward families. One of their major projects is a school (residential and non-residential) for children with hearing disabilities.",
  },
  {
    img: "/images/about/jagruti_seva_sanstha.png",
    title: "Jagruti Seva Sanstha",
    desc: "This organization’s mission is to empower the underprivileged through education, vocational training, and healthcare initiatives that focus on women and children.",
  },
];

const AboutPage = () => {
  const [activeIndex, setActiveIndex] = useState(4); // Default year 2008

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const getSlideImages = (index) => {
    const total = journeyData.length;
    const prevIndex = (index - 1 + total) % total;
    const nextIndex = (index + 1) % total;

    return {
      prev: { ...journeyData[prevIndex], index: prevIndex },
      current: { ...journeyData[index], index },
      next: { ...journeyData[nextIndex], index: nextIndex },
    };
  };

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };
  const scrollAmount = 300;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === journeyData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft + scrollAmount >= maxScrollLeft) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-page ">
      {/* Hero Section */}
      <section className="hero-section desktop-only">
        <Container fluid>
          <div className="hero-overlay" id="company-profile">
            <h1>
              Where innovation <br /> meets excellence
            </h1>
          </div>
        </Container>
      </section>

      <section className="mobile-only" style={{ paddingTop: "60px" }}>
        <Image
          src={"/images/about/about-banner-Mobile.jpg"}
          width={320}
          height={250}
          alt={"kkkkk"}
          className="leading-img"
          style={{ width: "100%" }}
        />
        <Container style={{ padding: "0px 10px", paddingTop: "10px" }}>
          <div className="leading-singel">
            <h2 style={{ color: "#212529", fontSize: "25px", paddingTop: "10px", fontWeight: "700" }}> Where innovation meets excellence </h2>
          </div>
        </Container>
      </section>

      {/* History Section */}
      <section className="history-section Everything_main_bg">
        <Container>
          <h2 className="everything_sect_title">
            Everything started from scratch
          </h2>
          <img
            src="/images/about/Everything_started.png"
            alt="history background"
            className="everything_bg_img "
          />
          <Row className="vandmm mob-show">
            {/* Left card */}
            <Col md={6}>
              <Card className="history-card">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <span className="year-box gray">1975</span>
                    {/* <img
                      src="/images/about/icon_from_small_garage.svg"
                      alt="ssds"
                      className="year-icon"
                    /> */}
                  </div>

                  <h5 className="title-small-global">From a Small Garage</h5>
                  <p className="sub-title-small-global">
                    Arofine Polymers was first envisaged in a small garage in
                    Bhosari, India. A humble beginning that would transform into
                    something extraordinary.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Right card */}
            <Col md={6}>
              <Card className="history-card yellow">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <span className="year-box black">Today</span>
                    {/* <img
                      src="/images/about/icon_global_excellence.svg"
                      alt="factory"
                      className="year-icon"
                    /> */}
                  </div>

                  <h5 className="title-small-global">To Global Excellence</h5>
                  <p className="sub-title-small-global sub-title-small-global-color">
                    Three decades of constant pursuit, fortifying brand potency
                    and enriching customer lives with innovation and dedication.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Company Info */}
      <section className="company-section">
        <Container>
          <Row className="align-items-center everybtmpd ">
            <Col md={6}>
              <p className="sub-title-rights">
                In line with our values and constant dedication, the company has
                grown over the decades with an ever-increasing pool of loyal
                customers. Our two manufacturing facilities, multiple brands,
                exceptional distribution channels, 100+ employees and R&D
                capabilities are a part of our pride and success. All these
                achievements are augmented by certifications granted to us for
                our adherence to environmental obligations and responsibility.
              </p>
            </Col>
            <Col md={6}>
              <Row>
                <Col xs={6} md={6}>
                  <Card className="stat-card">
                    <h3>2</h3>
                    <p className="stat-card-h3-title">
                      Manufacturing Facilities
                    </p>
                  </Card>
                </Col>
                <Col xs={6} md={6}>
                  <Card className="stat-card">
                    <h3>100+</h3>
                    <p className="stat-card-h3-title">Employees</p>
                  </Card>
                </Col>
                <Col xs={6} md={6}>
                  <Card className="stat-card">
                    <h3>3</h3>
                    <p className="stat-card-h3-title">Decades of Excellence</p>
                  </Card>
                </Col>
                <Col xs={6} md={6}>
                  <Card className="stat-card">
                    <h3>R&amp;D</h3>
                    <p className="stat-card-h3-title">Innovation Center</p>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission" id="our-journey">
        {/* Main background image */}
        <img
          src="/images/about/about-bg.png"
          alt="Background"
          className="vm-bg"
        />

        <Container>
          <Row className="vandmm">
            <Col md={6}>
              <Card className="vm-card ab-bgvi">
                <h4>Vision</h4>
                <p>
                  To pioneer sustainable industrial production and pave
                  <br />
                  path for innovation and growth in ecofriendly
                  <br /> production activities.
                </p>

                <svg
                  width="242"
                  height="141"
                  viewBox="0 0 242 141"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="vm-icon"
                >
                  <g opacity="0.1" clip-path="url(#clip0_56034_2227)">
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M118.689 0.659828C116.363 1.94876 116.308 2.39495 116.29 20.2297C116.277 33.7703 116.401 37.1598 116.947 38.2166C118.574 41.3621 123.426 41.3621 125.053 38.2166C125.953 36.4758 126.051 4.5375 125.162 2.58637C124.127 0.314789 120.993 -0.617762 118.689 0.659828ZM29.1927 36.6616C27.4126 37.6277 26.3284 39.861 26.724 41.7464C27.1782 43.9093 48.2587 64.9898 50.4216 65.444C53.5505 66.101 56.6535 62.9933 55.9833 59.8747C55.7418 58.7521 53.0193 55.704 45.2001 47.8016C35.7394 38.2398 32.9366 35.8831 31.0923 35.9408C30.759 35.9512 29.904 36.2754 29.1927 36.6616ZM208.63 36.6668C207.823 37.0648 202.478 42.1113 196.752 47.8815C185.551 59.1681 184.98 59.9952 186.441 62.8207C187.539 64.9439 189.717 65.936 191.866 65.2923C194.286 64.5667 214.8 43.9277 215.268 41.7464C215.683 39.8189 214.572 37.6017 212.711 36.6389C210.995 35.7517 210.477 35.7555 208.63 36.6668ZM111.074 55.3532C87.6352 57.6853 63.0873 69.0782 41.2832 87.743C28.4941 98.6911 12.2891 117.279 12.2891 121C12.2891 123.735 20.6551 134.169 31.633 145.125C39.6105 153.087 47.2453 159.52 55.3008 165.067C73.0282 177.273 92.7555 184.823 111.747 186.67C139.992 189.416 169.538 179.332 196.538 157.731C210.122 146.863 229.711 125.173 229.711 121C229.711 116.817 210.107 95.106 196.538 84.2633C169.342 62.531 139.703 52.505 111.074 55.3532ZM111.074 64.8035C100.046 66.0476 88.5403 69.5939 76.8066 75.366C62.7929 82.2597 50.7567 91.052 38.2771 103.512C30.7302 111.046 23.0028 120.138 23.2429 121.2C23.5449 122.535 31.987 132.225 38.5106 138.725C50.8243 150.993 62.8978 159.792 76.8066 166.634C106.866 181.421 135.568 181.407 165.375 166.591C183.909 157.379 201.06 143.305 215.927 125.112C217.529 123.151 218.84 121.301 218.84 121C218.84 119.431 205.335 104.506 197.966 97.9311C190.527 91.2936 186.917 88.4605 180.082 83.8984C157.473 68.8055 133.762 62.245 111.074 64.8035ZM113.372 79.1666C108.301 80.1304 104.581 81.614 103.641 83.0481C102.358 85.0058 102.699 87.4258 104.481 89.0187C106.186 90.5416 107.404 90.5534 112.492 89.0957C127.204 84.8801 143.554 92.3325 150.51 106.423C156.82 119.207 154.589 133.597 144.705 143.862C132.098 156.955 111.626 157.466 98.5176 145.014C90.7382 137.625 87.3871 128.881 88.1211 117.889C88.5351 111.691 88.0738 110.629 84.4608 109.468C82.8855 108.961 80.3776 110.43 79.5306 112.357C78.4127 114.9 78.4231 126.113 79.5476 130.609C83.5132 146.459 95.5408 158.487 111.391 162.452C116.266 163.672 126.652 163.535 131.635 162.185C146.941 158.039 158.592 146.1 162.448 130.609C163.551 126.18 163.551 115.82 162.448 111.391C158.575 95.8344 146.795 83.8209 131.492 79.8222C126.661 78.5602 118.181 78.253 113.372 79.1666ZM90.3293 93.3005C86.2319 95.5716 87.9462 102.094 92.6406 102.094C95.0356 102.094 97.3672 99.7848 97.3672 97.413C97.3672 93.8643 93.4456 91.5729 90.3293 93.3005ZM116.566 102.589C113.575 103.341 109.318 105.86 107.251 108.102C106.19 109.253 104.648 111.616 103.826 113.352C102.471 116.212 102.33 116.936 102.33 121.025C102.33 125.294 102.427 125.736 104.113 129.147C106.219 133.408 108.936 136.046 113.438 138.2C116.209 139.526 116.949 139.67 121 139.67C125.061 139.67 125.792 139.527 128.648 138.174C133.042 136.092 135.779 133.413 137.905 129.111C139.573 125.736 139.67 125.289 139.67 121C139.67 116.711 139.573 116.264 137.905 112.889C134.711 106.427 129.037 102.634 122.063 102.303C120.049 102.207 117.575 102.336 116.566 102.589ZM117.791 112.053C115.539 112.742 112.646 115.837 111.996 118.252C110.864 122.454 112.546 126.871 116.124 129.095C118.805 130.762 123.42 130.694 126.057 128.949C129.008 126.996 130.217 124.686 130.217 121C130.217 117.361 129.01 115.005 126.192 113.141C124.165 111.799 120.269 111.294 117.791 112.053ZM49.3444 181.772C48.538 182.17 43.1932 187.217 37.4665 192.987C26.2655 204.274 25.6945 205.101 27.156 207.926C28.2535 210.049 30.4315 211.041 32.5807 210.398C35.0011 209.672 55.5149 189.033 55.9833 186.852C56.3973 184.924 55.2871 182.707 53.4258 181.744C51.71 180.857 51.192 180.861 49.3444 181.772ZM188.478 181.767C187.766 182.153 186.849 183.117 186.439 183.91C184.98 186.731 185.554 187.561 196.76 198.854C202.491 204.628 207.912 209.701 208.805 210.125C210.224 210.798 210.649 210.814 212.154 210.25C214.268 209.459 215.741 206.871 215.246 204.819C214.837 203.124 194.682 182.618 192.504 181.682C190.622 180.872 190.108 180.883 188.478 181.767ZM118.689 202.011C116.363 203.3 116.308 203.747 116.29 221.581C116.272 239.685 116.35 240.292 118.86 241.435C121.285 242.54 123.928 241.743 125.053 239.568C125.953 237.827 126.051 205.889 125.162 203.938C124.127 201.666 120.993 200.734 118.689 202.011Z"
                      fill="#222222"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_56034_2227">
                      <rect width="242" height="141" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="vm-card ab-bgvi">
                <h4>Mission</h4>
                <p>
                  To drive sustainable innovation in the adhesive industry
                  <br /> by advancing eco-friendly production, fostering <br />
                  transformative R&D, and creating lasting value for our <br />
                  employees, customers, and suppliers.
                </p>
                <svg
                  width="242"
                  height="141"
                  viewBox="0 0 242 141"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="vm-icon"
                >
                  <g opacity="0.1" clip-path="url(#clip0_56034_2229)">
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M190.831 12.1709C180.367 22.5963 178.397 24.7823 177.104 27.4141L175.593 30.4864L175.434 40.5038L175.275 50.5213L171.731 47.9009C156.514 36.6474 137.326 29.282 118.436 27.4439C83.2144 24.0166 48.2072 38.4015 25.4667 65.6458C15.2701 77.8616 7.29261 93.595 3.62953 108.711C1.32297 118.229 0.743962 123.337 0.736399 134.234C0.728364 145.743 1.39812 151.334 3.99867 161.461C13.5931 198.828 43.5879 228.86 80.853 238.411C91.1815 241.058 96.7263 241.737 108.001 241.737C118.906 241.737 124.194 241.125 134.017 238.725C148.4 235.211 163.042 227.988 175.088 218.464C179.383 215.068 188.599 205.852 191.994 201.558C212.772 175.276 220.352 140.805 212.404 108.736C209.046 95.1878 202.685 81.6623 194.523 70.7141C192.819 68.4288 191.425 66.4872 191.425 66.3997C191.425 66.3123 195.861 66.1719 201.283 66.0878L211.141 65.9356L214.3 64.2813C216.897 62.9219 219.482 60.6158 228.796 51.3475C235.03 45.1439 240.445 39.6195 240.829 39.0712C241.213 38.5234 241.527 37.58 241.527 36.975C241.527 35.5206 240.315 33.2292 239.24 32.6544C238.768 32.4016 232.336 31.7346 224.948 31.1727C217.558 30.6107 211.485 30.1196 211.45 30.0822C211.415 30.0444 210.929 23.9774 210.37 16.5992C209.811 9.22155 209.142 2.78965 208.883 2.30659C208.624 1.82307 207.792 1.10652 207.032 0.713742C203.937 -0.887144 203.94 -0.889507 190.831 12.1709ZM193.452 22.7948C189.046 27.2179 185.98 30.6943 185.535 31.771C184.977 33.1205 184.808 35.4228 184.808 41.6954V49.862L193.49 41.1197L202.172 32.377L201.535 24.5782C201.185 20.2888 200.841 16.5085 200.77 16.1776C200.7 15.8463 197.407 18.824 193.452 22.7948ZM97.3667 36.8842C69.7773 40.2306 45.6955 54.0563 29.4403 75.8822C17.364 92.0966 10.8045 110.825 10.0794 131.162C8.58013 173.197 34.2572 211.52 73.8398 226.324C92.7961 233.414 113.689 234.423 133.281 229.197C149.936 224.754 164.846 216.11 177.244 203.713C192.084 188.873 201.454 170.565 204.97 149.538C206.162 142.409 206.173 126.596 204.991 119.54C201.975 101.538 194.724 85.453 183.546 71.9686L180.319 68.0753L174.795 73.5851L169.271 79.0943L171.041 81.1036C179.474 90.6843 186.836 106.239 189.364 119.818C190.717 127.089 190.593 143.512 189.132 150.305C183.607 176.006 167.619 196.906 144.675 208.42C124.664 218.462 100.469 219.747 79.4058 211.889C50.2902 201.025 29.7022 174.866 25.9564 143.977C25.1595 137.404 25.6567 124.509 26.9428 118.4C29.1043 108.136 33.5231 97.4287 39.0854 88.9785C41.8896 84.7185 42.7451 84.0383 45.2975 84.0383C46.603 84.0383 47.3015 84.3796 48.3126 85.5111C50.3317 87.7709 50.0869 89.3633 46.9976 94.069C42.0546 101.597 38.5172 110.007 36.3648 119.346C34.8069 126.104 34.5724 138.885 35.867 146.462C38.5083 161.922 45.21 174.798 56.4493 186.007C67.0449 196.574 78.616 202.884 93.463 206.19C99.7385 207.587 115.232 207.706 121.636 206.407C142.424 202.188 160.214 189.602 171.097 171.414C175.747 163.643 179.348 153.182 180.595 143.824C181.395 137.822 180.883 124.779 179.635 119.346C176.862 107.273 171.27 95.8089 164.075 87.4414L162.651 85.7871L157.172 91.2397L151.693 96.6923L153.883 99.5112C164.498 113.179 168.248 131.855 163.81 148.944C162.441 154.214 161.215 155.719 158.291 155.719C156.701 155.719 156.106 155.443 154.983 154.186C153.368 152.379 153.33 151.686 154.581 146.996C158.291 133.092 155.489 117.614 147.229 106.394L145.012 103.383L139.623 108.757C136.659 111.713 134.234 114.284 134.234 114.47C134.234 114.656 134.887 115.775 135.684 116.957C137.671 119.9 139.382 124.276 140.182 128.456C143.388 145.215 132.993 161.613 116.265 166.184C112.107 167.32 103.896 167.32 99.738 166.184C89.9592 163.512 81.5568 156.126 77.6399 146.76C72.5802 134.661 75.5948 120.466 85.2459 110.95C95.6354 100.706 112.533 98.7668 124.933 106.396L127.286 107.845L132.651 102.496C135.601 99.5533 138.015 96.9995 138.015 96.8204C138.015 96.6412 136.539 95.513 134.734 94.3129C120.427 84.8021 102.619 83.5671 87.129 91.0119C60.9207 103.609 51.7686 136.175 67.5719 160.601C77.3218 175.67 94.9557 184.222 112.553 182.417C118.205 181.837 121.348 181.032 127.34 178.63C131.502 176.961 132.201 176.809 133.601 177.271C135.589 177.927 136.597 179.35 136.597 181.5C136.597 183.808 135.574 185.07 132.427 186.643C122.448 191.632 107.333 193.42 96.1851 190.93C73.0816 185.771 55.5896 167.768 51.2227 144.653C50.2169 139.33 50.223 129.581 51.235 124.223C53.8734 110.256 61.2265 98.002 72.2157 89.2579C92.0569 73.4702 120.763 72.6383 141.144 87.2609C143.094 88.6599 144.84 89.8047 145.024 89.8047C145.556 89.8047 155.503 79.679 155.503 79.1369C155.503 78.5111 150.109 74.4363 145.814 71.8173C139.064 67.701 130.722 64.4651 121.945 62.5584C118.755 61.8655 115.881 61.6855 108.001 61.6836C97.5435 61.6817 92.8089 62.3377 85.7403 64.77C81.8683 66.102 80.0992 65.9928 78.4241 64.3177C76.61 62.5036 76.5004 59.7528 78.1755 58.0781C79.4894 56.7642 85.158 54.8343 91.9312 53.3951C98.6793 51.961 112.216 51.5947 119.403 52.6516C133.757 54.7634 146.127 59.8865 157.531 68.443L162.762 72.3689L168.099 67.0468C174.284 60.88 174.298 61.8556 167.958 56.8932C155.552 47.1829 140.644 40.6225 124.518 37.7771C118.1 36.6446 103.344 36.1592 97.3667 36.8842ZM200.297 48.0838L191.671 56.7188H200.075C207.455 56.7188 208.692 56.6077 210.232 55.807C212.789 54.477 226.423 40.657 225.214 40.6196C224.697 40.6036 220.821 40.3337 216.599 40.0194L208.923 39.4484L200.297 48.0838ZM59.9205 67.3578C57.2193 68.8727 56.792 72.463 59.0452 74.7161C62.3807 78.0516 68.1093 74.6291 66.6403 70.1786C66.3628 69.3378 65.7446 68.2956 65.2667 67.8631C64.027 66.741 61.4538 66.498 59.9205 67.3578ZM102.393 111.794C90.4541 114.813 82.6435 127.146 85.1273 139.056C86.5353 145.807 91.7605 152.503 97.9022 155.425C106.987 159.748 117.199 157.97 124.35 150.819C130.325 144.845 132.573 137.152 130.685 129.144C129.992 126.204 127.893 121.473 127.283 121.473C127.107 121.473 123.311 125.089 118.846 129.508C110.923 137.348 110.679 137.543 108.737 137.543C106.035 137.543 103.984 135.583 103.984 133.002C103.984 131.332 104.482 130.722 112.137 123.01C121.335 113.745 121.092 114.44 115.829 112.44C112.403 111.139 106.17 110.839 102.393 111.794ZM145.691 164.742C144.547 165.543 143.749 167.905 144.064 169.554C144.422 171.428 146.447 172.992 148.514 172.992C152.579 172.992 154.722 168.086 151.894 165.258C150.435 163.798 147.399 163.546 145.691 164.742Z"
                      fill="#222222"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_56034_2229">
                      <rect width="242" height="141" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Journey Section */}
      <section className="journey-section">
        <Container>
          <h2 className="section-title text-center mb-4">Our Journey</h2>
          <Form.Select
            className="journey-year-dropdown  d-md-none w-75 m-auto"
            value={activeIndex}
            onChange={(e) => setActiveIndex(Number(e.target.value))}
          >
            {journeyData.map((item, index) => (
              <option key={item.year} value={index} className="">
                {item.year}
              </option>
            ))}
          </Form.Select>
          <Carousel
            activeIndex={activeIndex}
            onSelect={handleSelect}
            indicators={false}
            interval={null}
            controls={true}
            className="journey-carousel"
            prevIcon={
              <img
                src="/images/about/previousj.svg"
                alt="Previous"
                width={50}
                height={50}
              />
            }
            nextIcon={
              <img
                src="/images/about/nextj.svg"
                alt="Previous"
                width={50}
                height={50}
              />
            }
          >
            {journeyData.map((_, idx) => {
              const { prev, current, next } = getSlideImages(idx);
              return (
                <Carousel.Item key={idx}>
                  <div className="journey-slide">
                    <img
                      src={prev.img}
                      alt="Prev"
                      className="side"
                      onClick={() => setActiveIndex(prev.index)}
                    />
                    <div className="journey-center">
                      <img src={current.img} alt="Current" className="center" />
                      <p className="journey-text">{current.text}</p>
                    </div>
                    <img
                      src={next.img}
                      alt="Next"
                      className="side"
                      onClick={() => setActiveIndex(next.index)}
                    />
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>

          {/* Year Navigation */}
          <div className="journey-years d-none d-md-flex" id="csr">
            {journeyData.map((item, index) => (
              <span
                key={item.year}
                className={`year-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                {item.year}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Organizations We Support */}
      <section className="support-section">
        <Container className="support-section-container">
          <h2 className="section-title text-center">
            Organizations We Support
          </h2>
          <p className="section-subtitle text-center">
            Arofine Polymers Pvt. Ltd. is a renowned Indian manufacturer of
            high-performance industrial adhesives & coatings serving the
            printing, packaging, converting, and labeling industries. With
            strong in-house R&D, modern manufacturing facilities, and robust
            quality control systems, Arofine delivers reliable solutions for
            specialty applications.
          </p>
          <p className="section-subtitle text-center">
            Driven by a customer-first approach, skilled technical teams, and a
            pan-India distribution network, Arofine Polymers focuses on process
            efficiency, consistent product performance, and long-term
            partnerships with customers across the packaging value chain.
          </p>

          {/* Cards Scroll Area */}
          <div
            className="scroll-container"
            ref={scrollRef}
            style={{
              overflow: "hidden",
              display: "flex",
              gap: "16px",
            }}
          >
            {organizations.map((org, index) => (
              <Card key={index} className="support-card">
                <div className="image-wrapper">
                  <Image src={org.img} alt={org.title} fluid />
                </div>
                <Card.Body style={{ padding: "0", overflow: "hidden" }}>
                  <h5>{org.title}</h5>
                  <p>{org.desc}</p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Container>

        <Container>
          {/* Arrows */}
          <div className="slider-footer">
            <div className="slider-controls">
              <button onClick={() => scroll("left")} className="arrow-btn">
                <img src="/images/about/previousj.svg" alt="Left" />
              </button>
              <button onClick={() => scroll("right")} className="arrow-btn">
                <img src="/images/about/nextj.svg" alt="Right" />
              </button>
            </div>
            <div className="slider-line"></div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;
