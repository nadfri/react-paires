import React, { useState, useEffect } from "react";
import Card from "../Components/Card/Card";
import Menu from "../Components/Menu/Menu";
import Score from "../Components/Score/Score";
import "./Easy.scss";

function Easy() {
	/*State*/
	const [cards, setCards] = useState([]);
	const [round, setRound] = useState(1);
	const [firstCard, setFirstCard] = useState(null);
	const [count, setCount] = useState(1);
	const [score, setScore] = useState(0);
	const [hiScore, setHiScore] = useState(0);

	/*useEffect*/
	useEffect(() => {
		//Géneration des cards des images
		const publicRoot = process.env.PUBLIC_URL;
		const data = [];
		const numberofCards = 8; //8x2 = 16
		setHiScore(localStorage.getItem("hiScore"));

		for (let i = 0; i < 2; i++)
			for (let numero = 1; numero < numberofCards+1; numero++)
				data.push({
					numero,
					src: `${publicRoot}/images/${numero}.jpg`,
					discover: false,
					rotation: false,
					wrong: false
				});

		setCards(randomize(data));
		console.log(data.length);
	}, []);

	
	function randomize(tab) {
		var i, j, tmp;
		for (i = tab.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			tmp = tab[i];
			tab[i] = tab[j];
			tab[j] = tmp;
		}
		return tab;
	}

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
					setScore(score+1);	
					if(score < hiScore || !hiScore)
					{
						localStorage.setItem("hiScore", score+1);
						setHiScore(score+1);
					}
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
			setScore(score+1);	
		}
	}

	return (
		<div className="Easy">
			<Score score={score} hiScore={hiScore}/>
			<div className="cards">
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
			<Menu/>
		</div>
	);
}

export default Easy;


