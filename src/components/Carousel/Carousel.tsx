"use client";

import Link from "next/link";
import "./Carousel.css"
const Carousel = () => {
  const slides = [
    {
      src: "https://www.vjcs.com/vjcs/images/updated-images/CAx%20Software%20Development.jpg",
      title: "CAx Software Services",
      subtitle: "Comprehensive CAD/CAM solutions to streamline workflows.",
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
      src: "https://www.vjcs.com/vjcs/images/updated-images/PLM.jpg", // placeholder image
      title: "PLM",
      subtitle:
        "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar.",
      buttons: [
        {
          text: "Learn More",
          link: "/service-details/plm",
        },
      ],
    },

    {
      src: "https://www.vjcs.com/vjcs/images/updated-images/Product%20Design.jpg", // placeholder image
      title: "Engineering Design Services",
      subtitle:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec rutrum congue leo eget malesuada.",
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
      src : "https://www.vjcs.com/vjcs/images/updated-images/virtual_Manufacturing_banner1.jpg" ,// placeholder image
      title: "Digitization Services",
      subtitle:
        "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar.",
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
      data-bs-pause="false" // <-- auto-slide 
    >
      <div className="carousel-inner">
        {slides.map((s, i) => (
          <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
            <div
              className="d-block w-100"
              style={{
                height: "500px",
                backgroundImage: `url(${s.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
                <h2 className="title">{s.title}</h2>
                <h5 className="title">{s.subtitle}</h5>
                <div className="d-flex gap-2 justify-content-center mt-3">
                   {s.buttons.map((btn, idx) => (
                    <Link key={idx} href={btn.link} className="btn btn-primary">
                      {btn.text}
                    </Link>
                   ))} 
          {/* <ul className="mt-3 list-unstyled d-flex">
            {s.buttons.map((link, idx) => (
              <li key={idx} className="m-2 title ">
                <Link
                  href={link.link}
                  className="d-flex align-items-center gap-2 text-decoration-none text-light"
                >
                  <span>{link.text}</span>
                </Link>
              </li>
            ))}
          </ul> */}
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
