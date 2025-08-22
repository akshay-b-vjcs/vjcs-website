"use client";
import Image from "next/image";
import Link from "next/link";
import { notFound, usePathname } from "next/navigation";
import PageBaner from "@/components/PageBaner/PageBaner";
import { services } from "@/app/Service-Details/data";
import "./page.css";
import serviceImage from "@image/services/services-7.webp";

import React, { useState, useRef, use } from "react";

const ServiceDetail = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);
  const pathname = usePathname();

  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeTab, setActiveTab] = useState(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const featuresRef = useRef<HTMLDivElement>(null);
  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const data = [
    {
      name: "CAx Software Services",
      href: "/Service-Details/cad-cam-development",
      subservices: [
        "/Service-Details/cad-cam-development",
        "/Service-Details/cae-development",
        "/Service-Details/cax-software-qa-testing",
      ],
    },
    {
      name: "PLM",
      href: "/Service-Details/plm",
      subservices: ["/Service-Details/plm"],
    },
    {
      name: "Engineering Design Services",
      href: "/Service-Details/product-design",
      subservices: [
        "/Service-Details/product-design",
        "/Service-Details/bim-modelling-services",
        "/Service-Details/marine-engineering",
      ],
    },
    {
      name: "Digitization Services",
      href: "/Service-Details/virtual-manufacturing",
      subservices: [
        "/Service-Details/virtual-manufacturing",
        "/Service-Details/industrial-internet-of-things",
        "/Service-Details/ai-solutions",
        "/Service-Details/enterprise-web-mobile",
        "/Service-Details/ar-vr-apps",
      ],
    },
  ];

  return (
    <>
      <PageBaner heading={service.title} description={""} />

      <section id="service-details" className="service-details section mt-5">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-8">
              <div className="service-hero">
                <Image
                  src={serviceImage}
                  width={800}
                  height={500}
                  alt=""
                  className="img-fluid"
                />
                <div className="service-badge">
                  <span>Premium Service</span>
                </div>
              </div>

              <div className="service-content">
                {/* Header */}
                <div className="service-header">
                  <h2>{service.title}</h2>
                  <p className="service-intro">{service.intro}</p>
                </div>
                <section id="features" className="features section py-5 " >
                  <div className="container">
                    <div className="row g-4">
                      {/* Left Tabs */}
                      <div className="col-lg-4">
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
                      <div className="col-lg-8 scroll-offset mt-5" ref={featuresRef} >
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
                                    <h3>{feature.contentTitle}</h3>
                                    <p>{feature.content}</p>
                                    <p className="highlight">
                                      {feature.highlight}
                                    </p>
                                    <ul className="features-list list-unstyled">
                                      {feature.points.map((point, i) => (
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
                {/* Services Menu */}
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

                {/* Info */}
                {/* <div className="service-info">
                  <h4>Service Details</h4>
                  <div className="info-list">
                    {[
                      { label: "Duration:", value: "3-6 months" },
                      { label: "Team Size:", value: "4-6 specialists" },
                      { label: "Delivery:", value: "Bi-weekly reports" },
                      { label: "Support:", value: "24/7 monitoring" },
                    ].map((info, idx) => (
                      <div className="info-item" key={idx}>
                        <span className="info-label">{info.label}</span>
                        <span className="info-value">{info.value}</span>
                      </div>
                    ))}
                  </div>
                </div> */}

                {/* Contact Card */}
                <div className="contact-card">
                  <div className="contact-content">
                    <h4>Need Help?</h4>
                    <p>
                      Sed porttitor lectus nibh. Vestibulum ac diam sit amet
                      quam vehicula elementum sed sit amet dui.
                    </p>
                    <div className="contact-info">
                      <div className="contact-item">
                        <i className="bi bi-telephone"></i>
                        <span>+1 (555) 123-4567</span>
                      </div>
                      <div className="contact-item">
                        <i className="bi bi-envelope"></i>
                        <span>info@example.com</span>
                      </div>
                    </div>
                    <Link href="#" className="btn btn-primary">
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
export default ServiceDetail;
