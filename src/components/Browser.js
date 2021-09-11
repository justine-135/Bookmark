import { ReactComponent as Dots } from "../images/bg-dots.svg";
import { ReactComponent as Chrome } from "../images/logo-chrome.svg";
import { ReactComponent as Firefox } from "../images/logo-firefox.svg";
import { ReactComponent as Opera } from "../images/logo-opera.svg";

const Browser = () => {
	return (
		<section className="s-bg">
			<div className="s-bg__i-m">
				<h2>Download the extension</h2>
				<p>
					We’ve got more browsers in the pipeline. Please do let us know if
					you’ve got a favourite you’d like us to prioritize.
				</p>
			</div>
			<div className="s-bg__c-c">
				<div className="s-bg__c-c__browser chrome">
					<Chrome className="browser-icon" />
					<h6>Add to Chrome</h6>
					<span>Minimum version 62</span>
					<Dots className="dots" />
					<button>Add & Install Extension</button>
				</div>
				<div className="s-bg__c-c__browser firefox">
					<Firefox className="browser-icon" />
					<h6>Add to Firefox</h6>
					<span>Minimum version 55</span>
					<Dots className="dots" />
					<button>Add & Install Extension</button>
				</div>
				<div className="s-bg__c-c__browser opera">
					<Opera className="browser-icon" />
					<h6>Add to Opera</h6>
					<span>Minimum version 46</span>
					<Dots className="dots" />
					<button>Add & Install Extension</button>
				</div>
			</div>
		</section>
	);
};

export default Browser;
