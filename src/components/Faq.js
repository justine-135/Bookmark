import { useState } from "react";
import { ReactComponent as Arrow } from "../images/icon-arrow.svg";

const Faq = () => {
	const [accordion1, setAccordion1] = useState("");
	const [accordion2, setAccordion2] = useState("");
	const [accordion3, setAccordion3] = useState("");
	const [accordion4, setAccordion4] = useState("");

	const accordionHandler = (e) => {
		if (e.target.id === "1") {
			if (accordion1 === "") {
				setAccordion1("open");
			} else {
				setAccordion1("");
			}
		} else if (e.target.id === "2") {
			if (accordion2 === "") {
				setAccordion2("open");
			} else {
				setAccordion2("");
			}
		} else if (e.target.id === "3") {
			if (accordion3 === "") {
				setAccordion3("open");
			} else {
				setAccordion3("");
			}
		} else if (e.target.id === "4") {
			if (accordion4 === "") {
				setAccordion4("open");
			} else {
				setAccordion4("");
			}
		}
	};

	return (
		<section className="faq-bg">
			<div className="faq-bg__i-m">
				<h2>Frequently Asked Questions</h2>
				<p>
					Here are some of our FAQs. If you have any other questions you’d like
					answered please feel free to email us.
				</p>
			</div>
			<div className="faq-bg__q-sec">
				<div className={"faq-bg__q-sec__question " + accordion1}>
					<button id="1" onClick={(id) => accordionHandler(id)}>
						What is Bookmark?
						<Arrow className={accordion1} />
					</button>
					<div className={"faq-bg__q-sec__question__answer " + accordion1}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
							tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
							quis quam ornare mattis.
						</p>
					</div>
				</div>
				<div className={"faq-bg__q-sec__question " + accordion2}>
					<button id="2" onClick={(id) => accordionHandler(id)}>
						How can I request a new browser?
						<Arrow className={accordion2} />
					</button>
					<div className={"faq-bg__q-sec__question__answer " + accordion2}>
						<p>
							Vivamus luctus eros aliquet convallis ultricies. Mauris augue
							massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus
							eros aliquet convallis ultricies. Mauris augue massa, ultricies
							non ligula. Suspendisse imperdie tVivamus luctus eros aliquet
							convallis ultricies. Mauris augue massa, ultricies non ligula.
							Suspendisse imperdiet.
						</p>
					</div>
				</div>
				<div className={"faq-bg__q-sec__question " + accordion3}>
					<button id="3" onClick={(id) => accordionHandler(id)}>
						Is there a mobile app?
						<Arrow className={accordion3} />
					</button>
					<div className={"faq-bg__q-sec__question__answer " + accordion3}>
						<p>
							Sed consectetur quam id neque fermentum accumsan. Praesent luctus
							vestibulum dolor, ut condimentum urna vulputate eget. Cras in
							ligula quis est pharetra mattis sit amet pharetra purus. Sed
							sollicitudin ex et ultricies bibendum.
						</p>
					</div>
				</div>
				<div className={"faq-bg__q-sec__question " + accordion4}>
					<button id="4" onClick={(id) => accordionHandler(id)}>
						What about other Chromium browsers?
						<Arrow className={accordion4} />
					</button>
					<div className={"faq-bg__q-sec__question__answer " + accordion4}>
						<p>
							Integer condimentum ipsum id imperdiet finibus. Vivamus in
							placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida
							pellentesque non ut velit.
						</p>
					</div>
				</div>
			</div>
			<div className="faq-bg__more-info">
				<button>More Info</button>
			</div>
		</section>
	);
};

export default Faq;
