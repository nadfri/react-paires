import React, { useState, useEffect } from "react";
import Menu from "../Menu/Menu";
import Replay from "../Replay/Replay";
import Score from "../Score/Score";
import "./Level.scss";
import createCards from "../createCards"
import Card from "../Card/Card";

function Level(props) {

	/*State*/
	const [cards, setCards] = useState([]);
	const [round, setRound] = useState(1);
	const [firstCard, setFirstCard] = useState(null);
	const [count, setCount] = useState(1);
	const [score, setScore] = useState(0);
	const [hiScore, setHiScore] = useState(0);
	const [replay, setReplay] = useState(false);
	const [grid, setGrid] = useState({});

    const level  =  props.match.params.level;

	/*useEffect*/
	useEffect(() => {
		//Géneration des cards des images
		setHiScore(localStorage.getItem("hiScore_" + level));

        const levels = [4,8,12,16,20,24,28,32,36,40];
        
		const numberofCards = levels[level]; //8x2 = 16
		setCards(createCards(numberofCards));

        switch(level)
        {
            case "1": setGrid({height: "50%"});
            break;
            case "2": setGrid({height: "75%"});
            break;

            case "9": setGrid({gridTemplateColumns: "repeat(5, 1fr)"});
            break;

            default: setGrid({});
        }

	}, []);

	


	function click(index) {
		const copy = [...cards];
		const currentCard = copy[index];

		if (round === 1) {
			currentCard.rotation = true;
			setFirstCard(currentCard);
			setRound(2);
		} 
		
		else if (round === 2 && currentCard.rotation === false) 
		{
			currentCard.rotation = true;
			setRound(3);
			setScore(score+1);

			if (firstCard.numero === currentCard.numero) 
			{
				firstCard.discover = true;
				currentCard.discover = true;
				setCards(copy);
				setRound(1);
				setCount(count+1);

				//Game Finished
				if(count === cards.length/2)
				{
					if(score < hiScore || !hiScore)
					{
						console.log('score :>> ', score);
						localStorage.setItem("hiScore_" + level, score+1);
					}
					setReplay(true);
				}
			} 

			else
			{
				firstCard.wrong = true;
				currentCard.wrong = true;
				//setCards(copy);
				
				setTimeout(() => {
					firstCard.rotation = false;
					currentCard.rotation = false;
					firstCard.wrong = false;
					currentCard.wrong = false;

					setCards(copy);
					setRound(1);
				}, 1500);
			}
				
		}
	}

	return (
		<div className="Level" >
			<Score score={score} hiScore={hiScore}/>
            <div className="container_cards">
			<div className="cards" style={grid}>
				{cards.map((card, index) => (
					<Card
						src={card.src}
						key={index}
						click={() => click(index)}
						rotation={card.rotation}
						discover={card.discover}
						wrong={card.wrong}
					/>
				))}
			</div>
            </div>
			<Menu/>
			{replay? <Replay score={score} nextLevel={"/"}/> : null}
		</div>
	);
}

export default Level;
