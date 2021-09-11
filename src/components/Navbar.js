import { ReactComponent as Logo } from "../images/logo-bookmark.svg";
// import { ReactComponent as Hamburger } from "../images/icon-hamburger.svg";
import { useState, useEffect } from "react";

const Navbar = ({ setOverlay }) => {
	const [open, setOpen] = useState("");

	useEffect(() => {
		if (open === "open") {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [open]);

	const hamburgerHandler = () => {
		if (open === "") {
			//Open
			setOpen("open");
			setOverlay("open");
		} else {
			setOpen("");
			setOverlay("");
		}
	};

	return (
		<nav className="nb-bg">
			<div className="nb-bg__nb">
				<Logo className={"logo " + open} />
				<ul>
					<li>
						<a href="#">features</a>
					</li>
					<li>
						<a href="#">pricing</a>
					</li>
					<li>
						<a href="#">contact</a>
					</li>
					<li>
						<a href="#">login</a>
					</li>
				</ul>
				<div
					className={"nb-bg__nb__hamburger " + open}
					onClick={hamburgerHandler}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<div className={"mobile-menu " + open}>
				<a href="">Features</a>
				<a href="">Pricing</a>
				<a href="">Contact</a>
				<a href="">Login</a>
			</div>
		</nav>
	);
};

export default Navbar;
