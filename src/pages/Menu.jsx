import React from 'react';
import { useState } from 'react';
import Darknight from '../components/Darknight';


export default function Menu() {
    const  [panel,setPanel ] = useState(false)

    function drknghPanel() {
        setPanel(!panel)
    }

    return(
        <div className="container" style={ panel ? {backgroundColor: "#313E51"} : {backgroundImage:"url(/src/img/back.svg)"}}>
            <div className='menü-container'>
                <div className= {panel ? "dark" : "night"}  >
                     <img src="/src/img/Suun.svg" alt="" />
                     <Darknight onChange={() => drknghPanel()}/>
                     <img src="/src/img/Moon.svg" alt="" />
                </div>
                <div className='sections-btn'>
                    <div style={ panel ?  {color: "var(--clr-lightwht)"} : {color: "var(--clr-nav)"}}>
                        <h2>Welcome to the</h2>
                        <h1>Frontend Quiz!</h1>
                        <p>Pick a subject to get started.</p>
                    </div>
                    <div className='selected-container'> 
                        <button className='slc-btn' onClick={()=>(window.location = "/Html")} style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}}><span className='html-btn'><img src="/src/img/Html.svg" alt="" /></span>HTML</button>
                        <button className='slc-btn' onClick={()=>(window.location = "/Css")} style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}}><span className='css-btn'><img src="/src/img/css.svg" alt="" /></span>CSS</button>
                        <button className='slc-btn' onClick={()=> (window.location = "/Javascript")} style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}}><span className='js-btn'><img src="/src/img/Js.svg" alt="" /></span>Javascript</button>
                        <button className='slc-btn' onClick={()=>(window.location = "/Accessibility")} style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}}><span className='acces-btn'><img src="/src/img/accesibility.svg" alt=""/></span>Accessibility</button>
                    </div>
                </div>
            </div>
        </div>
    )
}