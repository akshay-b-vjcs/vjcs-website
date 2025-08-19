
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CountUp from "../Count/Count";
import Card from "../Card/Card";

export default function Service() {
 

  return (
    <section
      id="services"
      className="services py-5 bg-light position-relative overflow-hidden mt-5"
    >
      <div className="container text-center mb-5 mt-5 section-title">
        <h2 className="fw-bold">Services</h2>
        <p className="text-dark">CHECK OUR SERVICES</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 col-md-6 ">
            <Card
              icon="bi-gear"
              title="CAx Software Services"
              description="Comprehensive CAD/CAM solutions to streamline workflows."
             
              links={[
                { text: "CAD/CAM Development", url: "/Service-Details" },
                { text: "CAE Development", url: "/contact" },
                { text: "CAx Software QA & Testing", url: "/case-study/cad" },
              ]}
            />
          </div>

          <div className="col-lg-6 col-md-6">
            <Card
              icon="bi-palette"
              title="PLM"
              description="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar."
              links={[
                { text: "Learn More", url: "/services/cad-cam" },
             
              ]}
            />
          </div>

          <div className="col-lg-6 col-md-6 ">
            <Card
              icon="bi-code-slash"
              title="Engineering Design Services"
              description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec rutrum congue leo eget malesuada."
               links={[
                { text: "Product Design", url: "/services/cad-cam" },
                { text: "BIM Modelling Services", url: "/contact" },
                { text: "Marine Engineering", url: "/case-study/cad" },
              ]}
             
            />
          </div>

          <div className="col-lg-6 col-md-6">
            <Card
              icon="bi-palette"
              title="Digitization Services"
              description="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar."
              links={[
                { text: "Virtual Manufacturing", url: "/services/cad-cam" },
                { text: "Industrial Internet of Things", url: "/contact" },
                { text: "AI Solutions & Services", url: "/case-study/cad" },
                { text: "Enterprise web & mobile", url: "/contact" },
                { text: "Augmented & Virtual Reality Apps", url: "/case-study/cad" },
              ]}
              price="Starting at $1,899"
            />
          </div>

        
        </div>

        {/* Stats Section */}
        <div className="stats-highlight text-dark-green rounded-4 py-5 px-3 mt-5 position-relative overflow-hidden">
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
      </div>
    </section>
  );
}
