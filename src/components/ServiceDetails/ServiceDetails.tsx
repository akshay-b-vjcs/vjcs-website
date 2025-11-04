"use client";
import React, { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PageBaner from "@/components/PageBaner/PageBaner";
import "./ServiceDetails.css";

// Desktop images
import imgCax from "@image/services/service-cax.png";
import imgPlm from "@image/services/service-plm.png";
import imgEds from "@image/services/service-eds.png";
import imgEds1 from "@image/services/service-ds.png";

// Mobile images
import imgCaxMob from "@image/carousel/mobile/carousel-cax-Sq.png"
import imgPlmMob from "@image/carousel/mobile/carousel-plm-Sq.png";
import imgEdsMob from "@image/carousel/mobile/carousel-eds-Sq.png";
import imgEds1Mob from "@image/carousel/mobile/carousel-ds-Sq.png";

// Map desktop banners
const serviceBannerMap: Record<string, StaticImageData> = {
  "cad-cam-development": imgCax,
  "cae-development": imgCax,
  "cax-software-testing": imgCax,
  plm: imgPlm,
  "product-design": imgEds,
  "bim-modelling": imgEds,
  "marine-engineering": imgEds,
  "virtual-manufacturing": imgEds1,
  "industrial-iot": imgEds1,
  "ai-solutions": imgEds1,
  "enterprise-web-mobile": imgEds1,
  "ar-vr-apps": imgEds1,
};

// Map mobile banners
const serviceBannerMapMob: Record<string, StaticImageData> = {
  "cad-cam-development": imgCaxMob,
  "cae-development": imgCaxMob,
  "cax-software-testing": imgCaxMob,
  plm: imgPlmMob,
  "product-design": imgEdsMob,
  "bim-modelling": imgEdsMob,
  "marine-engineering": imgEdsMob,
  "virtual-manufacturing": imgEds1Mob,
  "industrial-iot": imgEds1Mob,
  "ai-solutions": imgEds1Mob,
  "enterprise-web-mobile": imgEds1Mob,
  "ar-vr-apps": imgEds1Mob,
};

interface Feature {
  icon: string;
  title: string;
  subtitle: string;
  contentTitle: string;
  content: string;
  highlight: string;
  points: string[];
}

interface Service {
  slug: string;
  title: string;
  intro?: string;
  features?: Feature[];
}

interface Props {
  service: Service;
  serviceName: string;
}

const ServiceDetails: React.FC<Props> = ({ serviceName, service }: Props) => {
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const banner = isMobile
    ? serviceBannerMapMob[serviceName]
    : serviceBannerMap[serviceName];

  if (!banner) return <p>Service not found</p>;

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const data = [
    {
      name: "CAx Software Services",
      href: "/service-details/cad-cam-development",
      subservices: [
        "/service-details/cad-cam-development",
        "/service-details/cae-development",
        "/service-details/cax-software-testing",
      ],
    },
    {
      name: "Engineering Design Services",
      href: "/service-details/product-design",
      subservices: [
        "/service-details/product-design",
        "/service-details/bim-modelling",
        "/service-details/marine-engineering",
      ],
    },
    {
      name: "Digitization Services",
      href: "/service-details/virtual-manufacturing",
      subservices: [
        "/service-details/virtual-manufacturing",
        "/service-details/industrial-iot",
        "/service-details/ai-solutions",
        "/service-details/enterprise-web-mobile",
        "/service-details/ar-vr-apps",
      ],
    },
    {
      name: "PLM",
      href: "/service-details/plm",
      subservices: ["/service-details/plm"],
    },
  ];

  return (
    <>
      <PageBaner heading={service.title} />
      <section
        id="service-details"
        className="service-details section light-background pt-5"
      >
        <div className="container">
          <div className="row gy-5">
            {/* Left Column */}
            <div className="col-lg-8">
              <div className="service-hero">
                <Image
                  src={banner}
                  alt={serviceName}
                  width={1200}
                  height={500}
                  className="img-fluid rounded-4 shadow img mb-5 mb-md-0"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
                  }}
                  layout="intrinsic" // This will keep the aspect ratio
                  placeholder="blur"
                />
              </div>

              <div className="service-content">
                <div className="service-header mx-3 mx-md-3">
                  <h2>{service.title}</h2>
                  <p className="service-intro" style={{ whiteSpace: "pre-line" }}>{service.intro}</p>
                </div>

                {/* Features */}
                <section id="features" className="features section py-3">
                  <div className="container">
                    <div className="row g-4">
                      {/* Left Tabs */}
                      <div className="col-lg-4 scroll-offset">
                        <ul className="nav nav-tabs flex-column" role="tablist">
                          {service.features?.map((feature, idx) => (
                            <li className="nav-item mb-3" key={idx}>
                              <button
                                className={`nav-link w-100 p-3 d-flex align-items-start ${
                                  activeTab === idx ? "active" : ""
                                }`}
                                onClick={() => {
                                  setActiveTab(idx);
                                  scrollToFeatures();
                                }}
                              >
                                <div className="d-flex align-items-center">
                                  <div className="icon-box">
                                    <i className={feature.icon}></i>
                                  </div>
                                  <div className="ms-3 text-start">
                                    <h4>{feature.title}</h4>
                                    <p>{feature.subtitle}</p>
                                  </div>
                                </div>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Content */}
                      <div className="col-lg-8 scroll-offset" ref={featuresRef}>
                        <div className="tab-content">
                          {service.features?.map((feature, idx) => (
                            <div
                              key={idx}
                              className={`tab-pane fade ${
                                activeTab === idx ? "active show" : ""
                              }`}
                            >
                              <div className="content-box">
                                <div className="row g-4">
                                  <div className="col-lg-12">
                                    <h3>{feature?.contentTitle}</h3>
                                    <p style={{ whiteSpace: "pre-line" }}>
                                      {feature?.content}
                                    </p>

                                    {feature?.highlight && (
                                      <p className="highlight">
                                        {feature.highlight}
                                      </p>
                                    )}

                                    <ul className="features-list list-unstyled">
                                      {feature?.points?.map((point, i) => (
                                        <li
                                          key={i}
                                          className="d-flex align-items-start mb-2"
                                        >
                                          <i className="bi bi-check2-circle me-2"></i>
                                          <span>{point}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-4">
              <div className="service-sidebar">
                <div className="service-menu">
                  <h4>Our Services</h4>
                  <div className="menu-list">
                    {data.map((service, idx) => {
                      const isActive = service.subservices.includes(pathname);
                      return (
                        <Link
                          href={service.href}
                          key={idx}
                          className={`menu-item ${isActive ? "active" : ""}`}
                        >
                          <i className="bi bi-arrow-right"></i>
                          <span>{service.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Contact Card */}
                <div className="contact-card">
                  <div className="contact-content">
                    <h4>Need Help?</h4>
                    <p>Our team’s here to make things easy.</p>
                    <div className="contact-info">
                      <div className="contact-item">
                        <i className="bi bi-telephone"></i>
                        <span>+91-20-66840017</span>
                      </div>
                      <div className="contact-item">
                        <i className="bi bi-envelope"></i>
                        <span>info@vjcs.com</span>
                      </div>
                    </div>
                    <Link href="/contact" className="btn btn-primary">
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
