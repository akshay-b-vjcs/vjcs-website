"use client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBaner from "@/components/PageBaner/PageBaner";

import serviceImage from "@image/services/services-7.webp";
// import service2Image from "@image/services/services-2.webp";
// import service8Image from "@image/services/services-8.webp";
// import service11Image from "@image/services/services-11.webp";
import React, { useState, use } from "react";
const services = [
  {
    slug: "cad-cam-development",
    title: "CAD/CAM Development",
    intro:
      "We deliver advanced CAD/CAM development solutions for efficient engineering workflows.",
    features: [
      {
        id: 1,
        title: "Geometry Kernel",
        subtitle: "CAD/CAM Core Capabilities",
        icon: "bi bi-cpu",
        contentTitle: "Geometry Kernel & CAD/CAM Features",
        content:
          "We provide core CAD/CAM functionalities like geometry kernel, advanced FE analysis, and geometric manipulation.",
        highlight:
          "Our expertise helps enhance engineering workflows with advanced CAD/CAM capabilities.",
        points: [
          "Basic CAD/CAM Features",
          "Advanced Functionalities for FE Analysis",
          "Geometric Manipulation",
        ],
        image: "/assets/img/misc/misc-square-6.webp",
      },
      {
        id: 2,
        title: "Interfaces",
        subtitle: "Translators & Plug-ins",
        icon: "bi bi-diagram-3",
        contentTitle: "Interfaces & Translators",
        content:
          "We build translators and plug-ins to connect CAD/CAM tools with neutral and 3rd party software formats.",
        highlight:
          "Our solutions enable seamless data exchange between multiple CAD/CAM platforms.",
        points: [
          "Translators for Neutral Formats: STEP, VRML, STL, IGES, DXF, Parasolid, Granite, ACIS, JT Open",
          "Plug-in Development: Pro/ENGINEER, SolidWorks, CATIA V5/V6, Autodesk Inventor, SpaceClaim",
        ],
        image: "/assets/img/misc/misc-square-13.webp",
      },
      {
        id: 3,
        title: "Integration Projects",
        subtitle: "Client Software in 3rd Party Tools",
        icon: "bi bi-diagram-2",
        contentTitle: "Integration Projects",
        content:
          "We integrate client software into leading CAD/CAM platforms like Pro/ENGINEER, SolidWorks, CATIA, and AI.",
        highlight:
          "Our integration adds custom features and extends CAD tool capabilities.",
        points: [
          "Integrating client software in Pro/ENGINEER, SolidWorks, CATIA V5/V6, AI, SpaceClaim",
        ],
        image: "/assets/img/misc/misc-square-3.webp",
      },
      {
        id: 4,
        title: "Application Development",
        subtitle: "CAD SDK Customization",
        icon: "bi bi-app-indicator",
        contentTitle: "Application Development",
        content:
          "We use SDKs of CAD software to customize tools, add features, and improve UI/UX with automation.",
        highlight:
          "From GUI changes to macro automation, we deliver CAD applications tailored to client needs.",
        points: [
          "Use SDK's to customize and develop new tools",
          "Enhance existing CAD features",
          "Changing GUI, Adding Menus, Developing Macros",
          "SolidWorks: VB.NET, VC++/CLI, C# .NET, VC++ 6.0",
          "CATIA V5/V6: CAA, Macros, CATScript, VB Script, C++",
          "UG NX: C, C++, NX Open API",
          "AutoDesk: API, Inventor SDK, VBA, C++",
          "ProE (Creo): ProToolkit, Web.Link, JLink",
        ],
        image: "/assets/img/misc/misc-square-5.webp",
      },
      {
        id: 5,
        title: "Graphics & Visualization",
        subtitle: "3D Rendering & Modeling",
        icon: "bi bi-eye",
        contentTitle: "Graphics and Visualization",
        content:
          "We provide high-quality visualization tools for CAD software including shaded views, transparency, and wireframe support.",
        highlight:
          "Our visualization expertise improves CAD usability and precision.",
        points: [
          "Shaded Exterior and Edges",
          "Wireframe",
          "Body Transparency",
          "Rotation Modes",
        ],
        image: "/assets/img/misc/misc-square-8.webp",
      },
      {
        id: 6,
        title: ".NET Development",
        subtitle: "Custom Software Solutions",
        icon: "bi bi-code-slash",
        contentTitle: ".NET Development Services",
        content:
          "We specialize in .NET solutions: desktop, web, mobile, cloud apps, and legacy migrations.",
        highlight:
          "From product lifecycle to architecture design, we provide complete .NET development support.",
        points: [
          "Strong expertise in C#, ASP.NET, VB.NET, WinForms",
          "End-to-end product lifecycle management",
          "Custom .NET Web & Desktop Applications",
          "Migration of Legacy Applications",
          "Mobile Apps with .NET Compact Framework",
          "Consulting & Architecture Planning",
        ],
        image: "/assets/img/misc/misc-square-3.webp",
      },
      {
        id: 7,
        title: "Cloud & Web Apps",
        subtitle: "Azure & Modern Web Stack",
        icon: "bi bi-cloud",
        contentTitle: "Cloud & Web Application Development",
        content:
          "We deliver scalable cloud and web solutions using Microsoft Azure, .NET, C++, Java, and modern frameworks.",
        highlight:
          "Secure, scalable, and future-ready enterprise applications built with cloud technologies.",
        points: [
          "Windows Azure (VM, Services, Web Role, Worker Role, SQL Azure)",
          "C/C++/.NET/Java, .NET Framework 4.0, C#.NET, ASP.NET, ADO.NET",
          "AJAX, Microsoft Enterprise Library, Silverlight, WPF, LINQ, Entity Framework",
          "WCF, Web Services, ASP",
          "SQL Server 2012/2008, MySQL",
        ],
        image: "/assets/img/misc/misc-square-13.webp",
      },
      {
        id: 8,
        title: "Technologies",
        subtitle: "Core Tools & Libraries",
        icon: "bi bi-tools",
        contentTitle: "Technologies We Use",
        content:
          "We leverage modern programming languages, geometry toolkits, and CAD SDKs to deliver powerful solutions.",
        highlight:
          "Expertise in multiple programming environments and CAD toolkits.",
        points: [
          "Languages: C, C++, C#, Visual Basic, Java",
          "Graphic Libraries: Qt, Coin3D, OpenGL, OpenCascade, VTK, WebQL",
          "Geometry Toolkits: ACIS/Parasolid, Geometric Algorithms",
          "CAD SDKs: CATIA CAA V5/V6, Pro/TOOLKIT, SolidWorks API",
        ],
        image: "/assets/img/misc/misc-square-9.webp",
      },
      {
        id: 9,
        title: "NC Programming",
        subtitle: "CNC Machining Expertise",
        icon: "bi bi-gear-wide-connected",
        contentTitle: "NC Programming Services",
        content:
          "We provide CNC programming for complex geometries, multi-axis operations, and process optimization.",
        highlight:
          "Our expertise in CNC programming ensures reduced errors and faster production cycles.",
        points: [
          "CNC programming for complex geometries & profiles",
          "Multi-axis milling, drilling, turning, grinding",
          "CNC program verification (VeriCut, NCVerify)",
          "Integration with Fanuc, Siemens, Fagor",
          "Tool Path Generation",
          "APT Programming",
          "CNC Program Optimization",
          "Post-Processor Development",
          "Adaptive Programming for Repair & Salvage",
          "Virtual Machine Modeling & Simulation",
          "5 Axis Milling, Waterjet Programming, CMM Programming",
          "Process Improvement",
        ],
        image: "/assets/img/misc/misc-square-6.webp",
      },
    ],
  },
  {
    slug: "plm",
    title: "PLM",
    intro:
      "We deliver advanced CAD/CAM development solutions for efficient engineering workflows.",


  },
  {
    slug: "cae-development",
    title: "CAE Development",
    intro:
      "We provide robust CAE development services for simulation and analysis.",

  },
  {
    slug: "cax-software-testing",
    title: "CAx Software QA & Testing",
    intro:
      "We ensure quality assurance and testing for CAx software to achieve reliable performance.",

  },
  {
    slug: "product-design",
    title: "Product Design",
    intro:
      "We offer complete product design services from concept to prototype.",
  },
  {
    slug: "bim-modelling",
    title: "BIM Modelling Services",
    intro:
      "We provide BIM modeling solutions for architecture, engineering, and construction projects.",
  },
  {
    slug: "marine-engineering",
    title: "Marine Engineering",
    intro:
      "We design and develop solutions for marine engineering and offshore industries.",
  },
  {
    slug: "virtual-manufacturing",
    title: "Virtual Manufacturing",
    intro:
      "We create virtual manufacturing environments to optimize production processes.",
  },
  {
    slug: "industrial-iot",
    title: "Industrial Internet of Things",
    intro:
      "We build IIoT solutions for connected, smart, and efficient industries.",
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions & Services",
    intro:
      "We provide AI-powered solutions and services tailored to business needs.",
  },
  {
    slug: "enterprise-web-mobile",
    title: "Enterprise Web & Mobile",
    intro:
      "We develop enterprise-grade web and mobile applications for digital transformation.",
  },
  {
    slug: "ar-vr-apps",
    title: "Augmented & Virtual Reality Apps",
    intro:
      "We create immersive AR and VR applications for industries and businesses.",
  },
];

