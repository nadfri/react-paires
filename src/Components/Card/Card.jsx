import React from "react";
import "./Card.scss";

function Card({card,click}) {

	return (
		<div className="Card">
			<div className={`back ${card.discover} ${card.wrong} ${card.rotation}`} onClick={click}>
				<img
					src={card.src}
					alt=""
				/>
			</div>
		</div>
	);
}

export default Card;
