import Darknight from '../components/Darknight';


export default function Menü() {
    return(
        <div className="container">
            <div className='menü-container'>
                <div className='night'>
                    <img src="/src/img/Suun.svg" alt="" />
                    <Darknight/>
                    <img src="/src/img/Moon.svg" alt="" />
                </div>
                <div className='sections-btn'>
                    <div>
                        <h2>Welcome to the</h2>
                        <h1>Frontend Quiz!</h1>
                        <p>Pick a subject to get started.</p>
                    </div>
                    <div className='selected-container'>
                        <button className='slc-btn'><span className='html-btn'><img src="/src/img/Html.svg" alt="" /></span>HTML</button>
                        <button className='slc-btn'><span className='css-btn'><img src="/src/img/css.svg" alt="" /></span>CSS</button>
                        <button className='slc-btn'><span className='js-btn'><img src="/src/img/Js.svg" alt="" /></span>Javascript</button>
                        <button className='slc-btn'><span className='acces-btn'><img src="/src/img/accesibility.svg" alt="" /></span>Accessibility</button>
                    </div>
                    {/* <div className="seletions">
                        <button className="allbutton"><span>A</span>Selection Idble <img  src="/src/img/True.svg" alt="" /></button>
                        <button className="allbutton"><span>A</span>Selection Idble <img  src="/src/img/False.svg" alt="" /></button>
                        <button className="allbutton"><span>A</span>Selection Idble <img src="/src/img/False.svg" alt="" /></button>
                        <button className="allbutton"><span>A</span>Selection Idble <img src="/src/img/False.svg" alt="" /></button>
                    </div> */}
                    
                </div>
            </div>
           
        </div>
    )
}