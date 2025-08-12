"use client";
import Image from "next/image";
import "./Career.css";
import aboutImage from "@image/about/about-square-8.webp";
import { useState } from "react";
import CountUp from "../Count/Count";

export default function Career() {
  const [activeIndex, setActiveIndex] = useState(null); // <-- allow null

  const careers = [
    {
      title: "CAD Testers 2D Sketch",
      requirements: "No of Requirements – 5 | Experience: 2–3 years OR 5–7 years",
      jobProfile: [
        "Manual testing of 2D Sketch for CAD software on Desktop, Mobile, and Browser",
        "Documentation testing",
        "Providing value-added suggestions for improvements",
      ],
      skills: ["Should have experience with manual testing of 2D Sketcher"],
    },
    {
      title: "CAD Testers SolidEdge",
      requirements: "No of Requirements – 2 | Experience: 3–4 years with SolidEdge + 1 year with manual CAD software testing",
      jobProfile: [
        "QA Testing (Manual) of Solid Edge integration with CAM software",
        "Carrying out all types of testing activities like Installation / Uninstallation, Accuracy testing, Performance testing",
        "Documentation of Testing / Test cases and other testing documents",
      ],
      skills: ["Experience in SolidEdge and manual CAD software testing"],
    },
    {
      title: "Automation Testing using Cypress Tool",
      requirements: "No of Posts – 2 | Qualification: Engineering Graduate / MCA / MCS with 4–7 years’ experience",
      jobProfile: [
        "Development for Test Framework, Automation Testing Scripts using Cypress Test Tool",
        "Automation testing of requirements, able to design frameworks for new applications",
        "Automated tests for UI, backend services, and databases",
      ],
      skills: [
        "Automation Tools – Cypress, Windows and Web-based Applications",
        "Hands-on in executing complex test cases using ALM / JIRA, strong in testing processes and SDLC",
        "Scripting: Java / JavaScript / Python / C#",
        "Knowledge on API Testing (RestAssured), UI, Performance (JMeter)",
        "Agile methodologies: BDD, TDD, CI/CD, understanding QA KPIs",
        "BDD framework knowledge: Cucumber / Concordion",
        "Strong in SQL queries, Unix systems, Shell scripting",
        "Strong analytical skills in designing test cases from requirements / user stories",
        "Excellent communication skills (verbal and written)",
        "Experience in cloud application testing & automation (Azure, AWS, GCP)",
      ],
    },
  ];

  return (
    <section id="about" className="py-5 mt-5">
      <div className="container">
        {/* About Section */}
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
                <h2 className="h1 fw-bold mb-4 mt-5" style={{ color: "#293a34" }}>
                Transforming Ideas Into Reality Since 2015
              </h2>
            <p
              className="mb-4"
              style={{
                color: "#384943",
                fontSize: "20px",
                fontWeight: 300,
                lineHeight: "1.6",
              }}
            >
              At VJ Coresoft Pvt. Ltd., employees are the most important asset
              of the company. Honesty, ethics, value, and our commitments are
              part of our culture. Working on advanced CAx Technologies, we
              specialize in tackling complex challenges.
            </p>
                 <div className="my-4 py-4 border-top border-bottom">
                            <div className="row text-center">
                              <div className="col-md-4 mb-3 mb-md-0">
                                <h3 className="fw-bold text-success">
                                  {" "}
                                  <CountUp target={8}></CountUp> +
                                </h3>
            
                                <p className="text-uppercase text-muted small mb-0">
                                  Years Experience
                                </p>
                              </div>
                              <div className="col-md-4 mb-3 mb-md-0">
                                <h3 className="fw-bold text-success">
                                  <CountUp target={450}></CountUp> +
                                </h3>
                                <p className="text-uppercase text-muted small mb-0">
                                  Projects Completed
                                </p>
                              </div>
                              <div className="col-md-4">
                                <h3 className="fw-bold text-success">                      <CountUp target={100}></CountUp> +</h3>
                                <p className="text-uppercase text-muted small mb-0">
                                  Team Members
                                </p>
                              </div>
                            </div>
                          </div>
          </div>

          {/* Image */}
          <div className="col-lg-6 mt-5">
            <div className="position-relative">
              <Image
                src={aboutImage}
                alt="About Us"
                className="img-fluid rounded-4 shadow"
              />
              <div
                className="position-absolute bg-white rounded-4 p-3 shadow d-flex align-items-center gap-3"
                style={{
                  left: "-40px",
                  bottom: "20px",
                  maxWidth: "300px",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded-3"
                  style={{
                    backgroundColor: "#E6F4EA",
                    width: "56px",
                    height: "56px",
                  }}
                >
                  <i
                    className="bi bi-award"
                    style={{ fontSize: "30px", color: "#0ca678" }}
                  ></i>
                </div>
                <div>
                  <h6 className="mb-1 fw-semibold text-dark">
                    Excellence Award
                  </h6>
                  <small className="text-muted">
                    Digital Innovation 2023
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Opportunities FAQ Style */}
        <div className="row mt-5">
          <div className="col-12">
            

            <div className="faq-wrapper">
              {careers.map((job, index) => (
                <div
                  key={index}
                  className={`faq-item ${activeIndex === index ? "faq-active" : ""}`}
                >
                  <div
                    className="faq-header"
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                    style={{ cursor: "pointer" }}
                  >
                    <div className="faq-icon">
                      <i className="bi bi-question-circle"></i>
                    </div>
                    <h4>{job.title}</h4>
                    <div className="faq-toggle faq-icon">
                      <i className="bi bi-plus"></i>
                      <i className="bi bi-dash text-white"></i>
                    </div>
                  </div>

                  <div className="faq-content">
                    <div className="content-inner">
                      <h6 className="fw-semibold text-success">Requirements</h6>
                      <p>{job.requirements}</p>

                      <h6 className="fw-semibold text-success mt-3">
                        Job Profile
                      </h6>
                      <ul>
                        {job.jobProfile.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>

                      <h6 className="fw-semibold text-success mt-3">Skills</h6>
                      <ul>
                        {job.skills.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
