export default function createCards(numberOfCards) {

	const publicRoot = process.env.PUBLIC_URL;
	const data = [];

	for (let i = 0; i < 2; i++)
		for (let numero = 1; numero < numberOfCards/2 + 1; numero++)
			data.push({
				numero,
				src: `${publicRoot}/images/${numero}.jpg`,
				discover: false,
				rotation: false,
				wrong: false,
			});

	return(randomize(data));

}

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


