import { useState } from "react"
import Darknight from '../components/Darknight';
import dataAcces from "../components/Accesdata";

export default function Accessibility() {
    const  [panel,setPanel ] = useState(false)

    let soru =2;
    const accesQuiz = dataAcces.map((x,i)=> {
        if(i !== soru) return;
        
        return(
            <>
                <div className="quiz-question" style={ panel ?  {color: "var(--clr-lightwht)"} : {color: "var(--clr-nav)"}}>
                        <p>Soru: {soru} / ∞</p>
                        <p>{x.soru}</p>
                    </div>
                    <div className="seletions">
                        <button className="allbutton"  style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}} ><span>A</span>{x.cevap.a} <img  src="/src/img/True.svg" alt="" /></button>
                        <button className="allbutton"  style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}} ><span>B</span>{x.cevap.b} <img  src="/src/img/False.svg" alt="" /></button>
                        <button className="allbutton" style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}} ><span>C</span>{x.cevap.c} <img src="/src/img/False.svg" alt="" /></button>
                        <button className="allbutton" style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}} ><span>D</span>{x.cevap.d}<img src="/src/img/False.svg" alt="" /></button>
                        <div className="system">
                        <button className="btn">Devam</button>
                        </div>
                        {/* aria-selected="true" */}
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