import "./Contact.css"

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      {/* <!-- Section Title --> */}
      <div className="container section-title">
        <h2>Contact</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container">
        <div className="contact-main-wrapper">
          <div className="map-wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.8673674646707!2d73.73621001436962!3d18.580017372203947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbb92cf02f65%3A0x655f5694ce2e18fa!2sVJ%20Coresoft%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1670319117912!5m2!1sen!2sin" width="100%" height="100%"  style={{ border: 0 }}  loading="lazy" ></iframe> 
          </div>

          <div className="contact-content">
            <div className="contact-cards-container">
              <div className="contact-card">
                <div className="icon-box">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>8721 Broadway Avenue, New York, NY 10023</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="icon-box">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>info@examplecompany.com</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="icon-box">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="contact-text">
                  <h4>Call</h4>
                  <p>+1 (212) 555-7890</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="icon-box">
                  <i className="bi bi-clock"></i>
                </div>
                <div className="contact-text">
                  <h4>Open Hours</h4>
                  <p>Monday-Friday: 9AM - 6PM</p>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h3>Get in Touch</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing.</p>

              <form action="forms/contact.php" method="post" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                  
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows={5} placeholder="Message" required></textarea>
                </div>

                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>

                <div className="form-submit">
                  <button type="submit">Send Message</button>
                  <div className="social-links">
                    <a href="#"><i className="bi bi-twitter"></i></a>
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

