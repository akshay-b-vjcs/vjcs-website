"use client";

import Link from "next/link";
import Image from "next/image";
import "./Carousel.css";

// Import local service banner images
import imgCax from "@image/services/Home-carousel-cax.png";
import imgPlm from "@image/services/Home-carousel-plm.png";
import imgEds from "@image/services/Home-carousel-eds.png";
import imgEds1 from "@image/services/Home-carousel-eds-1.png";

const Carousel = () => {
  const slides = [
    {
      src: imgCax,
      title: "CAx Software Services",
      buttons: [
        {
          text: "CAD/CAM Development",
          link: "/service-details/cad-cam-development",
        },
        { text: "CAE Development", link: "/service-details/cae-development" },
        {
          text: "CAx Software QA & Testing",
          link: "/service-details/cax-software-testing",
        },
      ],
    },
    {
      src: imgPlm,
      title: "PLM",
      buttons: [{ text: "Learn More", link: "/service-details/plm" }],
    },
    {
      src: imgEds,
      title: "Engineering Design Services",
      buttons: [
        { text: "Product Design", link: "/service-details/product-design" },
        {
          text: "BIM Modelling Services",
          link: "/service-details/bim-modelling",
        },
        {
          text: "Marine Engineering",
          link: "/service-details/marine-engineering",
        },
      ],
    },
    {
      src: imgEds1,
      title: "Digitization Services",
      buttons: [
        {
          text: "Virtual Manufacturing",
          link: "/service-details/virtual-manufacturing",
        },
        {
          text: "Industrial Internet of Things",
          link: "/service-details/industrial-iot",
        },
        {
          text: "AI Solutions & Services",
          link: "/service-details/ai-solutions",
        },
        {
          text: "Enterprise web & mobile",
          link: "/service-details/enterprise-web-mobile",
        },
        {
          text: "Augmented & Virtual Reality Apps",
          link: "/service-details/ar-vr-apps",
        },
      ],
    },
  ];

  return (
    <div
      id="bgCarousel"
      className="carousel slide mt-5"
      data-bs-ride="carousel"
      data-bs-interval="3000"
      data-bs-pause="false"
    >
      <div className="carousel-inner">
        {slides.map((s, i) => (
          <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
            <div
              className="d-block w-100 position-relative"
              style={{ height: "600px" }}
            >
              <Image
                src={s.src}
                alt={s.title}
                fill
                priority={i === 0}
                style={{ objectFit: "cover" }}
              />
              <div className="carousel-caption d-flex flex-column justify-content-end align-items-start h-100">
                <div className="service-buttons ">
                  {s.buttons.map((btn, idx) => (
                    <Link key={idx} href={btn.link} className="service-btn">
                      {btn.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#bgCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#bgCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
