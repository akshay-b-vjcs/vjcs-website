"use client;"

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MegaMenu from "@components/NavBar/MegaMenu";
import logo from "@image/logo_1.png";
import "./NavBar.css";

const NavBar:React.FC = () => {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const handleNavLinkClick = () => {
    setIsNavOpen(false); // close menu when clicking a link
  };

  // Add/remove "mobile-nav-active" on <body>
  useEffect(() => {
    if (typeof document !== "undefined") {
      if (isNavOpen) {
        document.body.classList.add("mobile-nav-active");
      } else {
        document.body.classList.remove("mobile-nav-active");
      }
    }
    return () => {
      // cleanup on unmount
      document.body.classList.remove("mobile-nav-active");
    };
  }, [isNavOpen]);

  return (
    <div className="branding d-flex align-items-cente">
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between m-0">
        <Link href="/" className="logo d-flex align-items-center">
          {/* -- Uncomment the line below if you also wish to use an image logo -- */}
          <Image src={logo} alt="V J Coresoft Pvt. Ltd." />
          {/* <h1 className="sitename">Passion</h1> */}
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link href="/" className={`${pathname === "/" ? "active" : ""}`} onClick={handleNavLinkClick}>Home</Link>
            </li>
            <li>
              <Link href="/about" className={`${pathname === "/about" ? "active" : ""}`} onClick={handleNavLinkClick}>About</Link>
            </li>
            <MegaMenu handleClickOnLink={handleNavLinkClick} pathname={pathname}/>
            <li>
              <Link href="/career" className={`${pathname === "/career" ? "active" : ""}`} onClick={handleNavLinkClick}>Career</Link>
            </li>
            <li>
              <Link href="/contact" className={`${pathname === "/contact" ? "active" : ""}`} onClick={handleNavLinkClick}>Contact</Link>
            </li>
          </ul>

          {/* mobile toggle button */}
          <i
            className={`mobile-nav-toggle ${isNavOpen ? "bi-x" : "bi-list"}`}
            onClick={toggleNav}
          ></i>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;