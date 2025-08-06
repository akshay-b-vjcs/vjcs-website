import NavBar from "../NavBar/NavBar"
import TopBar from "../TopBar/TopBar"

export default function Header() {
	return  (
		<header id="header" className="header fixed-top">
			<TopBar />
			<NavBar />			
		</header>
	)
}