import { Link } from "react-router-dom";
import "./LevelLink.scss";

function LevelLink(props) {

    const link = `/level/${props.link}`;
	return (
		<Link to={link} className="LevelLink">
			<span className="content">{props.content}</span>
			<span className="number">{props.cards}⭐</span>
		</Link>
	);
}

export default LevelLink;
