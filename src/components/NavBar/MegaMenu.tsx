"use client;"

import { useState } from "react";
import Link from "next/link";

interface MegaMenuProps {
  handleClickOnLink: () => void;
  pathname : string
}

const MegaMenu: React.FC<MegaMenuProps> = ({handleClickOnLink, pathname}) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<Record<string, boolean>>({});

  const toggleDropdown = (index: number) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  const toggleSubDropdown = (id: string) => {
    setOpenSubDropdown((prev) => ({
      ...prev,
      [id]: !prev[id], // toggle only the clicked dropdown
    }));
  };

  const data = [
    {
      id:"cax-software-services",
      name: "CAx Software Services",
      href: "/service-details/cad-cam-development",
      subservices: [
        {
          text: "CAD/CAM Development",
          url: "/service-details/cad-cam-development",
          icon: "bi bi-code-square",
          description:"Advanced CAD/CAM development solutions"
        },
        {
          text: "CAE Development",
          url: "/service-details/cae-development",
          icon: "bi bi-bounding-box",
          description:"Robust CAE development services for simulation and analysis"
        },
        {
          text: "CAx Software QA & Testing",
          url: "/service-details/cax-software-testing",
          icon: "bi bi-check2-square",
          description:"Rigorous QA & testing to power precision engineering"
        },
      ],
      icon:"bi bi-building-gear",
      subtitle: "CAx Software Development and Testing"
    },
    {
      id:"engineeting-design-services",
      name: "Engineering Design Services",
      href: "/service-details/product-design",
      subservices: [
        {
          text: "Product Design",
          url: "/service-details/product-design",
          icon: "bi bi-box",
          description:"Concept-Design-Prototype-Production"
        },
        {
          text: "BIM Modelling Services",
          url: "/service-details/bim-modelling",
          icon: "bi bi-building-fill-gear",
          description:"BIM Modelling services and solutions that suits clients Building Information Modelling"
        },
        {
          text: "Marine Engineering",
          url: "/service-details/marine-engineering",
          icon: "bi bi-gear-wide-connected",
          description:"High end innovative design & technical solutions to Marine Industry"
        },
      ],
      icon:"bi bi-gear-wide-connected",
      subtitle:"Engineering Design Services"
    },
    {
      id:"digitization-services",
      name: "Digitization Services",
      href: "/service-details/virtual-manufacturing",
      subservices: [
        {
          text: "Virtual Manufacturing",
          url: "/service-details/virtual-manufacturing",
          icon: "bi bi-cpu",
          description:"Virtual commissioning, Validating PLC code and HMI"
        },
        {
          text: "Industrial Internet of Things",
          url: "/service-details/industrial-iot",
          icon: "bi bi-wifi",
          description:"Smart manufacturing, Smart Facilities, Smart Equipment, Apps for Connected Cars"
        },
        {
          text: "AI Solutions & Services",
          url: "/service-details/ai-solutions",
          icon: "bi bi-robot",
          description:"Manufacturing, Automotive, Sports Fitness"
        },
        {
          text: "Enterprise web & mobile",
          url: "/service-details/enterprise-web-mobile",
          icon: "bi bi-phone",
          description:"Optimize Factory Maintenance, Monitor Equipment Health in Real-time, Reduce Time-to-Market for New Products"
        },
        {
          text: "Augmented & Virtual Reality Apps",
          url: "/service-details/ar-vr-apps",
          icon: "bi bi-vr",
          description:"AR/VR/MR App development"
        },
      ],
      icon:"bi bi-cpu",
      subtitle:"Design & Visual"
    },
    {
      id:"plm",
      name: "PLM",
      href: "/service-details/plm",
      subservices: [
        {
          text: "Product Lifecycle Management",
          url: "/service-details/plm",
          icon: "bi bi-diagram-3",
          description:"PLM Tools Expertise, Supporting End-to-end Global PLM systems Commissioning"
        },
      ],
      icon:"bi bi-diagram-3",
      subtitle:"PLM (Product Lifecycle Management)"
    },
  ];

  return (
  <>
    {/* <!-- Megamenu 2 --> */}
    <li className="megamenu-2">
      <Link 
        href="/services" className={`${(openDropdown === 1) || (pathname === "/services") ? "active" : ""}`}
        onClick={handleClickOnLink}
      >
        <span>Services</span>{" "}
        <i 
          className="bi bi-chevron-down toggle-dropdown"
          onClick={(e) => {
            e.preventDefault();
            toggleDropdown(1);
            e.stopPropagation()
          }}
        ></i>
      </Link>
      {/* <!-- Mobile Megamenu --> */}
      <ul className={`mobile-megamenu ${openDropdown === 1 ? "dropdown-active" : ""}`}>
        { data && data.map(service => {
            return (
              <li key={service.id} className="dropdown" onClick={(e) => {
                e.preventDefault();
                toggleSubDropdown(service.id);
              }}>
                <Link href="#" className={`${openSubDropdown[service.id]  ? "active" : ""}`}>
                  <span>{service.name}</span>{" "}
                  <i 
                    className="bi bi-chevron-down toggle-dropdown" 
                  ></i>
                </Link>
                <ul className={`${openSubDropdown[service.id]  ? "dropdown-active" : ""}`}>
                  { service.subservices && service.subservices.map( subService =>{
                    return (
                      <li key={subService.text}>
                        <Link href={subService.url} onClick={handleClickOnLink}>{subService.text}</Link>
                      </li>
                    )
                    })
                  }
                </ul>
              </li>
            )
          })
        }
      </ul>{" "}
      {/*<!-- End Mobile Megamenu --> */}
      {/* <!-- Desktop Megamenu --> */}
      <div className="desktop-megamenu">
        <div className="tab-navigation">
          <ul
            className="nav nav-tabs flex-column"
            role="tablist"
          >
            { data && data.map( service => {
              return (
              <li key={service.id} className="nav-item" role="presentation">
                <button
                  className={`nav-link ${service.id==="cax-software-services" ? "active" : ""}`}
                  id={`${service.id}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target={`#${service.id}`}
                  type="button"
                  role="tab"
                  aria-controls={`${service.id}`}
                  aria-selected="true"
                >
                  <i className={service.icon}></i>
                  <span>{service.name}</span>
                </button>
              </li>)
            })
            }
          </ul>
        </div>

        <div className="tab-content">
          { data && data.map( service => {
            return (
              <div key={service.id}
                className={`tab-pane fade ${service.id==="cax-software-services" ? "show active" : ""}`}
                id={service.id}
                role="tabpanel"
                aria-labelledby={`${service.id}-tab`}
              >
                <div className="content-grid">
                  <div className="product-section">
                    <h4>{service.subtitle}</h4>
                    <div className="product-list">
                      { service.subservices && service.subservices.map(subService => {
                        return (
                          <Link key={subService.text} href={subService.url} className="product-link">
                            <i className={subService.icon}></i>
                            <div>
                              <span>{subService.text}	</span>
                              <small>{subService.description}</small>
                            </div>
                          </Link>
                        )  
                        }) 
                      }
                    </div>
                  </div>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>{" "}
      {/*<!-- End Desktop Megamenu --> */}
    </li>{" "}
    {/*<!-- End Megamenu 2 --> */}
  </>
  )
}

export default MegaMenu;