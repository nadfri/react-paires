import React from "react";
import "./Replay.scss";
import { Link } from "react-router-dom";

function Replay(props) {
	return (
		<div className="Replay">
			<div className="container">
				<p>Ton Score est {props.score}</p>
				<div className="buttons">
					<button onClick={() => window.location.reload()}>Rejouer</button>
					<button>
						<Link to={props.nextLevel}>Suivant</Link>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Replay;
