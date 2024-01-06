import React from 'react';
import Darknight from '../components/Darknight';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Scoremenu({whichQuiz,trueNumber, setQuestion}) {
    const  [panel,setPanel ] = useState(false)

    function drknghPanel() {
        setPanel(!panel)
    }
   return(
            <div className="container" style={ panel ? {backgroundColor: "#313E51"} : {backgroundImage:"url(/src/img/back.svg)"}}>
                <div className='menü-container'>
                    <div className= {panel ? "dark" : "night"}  style={{display: "flex",justifyContent: "space-between", margin: "auto"}} >
                        <div className="quiz-html">
                        <h1 style={ panel ?  {color: "var(--clr-white"} : {color: "var(--clr-nav"}}> <img src={`/src/img/${whichQuiz}.svg`} alt="" />{whichQuiz}</h1>
                        </div> 
                        <div className="dark-night">
                            <img src="/src/img/Suun.svg" alt="" />
                                <Darknight onChange={() => drknghPanel()}/>
                                <img src="/src/img/Moon.svg" alt="" />
                        </div>
                    </div>
                    <div className='quiz-score'>
                        <div className='quiz-title'style={ panel ?  {color: "var(--clr-lightwht)"} : {color: "var(--clr-nav)"}} >
                        <h1 className='quiz-clp'>Quiz Tamamlandı</h1>
                        <h1 className='quiz-finish'>Sonucunuz...</h1>
                        </div>
                        <div className='quiz'>
                        <h2 className='quiz-html' > <img src={`/src/img/${whichQuiz}.svg`} alt="" />{whichQuiz}</h2>
                        <h1>{trueNumber}</h1>
                        <p>10 / {trueNumber} tane bildiginiz</p>
                        </div>
                    </div>
                    <div className='btn-try'>
                       <Link href="/Html" onClick={() => {
                            localStorage.trueQuestionsNumber = 0
                            setQuestion(0)
                        }} className="btn" > Tekrar Oyna</Link>
                        <Link to={"/"} className='btn' >
                            Anasayfaya dön
                        </Link>
                       </div>
                </div>
            </div>
   )
}