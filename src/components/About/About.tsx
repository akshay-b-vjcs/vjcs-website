import React from "react";

import Image from "next/image";
import "./About.css";

import aboutImage from "@image/about/about-square-8.webp";

export default function About() {
  const services = [
    {
      icon: "bi bi-eye",
      title: "VISION",
      desc: "To grow as Reliable solution centric business entity.",
      num: "01",
    },
    {
      icon: "bi bi-bullseye",
      title: "MISSION",
      desc: "To work on reasonable services for clients with precision ",
      num: "02",
    },
  ];

  return (
    <section
      id="featured-services"
      className="featured-services section light-background"
    >
      <div className="container">
        <div className="row mt-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-md-5 m-5 service-card"
              data-aos="fade-up"
            >
              <div className="icon-box">
                <i className={service.icon}></i>
              </div>
              <a href="#" className="arrow-link">
                <i className="bi bi-arrow-right"></i>
              </a>
              <div className="content">
                <h4>
                  <a href="#">{service.title}</a>
                </h4>
                <p>{service.desc}</p>
                <div className="service-number">{service.num}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="row m-4">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div>
              <h2 className="h1 fw-bold mb-4 " style={{ color: "#293a34" }}>
                Management
              </h2>

              <p
                className="mb-4"
                style={{
                  color: "#384943",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "1.6",
                }}
              >
                VJ Coresoft Pvt. Ltd. (VJCS) founded in 1998, is a leading
                global IT company engaged in Engineering Services, Software
                Testing and Software Development. VJCS is located in Pune,
                India. The city of Pune is a nerve center for
                telecommunications, engineering, automobile, manufacturing and a
                rapidly growing information technology services industry.
              </p>

              <p
                className="text-muted mb-3"
                style={{
                  color: "#384943",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "1.6",
                }}
              >
                We are growing and strongly consolidating our existing portfolio
                of solutions in Cax Software Development/QA, PLM, Engineering
                Services and Digitization for smart manufacturing.
              </p>

              <p
                className="text-muted mb-3"
                style={{
                  color: "#384943",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "1.6",
                }}
              >
                The company management has extensive experience in multiple
                areas including computer algorithms, engineering, optimization,
                databases, software, CAD, CAM and CAE. Focus is on efficient,
                reliable and robust planning, implementation and execution.
                Several management and staff personnel hold advanced degrees
                including PhD and have a wide knowledge base with focus on
                engineering and computing disciplines. Senior management
                personnel have seminal publications in computational and
                engineering sciences and have held faculty positions at world
                renowned institutions.
              </p>

              {/* Affiliates Section */}
              <h4 className="fw-bold mt-4" style={{ color: "#293a34" }}>
                VJCS Affiliates
              </h4>

              <h5 className="fw-bold mt-3 text-muted" style={{ color: "#384943" }}>
                Computational Applications and System Integration (CASI)
              </h5>
              <p
                style={{
                  color: "#384943",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "1.6",
                }}
              >
                CASI, an affiliate of VJCS, is located at Champaign – IL in
                North America. CASI is a technology and business services
                company delivering robust solutions for multiple industries
                since 1993. With offices in Champaign and Chicago, Illinois,
                serves companies of all sizes around the globe.
              </p>
              <p
                style={{
                  color: "#384943",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "1.6",
                }}
              >
                CASI has been developing and licensing mission–critical solvers
                for solution of linear systems for over a decade. These are
                widely used in the areas of Engineering Analysis and VLSI
                Simulation. These solvers are used by over a million users
                worldwide.
              </p>
              <p>
                For more information visit{" "}
                <a
                  href="http://www.casicorp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://www.casicorp.com
                </a>
              </p>

              
            </div>
          </div>
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="position-relative">
              <Image
                src={aboutImage}
                alt="About Us"
                className="img-fluid rounded-4 shadow"
                
              />
            </div>
            <div className="">
              <h5 className="fw-bold mt-3 text-muted" style={{ color: "#384943" }}>
                Primove Engineering Pvt Ltd
              </h5>
              <p
                style={{
                  color: "#384943",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "1.6",
                }}
              >
                Primove Engineering Pvt. Ltd., a subsidiary of VJCS, is a
                nationally recognized technology company in the domain of
                gaseous fuels and energy. Primove has developed disruptive
                technology for the conversion of agricultural residue and waste
                into BioCNG for transportation and industrial applications.
              </p>
              <p>
                For more information visit{" "}
                <a
                  href="http://www.primove.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://www.primove.in
                </a>
              </p>
            </div>
           
          </div>
         
        </div>
      </div>
    </section>
  );
}

