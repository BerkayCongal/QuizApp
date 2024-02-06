import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../main";
import { useState } from "react";
import Darknight from '../components/Darknight';



import darkleft from "/src/img/Left-Dark.svg";
import darkright from "/src/img/Right-Dark.svg";
import whiteleft from "/src/img/white-left.svg";
import whiteright from "/src/img/white-Right.svg";
import show from "/src/img/show.svg";

export default function Login() {
    const  [panel,setPanel ] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState("");
    const [errorMsj, seterrorMsj] = useState('');


    const navigate = useNavigate()

    async function handleLogin(e) {
        e.preventDefault();
        const form = e.target
        const formData = Object.fromEntries(new FormData(form))
        console.log(formData);


        const { data, error} = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
        })
        if(!error) {
            console.log(data);
            navigate("/")
            
        }else{
            seterrorMsj("E-Posta ya da Şifre yanlış tekrar deneyin !")
        }
        if(data.user === null) {
            seterrorMsj("Erorr var")
        }
       
        console.log(data);
    }

    const handleChange =(e) => {
        setPassword(e.target.value)
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
            <div className="container">
                <div className="login-main">
                    <div className="dark-login">
                        <Darknight onChange={() => drknghPanel()}/>
                    </div> 
                    <form onSubmit={handleLogin} className="login-form">
                        <h2 style={panel ? {color: "white" } : {color: "var(--clr-pink)"}}>Giriş Yap</h2>
                        <input type="text" name="email" placeholder="E-posta"required  />
                        <div className="input-show">
                        <input  name="password" type={showPassword ? "text" : "password"}  value={password} onChange={handleToggleShow}  placeholder="Şifreniz" required  autocomplete="off"/>
                        <img src={show} onClick={handleToggleShowPassword}></img>
                        </div>
                        <button className="btn">Oturmu aç</button>
                        <Link to={"/signup"}><button className="btn"> Üye Ol</button></Link>
                        <p style={{color: "red ",marginBlock: 20}}>{errorMsj}</p>
                        <p>{errorMsj}</p>
                    </form>
                </div> 
            </div>

        </>
    )
}