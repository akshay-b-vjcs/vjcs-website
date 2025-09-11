"use client";

import PageBaner from "@components/PageBaner/PageBaner";
import "./Disclaimer.css";

const Disclaimer:React.FC = () => {
  return (
  <>
    <PageBaner heading={"Disclaimer"} />
    <section className="terms-section my-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 terms-text p-4 rounded-3  shadow ">
            <h2 className="site-url">Disclaimer</h2>

            <p
              style={{
                color: "#384943",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
              className="text-muted"
            >
              VJCS is sensitive to privacy issues on the Internet. We believe it
              is important you know how we treat the information about you; we
              receive from you, on the Internet.
            </p>

            <p
              style={{
                color: "#384943",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
              className="text-muted"
            >
              In general, you can visit VJCS on our website without telling us
              who you are or revealing any information about yourself. Our Web
              servers collect the domain names, not the e-mail addresses, of
              visitors. This information is aggregated to measure the number of
              visits, average time spent on the site, pages viewed, etc. VJCS
              uses this information to measure the use of our site and to
              improve the content of our site. Your accessing our site signifies
              your unconditional consent to allow the collection of your domain
              names.
            </p>
            <p
              style={{
                color: "#384943",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
              className="text-muted"
            >
              There are times, however, when we may need information from you,
              such as your name and contact details. When information is needed,
              we will try (but are not obligated) to let you know at the time of
              collection, how we will use the personal information. Usually, the
              personal information we collect is used only by us to respond to
              your inquiry, process an order or allow you to access specific
              account information
            </p>

            <p
              style={{
                color: "#384943",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
              className="text-muted"
            >
              At times we conduct on-line surveys to better understand the needs
              and profile of our visitors. When we conduct a survey, we will try
              (but are not obligated) to let you know how we will use the
              information at the time we collect information from you on the
              Internet.
            </p>

            <p
              style={{
                color: "#384943",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
              className="text-muted"
            >
              You recognize and understand that there is no compulsion on you to
              provide us with your personal information and any and all personal
              information provided by you to us is with your full consent, own
              volition and desire to provide such personal information. You also
              understand that we are under no obligation to verify the source
              from which the personal information about you is provided to us,
              and they are deemed to be provided by you, unless you demonstrate
              to us within a period of fifteen days from the date of providing
              of such information to us, to our satisfaction, that the
              information was provided to us without your free consent.
            </p>
            <p
              style={{
                color: "#384943",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
              className="text-muted"
            >
              VJCS Web site may contain links to other sites such as VJCS
              partners and affiliates. While we try to link only to sites that
              share our high standards and respect for privacy, we are not
              responsible for the content or the privacy practices employed by
              other sites.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default Disclaimer;
