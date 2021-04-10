import React from "react";
import "./WinBox.scss";
import { Link } from "react-router-dom";

function Replay(props) {

	const nextLevelLink = `/level/${props.nextLevel}`;
	return (
		<div className="WinBox">
			<div className="container">
				<p>Ton Score est {props.score}</p>
				{props.newRecord? <p>Nouveau Record!</p> : null}
				<div className="buttons">
					<button onClick={props.reload}>Rejouer</button>
					
					{props.nextLevel < 9 ? (
						<Link to={nextLevelLink} onClick={props.reload}>Suivant</Link>
					) : null}
				</div>
			</div>
		</div>
	);
}

export default Replay;
