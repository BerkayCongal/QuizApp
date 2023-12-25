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

    // i == datada kacıncı indexte oldugunu belirtir


    const clickEvent = (e,id) => {
        const newArray = [...arialSelect];
        newArray[id] = e.target.dataset.value === "true";
        setarialSelect(newArray);
    }

    useEffect(() => {
        setarialSelect([null, null, null,  null]);
        location.trueQuestionsNumber = 0
    }, [question]);

    function questionHandle() {
        localStorage.trueQuestionsNumber = localStorage.trueQuestionsNumber ??  0;
        if (arialSelect.some(val => val === true)) localStorage.trueQuestionsNumber = Number(localStorage.trueQuestionsNumber) + 1
        if (arialSelect.every(val => val === null)) return
        
        //  some--- birden fazla true kosula bakıyor
        // every eger bir  true kosul saglıyorsa false cıkıyor

        setQuestion(function(prev) {
            return prev + 1
        })
    }
    

    // onClick={(e)=>clickEvent(e,0)} burdakı sıfır datadaki cevapların indexx sayısı 0 a oluyor
    // data-value={x.cevap.a[1]}  datanin icindeki cevaba gidiyor button sırasına göre örnek a., datadaki false true degerini yakalıyor  1- eger sıfır yazsam a ini
    // icindeki  title gelir bizim istedgimiz 1 value 

    // sorulcaklar 
    //   console.log(x.cevap.a);
    //  console.log(x.cevap.a[0]);

    console.log(question);

    console.log(arialSelect);

    if (question === dataAcces.length) return <Scoremenu whichQuiz={"accesibility"} trueNumber={localStorage.trueQuestionsNumber} setQuestion={setQuestion} />

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
                        <span data-value={x.cevap.a[1]}>A</span>
                        {x.cevap.a} {arialSelect[0] ? (<img  src="/src/img/True.svg" alt="" />) : (<img  src="/src/img/False.svg" alt="" />)}
                    </button>

                    <button className="allbutton"
                        onClick={(e)=>clickEvent(e,1)} 
                        aria-selected={arialSelect[1]} 
                        data-value={x.cevap.b[1]}  
                        style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}}>
                        <span data-value={x.cevap.b[1]} >B</span>
                        {x.cevap.b}  {arialSelect[1] ? (<img  src="/src/img/True.svg" alt="" />) : (<img  src="/src/img/False.svg" alt="" />)}
                    </button>

                    <button className="allbutton"
                        onClick={(e)=>clickEvent(e,2)} 
                        aria-selected={arialSelect[2]} 
                        data-value={x.cevap.c[1]} 
                        style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}}>
                        <span data-value={x.cevap.c[1]} >C</span>
                        {x.cevap.c} {arialSelect[2] ? (<img  src="/src/img/True.svg" alt="" />) : (<img  src="/src/img/False.svg" alt="" />)}
                    </button>

                    <button className="allbutton" 
                        onClick={(e)=>clickEvent(e,3)} 
                        aria-selected={arialSelect[3]} 
                        data-value={x.cevap.d[1]}  
                        style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}}
                        ><span data-value={x.cevap.d[1]}>D</span>
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