import { useState } from "react"
import Darknight from '../components/Darknight';

export default function Html(){
    const  [panel,setPanel ] = useState(false)

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
                    <div className="quiz-question" style={ panel ?  {color: "var(--clr-lightwht)"} : {color: "var(--clr-nav)"}}>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, natus neque facere eius ea, voluptas reprehenderit voluptatum excepturi sint harum vel sunt? Quia amet dolor delectus omnis quasi deserunt rerum, corrupti quam consequuntur inventore nihil error, odio iure architecto in, excepturi quidem repudiandae maxime obcaecati praesentium? Magnam quas explicabo ullam.
                        </p>
                    </div>
                    <div className="seletions">
                        <button className="allbutton" aria-selected="true" style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}} ><span>A</span>Selection Idble <img  src="/src/img/True.svg" alt="" /></button>
                        <button className="allbutton" aria-selected="false" style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}} ><span>A</span>Selection Idble <img  src="/src/img/False.svg" alt="" /></button>
                        <button className="allbutton"style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}} ><span>A</span>Selection Idble <img src="/src/img/False.svg" alt="" /></button>
                        <button className="allbutton"style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}} ><span>A</span>Selection Idble <img src="/src/img/False.svg" alt="" /></button>
                        <div className="system">
                        <button className="btn">Button Hover</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}