import React from 'react';
import { Switch } from 'antd';
import Darknight from '../components/Darknight';
export default function System() {
 
    return (
        <div className="system-main">

            <div className="system">
            <button className="btn">Button Hover</button>
            </div>

            <div className="seletions">
                <button className="allbutton" aria-selected="true" ><span>A</span>Selection Idble <img src="/src/img/True.svg" alt="" /></button>
                <button className="allbutton" aria-selected="false"><span>A</span>Selection Idble <img src="/src/img/False.svg" alt="" /></button>
                <button className="allbutton" ><span>A</span>Selection Idble <img src="/src/img/False.svg" alt="" /></button>
            </div>

            <div className='dark'>
                <img src="/src/img/Suun.svg" alt="" />
            <Darknight/>
            <img src="/src/img/Moon.svg" alt="" />

            </div>

            <div className='night'>
                <img src="/src/img/Suun.svg" alt="" />
            <Darknight/>
            <img src="/src/img/Moon.svg" alt="" />

            </div>

        </div>
    )
}
