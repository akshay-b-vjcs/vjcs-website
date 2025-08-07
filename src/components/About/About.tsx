"use client";

import { BsAward } from "react-icons/bs";

export default function AboutSection() {
  return (
    <section id="about" className="py-5 mt-5">
      <div className="container ">
        <div className="row align-items-center ">
          {/* Left Content Column */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div>
              <h2 className="h1 fw-bold mb-4 mt-5" style={{ color: "#293a34" }}>
                Transforming Ideas Into Reality Since 2015
              </h2>

              <p
                className="mb-4"
                style={{
                  color: "#384943",
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "1.6",
                }}
              >
                We are a passionate team of innovators dedicated to creating
                exceptional digital experiences that drive meaningful results
                for businesses worldwide.
              </p>

              <p
                className="text-muted mb-3"
                style={{
                  color: "#384943",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "1.6",
                }}
              >
                Our journey began with a simple vision: to bridge the gap
                between cutting-edge technology and human-centered design.
                Today, we’ve grown into a trusted partner for companies seeking
                to transform their digital presence and accelerate their growth.
              </p>
              <p
                className="text-muted mb-4"
                style={{
                  color: "#384943",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "1.6",
                }}
              >
                Through collaborative partnerships and innovative solutions,
                we’ve helped hundreds of organizations achieve their goals while
                building lasting relationships founded on trust, transparency,
                and exceptional results.
              </p>

              {/* Stats */}
              <div className="my-4 py-4 border-top border-bottom">
                <div className="row text-center">
                  <div className="col-md-4 mb-3 mb-md-0">
                    <h3 className="fw-bold text-success">8+</h3>
                    <p className="text-uppercase text-muted small mb-0">
                      Years Experience
                    </p>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <h3 className="fw-bold text-success">450+</h3>
                    <p className="text-uppercase text-muted small mb-0">
                      Projects Completed
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h3 className="fw-bold text-success">25</h3>
                    <p className="text-uppercase text-muted small mb-0">
                      Team Members
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="d-flex gap-3 flex-wrap">
                <a
                  href="#portfolio"
                  className="btn btn-success rounded-pill px-4 py-2 text-uppercase fw-semibold"
                >
                  Discover Our Work
                </a>
                <a
                  href="#team"
                  className="btn btn-outline-success rounded-pill px-4 py-2 text-uppercase fw-semibold"
                >
                  Meet Our Team
                </a>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="col-lg-6 mt-5">
            <div className="position-relative">
              <img
                src="https://bootstrapmade.com/content/demo/Passion/assets/img/about/about-square-8.webp"
                alt="About Us"
                className="img-fluid rounded-4 shadow"
              />

              {/* Floating Award Card */}
              <div
                className="position-absolute bg-white rounded-4 p-3 shadow d-flex align-items-center gap-3"
                style={{
                  left: "-40px", // move outside the image
                  bottom: "20px",
                  maxWidth: "300px",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded-3"
                  style={{
                    backgroundColor: "#E6F4EA",
                    width: "56px",
                    height: "56px",
                  }}
                >
                  <BsAward size={28} color="#0F5132" />
                </div>
                <div>
                  <h6 className="mb-1 fw-semibold text-dark">
                    Excellence Award
                  </h6>
                  <small className="text-muted">Digital Innovation 2023</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}