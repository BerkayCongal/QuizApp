import React from 'react';
import Darknight from '../components/Darknight';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import darkleft from "/src/img/Left-Dark.svg";
import darkright from "/src/img/Right-Dark.svg";
import whiteleft from "/src/img/white-left.svg";
import whiteright from "/src/img/white-Right.svg";
import sun from "/src/img/Suun.svg" ;
import moon from "/src/img/Moon.svg";

export default function Scoremenu({whichQuiz,trueNumber, setQuestion}) {
    const  [panel,setPanel ] = useState(false)

    function drknghPanel() {
        setPanel(!panel)
        if(!panel === true) {
            document.body.style.backgroundColor="#313E51"
        }else {
            document.body.style.backgroundColor="#F4F6FA"
        }
    }
   return(
        <>
         {panel ? (
            <>
                <img className="left" src={darkleft} alt="" />
                <img className="right" src={darkright} alt="" />
            </>
         ):(
            <>
                <img className="left" src={whiteleft} alt="" />
                <img className="right" src={whiteright} alt="" />
            </>
         )}
            <div className="container">
                <div className='menü-container'>
                    <div className= {panel ? "dark" : "night"}  style={{display: "flex",justifyContent: "space-between", margin: "auto"}} >
                        <div className="quiz-html">
                        <h1 style={ panel ?  {color: "var(--clr-white"} : {color: "var(--clr-nav"}}> <img src={`/src/img/${whichQuiz}.svg`} alt="" />{whichQuiz}</h1>
                        </div> 
                        <div className="dark-night">
                            <img src={sun} alt="" />
                                <Darknight onChange={() => drknghPanel()}/>
                                <img src={moon} alt="" />
                        </div>
                    </div>
                    <div className='quiz-score'>
                        <div className='quiz-title'style={ panel ?  {color: "var(--clr-lightwht)"} : {color: "var(--clr-nav)"}} >
                        <h1 className='quiz-clp'>Quiz Tamamlandı</h1>
                        <h1 className='quiz-finish'>Sonucunuz...</h1>
                        </div>
                        <div className='score-menü'> 
                        <div className='quiz'>
                        <h2 className='quiz-html' > <img src={`/src/img/${whichQuiz}.svg`} alt="" />{whichQuiz}</h2>
                        <h1>{trueNumber}</h1>
                        <p>10 / {trueNumber} tane bildiginiz</p>
                        </div>
                        <div className='btn-try'>
                            <Link href="/Html" onClick={() => {localStorage.question = 0 , setQuestion(0)}} className="btn" > Tekrar Oyna</Link>
                            <Link to={"/"}  onClick={()=> { localStorage.question = 0 , setQuestion(0) }} className='btn' >Anasayfaya dön</Link>
                        </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </>
   )
}