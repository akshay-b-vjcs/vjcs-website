import React from "react" 
import Link from "next/link"

import "./Footer.css"

const Footer:React.FC = () => {
  return (   
    <footer id="footer" className="footer position-relative dark-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-about">
            <Link href="/" className="logo d-flex align-items-center">
              <span className="sitename">V J Coresoft Pvt. Ltd.</span>
            </Link>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
            <div className="social-links d-flex mt-4">
              <Link href=""><i className="bi bi-twitter-x"></i></Link>
              <Link href=""><i className="bi bi-facebook"></i></Link>
              <Link href=""><i className="bi bi-instagram"></i></Link>
              <Link href=""><i className="bi bi-linkedin"></i></Link>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="#">Terms of service</Link></li>
              <li><Link href="#">Privacy policy</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><Link href="#">Web Design</Link></li>
              <li><Link href="#">Web Development</Link></li>
              <li><Link href="#">Product Management</Link></li>
              <li><Link href="#">Marketing</Link></li>
              <li><Link href="#">Graphic Design</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p>United States</p>
            <p className="mt-4"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
            <p><strong>Email:</strong> <span>info@example.com</span></p>
          </div>

        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">VJCS</strong> <span>All Rights Reserved</span></p>
        <div className="credits">
        </div>
      </div>

    </footer>
  )
}

export default Footer;