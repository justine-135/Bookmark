// import { ReactComponent as Hero } from "../images/illustration-hero.svg";

const HeaderIntro = () => {
	return (
		<header className="h-bg">
			<div className="h-bg__h">
				<div className="h-bg__h__content">
					<div className="h-bg__h__content__hero"></div>
					<div className="h-bg__h__content__blue"></div>
				</div>
				<div className="h-bg__h__text">
					<h1>A Simple Bookmark Manager</h1>
					<p>
						A clean and simple interface to organize your favourite websites.
						Open a new browser tab and see your sites load instantly. Try it for
						free.
					</p>
					<div className="h-bg__h__text__btn-grp">
						<button>Get it on Chrome</button>
						<button>Get it on Firefox</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default HeaderIntro;
