import { useState } from "react";

const Features = () => {
	const [tab1, setTab1] = useState("active");
	const [tab2, setTab2] = useState("");
	const [tab3, setTab3] = useState("");

	const selectHandler = (e) => {
		e.target.parentElement.childNodes[1].className = "";
		e.target.parentElement.childNodes[3].className = "";
		e.target.parentElement.childNodes[5].className = "";

		setTab1("");
		setTab2("");
		setTab3("");

		if (e.target.className === "") {
			e.target.className = "active";
			if (e.target.id === "1") {
				setTab1("active");
			} else if (e.target.id === "2") {
				setTab2("active");
			} else if (e.target.id === "3") {
				setTab3("active");
			}
		}
	};

	return (
		<section className="f-bg">
			<div className="f-bg__f">
				<div className="f-bg__f__intro">
					<h2>Features</h2>
					<p>
						Our aim is to make it quick and easy for you to access your
						favourite websites. Your bookmarks sync between your devices so you
						can access them on the go.
					</p>
				</div>

				<div className="f-bg__f__select">
					<span></span>
					<button id="1" className="active" onClick={(id) => selectHandler(id)}>
						Simple Bookmarking
					</button>
					<span></span>
					<button id="2" onClick={(id) => selectHandler(id)}>
						Speedy Searching
					</button>
					<span></span>
					<button id="3" onClick={(id) => selectHandler(id)}>
						Easy Sharing
					</button>
					<span></span>
				</div>

				<div className="f-bg__f__sl-c">
					<div className="f-bg__f__sl-c__blue"></div>
					<div className="f-bg__f__sl-c__s">
						<div className={"f-bg__f__sl-c__s__tab tab1 " + tab1}></div>
						<div className={"f-bg__f__sl-c__s__tab tab2 " + tab2}></div>
						<div className={"f-bg__f__sl-c__s__tab tab3 " + tab3}></div>
					</div>

					<div className="f-bg__f__sl-c__t">
						<div className={"f-bg__f__sl-c__t__tab " + tab1}>
							<h2>Bookmark in one click</h2>
							<p>
								Organize your bookmarks however you like. Our simple
								drag-and-drop interface gives you complete control over how you
								manage your favourite sites.
							</p>
							<button>More Info</button>
						</div>
						<div className={"f-bg__f__sl-c__t__tab " + tab2}>
							<h2> Intelligent search</h2>
							<p>
								Our powerful search feature will help you find saved sites in no
								time at all. No need to trawl through all of your bookmarks.
							</p>
							<button>More Info</button>
						</div>
						<div className={"f-bg__f__sl-c__t__tab " + tab3}>
							<h2> Share your bookmarks</h2>
							<p>
								Easily share your bookmarks and collections with others. Create
								a shareable link that you can send at the click of a button.
							</p>
							<button>More Info</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
