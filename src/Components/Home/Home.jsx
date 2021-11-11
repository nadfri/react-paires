import React from 'react';
import './Home.scss';
import LevelLink from '../LevelLink/LevelLink';

function Home() {
	const reloadBtn = () => {
		alert('Reloading...');
		window.location.href = "/" + Date.now();
	};

	return (
		<div className='Home'>
			<h1>
				React Memory <span className='version'>1.0.15</span>
			</h1>
			<div className='levels'>
				<LevelLink link='1' content='Niveau 1' cards='8' />
				<LevelLink link='2' content='Niveau 2' cards='12' />
				<LevelLink link='3' content='Niveau 3' cards='16' />
				<LevelLink link='4' content='Niveau 4' cards='20' />
				<LevelLink link='5' content='Niveau 5' cards='24' />
				<LevelLink link='6' content='Niveau 6' cards='28' />
				<LevelLink link='7' content='Niveau 7' cards='32' />
				<LevelLink link='8' content='Niveau 8' cards='36' />
				<LevelLink link='9' content='Niveau 9' cards='40' />
			</div>
			<button onClick={reloadBtn}>reload</button>
		</div>
	);
}

export default Home;
