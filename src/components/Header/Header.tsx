"use client";
import React, { useEffect } from 'react'
import Link from 'next/link';

import './Header.css'
import NavBar from "../NavBar/NavBar"

const Header:React.FC = () => {
  /** To hide/show the top header bar when page scroll to down/up */
	useEffect(() => {
    const toggleScrolled = () => {
      const selectBody = document.querySelector("body") as HTMLBodyElement | null;
      const selectHeader = document.querySelector("#header") as HTMLElement | null;

      if (!selectBody || !selectHeader) return;

      if (
        !selectHeader.classList.contains("scroll-up-sticky") &&
        !selectHeader.classList.contains("sticky-top") &&
        !selectHeader.classList.contains("fixed-top")
      )
        return;

      if (window.scrollY > 100) {
        selectBody.classList.add("scrolled");
      } else {
        selectBody.classList.remove("scrolled");
      }
    };

    // attach listeners
    document.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);

    // run once on mount
    toggleScrolled();

    // cleanup on unmount
    return () => {
      document.removeEventListener("scroll", toggleScrolled);
      window.removeEventListener("load", toggleScrolled);
    };
  }, []);

	return  (
		<header id="header" className="header fixed-top">
			<div className="topbar d-flex align-items-center dark-background">
				<div className="container d-flex justify-content-center justify-content-md-between">
					<div className="contact-info d-flex align-items-center">
					<i className="bi bi-envelope d-flex align-items-center"><Link href="mailto:info@vjcs.com">info@vjcs.com</Link></i>
					<i className="bi bi-phone d-flex align-items-center ms-4"><span>+91-20-66840017</span></i>
					</div>
					<div className="social-links d-none d-md-flex align-items-center">
					{/* <Link href="#" className="twitter"><i className="bi bi-twitter-x"></i></Link>
					<Link href="#" className="facebook"><i className="bi bi-facebook"></i></Link>
					<Link href="#" className="instagram"><i className="bi bi-instagram"></i></Link> */}
					<Link href="https://wwww.linkedin.com/company/vj-coresoft-pvt.-ltd/" className="linkedin" target="_blank"><i className="bi bi-linkedin"></i></Link>
					</div>
				</div>
			</div> 
			<NavBar />		
		</header>
	)
}

export default Header;