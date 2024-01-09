import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Darknight from '../components/Darknight';
import { supabase } from '../main';


export default function Menu() {
    const  [panel,setPanel ] = useState(false);
    const isLocation = location.pathname === "/uyeol"
    const navigate = useNavigate()

    if(isLocation ) return

    useEffect(()=>{
        localStorage.questions = 0
        async function getUser(){
            
        const { data, error } = await supabase.auth.getSession()

            if(data.session === null){
                navigate("/signup")
                console.log("1asdasdsad");
            }
        }
        getUser()
    
    },[])

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
          <div className="container">
            <div className='menü-container' >
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
                        <button className='slc-btn' onClick={()=> (window.location = "/Javascript")} style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}}><span className='js-btn'><img src="/src/img/Javascript.svg" alt="" /></span>Javascript</button>
                        <button className='slc-btn' onClick={()=>(window.location = "/Accessibility")} style={ panel ?  {backgroundColor: "var(--clr-nav)",color: "var(--clr-white"} : {backgroundColor: "var(--clr-white)",color: "var(--clr-nav"}}><span className='acces-btn'><img src="/src/img/accesibility.svg" alt=""/></span>Accessibility</button>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}