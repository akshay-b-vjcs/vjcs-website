import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel/Carousel";
import CountUp from "@components/Count/Count"

import bg14 from "@image/services/Home.png"
import "./page.css";

const Home: React.FC = () => {
  return(
  <>
    <section className="section">
      <Carousel/>
    </section>
    <section className="hero section dark-background">
      <div className="hero-background">
        <Image src={bg14} alt="" data-aos-duration="1000" />
        <div className="overlay"></div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="hero-content">
              <span className="hero-badge">Innovative Solutions</span>
              <h1>Welcome to VJ Coresoft Pvt. Ltd.</h1>
              <p>VJ Coresoft Pvt. Ltd. is global IT company offering software development services in the field of CAD/CAE/CAM/PLM, Web/Mobile Applications,Engineering Design and Smart Manufacturing services. It is a compnay with unique combination of Engineering Domain knowledge and related software development expertise. VJ Coresoft provides services to wide varity of industries inlcuding CAx Software OEMs, Automotive, Aerospace, Ship Design and Marine Engineering, Construction, Heavy Industries etc.<br/><br/>
              VJ Coresoft is headquartered in Hinjewadi, Pune (India), services clients across Europe, USA, Middle East, Asia-Pacific and India. It is a special economical zone unit.
              </p>
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

        <div className="stats-highlight text-dark-green rounded-4 py-5 px-3 my-5 position-relative overflow-hidden container">
        <div className="row text-center position-relative z-2">
          <div className="col-lg-4 col-md-4 mb-4 mb-lg-0">
            <div className="stat-item text-white">
              <div className="stat-number fs-1 fw-bold">
                <CountUp target={90} duration={3000} /> +
              </div>
              <div className="stat-label">Happy Client</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 mb-4 mb-lg-0">
            <div className="stat-item text-white">
              <div className="stat-number fs-1 fw-bold">
                <CountUp target={27} duration={3000} /> +
              </div>
              <div className="stat-label">Years of proven expertise</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
            <div className="stat-item text-white">
              <div className="stat-number fs-1 fw-bold">
                <CountUp target={18} duration={3000} /> +
              </div>
              <div className="stat-label">Countries serving</div>
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