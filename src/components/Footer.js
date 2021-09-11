import { ReactComponent as Logo } from "../images/logo-bookmark.svg";
import { ReactComponent as FbIcon } from "../images/icon-facebook.svg";
import { ReactComponent as TwIcon } from "../images/icon-twitter.svg";
import { ReactComponent as AlertIcon } from "../images/icon-error.svg";
import { useState } from "react";

const Footer = () => {
	const [email, setEmail] = useState("");
	const [invalidEmail, setInvalidEmail] = useState("");
	const [alert, setAlert] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();

		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (email.match(mailformat)) {
			setInvalidEmail("");
			setAlert("");
			return true;
		} else {
			setInvalidEmail("invalid");
			setAlert("alert");
			return false;
		}
	};
	const emailHandler = (e) => {
		setEmail(e.target.value);
	};
	return (
		<footer className="foo-bg">
			<div className="foo-bg__contact-bg">
				<div className="foo-bg__contact-bg__contact">
					<span>35,000 + ALREADY JOINED</span>
					<h6>Stay up-to-date with what we're doing</h6>
					<form
						className="foo-bg__contact-bg__contact__form"
						onSubmit={(e) => submitHandler(e)}
					>
						<input
							type="text"
							name="email"
							id="email"
							className={invalidEmail}
							placeholder="Enter your email address"
							onChange={(e) => emailHandler(e)}
						/>
						<AlertIcon className={"alert-icon " + alert} />

						<div className={"alert-none " + alert}>
							Whoops, make sure it's an email
						</div>
						<input type="submit" value="Contact Us" />
					</form>
				</div>
			</div>
			<div className="foo-bg__footer-links-bg">
				<div className="foo-bg__footer-links-bg__inside">
					<Logo className="logo" />
					<div className="foo-bg__footer-links-bg__inside__links">
						<a href="/">features</a>
						<a href="/">pricing</a>
						<a href="/">contact</a>
					</div>

					<div className="foo-bg__footer-links-bg__inside__socmed">
						<FbIcon />
						<TwIcon />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
