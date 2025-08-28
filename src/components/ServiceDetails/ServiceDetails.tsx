"use client";
import React, { useState, useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PageBaner from "@/components/PageBaner/PageBaner";
import serviceImage from "@image/services/services-7.webp";

import './ServiceDetails.css';

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
}

const ServiceDetails:React.FC<Props> = ({ service }: Props) => {
  const pathname = usePathname();

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
      href: "/service-details/cad-cam-development",
      subservices: [
        "/service-details/cad-cam-development",
        "/service-details/cae-development",
        "/service-details/cax-software-qa-testing",
      ],
    },
    {
      name: "PLM",
      href: "/service-details/plm",
      subservices: ["/service-details/plm"],
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
                      <div className="col-lg-8 scroll-offset " ref={featuresRef} >
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

export default ServiceDetails;