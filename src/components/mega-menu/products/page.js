import React from "react";
import "./style.css";

import Image from "next/image";
import ProductM1 from "../../../../public/images/home/products/product1.png";
import ProductM2 from "../../../../public/images/home/products/product2.png";
import ProductM3 from "../../../../public/images/home/products/product3.png";
import ProductM4 from "../../../../public/images/home/products/product4.png";
import ProductM5 from "../../../../public/images/home/products/product5.png";
import product404 from "../../../../public/images/home/products/product5.png";
import ProductM7 from "../../../../public/images/home/products/product7.png";
import ProductM8 from "../../../../public/images/home/products/product8.png";
import ProductM9 from "../../../../public/images/home/products/product9.png";
import ProductM10 from "../../../../public/images/home/products/product10.png";
import ProductM11 from "../../../../public/images/home/products/product11.png";
import { IoMdCloseCircle } from "react-icons/io";


const productData = [
  {
    title: "Pasting Adhesive",
    imgSrc: ProductM1,
    link: "/product/pasting-adhesive",
  },
  {
    title: "Pasting Adhesive & Emulsions",
    imgSrc: ProductM2,
    link: "/product/pasting-adhesive-emulsions",
  },
  {
    title: "Lamination Emulsion",
    imgSrc: ProductM10,
    link: "/product/lamination-emulsion",
  },
  {
    title: "Pressure Sensitive Adhesive",
    imgSrc: ProductM4,
    link: "/product/pressure-sensitive-adhesive",
  },

  {
    title: "Functional Coating",
    imgSrc: ProductM7,
    link: "/product/functional-coating",
  },

  { title: "Jelly Glue", imgSrc: ProductM5, link: "/product/jelly-glue" },
  {
    title: "Construction Adhesive",
    imgSrc: ProductM3,
    link: "/product/construction-adhesive",
  },
  {
    title: "Aqueous Varnish",
    imgSrc: ProductM8,
    link: "/product/aqueous-varnish",
  },
  {
    title: "UV Curable Varnish",
    imgSrc: ProductM9,
    link: "/product/uv-curable-varnish",
  },

  { title: "Paint Resins", imgSrc: ProductM11, link: "/product/paint-resins" },
];

export default function ProductMega({ setProductOpen, productOpen }) {
  const firstRow = productData.slice(0, 7); // first 7 items
  const secondRow = productData.slice(7); // remaining 5 items
  console.log(productOpen, "productOpenproductOpen");

  return (
    <section className="product-mm-sect">
      <div className="close-button"><IoMdCloseCircle onClick={() => setProductOpen(false)} /></div>
      <div className="product-range-container p-4 shadow-lg rounded-3">
        <div className="row">
          {/* Left content */}
          <div className="col-md-2 pe-4">
            <h3 className="product-range-title">Our Product Ranges</h3>
            <p className="product-range-description">
              Arofine Polymers offers a comprehensive range of water-based,
              solvent-based product portfolio engineered to meet the diverse
              needs of the industries. Each product category is developed with a
              strong focus on performance, consistency, process efficiency, and
              end-use reliability.
            </p>
          </div>

          {/* Right grid */}
          <div className="col-md-10">
            {/* First row (7 items) */}
            <div className="d-flex flex-wrap product-flex">
              {firstRow.map((product, index) => (
                <div className="product-item-box" key={index}>
                  <a href={product.link} className="product-item">
                    <Image
                      src={product.imgSrc}
                      alt={product.title}
                      width={150}
                      height={120}
                      className="product-image"
                    />
                    <div className="product-footer d-flex justify-content-between align-items-center mt-2">
                      <p className="product-title">{product.title}</p>
                      <span className="arrow">&rarr;</span>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Second row (5 items) */}
            <div className="d-flex flex-wrap mt-3 product-flex product-flex-t-0">
              {secondRow.map((product, index) => (
                <div className="product-item-box" key={index}>
                  <a href={product.link} className="product-item">
                    <Image
                      src={product.imgSrc}
                      alt={product.title}
                      width={150}
                      height={120}
                      className="product-image"
                    />
                    <div className="product-footer d-flex justify-content-between align-items-center mt-2">
                      <p className="product-title">{product.title}</p>
                      <span className="arrow">&rarr;</span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
