import Card from "@components/Card/Card";
import PageBaner from "@components/PageBaner/PageBaner";

const services = [
  {
    icon: "bi bi-building-gear",
    title: "CAx Software Services",
    links: [
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
    ],
  },
  {
    icon: "bi bi-gear-wide-connected",
    title: "Engineering Design Services",
    links: [
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
    ],
  },
  {
    icon: "bi bi-cpu",
    title: "Digitization Services",
    links: [
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
    ],
  },
  {
    icon: "bi bi-diagram-3",
    title: "PLM (Product Lifecycle Management)",
   
    links: [
      {
        text: "Learn More",
        url: "/service-details/plm",
        icon: "bi bi-diagram-3",
      },
    ],
  },
];

const Service: React.FC = () => {
  return (
    <>
      <PageBaner heading="Services" />
      <section id="services" className="services py-4 py-md-5">
        <div className="container">
          <div className="row gy-4">
            {services.map((service, index) => (
              <div className="col-lg-6 col-md-6" key={index}>
                <Card
                  icon={service.icon}
                  title={service.title}
                  links={service.links}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
