import Image from "next/image";
import serviceImage from "@image/services/services-7.webp";
import service2Image from "@image/services/services-2.webp";
import service8Image from "@image/services/services-8.webp";
import service11Image from "@image/services/services-11.webp";

import Link from "next/link";
import React from "react";
import "./Service-Details.css";
export default function ServiceDetail() {
  return (
    <>
      {/* Page Title */}
      <div
        className="page-title dark-background"
        style={{
          backgroundImage:
            "url('https://www.shutterstock.com/image-photo/high-rises-building-black-white-260nw-772540216.jpg')",
        }}
      >
        <div className="container position-relative">
          <h1>Service Details</h1>
          <p>
            Esse dolorum voluptatum ullam est sint nemo et est ipsa porro
            placeat quibusdam quia assumenda numquam molestias.
          </p>
          <nav className="breadcrumbs">
            <ol>
              <li className="text-success">Home</li>
              <li className="current">Service Details</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Service Details Section */}
      <section id="service-details" className="service-details section mt-5">
        <div className="container">
          <div className="row gy-5">
            {/* Left Column */}
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
                  <h2>Digital Marketing Strategy &amp; Implementation</h2>
                  <p className="service-intro">
                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit
                    amet dui. Curabitur non nulla sit amet nisl tempus convallis
                    quis ac lectus.
                  </p>
                </div>

                {/* Features */}
                <div className="service-features">
                  <h4>What You&#39;ll Get</h4>
                  <div className="row gy-3">
                    {[
                      {
                        icon: "bi-graph-up-arrow",
                        title: "Analytics & Reporting",
                        desc: "Comprehensive tracking and performance analysis",
                      },
                      {
                        icon: "bi-people",
                        title: "Audience Targeting",
                        desc: "Precise demographic and behavioral targeting",
                      },
                      {
                        icon: "bi-megaphone",
                        title: "Multi-Channel Campaigns",
                        desc: "Integrated social media and search marketing",
                      },
                      {
                        icon: "bi-gear",
                        title: "Strategy Optimization",
                        desc: "Continuous refinement for maximum ROI",
                      },
                    ].map((item, idx) => (
                      <div className="col-md-6" key={idx}>
                        <div className="feature-item">
                          <div className="feature-icon">
                            <i className={`bi ${item.icon}`}></i>
                          </div>
                          <div className="feature-content">
                            <h5>{item.title}</h5>
                            <p>{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div className="service-process">
                  <h4>Our Process</h4>
                  <div className="process-steps">
                    {[
                      {
                        step: "01",
                        title: "Discovery & Analysis",
                        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.",
                      },
                      {
                        step: "02",
                        title: "Strategy Development",
                        desc: "Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus.",
                      },
                      {
                        step: "03",
                        title: "Implementation",
                        desc: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit eget tincidunt nibh pulvinar.",
                      },
                      {
                        step: "04",
                        title: "Monitoring & Optimization",
                        desc: "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus donec sollicitudin molestie.",
                      },
                    ].map((p, idx) => (
                      <div className="process-step" key={idx}>
                        <div className="step-number">{p.step}</div>
                        <div className="step-content">
                          <h5>{p.title}</h5>
                          <p>{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                <div className="service-gallery">
                  <h4>Project Showcase</h4>
                  <div className="row gy-3">
                    {[service2Image, service8Image, service11Image].map(
                      (img, idx) => (
                        <div className="col-md-4" key={idx}>
                          <Image
                            src={img}
                            alt=""
                            width={300}
                            height={200}
                            className="img-fluid rounded"
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-4">
              <div className="service-sidebar">
                {/* Services Menu */}
                <div className="service-menu">
                  <h4>Our Services</h4>
                  <div className="menu-list">
                    {[
                      "Digital Marketing",
                      "Web Development",
                      "Brand Strategy",
                      "Content Creation",
                      "SEO Optimization",
                    ].map((service, idx) => (
                      <Link
                        href="#"
                        key={idx}
                        className={`menu-item ${idx === 0 ? "active" : ""}`}
                      >
                        <i className="bi bi-arrow-right"></i>
                        <span>{service}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="service-info">
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
}
