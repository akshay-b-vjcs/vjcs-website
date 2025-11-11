import React from "react";

import Image from "next/image";
import PageBaner from "@components/PageBaner/PageBaner";

import "./About.css";

import bannerImage from "@image/about/hero-about.png"
import management from "@image/about/img-management.png";
import affiliate from "@image/about/img-affiliate.png"
import visionImg from "@image/about/img-vision.png"
import missionImg from "@image/about/img-mission.png"
import valuesImg from "@image/about/img-values.png"

const About:React.FC = () => {
  const services = [
      {
      title: "MISSION",
      desc: "To work on reasonable services for clients with precision to enhance business processes.",
      image : missionImg,
    },
    {
      title: "VISION",
      desc: "To grow as Reliable solution centric business entity.",
      image : visionImg,
    },
    {
      title: "VALUES",
      desc: "To provide exceptional service through a culture of collaboration, innovation and continuous learning.",
      image : valuesImg,
    },
  ];

  return (
  <>
    <PageBaner heading="About Us" image={bannerImage}/>
    <section
      id="about-us"
      className="about-us section dark-background section-with-lines"
    >
      <div className="container g-0">
        <div className="card-wrapper ">
            { services.map((service, index) => (
              <div
                key={index}
                className="service-card "
                data-aos="fade-up"
              >
                <div className="img-box mb-4">
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
    
    <section className="section light-background py-5">
      <div className="container-fluid pe-lg-0">
        <div className="management">
          <div className="management-wrapper row g-0 my-5">
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="management-content dark-div-background me-lg-4">
                <h2 className="mb-4" >Management</h2>
                <p>
                Since our inception in 1998, VJ Coresoft Pvt. Ltd. has established itself as a global leader in Engineering Services, Software Testing, and Software Development. Our strategic location in Pune, India, a hub for the engineering, IT, and manufacturing sectors, gives us unique insight and access to a vibrant talent pool.
                </p>
                <h5>Our Core Expertise</h5>
                <p>
                We are constantly expanding our portfolio to meet the evolving needs of the industry. Our specialization lies in:
                </p>
                <ul className="">
                  <li>CAx Software Development and QA: Creating cutting-edge solutions from CAD to CAE</li>
                  <li>PLM (Product Lifecycle Management): Streamlining your product&apos;s journey from concept to market.</li>
                  <li>Engineering Services: Providing expert support and consultation to solve your most complex challenges.</li>
                  <li>Digitization for Smart Manufacturing: Helping businesses adopt smart, efficient, and interconnected manufacturing processes.</li>
                </ul>

                <p>
                  The company management has extensive experience in multiple areas including computer algorithms, engineering, optimization, databases, software, CAD, CAM and CAE. Focus is on efficient, reliable and robust planning, implementation and execution. Several management and staff personnel hold advanced degrees including PhD and have a wide knowledge base with focus on engineering and computing disciplines. Senior management personnel have seminal publications in computational and engineering sciences and have held faculty positions at world renowned institutions.
                </p>
              </div>
            </div>  
            <div className="col-lg-6">
              <div className="management-image-container position-relative ms-lg-4">
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
      </div>
      <div className="container-fluid ps-lg-0">
        <div className="affiliates">
          <div className="affiliate-wrapper row g-0">
              {/* Left Column */}
              <div className="col-lg-6">
                <div className="affiliate-image-container position-relative me-lg-4">
                  {/* Add Image if needed */}
                  <Image src={affiliate} alt="Illustration" className="img-fluid main-image" width={500} height={500} />
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="affiliate-content p-5 dark-div-background ms-lg-4">
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
                  <p>
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
    </section>
  </>
  );
}

export default About;