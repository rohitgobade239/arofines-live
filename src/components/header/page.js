"use client";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "./style.css"; // Keep your CSS here
import Link from "next/link";
import Logomain from "../../../public/images/home/arofineLogo.svg";
import TalkIcon from "../../../public/images/home/talkIcon.svg";
import AboutMega from "../mega-menu/about/page";
import ProductMega from "../mega-menu/products/page";
import { FaChevronDown } from "react-icons/fa"; // Importing a down arrow icon (FontAwesome)
import TalkToExpert from "../talktoexpert/page";

const HeaderBar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openTalkToExpert, setOpenTalkToExpert] = useState(false)

  // Scroll event to add/remove class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <section className={`hed-sti-main ${scrolled ? "scrolled" : ""}`}>
        <Navbar expand="lg" className="header-main-bg">
          <Container fluid className="header-main-bg-sm">
            <Navbar.Brand href="/">
              <img
                src={Logomain.src}
                className="d-block w-100 hero-image logo-wh"
                alt="ArofineLogo"
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                {/* Mega Menus */}
                <div
                  className="mega-menu-wrapper  show-p"
                  onMouseEnter={() => { setAboutOpen(true); setProductOpen(false) }}

                >
                  <Link
                    className="mega-menu-link mega-menu-link nav-link"
                    href="/about"
                  >
                    About <FaChevronDown className="arrow-icon show-m" />{" "}
                    {/* Added arrow */}
                  </Link>

                  {aboutOpen && (
                    <div className="mega-menu-overlay" onMouseLeave={() => setAboutOpen(false)}>
                      <AboutMega />
                    </div>
                  )}
                </div>
                  <Nav.Link href="/about" className="show-m">About</Nav.Link>

                <div
                  className="mega-menu-wrapper"
                  onMouseEnter={() => { setProductOpen(true); setAboutOpen(false) }}

                >
                  <Nav.Link className="mega-menu-link">
                    Product Category <FaChevronDown className="arrow-icon" />{" "}
                    {/* Added arrow */}
                  </Nav.Link>
                  {productOpen && (
                    <div className="mega-menu-overlay" onMouseLeave={() => setProductOpen(false)}>
                      <ProductMega setProductOpen={setProductOpen} />
                    </div>
                  )}
                </div>

                <Nav.Link href="/collaborate">Collaborate</Nav.Link>
                <Nav.Link href="/careers">Careers</Nav.Link>
                <Nav.Link href="/blogs">Blogs</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>

                <Button href="#talk-to-expert" className="talk-expert-btn" onClick={() => setOpenTalkToExpert(true)}>
                  Talk to an Expert
                  <span className="talk-expert-icon-wrapper">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="talk-expert-icon"
                    >
                      <path
                        d="M18.72 15.2597C19.07 14.4097 19.26 13.4997 19.26 12.4997C19.26 11.7797 19.15 11.0897 18.96 10.4497C18.31 10.5997 17.63 10.6797 16.92 10.6797C15.466 10.6813 14.0329 10.3332 12.7415 9.66492C11.4502 8.99663 10.3384 8.02766 9.5 6.8397C8.60396 9.01044 6.91172 10.7563 4.77 11.7197C4.73 11.9697 4.73 12.2397 4.73 12.4997C4.73 13.4544 4.91804 14.3998 5.2834 15.2818C5.64875 16.1638 6.18425 16.9653 6.85933 17.6404C8.22272 19.0038 10.0719 19.7697 12 19.7697C13.05 19.7697 14.06 19.5397 14.97 19.1297C15.54 20.2197 15.8 20.7597 15.78 20.7597C14.14 21.3097 12.87 21.5797 12 21.5797C9.58 21.5797 7.27 20.6297 5.57 18.9197C4.53505 17.8896 3.76627 16.6232 3.33 15.2297H2V10.6797H3.09C3.42024 9.07222 4.17949 7.58411 5.28719 6.37329C6.39489 5.16248 7.80971 4.27411 9.38153 3.80246C10.9534 3.33081 12.6235 3.29347 14.2149 3.69441C15.8062 4.09534 17.2593 4.9196 18.42 6.0797C19.6798 7.33528 20.5393 8.93599 20.89 10.6797H22V15.2297H21.94L18.38 18.4997L13.08 17.8997V16.2297H17.91L18.72 15.2597ZM9.27 12.2697C9.57 12.2697 9.86 12.3897 10.07 12.6097C10.281 12.8225 10.3995 13.11 10.3995 13.4097C10.3995 13.7094 10.281 13.9969 10.07 14.2097C9.86 14.4197 9.57 14.5397 9.27 14.5397C8.64 14.5397 8.13 14.0397 8.13 13.4097C8.13 12.7797 8.64 12.2697 9.27 12.2697ZM14.72 12.2697C15.35 12.2697 15.85 12.7797 15.85 13.4097C15.85 14.0397 15.35 14.5397 14.72 14.5397C14.09 14.5397 13.58 14.0397 13.58 13.4097C13.58 13.1074 13.7001 12.8174 13.9139 12.6036C14.1277 12.3898 14.4177 12.2697 14.72 12.2697Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>

      {openTalkToExpert && <TalkToExpert setOpenTalkToExpert={setOpenTalkToExpert} />}
    </div>
  );
};

export default HeaderBar;
