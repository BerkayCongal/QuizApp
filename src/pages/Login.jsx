import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../main";
import { useState } from "react";
import Darknight from '../components/Darknight';

export default function Login() {
    const [password, setPassword] = useState("");
    const  [panel,setPanel ] = useState(false);

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
            alert("Hattalı giriş yapıldı tekrar deneyin")
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
                <div className="login-main">
                    <div className="dark-login">
                    <Darknight onChange={() => drknghPanel()}/>
                    </div>
                        
                    <form onSubmit={handleLogin} className="login-form">
                        <h2 style={panel ? {color: "white" } : {color: "var(--clr-pink)"}}>Giriş Yap</h2>
                        <input type="text" name="email" placeholder="E-posta"required  />
                        <input type="password"  name="password" placeholder="Şifre"onChange={handleChange} required autocomplete="off" />
                        <button className="btn">Oturmu aç</button>
                        <Link to={"/signup"}><button className="btn"> Üye Ol</button></Link>
                    </form>
                </div> 
            </div>

        </>
    )
}