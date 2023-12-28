import { useNavigate } from "react-router-dom";
import { supabase } from "../main"

export default function Signup() {

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
            }
           }
        })
        if (!error) {
           navigate("/") 
           console.log(data);
        }

        console.log(data);
     }

    
       
    return(
        <>
            <div className="container-signup">
                <div className="main-signup">
                    <form onSubmit={handleSignup} className="signup-from">
                        <input type="text"  name="name" placeholder="Adınız" required/>
                        <input type="text" name="email" placeholder="E-posta" required />
                        <input type="password" name="password"  placeholder="Şifreniz" required/>
                        <button>Üye Ol</button>
                    </form>
                </div>
            </div>
        </>
    )
}