export default function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeTab, setActiveTab] = useState(0);
 
  return (
    <>
      <PageBaner heading={service.title} description={service.intro} />

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
                  <h2>{service.title}</h2>
                  <p className="service-intro">{service.intro}</p>
                </div>
                <section id="features" className="features section py-5" >
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
                              onClick={() => setActiveTab(idx) }
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
                      <div className="col-lg-8"  >
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
                {/* Features */}
                {/* <div className="service-features">
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
                </div> */}

                {/* Process */}
                {/* <div className="service-process">
                  <h4>Our Process</h4>
                  <div className="process-steps">
                    {[
                      {
                        step: "01",
                        title: "Discovery & Analysis",
                        desc: "We start with understanding your requirements.",
                      },
                      {
                        step: "02",
                        title: "Strategy Development",
                        desc: "We prepare a roadmap tailored for your business.",
                      },
                      {
                        step: "03",
                        title: "Implementation",
                        desc: "Our experts execute the plan with best practices.",
                      },
                      {
                        step: "04",
                        title: "Monitoring & Optimization",
                        desc: "We track, measure, and refine continuously.",
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
                </div> */}

                {/* Gallery */}
                {/* <div className="service-gallery">
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
                </div> */}
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
                      {
                        name: "CAx Software Services",
                        href: "/Service-Details/cad-cam-development",
                      },
                      { name: "PLM", href: "/Service-Details/plm" },
                      {
                        name: "Engineering Design Services",
                        href: "/Service-Details/product-design",
                      },
                      {
                        name: "Digitization Services",
                        href: "/Service-Details/virtual-manufacturing",
                      },
                    ].map((service, idx) => (
                      <Link
                        href={service.href}
                        key={idx}
                        className={`menu-item ${idx === 0 ? "active" : ""}`}
                      >
                        <i className="bi bi-arrow-right"></i>
                        <span>{service.name}</span>
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

// static params for build (optional)
// export function generateStaticParams() {
//   return services.map((s) => ({ slug: s.slug }));
// }
