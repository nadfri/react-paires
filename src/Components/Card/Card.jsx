import React, {useEffect} from "react";
import "./Card.scss";

function Card(props) {

	useEffect( ()=> console.log("Mount"),[]);

    let classes = props.rotation? "back rotation" : "back";
    if(props.discover) classes += " discover";
	if(props.wrong)    classes +=" wrong";

	return (
		<div className="Card">
			<div className={classes} onClick={props.click}>
				<img
					src={props.src}
					alt=""
				/>
			</div>
		</div>
	);
}

export default Card;
