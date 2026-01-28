import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./style.css";


export const WhatsApp = () => {
  return (
    <span className="what-contact-gap">
      <Link href={"https://wa.me/919325981890"} className="phone-number">
        <Image
          src="/images/home/logos_whatsapp-icon.svg"
          alt="WhatsApp"
          className="whatsapp-icon"
          height={150}
          width={150}
        />
      </Link>
    </span>
  );
};
