import "./Service.css";
import Card from "../Card/Card";
import CountUp from "../Count/Count";

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
              icon="bi-code-slash"
              title="Web Development"
              description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec rutrum congue leo eget malesuada."
              linkText="Get Started"
              linkUrl="service-details"
              badge="Most Popular"
              price="Starting at $2,999"
              featured={true}
            />
          </div>

          <div className="col-lg-6 col-md-6">
            <Card
              icon="bi-palette"
              title="UI/UX Design"
              description="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar."
              linkText="Learn More"
              linkUrl="service-details.html"
              price="Starting at $1,899"
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <Card
              icon="bi-graph-up-arrow"
              title="Digital Marketing"
              description="Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus."
              linkText="Explore"
              linkUrl="service-details.html"
              compact
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <Card
              icon="bi-shield-check"
              title="Security Solutions"
              description="Mauris blandit aliquet elit, eget tincidunt nibh pulvinar vel. Sed porttitor lectus nibh vestibulum ac diam sit."
              linkText="Discover"
              linkUrl="service-details.html"
              compact
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <Card
              icon="bi-cloud-upload"
              title="Cloud Services"
              description="Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.."
              linkText="Get Quote"
              linkUrl="service-details.html"
              compact
            />
          </div>
        </div>

        <div className="stats-highlight text-dark-green rounded-4 py-5 px-3 mt-5 position-relative overflow-hidden">
          <div className="row text-center position-relative z-2">
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="stat-item text-white">
                <div className="stat-number fs-1 fw-bold">
                     <CountUp target={500} duration={3000}/> +                  
                  </div>
                <div className="stat-label">Projects Completed</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="stat-item text-white">
                <div className="stat-number fs-1 fw-bold">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <div className="stat-item text-white">
                <div className="stat-number fs-1 fw-bold">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-item text-white">
                <div className="stat-number fs-1 fw-bold">
                     <CountUp target={5} duration={3000}/> +

                  </div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
