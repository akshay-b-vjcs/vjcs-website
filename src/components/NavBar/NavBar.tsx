import Image from "next/image";
import Link from "next/link";

import "./NavBar.css";

import logo from "@image/logo_1.png";

const NavBar:React.FC = () => {
  return (
    <div className="branding d-flex align-items-center">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center">
          {/* -- Uncomment the line below if you also wish to use an image logo -- */}
          <Image src={logo} alt="V J Coresoft Pvt. Ltd." />
          {/* <h1 className="sitename">Passion</h1> */}
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link href="/" className="active">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            {/* <!-- Megamenu 2 --> */}
            <li className="megamenu-2">
              <Link href="/services">
                <span>Services</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Link>
              {/* <!-- Mobile Megamenu --> */}
              <ul className="mobile-megamenu">
                <li>
                  <Link href="#">Product Analytics</Link>
                </li>
                <li>
                  <Link href="#">Customer Insights</Link>
                </li>
                <li>
                  <Link href="#">Market Research</Link>
                </li>

                <li className="dropdown">
                  <Link href="#">
                    <span>Enterprise Software</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link href="#">CRM Solutions</Link>
                    </li>
                    <li>
                      <Link href="#">ERP Systems</Link>
                    </li>
                    <li>
                      <Link href="#">Workflow Automation</Link>
                    </li>
                    <li>
                      <Link href="#">Document Management</Link>
                    </li>
                    <li>
                      <Link href="#">Business Intelligence</Link>
                    </li>
                    <li>
                      <Link href="#">Integration Platform</Link>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  <Link href="#">
                    <span>Development Tools</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link href="#">Code Editors</Link>
                    </li>
                    <li>
                      <Link href="#">Version Control</Link>
                    </li>
                    <li>
                      <Link href="#">Testing Frameworks</Link>
                    </li>
                    <li>
                      <Link href="#">Deployment Tools</Link>
                    </li>
                    <li>
                      <Link href="#">API Management</Link>
                    </li>
                    <li>
                      <Link href="#">Performance Monitoring</Link>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  <Link href="#">
                    <span>Creative Suite</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link href="#">Design Software</Link>
                    </li>
                    <li>
                      <Link href="#">Video Editing</Link>
                    </li>
                    <li>
                      <Link href="#">Audio Production</Link>
                    </li>
                    <li>
                      <Link href="#">Animation Tools</Link>
                    </li>
                    <li>
                      <Link href="#">Photo Editing</Link>
                    </li>
                    <li>
                      <Link href="#">3D Modeling</Link>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  <Link href="#">
                    <span>Resources</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link href="#">Documentation</Link>
                    </li>
                    <li>
                      <Link href="#">Tutorials</Link>
                    </li>
                    <li>
                      <Link href="#">Community</Link>
                    </li>
                    <li>
                      <Link href="#">Blog Posts</Link>
                    </li>
                  </ul>
                </li>
              </ul>{" "}
              {/*<!-- End Mobile Megamenu --> */}
              {/* <!-- Desktop Megamenu --> */}
              <div className="desktop-megamenu">
                <div className="tab-navigation">
                  <ul
                    className="nav nav-tabs flex-column"
                    id="2190-megamenu-tabs"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="cax-software-services-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#cax-software-services"
                        type="button"
                        role="tab"
                        aria-controls="cax-software-services"
                        aria-selected="true"
                      >
                        <i className="bi bi-building-gear"></i>
                        <span>CAx Software services</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="engineeting-design-services-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#engineeting-design-services"
                        type="button"
                        role="tab"
                        aria-controls="engineeting-design-services"
                        aria-selected="false"
                      >
                        <i className="bi bi-gear-wide-connected"></i>
                        <span>Engineering Design Services</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="digitization-services-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#digitization-services"
                        type="button"
                        role="tab"
                        aria-controls="digitization-services"
                        aria-selected="false"
                      >
                        <i className="bi bi-cpu"></i>
                        <span>Digitization Services</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="plm-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#plm"
                        type="button"
                        role="tab"
                        aria-controls="plm"
                        aria-selected="false"
                      >
                        <i className="bi bi-diagram-3"></i>
                        <span>PLM</span>
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="tab-content">
                  {/* <!-- CAx Software Services Tab --> */}
                  <div
                    className="tab-pane fade show active"
                    id="cax-software-services"
                    role="tabpanel"
                    aria-labelledby="cax-software-services-tab"
                  >
                    <div className="content-grid">
                      <div className="product-section">
                        <h4>CAx Software Development and Testing</h4>
                        <div className="product-list">
                          <Link href="/service-details/cad-cam-development" className="product-link">
                            <i className="bi bi-code-square"></i>
                            <div>
                              <span>CAD/CAM Software Development	</span>
                              <small>Advanced CAD/CAM development solutions.</small>
                            </div>
                          </Link>
                          <Link href="/service-details/cae-development" className="product-link">
                            <i className="bi bi-bounding-box"></i>
                            <div>
                              <span>CAE Development</span>
                              <small>Robust CAE development services for simulation and analysis.</small>
                            </div>
                          </Link>
                          <Link href="/service-details/cax-software-testing" className="product-link">
                            <i className="bi bi-check2-square"></i>
                            <div>
                              <span>CAx Software QA and Testing</span>
                              <small>Rigorous QA & testing to power precision engineering.</small>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Engineering Design Services Tab --> */}
                  <div
                    className="tab-pane fade"
                    id="engineeting-design-services"
                    role="tabpanel"
                    aria-labelledby="engineeting-design-services-tab"
                  >
                    <div className="content-grid">
                      <div className="product-section">
                        <h4>Engineering Design Services</h4>
                        <div className="product-list">
                          <Link href="/service-details/product-design" className="product-link">
                            <i className="bi bi-box"></i>
                            <div>
                              <span>Product Design</span>
                              <small>Concept-Design-Prototype-Production</small>
                            </div>
                          </Link>
                          <Link href="/service-details/bim-modelling" className="product-link">
                            <i className="bi bi-building-fill-gear"></i>
                            <div>
                              <span>BIM Modeling Desing</span>
                              <small>BIM Modelling services and solutions that suits clients Building Information Modelling</small>
                            </div>
                          </Link>
                          <Link href="/service-details/marine-engineering" className="product-link">
                            <i className="bi bi-gear-wide-connected"></i>
                            <div>
                              <span>Marine Engineering Design</span>
                              <small>High end innovative design & technical solutions to Marine Industry</small>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Digitization Services Tab --> */}
                  <div
                    className="tab-pane fade"
                    id="digitization-services"
                    role="tabpanel"
                    aria-labelledby="digitization-services-tab"
                  >
                    <div className="content-grid">
                      <div className="product-section">
                        <h4>Design &amp; Visual</h4>
                        <div className="product-list">
                          <Link href="/service-details/virtual-manufacturing" className="product-link">
                            <i className="bi bi-cpu"></i>
                            <div>
                              <span>Virtual Manufacturing</span>
                              <small>Virtual commissioning, Validating PLC code and HMI</small>
                            </div>
                          </Link>
                          <Link href="/service-details/industrial-iot" className="product-link">
                            <i className="bi bi-wifi"></i>
                            <div>
                              <span>Industrial Internet of Things</span>
                              <small>Smart manufacturing, Smart Facilities, Smart Equipment, Apps for Connected Cars</small>
                            </div>
                          </Link>
                          <Link href="/service-details/ai-solutions" className="product-link">
                            <i className="bi bi-robot"></i>
                            <div>
                              <span>AI Solutions & Services</span>
                              <small>Manufacturing, Automotive, Sports Fitness</small>
                            </div>
                          </Link>
                          <Link href="/service-details/enterprise-web-mobile" className="product-link">
                            <i className="bi bi-phone"></i>
                            <div>
                              <span>Enterprise Web & mobile Applications</span>
                              <small>Optimize Factory Maintenance, Monitor Equipment Health in Real-time, Reduce Time-to-Market for New Products</small>
                            </div>
                          </Link>
                          <Link href="/service-details/ar-vr-apps" className="product-link">
                            <i className="bi bi-vr"></i>
                            <div>
                              <span>Augumented & Virtual Reality Apps</span>
                              <small>AR/VR/MR App development</small>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- PLM Tab --> */}
                  <div
                    className="tab-pane fade"
                    id="plm"
                    role="tabpanel"
                    aria-labelledby="plm-tab"
                  >
                    <div className="content-grid">
                      <div className="product-section">
                        <h4>PLM (Product Lifecycle Management)</h4>
                        <div className="product-list">
                          <Link href="/service-details/plm" className="product-link">
                            <i className="bi bi-diagram-3"></i>
                            <div>
                              <span>PLM</span>
                              <small>PLM Tools Expertise, Supporting End-to-end Global PLM systems Commissioning</small>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/*<!-- End Desktop Megamenu --> */}
            </li>{" "}
            {/*<!-- End Megamenu 2 --> */}
            <li>
              <Link href="/career">Career</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;