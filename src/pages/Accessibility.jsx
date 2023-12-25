import React, { useState, useEffect } from "react"
import Darknight from '../components/Darknight';
import dataAcces from "../components/Accesdata";

import Scoremenu from "./Scoremenu";

export default function Accessibility() {
    const  [panel,setPanel ] = useState(false);
    const [question, setQuestion] = useState(0);
    const [arialSelect, setarialSelect] = useState([null, null, null,  null]);

    // a[0] = title,
    // a[1] = true, false


    const clickEvent = (e,id) => {
        const newArray = [...arialSelect];
        newArray[id] = e.target.dataset.value === "true";
        setarialSelect(newArray);
    }

    useEffect(() => {
        setarialSelect([null, null, null,  null]);
    }, [question]);

    function questionHandle() {
        localStorage.trueQuestionsNumber = localStorage.trueQuestionsNumber ??  0;
        if (arialSelect.some(val => val === true)) localStorage.trueQuestionsNumber = Number(localStorage.trueQuestionsNumber) + 1
        if (arialSelect.every(val => val === null)) return

        setQuestion(function(prev) {
            return prev + 1
        })
    }

    console.log(question);

    console.log(arialSelect);

    if (question === dataAcces.length) return <Scoremenu trueNumber={localStorage.trueQuestionsNumber} setQuestion={setQuestion} />

    const accesQuiz = dataAcces.map((x,i)=> {
        if(i !== question) return;
        
        return(
            <React.Fragment key={i}>
                <div className="quiz-question" style={ panel ?  {color: "var(--clr-lightwht)"} : {color: "var(--clr-nav)"}}>
                        <p> Soru: {question + 1} / ∞</p>
                        <p>{x.soru}</p>
                    </div>
                    <div className="seletions">
                    <button  className="allbutton" 
                        onClick={(e)=>clickEvent(e,0)}
                        aria-selected={arialSelect[0]}  
                        data-value={x.cevap.a[1]}  
                        style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}}>
                        <span>A</span>
                        {x.cevap.a} {arialSelect[0] ? (<img  src="/src/img/True.svg" alt="" />) : (<img  src="/src/img/False.svg" alt="" />)}
                    </button>

                    <button className="allbutton"
                        onClick={(e)=>clickEvent(e,1)} 
                        aria-selected={arialSelect[1]} 
                        data-value={x.cevap.b[1]}  
                        style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}}>
                        <span>B</span>
                        {x.cevap.b}  {arialSelect[1] ? (<img  src="/src/img/True.svg" alt="" />) : (<img  src="/src/img/False.svg" alt="" />)}
                    </button>

                    <button className="allbutton"
                        onClick={(e)=>clickEvent(e,2)} 
                        aria-selected={arialSelect[2]} 
                        data-value={x.cevap.c[1]} 
                        style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}}>
                        <span>C</span>
                        {x.cevap.c} {arialSelect[2] ? (<img  src="/src/img/True.svg" alt="" />) : (<img  src="/src/img/False.svg" alt="" />)}
                    </button>

                    <button className="allbutton" 
                        onClick={(e)=>clickEvent(e,3)} 
                        aria-selected={arialSelect[3]} 
                        data-value={x.cevap.d[1]}  
                        style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}}
                        ><span>D</span>
                        {x.cevap.d}  {arialSelect[3] ? (<img  src="/src/img/True.svg" alt="" />) : (<img  src="/src/img/False.svg" alt="" />)}
                    </button>

                    <div className="system">
                        <button className="btn" onClick={questionHandle}>
                            Devam
                        </button>
                    </div>
                </div>
            </React.Fragment>
        )
    })

    function drknghPanel() {
        setPanel(!panel)
    }
    return(
        <div className="container" style={ panel ? {backgroundColor: "#313E51"} : {backgroundImage:"url(/src/img/back.svg)"}}>
            <div className='menü-container'>
                <div className= {panel ? "dark" : "night"}  style={{display: "flex",justifyContent: "space-between", margin: "auto"}} >
                    <div className="Accesibility">
                       <h1 style={ panel ?  {color: "var(--clr-white"} : {color: "var(--clr-nav"}}> <img src="/src/img/accesibility.svg" alt="" />Accesibility</h1>
                    </div> 
                       <div className="dark-night">
                        <img src="/src/img/Suun.svg" alt="" />
                            <Darknight onChange={() => drknghPanel()}/>
                            <img src="/src/img/Moon.svg" alt="" />
                       </div>
                </div>
                <div className='sections-btn'>
                    {accesQuiz}
                </div>
            </div>
        </div>
    )
}