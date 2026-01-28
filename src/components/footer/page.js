import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Image from "next/image";

// Images
import logo from "../../../public/images/footer/footerlogo.png";
import Address from "../../../public/images/footer/Address.svg";
import Phone from "../../../public/images/footer/Phone.svg";
import Email from "../../../public/images/footer/Email.svg";
import ftwhatup from "../../../public/images/footer/ftwhatup.svg";
import ftyoutube from "../../../public/images/footer/ftyoutube.svg";
import fttwitter from "../../../public/images/footer/fttwitter.svg";
import ftlinkdin from "../../../public/images/footer/ftlinkdin.svg";

const productData = [
  {
    title: "Pasting Adhesive",
    link: "/product/pasting-adhesive",
  },
  {
    title: "Pasting Adhesive & Emulsions",
    link: "/product/pasting-adhesive-emulsions",
  },
  {
    title: "Dry Lamination Emulsions",
    link: "/product/dry-lamination-emulsions",
  },
  {
    title: "Water Based PSA",
    link: "/product/water-based-psa",
  },
  {
    title: "Solvent Based PSA",
    link: "/product/solvent-based-psa",
  },
  {
    title: "Functional Coating",
    link: "/product/functional-coating",
  },
  { title: "Jelly Glue", link: "/product/jelly-glue" },
  {
    title: "Corrugation Pasting Adhesive",
    link: "/product/corrugation-pasting-adhesive",
  },
  {
    title: "Construction Adhesive",
    link: "/product/construction-adhesive",
  },
  {
    title: "Pressure Sensitive Adhesive",
    link: "/product/pressure-sensitive-adhesive",
  },
  // { title: "Hot Melt", imgSrc: ProductM6, link: "#" },
  {
    title: "Aqueous Varnish",
    link: "/product/aqueous-varnish",
  },
  {
    title: "UV Curable Varnish",
    link: "/product/uv-curable-varnish",
  },
  {
    title: "Lamination Emulsion",
    link: "/product/lamination-emulsion",
  },
  { title: "Paint Resins", link: "/product/paint-resins" },
];
const FooterMain = () => {
  return (
    <footer className="ftmain">
      <Container>
        <Row xs={1} md={4}>
          {/* Column 1 - Logo + Info */}
          <Col className="ftgap">
            <Image
              src={logo}
              width={256}
              height={47}
              className="ft-logo mb-4"
              alt="Arofine Polymers Logo"
            />
            <p className="ft-section1 d-flex">
              <Image
                src={Address}
                width={19}
                height={19}
                className="me-2"
                alt="Address"
              />
              S-42, MIDC, Bhosari, Pune 411026, Maharashtra, India.
            </p>
            <p className="ft-section1">
              <Image
                src={Phone}
                width={19}
                height={19}
                className="me-2"
                alt="Phone"
              />
              <Link href="tel:+918007178642" className="ft-phonelink me-1">
                +91 80071 78642,
              </Link>
              <Link href="tel:+919325981890" className="ft-phonelink ms-1">
                +91 93259 81890
              </Link>
            </p>
            <p className="ft-section1">
              <Image
                src={Email}
                width={19}
                height={19}
                className="me-2"
                alt="Email"
              />
              <Link
                href="mailto:sales@arofines.in"
                className="ft-emailLink me-1"
              >
                sales@arofines.in
              </Link>
              <span className="ft-emaildot"></span>
              <Link
                href="mailto:info@arofines.in"
                className="ft-emailLink ms-1"
              >
                info@arofines.in
              </Link>
            </p>
            <div className="ft-social-main">
              <a href="https://wa.me/919325981890" aria-label="WhatsApp" className="whatsapp-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="whatsapp-icon"
                >
                  <path d="M20.52 3.48A11.85 11.85 0 0012.03 0C5.4 0 .03 5.37.03 12a11.86 11.86 0 001.63 6.01L0 24l6.15-1.6A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22a9.91 9.91 0 01-5.06-1.39l-.36-.21-3.65.95.98-3.56-.24-.37A9.94 9.94 0 012 12c0-5.51 4.48-10 10-10s10 4.49 10 10-4.48 10-10 10zm5.38-7.5c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.65.15-.2.29-.75.94-.92 1.14-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.35-1.44-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.65-1.56-.9-2.14-.24-.57-.48-.49-.65-.49h-.56c-.2 0-.52.07-.79.37s-1.03 1-1.03 2.44 1.06 2.83 1.21 3.02c.15.2 2.09 3.2 5.06 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.7-.69 1.94-1.35.24-.66.24-1.23.17-1.35-.07-.12-.26-.2-.55-.35z" />
                </svg>
              </a>

              <a href="https://x.com/Arobond555" aria-label="Twitter">
                <Image
                  src={fttwitter}
                  width={22}
                  height={22}
                  alt="Twitter"
                  className="socialmediaclr"
                />
              </a>
              <a href="https://www.linkedin.com/company/arofine-polymers-pvt-ltd/" aria-label="LinkedIn">
                <Image
                  src={ftlinkdin}
                  width={22}
                  height={22}
                  alt="LinkedIn"
                  className="socialmediaclr"
                />
              </a>
              <a href="https://www.youtube.com/channel/UCzM6X8x8XVjj1xEcHqx-i1A " aria-label="YouTube">
                <Image
                  src={ftyoutube}
                  width={22}
                  height={22}
                  alt="YouTube"
                  className="socialmediaclr"
                />
              </a>
            </div>
          </Col>

          {/* Column 2 - Company */}
          <Col className="ftgap aboutsec3 comftrcus footer-don-1">
            <h5 className="ft-title">Company</h5>
            <p>
              <Link href="/about" className="ft-link">
                About us
              </Link>
            </p>
            <p>
              <Link href="/careers" className="ft-link">
                Careers
              </Link>
            </p>
            <p>
              <Link href="/blogs" className="ft-link">
                Blogs
              </Link>
            </p>
            <p>
              <Link href="/collaborate" className="ft-link">
                Collaborate
              </Link>
            </p>
            <p>
              <Link href="/contact" className="ft-link">
                Contact
              </Link>
            </p>
          </Col>

          {/* Column 3 - Products 1 */}
          <div className="footer-don">
          <Col className="ftgap">
            <h5 className="ft-title">Products Categories</h5>
            <p>
              <Link href="/product/pasting-adhesive" className="ft-link">
                Pasting Adhesive
              </Link>
            </p>

            <p>
              <Link
                href="/product/pasting-adhesive-emulsions"
                className="ft-link"
              >
                Pasting Adhesive & Emulsions
              </Link>
            </p>

            <p>
              <Link
                href="/product/lamination-emulsion"
                className="ft-link"
              >
                Lamination Emulsion
              </Link>
            </p>
            <p>
              <Link
                href="/product/pressure-sensitive-adhesive"
                className="ft-link"
              >
                Pressure Sensitive Adhesive
              </Link>
            </p>
            <p>
              <Link href="/product/functional-coating" className="ft-link">
                Functional Coating
              </Link>
            </p>
          
          </Col>

          {/* Column 4 - Products 2 */}
          <Col className="ftgap aboutsec4">
            <h5 className="ft-title invisible">.</h5>
              <p>
              <Link href="/product/jelly-glue" className="ft-link">
                Jelly Glue
              </Link>
            </p>
            <p>
              <Link href="/product/construction-adhesive" className="ft-link">
                Construction Adhesive
              </Link>
            </p>
            <p>
              <Link href="/product/aqueous-varnish" className="ft-link">
                Aqueous Varnish
              </Link>
            </p>
            <p>
              <Link href="/product/uv-curable-varnish" className="ft-link">
                UV Curable Varnish
              </Link>
            </p>
            <p>
              <Link href="/product/paint-resins" className="ft-link">
                Paint Resins
              </Link>
            </p>
            
          </Col>
          </div>
        </Row>

        <hr className="copyright-border" />

        {/* ✅ Single-line centered copyright */}
        <Row>
          <Col>
            <div className="ft-copyright">
              Copyright 2026. All rights reserved. <span className="sep"></span>
              Designed & Developed by{" "}
              <a
                href="http://www.chittlesoft.com"
                target="_blank"
                rel="noreferrer"
                className="unrline"
              >
                www.chittlesoft.com
              </a>
              {/* <span className="sep"></span> */}
              <a
                href="/terms"
                target="_blank"
                rel="noreferrer"
                style={{ marginLeft: "10px" }}
              >
                {/* Terms */}
              </a>
              <span className="sep"></span>
              <a href="/privacy" target="_blank" rel="noreferrer">
                {/* Privacy */}
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterMain;
