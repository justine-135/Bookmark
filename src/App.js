import { useState } from "react";
import Navbar from "./components/Navbar";
import HeaderIntro from "./components/HeaderIntro";
import Features from "./components/Features";
import Browser from "./components/Browser";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import { ReactComponent as FbIcon } from "./images/icon-facebook.svg";
import { ReactComponent as TwIcon } from "./images/icon-twitter.svg";

const App = () => {
	const [overlay, setOverlay] = useState("");

	return (
		<div className="App">
			<Navbar overlay={overlay} setOverlay={setOverlay} />
			<HeaderIntro />
			<Features />
			<Browser />
			<Faq />
			<Footer />
			<div className={"overlay " + overlay}>
				<div className="overlay__soc-med">
					<FbIcon />
					<TwIcon />
				</div>
			</div>
		</div>
	);
};

export default App;
