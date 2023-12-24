import { useState } from "react"
import Darknight from '../components/Darknight';
import htmlList from "../components/dataHtml";

export default function Html(){
    const  [panel,setPanel ] = useState(false);


    let soru = 0;
   
    const htmlQuiz = htmlList.map((x,i) => {
        if(i !== 0 ) return
        return(
          <>
                <div className="quiz-question" style={ panel ?  {color: "var(--clr-lightwht)"} : {color: "var(--clr-nav)"}}>
                <p> Soru : {soru} / 9</p>
                       <h3> {x.soru}</h3>
                </div>
                <div className="seletions">
                    <button className="allbutton" style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}} ><span>A</span>{x.cevap.a} <img  src="/src/img/True.svg" alt="" /></button>
                    <button className="allbutton"style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}} ><span>B</span>{x.cevap.b} <img  src="/src/img/False.svg" alt="" /></button>
                    <button className="allbutton"style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}} ><span>C</span>{x.cevap.c}<img src="/src/img/False.svg" alt="" /></button>
                    <button className="allbutton"style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}} ><span>D</span>{x.cevap.d} <img src="/src/img/False.svg" alt="" /></button>
                <div className="system">
                    <button className="btn">Devam</button>
                </div>
            </div>
          </>
        
        )
    })

    function drknghPanel() {
        setPanel(!panel)
    }
    return(
        <div className="container" style={ panel ? {backgroundColor: "#313E51"} : {backgroundImage:"url(/src/img/back.svg)"}}>
            <div className='menü-container'>
                <div className= {panel ? "dark" : "night"}  style={{display: "flex",justifyContent: "space-between", margin: "auto"}} >
                    <div className="quiz-html">
                       <h1 style={ panel ?  {color: "var(--clr-white"} : {color: "var(--clr-nav"}}> <img src="/src/img/Html.svg" alt="" />HTML</h1>
                    </div> 
                       <div className="dark-night">
                        <img src="/src/img/Suun.svg" alt="" />
                            <Darknight onChange={() => drknghPanel()}/>
                            <img src="/src/img/Moon.svg" alt="" />
                       </div>
                </div>
                <div className='sections-btn'>
                        {htmlQuiz}
                </div>
            </div>
        </div>
    )
}