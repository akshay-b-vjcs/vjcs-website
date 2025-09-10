import Image from "next/image";
import Link from "next/link";
import MegaMenu from "@components/NavBar/MegaMenu";

import "./NavBar.css";

import logo from "@image/logo_1.png";

const NavBar:React.FC = () => {
  return (
    <div className="branding d-flex align-items-center">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center">
          {/* -- Uncomment the line below if you also wish to use an image logo -- */}
          <Image src={logo} alt="V J Coresoft Pvt. Ltd." />
          {/* <h1 className="sitename">Passion</h1> */}
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link href="/" className="active">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <MegaMenu />
            <li>
              <Link href="/career">Career</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;