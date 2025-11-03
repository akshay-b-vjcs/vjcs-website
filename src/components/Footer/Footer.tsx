import React from "react";
import Link from "next/link";

import "./Footer.css";

const Footer: React.FC = () => {
  const servicesLink = [
    {
      name: "CAx Software Services",
      href: "/service-details/cad-cam-development",
    },
    {
      name: "Engineering Design Services",
      href: "/service-details/product-design",
    },
    {
      name: "Digitization Services",
      href: "/service-details/virtual-manufacturing",
    },
    {
      name: "PLM",
      href: "/service-details/plm",
    },
  ];

  return (
    <footer id="footer" className="footer position-relative dark-background footer-bg-pattern">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-12 footer-about">
            <Link href="/" className="logo d-flex align-items-center">
              <span className="sitename">V J Coresoft Pvt. Ltd.</span>
            </Link>
            <p>All trademarks and copyrights of the 3D Printers / CAD and CAE Services / Software / other software and services mentioned on this website are the properties of their respective owners and are acknowledged as such.</p>
            <div className="social-links d-flex mt-4">
              <Link href="https://wwww.linkedin.com/company/vj-coresoft-pvt.-ltd/" target="_blank">
                <i className="bi bi-linkedin"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/terms"> Terms of service</Link>
              </li>
              <li>
                <Link href="/disclaimer">Disclaimer</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              { servicesLink && servicesLink.map(service => {
                return (<li key={service.name}>
                  <Link href={service.href}>{service.name}</Link>
                </li> )
              })}
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>Ground Floor, IT-6 Building</p>
            <p>Qubix Business Park, Rajiv Gandhi Infotech Park, Phase-1</p>
            <p>Hinjewadi, Pune, Maharashtra(india)</p>
            <p>411057</p>
            <p className="mt-4">
              <strong>Phone:</strong> <span>+91-20-66840017</span>
            </p>
            <p>
              <strong>Email:</strong> <span>info@vjcs.com</span>
            </p>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">VJCS</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
        <div className="credits"></div>
      </div>
    </footer>
  );
};

export default Footer;
