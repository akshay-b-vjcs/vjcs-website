"use client";
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import PageBaner from "@/components/PageBaner/PageBaner";

import "./ServiceDetails.css";

// Desktop images
import AIImage from "@image/services/sub-services/ai.png"
import ARVRImage from "@image/services/sub-services/ar-vr.png"
import BIMModelingImage from "@image/services/sub-services/bim-modeling.png"
import CadCamImage from "@image/services/sub-services/cad-cam.png"
import CaeImage from "@image/services/sub-services/cae.png"
import CaxTestingImage from "@image/services/sub-services/cax-testing.png"
import IIOTImage from "@image/services/sub-services/iiot.png"
import MarineEnggImage from "@image/services/sub-services/marine-engg.png"
import MobileWebImage from "@image/services/sub-services/mobile-web.png"
import PLMImage from "@image/services/sub-services/plm.png"
import ProductDesignImage from "@image/services/sub-services/product-design.png"
import VirtualManufacturingImage from "@image/services/sub-services/virtual-manufacturing.png"


// Mobile images
import AIImageMob from "@image/services/sub-services/mobile/ai.png"
import ARVRImageMob from "@image/services/sub-services/mobile/ar-vr.png"
import BIMModelingImageMob from "@image/services/sub-services/mobile/bim-modeling.png"
import CadCamImageMob from "@image/services/sub-services/mobile/cad-cam.png"
import CaeImageMob from "@image/services/sub-services/mobile/cae.png"
import CaxTestingImageMob from "@image/services/sub-services/mobile/cax-testing.png"
import IIOTImageMob from "@image/services/sub-services/mobile/iiot.png"
import MarineEnggImageMob from "@image/services/sub-services/mobile/marine-engg.png"
import MobileWebImageMob from "@image/services/sub-services/mobile/mobile-web.png"
import PLMImageMob from "@image/services/sub-services/mobile/plm.png"
import ProductDesignImageMob from "@image/services/sub-services/mobile/product-design.png"
import VirtualManufacturingImageMob from "@image/services/sub-services/mobile/virtual-manufacturing.png"

// Map desktop banners
const serviceBannerMap: Record<string, StaticImageData> = {
  "cad-cam-development": CadCamImage,
  "cae-development": CaeImage,
  "cax-software-testing": CaxTestingImage,
  plm: PLMImage,
  "product-design": ProductDesignImage,
  "bim-modelling": BIMModelingImage,
  "marine-engineering": MarineEnggImage,
  "virtual-manufacturing": VirtualManufacturingImage,
  "industrial-iot": IIOTImage,
  "ai-solutions": AIImage,
  "enterprise-web-mobile": MobileWebImage,
  "ar-vr-apps": ARVRImage,
};

// Map mobile banners
const serviceBannerMapMob: Record<string, StaticImageData> = {
  "cad-cam-development": CadCamImageMob,
  "cae-development": CaeImageMob,
  "cax-software-testing": CaxTestingImageMob,
  plm: PLMImageMob,
  "product-design": ProductDesignImageMob,
  "bim-modelling": BIMModelingImageMob,
  "marine-engineering": MarineEnggImageMob,
  "virtual-manufacturing": VirtualManufacturingImageMob,
  "industrial-iot": IIOTImageMob,
  "ai-solutions": AIImageMob,
  "enterprise-web-mobile": MobileWebImageMob,
  "ar-vr-apps": ARVRImageMob,
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const banner = isMobile
    ? serviceBannerMapMob[serviceName]
    : serviceBannerMap[serviceName];

  if (!banner) return <p>Service not found</p>;

  return (
    <>
      <PageBaner heading={service.title} />
      <section
        id="service-details"
        className="service-details section light-background"
      >
        <div className="container">
          <div className="row gy-5">
            {/* Left Column */}
            <div className="col-lg-8">
              {/* Image */}
              <div className="service-hero">
                <Image
                  src={banner}
                  alt={serviceName}
                  className="img-fluid rounded-4 shadow img"
                  placeholder="blur"
                />
              </div>

              <div className="service-content">
                {/* Title */}
                <div className="service-header mx-3 mx-md-3">
                  <h2>{service.title}</h2>
                  <p
                    className="service-intro"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {service.intro}
                  </p>
                </div>

                {/* Features */}

                <section id="features" className="features section py-3">
                  <div className="container scroll-offset">
                    <div className="row g-4">
                      <div className="col-lg-12">
                        {service.features?.map((feature, idx) => (
                          <div
                            key={idx}
                            className="feature-box mb-5 rounded-4 shadow-sm"
                          >
                            {/* Header */}
                            <div className="feature-header d-flex align-items-center p-3 rounded-top-4">
                              <div className="feature-icon me-3">
                                <i className={`${feature.icon}`}></i>
                              </div>
                              <div>
                                <h4 className="feature-title mb-0">
                                  {feature.title}
                                </h4>
                                {feature?.subtitle && (
                                  <p className="feature-subtitle mb-0">
                                    {feature.subtitle}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Body */}
                            <div className="feature-body">
                          
                              {feature?.content && (
                                <p
                                  className="feature-content"
                                  style={{ whiteSpace: "pre-line" }}
                                >
                                  {feature.content}
                                </p>
                              )}

                              {feature?.highlight && (
                                <p className="highlight">{feature.highlight}</p>
                              )}

                              {feature?.points?.length > 0 && (
                                <ul className="features-list list-unstyled">
                                  {feature.points.map((point, i) => (
                                    <li
                                      key={i}
                                      className="d-flex align-items-start mb-2"
                                    >
                                      <i className="bi bi-check2-circle me-2 text-accent"></i>
                                      <span>{point}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-4">
              <div className="service-sidebar">
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
