import React from "react";
import routes from "../routes";
import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
	return (
		<div className="Home">
			<h1>React Memory</h1>
			<div className="links">
				<Link to={routes.EASY}>EASY     <div className="number">16</div></Link>
				<Link to={routes.MEDIUM}>MEDIUM <div className="number">32</div></Link>
				<Link to={routes.HARD}>HARD     <div className="number">64</div></Link>
			</div>
		</div>
	);
}

export default Home;
