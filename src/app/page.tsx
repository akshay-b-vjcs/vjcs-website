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
     </section>    
  </>
  )
}

export default Home;