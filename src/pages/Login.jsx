import { useNavigate } from "react-router-dom";
import { supabase } from "../main";
import { useState } from "react";

export default function Login() {
    const [password, setPassword] = useState("")

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
            // navigate("/")
            alert("Hattalı giriş yapıldı")
            
        }

        console.log(data);
    }


    const handleChange =(e) => {
        setPassword(e.target.value)
       }
   

    


    return(
        <>
            <div className="container-login">
                <div className="login-main">
                    <form onSubmit={handleLogin} className="login-form">
                        <input type="text" name="email" placeholder="E-posta"/>
                        <input type="password"  name="password" placeholder="Şifre"onChange={handleChange} />
                        <button>Oturmu aç</button>
                        <button>Üye Ol</button>
                    </form>
                </div> 
            </div>

        </>
    )
}