import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CountUp from "../Count/Count";
import Card from "../Card/Card";
import PageBaner from "../PageBaner/PageBaner";

export default function Service() {
 

  return (
    <section
      id="services"
      className="services py-5 bg-light position-relative overflow-hidden mt-5"
    >
      <PageBaner
        heading="Services"
        description="Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias."
      />

      <div className="container text-center mb-5 mt-5 section-title">
        <h2 className="fw-bold">Services</h2>
        <p className="text-dark">CHECK OUR SERVICES</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 col-md-6 ">
            <Card
              icon="bi bi-cpu"
              title="CAx Software Services"
              description="Comprehensive CAD/CAM solutions to streamline workflows."
              links={[
                {
                  text: "CAD/CAM Development",
                  url: "/Service-Details/cad-cam-development",
                  icon: "bi bi-cpu",
                },
                {
                  text: "CAE Development",
                  url: "/Service-Details/cae-development",
                  icon: "bi bi-cpu",
                },
                {
                  text: "CAx Software QA & Testing",
                  url: "/Service-Details/cax-software-testing",
                  icon: "bi bi-cpu",
                },
              ]}
            />
          </div>

          <div className="col-lg-6 col-md-6">
            <Card
              icon="bi bi-diagram-3"
              title="PLM"
              description="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar."
              links={[
                {
                  text: "Learn More",
                  url: "/Service-Details/plm",
                  icon: "bi bi-diagram-3",
                },
              ]}
            />
          </div>

          <div className="col-lg-6 col-md-6 ">
            <Card
              icon="bi bi-gear-wide-connected"
              title="Engineering Design Services"
              description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec rutrum congue leo eget malesuada."
              links={[
                {
                  text: "Product Design",
                  url: "/Service-Details/product-design",
                  icon: "bi bi-gear-wide-connected",
                },
                {
                  text: "BIM Modelling Services",
                  url: "/Service-Details/bim-modelling",
                  icon: "bi bi-gear-wide-connected",
                },
                {
                  text: "Marine Engineering",
                  url: "/Service-Details/marine-engineering",
                  icon: "bi bi-gear-wide-connected",
                },
              ]}
            />
          </div>

          <div className="col-lg-6 col-md-6">
            <Card
              icon="bi bi-layers"
              title="Digitization Services"
              description="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar."
              links={[
                {
                  text: "Virtual Manufacturing",
                  url: "/Service-Details/virtual-manufacturing",
                  icon: "bi bi-layers",
                },
                {
                  text: "Industrial Internet of Things",
                  url: "/Service-Details/industrial-iot",
                  icon: "bi bi-layers",
                },
                {
                  text: "AI Solutions & Services",
                  url: "/Service-Details/ai-solutions",
                  icon: "bi bi-layers",
                },
                {
                  text: "Enterprise web & mobile",
                  url: "/Service-Details/enterprise-web-mobile",
                  icon: "bi bi-layers",
                },
                {
                  text: "Augmented & Virtual Reality Apps",
                  url: "/Service-Details/ar-vr-apps",
                  icon: "bi bi-layers",
                },
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
