import React, { useEffect, useState } from "react"
import Darknight from '../components/Darknight';
import datajs from "../components/datajs";
import Scoremenu from "./Scoremenu";

import darkleft from "/src/img/Left-Dark.svg";
import darkright from "/src/img/Right-Dark.svg";
import whiteleft from "/src/img/white-left.svg";
import whiteright from "/src/img/white-Right.svg";
import True from "/src/img/True.svg";
import False from "/src/img/False.svg"
import sun from "/src/img/Suun.svg" ;
import moon from "/src/img/Moon.svg";
import javascript from "/src/img/Javascript.svg";


export default function Javascript() {
     const  [panel,setPanel ] = useState(false);
     const [question, setQuestion] = useState(0)
     const [arialSelect, setarialSelect] = useState([null, null, null,  null]);
    const [errorMsj, seterrorMsj] = useState('');
    const [check, setCheck ] = useState(false);



     const clickEvent = (e,id) => {
        if(check === true) {
            return
        }
        setCheck(true);
        const newArray = [...arialSelect];
        newArray[id] = e.target.dataset.value === "true";
        setarialSelect(newArray);
    }

    useEffect(() => {
        setarialSelect([null, null, null,  null]);
    }, [question]);

     function questionHandle() {
        localStorage.question = localStorage.question ??  0;
        if (arialSelect.some(x => x === true)) localStorage.question = Number(localStorage.question) + 1
       
        if (arialSelect.every(x => x === null)) {
            setTimeout(() => {
                window.scrollTo(0, document.body.scrollHeight);
               }, 100);
            seterrorMsj("Lütfen Soruyu Cevaplayiniz !")
            setarialSelect(arialSelect);
            return
        }
        setCheck(false);

        if(arialSelect !== null) {
            seterrorMsj("")
        }

        setQuestion(function(prev) {
            return prev + 1
        })
    }

    console.log(question);

    console.log(arialSelect);

    if (question === datajs.length) return <Scoremenu whichQuiz={"Javascript"} trueNumber={localStorage.question} setQuestion={setQuestion} />

        const jsQuiz = datajs.map((x,i) => {
        if(i !== question) return;
        console.log(x.cevap.a);
        return(
            <React.Fragment key={i}>
                <div className="quiz-question" style={ panel ?  {color: "var(--clr-lightwht)"} : {color: "var(--clr-nav)"}}>
                        <p> Soru: {question + 1} / 10</p>
                        <p>{x.soru}</p>
                        {/* soru attıtırma ve bastırma */}
                    </div>
                    <div className="seletions">
                    <button  className="allbutton" 
                        onClick={(e)=>clickEvent(e,0)}
                        aria-selected={arialSelect[0]}  
                        data-value={x.cevap.a[1]} 
                        style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}}>
                        <div data-value={x.cevap.a[1]}>
                            <span data-value={x.cevap.a[1]}>A</span>
                            {x.cevap.a} 
                        </div>
                      {arialSelect[0] ? (<img  src={True} alt="" />) : (<img  src={False} alt="" />)}
                    </button>

                    <button className="allbutton"
                        onClick={(e)=>clickEvent(e,1)} 
                        aria-selected={arialSelect[1]} 
                        data-value={x.cevap.b[1]}  
                        style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}}>
                        <div data-value={x.cevap.b[1]} >
                            <span data-value={x.cevap.b[1]} >B</span>
                            {x.cevap.b}  
                        </div>
                         {arialSelect[1] ? (<img  src={True} alt="" />) : (<img  src={False} alt="" />)}
                    </button>

                    <button className="allbutton"
                        onClick={(e)=>clickEvent(e,2)} 
                        aria-selected={arialSelect[2]} 
                        data-value={x.cevap.c[1]} 
                        style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}}>
                        <div data-value={x.cevap.c[1]}>
                            <span data-value={x.cevap.c[1]} >C</span>
                            {x.cevap.c}
                        </div>
                       {arialSelect[2] ? (<img  src={True} alt="" />) : (<img  src={False} alt="" />)}
                    </button>

                    <button className="allbutton" 
                        onClick={(e)=>clickEvent(e,3)} 
                        aria-selected={arialSelect[3]} 
                        data-value={x.cevap.d[1]}  
                        style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}}>
                        <div data-value={x.cevap.d[1]}>
                            <span data-value={x.cevap.d[1]}>D</span>
                            {x.cevap.d} 
                        </div>
                      {arialSelect[3] ? (<img  src={True} alt="" />) : (<img  src={False} alt="" />)}
                    </button>
                    <div className="system">
                        <button className="btn"onClick={questionHandle}>
                            Devam
                        </button>
                        {errorMsj && <p style={{color: "red"}}>{errorMsj} <img src={False} alt="" /> </p>}
                    </div>
                </div>
            </React.Fragment>
        
        )
    })
        


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
          <div className="container"style={ panel ? {backgroundColor: "#313E51"} : {backgroundImage:"url(/src/img/back.svg)"}} >
            <div className='menü-container' >
                <div className= {panel ? "dark" : "night"}  style={{display: "flex",justifyContent: "space-between", margin: "auto"}} >
                    <div className="quiz-js">
                       <h1 style={ panel ?  {color: "var(--clr-white"} : {color: "var(--clr-nav"}}> <img src={javascript} alt="" />Javascript</h1>
                    </div> 
                       <div className="dark-night">
                        <img src={sun} alt="" />
                            <Darknight onChange={() => drknghPanel()}/>
                            <img src={moon} alt="" />
                       </div>
                </div>
                <div className='sections-btn'>
                    {jsQuiz}
                </div>
            </div>
         </div>
       </>
    )
}