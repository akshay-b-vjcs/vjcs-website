import React from "react";

import Image from "next/image";
import PageBaner from "@components/PageBaner/PageBaner";

import "./About.css";

import bannerImage from "@image/about/about-banner.png"
import management from "@image/about/management.png";
import affiliate from "@image/about/affiliate.png"
import visionImg from "@image/about/vision.png"
import missionImg from "@image/about/mission.png"
import valuesImg from "@image/about/values.png"

const About:React.FC = () => {
  const services = [
    {
      icon: "bi bi-eye",
      title: "VISION",
      desc: "To grow as Reliable solution centric business entity.",
      image : visionImg,
    },
    {
      icon: "bi bi-bullseye",
      title: "MISSION",
      desc: "To work on reasonable services for clients with precision ",
      image : missionImg,
    },
    {
      icon: "bi bi-bullseye",
      title: "VALUES",
      desc: "To work on reasonable services for clients with precision ",
      image : valuesImg,
    },
  ];

  return (
  <>
    <PageBaner heading="About Us" image={bannerImage}/>
    <section
      id="about-us"
      className="about-us section light-background"
    >
      <div className="container g-0">
        <div className="card-wrapper ">
            { services.map((service, index) => (
              <div
                key={index}
                className="service-card "
                data-aos="fade-up"
              >
                <div className="img-box mb-2">
                  <Image src={service.image} alt={service.title} unoptimized />
                </div>

            <div className="content">
              <h4>
                {service.title}
              </h4>
              <p>{service.desc}</p>
            </div>
          </div>
        ))
        }
        </div>   
      </div>
    </section>
    
    <section className="section bg-pattern light-background py-5">
      <div className="container">
        <div className="management">
          <div className="management-wrapper row g-0 mx-1 my-5">
            <div className="col-lg-6 ">
              <div className="management-content p-5">
                <h2 className="mb-4" >Management</h2>

                <p className="mb-4">
                  VJ Coresoft Pvt. Ltd. (VJCS) founded in 1998, is a leading global IT company engaged in Engineering Services, Software Testing and Software Development. VJCS is located in Pune, India. The city of Pune is a nerve center for telecommunications, engineering, automobile, manufacturing and a rapidly growing information technology services industry.
                </p>

                <p className="mb-3">
                  We are growing and strongly consolidating our existing portfolio of solutions in Cax Software Development/QA, PLM, Engineering Services and Digitization for smart manufacturing.
                </p>

                <p className="">
                  The company management has extensive experience in multiple areas including computer algorithms, engineering, optimization, databases, software, CAD, CAM and CAE. Focus is on efficient, reliable and robust planning, implementation and execution. Several management and staff personnel hold advanced degrees including PhD and have a wide knowledge base with focus on engineering and computing disciplines. Senior management personnel have seminal publications in computational and engineering sciences and have held faculty positions at world renowned institutions.
                </p>
              </div>
            </div>  
            <div className="col-lg-6">
              <div className="management-image-container position-relative">
                <Image
                  src={management}
                  alt="About Us"
                  className="img-fluid main-image"
                  width={500} height={500} 
                />
              </div>
            </div>
          </div>
        </div>
        <div className="affiliates">
          <div className="affiliate-wrapper">
            <div className="affiliate-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>

            <div className="row g-0">
              {/* Left Column */}
              <div className="col-lg-6">
                <div className="affiliate-image-container position-relative">
                  {/* Add Image if needed */}
                  <Image src={affiliate} alt="Illustration" className="img-fluid main-image" width={500} height={500} />

                  <div className="pattern-dots"></div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="affiliate-content p-5">
                  <h2 className="mb-4">VJCS Affiliates</h2>

                  <h4 className="mb-3">Computational Applications and System Integration (CASI)</h4>
                  <p className="mb-3">
                    CASI, an affiliate of VJCS, is located at Champaign – IL in North America. CASI is a technology and business services company delivering robust solutions for multiple industries since 1993. With offices in Champaign and Chicago, Illinois, CASI serves companies of all sizes around the globe.
                  </p>
                  <p className="mb-3">
                    CASI has been developing and licensing mission–critical solvers for solution of linear systems for over a decade. These are widely used in the areas of Engineering Analysis and VLSI Simulation. These solvers are used by over a million users worldwide.
                  </p>
                  <p className="mb-3" >
                    For more information visit{" "}
                    <a href="http://www.casicorp.com" target="_blank" rel="noopener noreferrer">
                      www.casicorp.com
                    </a>
                  </p>

                  <h5 className="mb-3">Primove Engineering Pvt Ltd</h5>
                  <p className="mb-3">
                    Primove Engineering Pvt. Ltd., a subsidiary of VJCS, is a nationally recognized technology company in the domain of gaseous fuels and energy. Primove has developed disruptive technology for the conversion of agricultural residue and waste into BioCNG for transportation and industrial applications.
                  </p>
                  <p className="mb-3">
                    For more information visit{" "}
                    <a href="http://www.primove.in" target="_blank" rel="noopener noreferrer">
                      www.primove.in
                    </a>
                  </p>
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

export default About;