import './Header.css'
import NavBar from "../NavBar/NavBar"

export default function Header() {
	return  (
		<header id="header" className="header fixed-top">
			<div className="topbar d-flex align-items-center dark-background">
				<div className="container d-flex justify-content-center justify-content-md-between">
					<div className="contact-info d-flex align-items-center">
					<i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
					<i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
					</div>
					<div className="social-links d-none d-md-flex align-items-center">
					<a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
					<a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
					<a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
					<a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
					</div>
				</div>
			</div> 
			<NavBar />		
		</header>
	)
}