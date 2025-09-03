"use client";

import { SetStateAction, useState } from "react";
import Card from "../Card/Card";
import PageBaner from "@components/PageBaner/PageBaner";
import "./Contact.css";
import ReCAPTCHA from "react-google-recaptcha";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    companyName: "",
    companyNumber: "",
    city: "",
    natureOfService: [] as string[],
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  // const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevFormData) => {
      const updatedServices = checked
        ? [...prevFormData.natureOfService, value]
        : prevFormData.natureOfService.filter((item) => item !== value);

      return {
        ...prevFormData,
        natureOfService: updatedServices,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Check if CAPTCHA is completed
    if (!captchaToken) {
      setStatus("error");
      alert("Please complete the CAPTCHA.");
      return;
    }
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        token: captchaToken, // Add the CAPTCHA token here
      }),
    });

    if (res.ok) {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
        companyName: "",
        companyNumber: "",
        city: "",
        natureOfService: [],
      });

      setCaptchaToken(null); // Reset CAPTCHA token
    } else {
      setStatus("error");
    }
  };

  return (
    <>
      <PageBaner heading="Contact" />
      <section id="contact" className="contact section">
        <div className="container">
          <div className="contact-main-wrapper">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.8673674646707!2d73.73621001436962!3d18.580017372203947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbb92cf02f65%3A0x655f5694ce2e18fa!2sVJ%20Coresoft%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1670319117912!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>

            <div className="contact-content">
              <div className="contact-form-container">
                <h3>Get in Touch</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua
                  consectetur adipiscing.
                </p>
                <form
                  onSubmit={handleSubmit}
                  method="POST"
                  className="php-email-form"
                >
                  <div className="row">
                    <div className="col-md-6 form-group pt-3">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group pt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 form-group pt-3">
                      <input
                        type="text"
                        className="form-control"
                        name="companyName"
                        placeholder="Company Name"
                        value={formData.companyName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 form-group pt-3 mt-md-0">
                      <input
                        type="text"
                        className="form-control"
                        name="companyNumber"
                        placeholder="Company Number"
                        value={formData.companyNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 form-group pt-3">
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 form-group pt-3 mt-md-0">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={1}
                        placeholder="Enquiry"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 form-group pt-3">
                      <label>Nature of Service</label>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="natureOfService"
                          value="CAx Software Services"
                          checked={formData.natureOfService.includes(
                            "CAx Software Services"
                          )}
                          onChange={handleCheckboxChange}
                        />
                        <label className="form-check-label">
                          CAx Software Services
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="natureOfService"
                          value="PLM"
                          checked={formData.natureOfService.includes("PLM")}
                          onChange={handleCheckboxChange}
                        />
                        <label className="form-check-label">PLM</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="natureOfService"
                          value="Engineering Design Services"
                          checked={formData.natureOfService.includes(
                            "Engineering Design Services"
                          )}
                          onChange={handleCheckboxChange}
                        />
                        <label className="form-check-label">
                          Engineering Design Services
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="natureOfService"
                          value="Digitization Services"
                          checked={formData.natureOfService.includes(
                            "Digitization Services"
                          )}
                          onChange={handleCheckboxChange}
                        />
                        <label className="form-check-label">
                          Digitization Services
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="natureOfService"
                          value="Other"
                          checked={formData.natureOfService.includes("Other")}
                          onChange={handleCheckboxChange}
                        />
                        <label className="form-check-label">Other</label>
                      </div>
                    </div>
                    <div className="col-md-6 form-group pt-3 mt-md-0">
                      <ReCAPTCHA
                        sitekey="YOUR_SITE_KEY"
                        onChange={handleCaptchaChange}
                      />
                    </div>
                  </div>

                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>

                  <div className="form-submit">
                    <button type="submit">Send Message</button>
                    <div className="social-links">
                      <a href="#">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="services"
        className="services py-5 bg-light position-relative overflow-hidden mt-5"
      >
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <Card
                icon="bi-geo-alt-fill"
                title={
                  <>
                    Registered office, Pune <span>VJ Coresoft Pvt. Ltd.</span>
                  </>
                }
                description={
                  <>
                    <span>
                      3rd floor, Sr.No.128/A, Kailaschandra Building, Paud Road,
                      Kothrud, Pune, Maharashtra (India) – 411 038
                      <br />
                      <i className="bi bi-telephone-fill pe-2"></i>
                      Phone: +91-20-66840000(Board)
                      <br />
                      +91-20-66840017 (Reception)
                      <br />
                      <i className="bi bi-chat-left-dots-fill  pe-2"></i>
                      Fax: +91-20-66840017
                      <br />
                      <i className="bi bi-envelope-fill  pe-2"></i>
                      E-mail: info@vjcs.com
                      <br />
                      <i className="bi bi-envelope-fill  pe-2"></i>
                      E-mail: accounts@vjcs.com
                      <br />
                      CIN: U74900PN2010PTC137589
                    </span>
                  </>
                }
              />
            </div>

            <div className="col-lg-4 col-md-6">
              <Card
                icon="bi-geo-alt-fill"
                title={
                  <>
                    Corporate Office, Pune<span>VJ Coresoft Pvt. Ltd.</span>
                  </>
                }
                description={
                  <>
                    <span>
                      Ground Floor, IT-6 Building, Qubix Business Park, Rajiv
                      Gandhi Infotech Park, Phase-1, Hinjewadi, Pune,
                      Maharashtra(india) - 411057.
                      <br />
                      <i className="bi bi-telephone-fill  pe-2"></i>
                      Phone: +91-20-66756800
                      <br />
                      +91-20-66756801
                      <br />
                      <i className="bi bi-chat-left-dots-fill  pe-2"></i>
                      Fax: +91-20-66756888
                      <br />
                      <i className="bi bi-envelope-fill  pe-2"></i>
                      E-mail: info@vjcs.com
                    </span>
                  </>
                }
              />
            </div>

            <div className="col-lg-4 col-md-6">
              <Card
                icon="bi-geo-alt-fill"
                title={
                  <>
                    Affiliate Office, USA<span>VJ Coresoft Pvt. Ltd.</span>
                  </>
                }
                description={
                  <>
                    <span>
                      CASI, 2001 South First Street, Champaign, IL 61820, USA
                      <br />
                      <i className="bi bi-telephone-fill  pe-2"></i>
                      Phone: +1 217 531 0704
                      <br />
                      <i className="bi bi-chat-left-dots-fill  pe-2"></i>
                      Fax: +1 217 531 0705
                      <br />
                      Website: http://www.casicorp.com
                    </span>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
