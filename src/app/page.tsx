import Link from "next/link";
import Carousel from "@/components/Carousel/Carousel";
import CountUp from "@components/Count/Count"

import "./page.css";

const Home: React.FC = () => {
  return(
  <>
    <section className="section">
      <Carousel/>
    </section>
    <section className="hero section light-background">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <span className="hero-badge">Innovative Solutions</span>
            <h1>Welcome to VJ Coresoft Pvt. Ltd.</h1>
          </div>
          <div className="col-lg-8">
            <div className="hero-content">
              <p>VJ Coresoft Pvt. Ltd. is a global IT company offering expert software development services in key engineering and manufacturing fields. With a unique blend of deep Engineering Domain knowledge and advanced software expertise.</p>

              <p>We deliver powerful solutions in:</p>
              <ul className="features-list">
                <li>CAD/CAE/CAM Software Development</li>
                <li>Engineering Design Services</li>
                <li>Digitization Services</li>
                <li>Product Lifecycle Management(PLM) </li>
              </ul>
              <p>Based in Hinjewadi, Pune, India, we proudly serve a diverse range of industries, including Automotive, Aerospace, Marine Engineering, Construction, and Heavy Industries, with a client base spanning Europe, USA, the Middle East, Asia-Pacific, and India.</p>
              <div className="hero-actions">
                <Link href="/services" className="btn-primary">Explore Services</Link>
              </div>
              
            </div>
          </div>
          <div className="col-lg-4">
            <div className="hero-visual">
              <div className="row g-3">
                <div className="col-6">
                  <div className="feature-card">
                    <i className="bi bi-shield-check"></i>
                    <span>Secure &amp; Reliable</span>
                  </div>
                  <div className="feature-card">
                    <i className="bi bi-people"></i>
                    <span>Expert Team</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="feature-card">
                    <i className="bi bi-speedometer2"></i>
                    <span>High Performance</span>
                  </div>
                  <div className="feature-card">
                    <i className="bi bi-award"></i>
                    <span>Award Winning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="bg-pattern stats-highlight text-dark-green py-5 px-3 my-5 position-relative overflow-hidden container">
        <div className="row text-center position-relative z-2">
          <div className="col-lg-4 col-md-4 mb-4 mb-lg-0 counter-border">
            <div className="stat-item text-white">
              <div className="stat-number fs-1 fw-bold">
                <CountUp target={90} duration={3000} /> +
              </div>
              <div className="stat-label">Valued Clients</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 mb-4 mb-lg-0 counter-border">
            <div className="stat-item text-white">
              <div className="stat-number fs-1 fw-bold">
                <CountUp target={27} duration={3000} /> +
              </div>
              <div className="stat-label">Years of Trusted Excellence</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
            <div className="stat-item text-white">
              <div className="stat-number fs-1 fw-bold">
                <CountUp target={18} duration={3000} /> +
              </div>
              <div className="stat-label">Countries and Growing</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>    
  </>
  )
}

export default Home;