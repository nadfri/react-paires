import React from "react";
import "./Card.scss";

function Card({card,click}) {

	const classes = (`back ${card.discover} ${card.wrong} ${card.rotation}`);

	return (
		<div className="Card">
			<div className={classes} onClick={click}>
				<img
					src={card.src}
					alt=""
				/>
			</div>
		</div>
	);
}

export default Card;
