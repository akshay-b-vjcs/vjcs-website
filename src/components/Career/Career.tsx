"use client"
import { useState } from "react";
import Image from "next/image";
import PageBaner from "@components/PageBaner/PageBaner";
import teamImage from "@image/career/team.png";
import "./Career.css";

const Career: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  console.log(activeIndex)
  const careers = [
    {
      title: "CAD Testers 2D Sketch",
      subtitle:
        "We are looking for CAD Testers having experience with 2D sketch testing experience.",
      requirements:
        "No of Requirements – 5 | Experience: 2–3 years OR 5–7 years",
      jobProfile: [
        "Manual testing of 2D Sketch for CAD software on Desktop, Mobile, and Browser",
        "Documentation testing",
        "Providing value-added suggestions for improvements",
      ],
      skills: ["Should have experience with manual testing of 2D Sketcher"],
    },
    {
      title: "CAD Testers SolidEdge",
      subtitle:
        "We are looking for CAD Testers with SolidEdge testing experience.",

      requirements: "No of Requirements – 2 ",
      jobProfile: [
        "QA Testing (Manual) of Solid Edge integration with CAM software",
        "Carrying out all types of testing activities like Installation / Uninstallation, Accuracy testing, Performance testing",
        "Documentation of Testplan / Test cases and other testing documents",
      ],
      skills: [
        "3-4 years’ experience with SolidEdge as a user and 1 year with manual CAD software testing.",
      ],
    },
    {
      title: "Automation Testing using Cypress Tool",
      subtitle:
        "We are looking for candidates with experience in Automation testing using Cypress Tool.",

      requirements:
        "No of Posts – 2 ",
      jobProfile: [
        "Development for Test Framework, Automation Testing Scripts using Cypress Test Tool",
        
      ],
      skills: [
        "Engineering Graduate/MCA/MCS having 4-7 years’ experience with following.",
        "Automation Tools – Cypress, Windows and Web-based Applications",
        "Hands-on in executing complex test cases using ALM / JIRA, strong in testing processes and SDLC",
        "Automation frameworks and best practices, able to design frameworks for new applications",
        "Automated tests for GUI, backend, services, and databases",
        "Scripting: Java / JavaScript / Python / C#",
        "Knowledge on API Testing (RestAssured), UI, Performance (JMeter)",
        "Should be well versed with agile methodologies BDD, TDD, CI/CD etc. Strong understanding of QA KPIs",
        "Working knowledge on BDD Framework: Cucumber/ Concordian",
        "Strong in writing SQL Queries, operating knowledge of Unix systems and Shell scripting",
        "Strong analytical skills in designing test scenarios using requirements, user stories",
        "Motivated, self-driven and possesses excellent communication skills both verbal and written",
        "Prior experience working on cloud applications, testing and automating them (Azure, AWS, GCP)",
      ],
    },
  ];

  return (
    <>
      <PageBaner heading="Career" />
      <section className="section light-background py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="h1 fw-bold mb-4" style={{ color: "#293a34" }}>
                CAREER
              </h2>
              <p
                style={{
                  color: "#384943",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "1.6",
                }}
              >
                At VJ Coresoft Pvt. Ltd., employees are the most important asset
                of the company. Honesty, ethics, value, and our commitments are
                part of our culture. Working on advanced CAx Technologies, we
                specialize in tackling complex challenges.
              </p>
            </div>

            <div className="col-lg-6 mt-0 mt-md-5">
              <Image
                src={teamImage}
                alt="About Us"
                className="custom-career-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-pattern light-background py-5">
        <div className="container">
          <div className="text-center mt-5 section-title">
            <h2 className="fw-bold">Open Positions</h2>
            <p >
              For expansion plans, company is looking for following
              professionals
            </p>
          </div>

          <div className="row justify-content-center mt-4">
            <div className="col-lg-8">
              <div className="career-wrapper">
                {careers.map((job, index) => (
                  <div
                    key={index}
                    className={`career-item ${
                      activeIndex === index ? "career-active" : ""
                    }`}
                  >
                    <div
                      className="career-header p-3"
                      onClick={() =>
                        setActiveIndex(activeIndex === index ? null : index)
                      }
                    >
                      <div className="career-icon">
                        <i className="bi-megaphone"></i>
                      </div>
                      <h4>{job.title}</h4>

                      <div className="career-toggle">
                        <i className="bi bi-plus"></i>
                        <i className="bi bi-dash text-white"></i>
                      </div>
                    </div>

                    <div className="career-content">
                      <div className="content-inner">
                        <h6>{job.subtitle}</h6>
                        <h6>Requirements</h6>
                        <p>{job.requirements}</p>

                        <h6 className="mt-3">Job Profile</h6>
                        <ul>
                          {job.jobProfile.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>

                        <h6 className="mt-3">Skills</h6>
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
    </>
  );
};

export default Career;
