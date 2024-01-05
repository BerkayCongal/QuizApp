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
    }

    return(
        <>
            <div className="container" style={ panel ? {backgroundColor: "#313E51"} : {backgroundImage:"url(/src/img/back.svg)"}}>
                <div className="login-main">
                    <div className="dark-login">
                    <Darknight onChange={() => drknghPanel()}/>
                    </div>
                        
                    <form onSubmit={handleLogin} className="login-form">
                        <h2 style={panel ? {color: "white" } : {color: "var(--clr-pink)"}}>Giriş Yap</h2>
                        <input type="text" name="email" placeholder="E-posta"required  />
                        <input type="password"  name="password" placeholder="Şifre"onChange={handleChange} required autocomplete="off" />
                        <button className="btn">Oturmu aç</button>
                        <Link to={"/uyeol"}><button className="btn"> Üye Ol</button></Link>
                    </form>
                </div> 
            </div>

        </>
    )
}