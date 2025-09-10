import "./page.css";

import Carousel from "@/components/Carousel/Carousel";
import CountUp from "@components/Count/Count"

export default function Home() {
  return(
    // Old Home Page Code

    // <section id="hero" className="hero section dark-background">
    //   <div className="hero-background">
    //     <Image src={bg14} alt="" data-aos-duration="1000" />
    //     <div className="overlay"></div>
    //   </div>

    //   <div className="container">
    //     <div className="row align-items-center">
    //       <div className="col-lg-6">
    //         <div className="hero-content">
    //           <span className="hero-badge">Innovative Solutions</span>
    //           <h1>Transform Your Business with Modern Technology</h1>
    //           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.</p>
    //           <div className="hero-actions">
    //             <a href="/services" className="btn-primary">Explore Services</a>
    //             {/* <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="btn-secondary glightbox">
    //               <i className="bi bi-play-circle"></i>
    //               <span>Watch Demo</span>
    //             </a> */}
    //           </div>
    //           <div className="hero-stats">
    //             <div className="stat-item">
    //               <span className="stat-number">500+</span>
    //               <span className="stat-label">Projects Completed</span>
    //             </div>
    //             <div className="stat-item">
    //               <span className="stat-number">98%</span>
    //               <span className="stat-label">Client Satisfaction</span>
    //             </div>
    //             <div className="stat-item">
    //               <span className="stat-number">24/7</span>
    //               <span className="stat-label">Support Available</span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-6">
    //         <div className="hero-visual">
    //           <div className="row g-3">
    //             <div className="col-6">
    //               <div className="feature-card">
    //                 <i className="bi bi-shield-check"></i>
    //                 <span>Secure &amp; Reliable</span>
    //               </div>
    //               <div className="feature-card">
    //                 <i className="bi bi-people"></i>
    //                 <span>Expert Team</span>
    //               </div>
    //             </div>
    //             <div className="col-6">
    //               <div className="feature-card">
    //                 <i className="bi bi-speedometer2"></i>
    //                 <span>High Performance</span>
    //               </div>
    //               <div className="feature-card">
    //                 <i className="bi bi-award"></i>
    //                 <span>Award Winning</span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    
    // Imported Carousel 
    <section id="hero" className="">
      <Carousel/>
      {/* Stats Section */}
      <div className="stats-highlight text-dark-green rounded-4 py-5 px-3 my-3 position-relative overflow-hidden container">
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
                <CountUp target={22} duration={3000} /> +
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
    </section>
  )
}
