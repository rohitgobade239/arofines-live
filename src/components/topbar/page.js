import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./style.css";
import svgImage from "../../../public/images/home/wptop.jpg";
import Image from "next/image";
import Link from "next/link";

const TopBar = () => {
  return (
    <section className="hed-sti-top">
      <div className="contact-banner" data-aos="fade-up">
        <span className="contact-text">
          Need something more? We offer a wide range of products too. 🎁
        </span>
        <a href="/contact" className="contact-link">
          Explore Products! or contact for enquiry
        </a>
        <span className="contact-gap">
          <Image
            src="/images/home/logos_whatsapp-icon.svg"
            alt="WhatsApp"
            className="whatsapp-icon"
            height={20}
            width={20}
          />
          <Link href={"https://wa.me/919325981890"} className="phone-number">
            +91 93259 81890
          </Link>
        </span>
      </div>
    </section>
  );
};

export default TopBar;
