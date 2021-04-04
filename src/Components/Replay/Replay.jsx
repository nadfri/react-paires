import React from "react";
import "./Replay.scss";
import { Link } from "react-router-dom";

function Replay(props) {
	console.log(props.nextLevel);
	const nextLevelLink = `/level/${props.nextLevel}`;
	return (
		<div className="Replay">
			<div className="container">
				<p>Ton Score est {props.score}</p>
				{props.newRecord? <p>Nouveau Record!</p> : null}
				<div className="buttons">
					<button onClick={() => window.location.reload()}>Rejouer</button>
					{props.nextLevel < 9 ? (
						<Link to={nextLevelLink} onClick={props.closeReplay}>Suivant</Link>
					) : null}
				</div>
			</div>
		</div>
	);
}

export default Replay;
