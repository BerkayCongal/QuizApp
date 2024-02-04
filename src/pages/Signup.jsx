import { Link, useNavigate } from "react-router-dom";
import { useState ,useEffect } from "react";
import { supabase } from "../main"
import Darknight from '../components/Darknight';


import darkleft from "/src/img/Left-Dark.svg";
import darkright from "/src/img/Right-Dark.svg";
import whiteleft from "/src/img/white-left.svg";
import whiteright from "/src/img/white-Right.svg";
import show from "/src/img/show.svg";

export default function Signup() {
    const  [panel,setPanel ] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState("");


    const navigate = useNavigate()

    async function handleSignup(e) {
        e.preventDefault();
        const form = e.target
        const { email, password ,name } = Object.fromEntries(new FormData(form))
        const {data, error } = await supabase.auth.signUp({
            email,
            password,
           options:{
            data:{
                username:name,
                email,
                password
            }
           }
        })
        if (!error) {
            navigate("/login") 
           console.log(data);
        }

        console.log(data);
     }

     function drknghPanel() {
        setPanel(!panel)
        if(!panel === true) {
            document.body.style.backgroundColor="#313E51"
        }else {
            document.body.style.backgroundColor="#F4F6FA"
        }
    }

    const handleToggleShow =(e) => {
        setPassword(e.target.value)
    }
    const handleToggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return(
        <>  {panel ? (
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
            {/* style={ panel ? {backgroundColor: "#313E51"} : {backgroundColor:"#F4F6FA"}} */}
            <div className="container">
            <div className="dark-login">
                    <Darknight onChange={() => drknghPanel()}/>
                    </div>
                <div className="main-signup">
                    <form onSubmit={handleSignup} className="login-form">
                        <h2 style={panel ? {color: "white" } : {color: "var(--clr-pink)"}} >Üye Ol</h2>
                        <input type="text"  name="name" placeholder="Adınız" required />
                        <input type="text" name="email" placeholder="E-posta" required />
                        <div className="input-show">
                        <input  name="password" type={showPassword ? "text" : "password"}  value={password} onChange={handleToggleShow}  placeholder="Şifreniz" required />
                        <img src={show} onClick={handleToggleShowPassword}></img>
                        </div>
                        <button className="btn-sign" >Üye Ol</button>
                        <p style={ panel ? {color: "white"} : {color: "var(--clr-navdrk)"}}>Hesabınız var mı? <Link style={panel ? {color: "var(--clr-openpink" }:{color: "var(--clr-pink)"}} to={"/login"}>Giriş Yap</Link> </p>
                    </form>

                </div>
            </div>
        </>
    )
}