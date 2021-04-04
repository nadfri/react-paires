import React from 'react';
import "./Score.scss";

function Score(props) {
    return (
        <div className="Score">
           <span className="score">Score: {props.score}</span>
           <span className="hiScore">HighScore: {props.hiScore || "000"}</span>
        </div>
    );
}

export default Score;