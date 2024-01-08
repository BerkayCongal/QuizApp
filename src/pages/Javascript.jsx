import React, { useEffect, useState } from "react"
import Darknight from '../components/Darknight';
import datajs from "../components/datajs";
import Scoremenu from "./Scoremenu";


export default function Javascript() {
     const  [panel,setPanel ] = useState(false);
     const [question, setQuestion] = useState(0)
     const [arialSelect, setarialSelect] = useState([null, null, null,  null]);
    const [errorMsj, seterrorMsj] = useState('');




     const clickEvent = (e,id) => {
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
            seterrorMsj("Lütfen Soruyu Cevaplayiniz !")
            setarialSelect(arialSelect);
            return
        }

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
                    <p>Soru: {question + 1} / 10</p>
                    <p>{x.soru}</p>
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
                        {arialSelect[0] ? (<img  src="/src/img/True.svg" alt="" />) : (<img  src="/src/img/False.svg" alt="" />)}
                    </button>

                    <button className="allbutton"
                        onClick={(e)=>clickEvent(e,1)} 
                        aria-selected={arialSelect[1]} 
                        data-value={x.cevap.b[1]}  
                        style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}}>
                        <div data-value={x.cevap.b[1]}>
                            <span data-value={x.cevap.b[1]}>B</span>
                            {x.cevap.b}
                        </div>
                        {arialSelect[1] ? (<img  src="/src/img/True.svg" alt="" />) : (<img  src="/src/img/False.svg" alt="" />)}
                    </button>

                    <button className="allbutton"
                        onClick={(e)=>clickEvent(e,2)} 
                        aria-selected={arialSelect[2]} 
                        data-value={x.cevap.c[1]} 
                        style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}}>
                        <div data-value={x.cevap.c[1]}>
                            <span data-value={x.cevap.c[1]}>C</span>
                            {x.cevap.c}
                        </div>
                      {arialSelect[2] ? (<img  src="/src/img/True.svg" alt="" />) : (<img  src="/src/img/False.svg" alt="" />)}
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
                       {arialSelect[3] ? (<img  src="/src/img/True.svg" alt="" />) : (<img  src="/src/img/False.svg" alt="" />)}
                    </button>

                <div className="system">
                    <button className="btn" onClick={questionHandle}>
                        Devam
                    </button>
                    {errorMsj && <p style={{color: "red"}}>{errorMsj} <img src="/src/img/False.svg" alt="" /> </p>}
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
                    <img className="left" src="/src/img/Left-Dark.svg" alt="" />
                    <img className="right" src="/src/img/Right-Dark.svg" alt="" />
                </>
            ):(
                <>
                    <img className="left" src="/src/img/white-left.svg" alt="" />
                    <img className="right" src="/src/img/white-Right.svg" alt="" />
                </>
            )}
          <div className="container"style={ panel ? {backgroundColor: "#313E51"} : {backgroundImage:"url(/src/img/back.svg)"}} >
            <div className='menü-container' >
                <div className= {panel ? "dark" : "night"}  style={{display: "flex",justifyContent: "space-between", margin: "auto"}} >
                    <div className="quiz-js">
                       <h1 style={ panel ?  {color: "var(--clr-white"} : {color: "var(--clr-nav"}}> <img src="/src/img/Javascript.svg" alt="" />Javascript</h1>
                    </div> 
                       <div className="dark-night">
                        <img src="/src/img/Suun.svg" alt="" />
                            <Darknight onChange={() => drknghPanel()}/>
                            <img src="/src/img/Moon.svg" alt="" />
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