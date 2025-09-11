import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from "@components/Card/Card";
import PageBaner from "@components/PageBaner/PageBaner";

const Service:React.FC = () => {
  return (
  <>
    <PageBaner heading="Services"/>
    <section id="services" className="services py-4 py-md-5" >
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 col-md-6 ">
            <Card
              icon="bi bi-building-gear"
              title="CAx Software Services"
              description="Delivering advanced CAD/CAM and CAE development solutions with rigorous QA & testing to power precision engineering and digital innovation."
              links={[
                {
                  text: "CAD/CAM Development",
                  url: "/service-details/cad-cam-development",
                  icon: "bi bi-code-square",
                },
                {
                  text: "CAE Development",
                  url: "/service-details/cae-development",
                  icon: "bi bi-bounding-box",
                },
                {
                  text: "CAx Software QA & Testing",
                  url: "/service-details/cax-software-testing",
                  icon: "bi bi-check2-square",
                },
              ]}
            />
          </div>

          <div className="col-lg-6 col-md-6 ">
            <Card
              icon="bi bi-gear-wide-connected"
              title="Engineering Design Services"
              description="Empowering innovation through precision-driven Product Design, intelligent BIM Modeling, and specialized Marine Engineering solutions tailored for modern industry."
              links={[
                {
                  text: "Product Design",
                  url: "/service-details/product-design",
                  icon: "bi bi-box",
                },
                {
                  text: "BIM Modelling Services",
                  url: "/service-details/bim-modelling",
                  icon: "bi bi-building-fill-gear",
                },
                {
                  text: "Marine Engineering",
                  url: "/service-details/marine-engineering",
                  icon: "bi bi-gear-wide-connected",
                },
              ]}
            />
          </div>

          <div className="col-lg-6 col-md-6">
            <Card
              icon="bi bi-cpu"
              title="Digitization Services"
              description="Accelerating industrial innovation through Virtual Manufacturing, smart IIoT connectivity, AI-powered solutions, scalable enterprise applications, and immersive Augmented & Virtual Reality experiences."
              links={[
                {
                  text: "Virtual Manufacturing",
                  url: "/service-details/virtual-manufacturing",
                  icon: "bi bi-cpu",
                },
                {
                  text: "Industrial Internet of Things",
                  url: "/service-details/industrial-iot",
                  icon: "bi bi-wifi",
                },
                {
                  text: "AI Solutions & Services",
                  url: "/service-details/ai-solutions",
                  icon: "bi bi-robot",
                },
                {
                  text: "Enterprise web & mobile",
                  url: "/service-details/enterprise-web-mobile",
                  icon: "bi bi-phone",
                },
                {
                  text: "Augmented & Virtual Reality Apps",
                  url: "/service-details/ar-vr-apps",
                  icon: "bi bi-vr",
                },
              ]}
            />
          </div>

          <div className="col-lg-6 col-md-6">
            <Card
              icon="bi bi-diagram-3"
              title="PLM (Product Lifecycle Management)"
              description="Comprehensive PLM solutions covering global system commissioning, CAD customization, seamless tool integration, and end-to-end support—empowering businesses to streamline product development from concept to sustainment."
              links={[
                {
                  text: "Learn More",
                  url: "/service-details/plm",
                  icon: "bi bi-diagram-3",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  </>
  );
};
export default Service;
