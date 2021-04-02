import React from 'react';
import "./Score.scss";

function Score(props) {
    return (
        <div className="Score">
           <span>Score: {props.score}</span>
           <span>HighScore: {props.hiScore || "000"}</span>
        </div>
    );
}

export default Score;