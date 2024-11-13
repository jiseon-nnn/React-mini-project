import { useState } from "react";
import supabase from "../supabase/SupabaseConfig"
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    //email login
    const supabaseLogin = async () => {
        console.log('login 호출')

        const {data, error} = await supabase.auth.signInWithPassword({
            "email": email,
            "password": password,
        })

        if (error) {
            console.error(error)
            return;
        } else {
            setEmail('');
            setPassword('');
            navigate('/')
        }
    }

    //kakao login
    const kakaoLogin = async () => {
        const {data, error} = await supabase.auth.signInWithOAuth({
            provider: 'kakao',
        })
        if (error) {
            console.error(error)
            return;
        }
    }

    return (
        <section>
            <div className="flex my-0 mx-auto justify-center items-center gap-4">
                <img src="/assets/ddoong.png" className="w-[150px] rounded-[200px]" />
                <p className="message">
                    언냐 얼른 로그인해 !
                </p>
            </div>
            <div className="login">
                <span>Login</span>
                <p>Email</p>
                <input type="email"
                value={email}
                onChange={handleEmail} autoFocus />
                <p>Password</p>
                <input type="password"
                value={password}
                onChange={handlePassword} />
                <div className="flex gap-5">
                    <button type="submit"
                    className="emailLoginBtn"
                    onClick={()=> supabaseLogin()}>Login</button>
                    <button className="kakaoLoginBtn"
                    onClick={kakaoLogin}>Kakao Login</button>
                </div>
                
                
            </div>
        </section>
    )
}