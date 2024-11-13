import { useState } from "react";
import supabase from "../supabase/SupabaseConfig";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate()
    const isMatch = (password === confirmPassword);

    //핸들함수 -> custom hook으로 수정 가능한것(?)
    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    // supabase
    const supabaseSignup = async () => {
        if (!isMatch) {
            <a href="#" onClick={swal('비밀번호가 일치하지 않습니다.')} />
            return;
        }

        const {data, error} = await supabase.auth.signUp({
            "email": email,
            "password": password,
        })

        if (error) {
            alert('이미 가입된 아이디입니다. 다른 아이디를 입력해주세요.')
        } else {
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            <a href="#" onClick={swal('가입 성공!')} />
            navigate('/')
        }
    }

    return (
        <section>
            <div className="flex my-0 mx-auto justify-center items-center gap-4">
                <img src="/assets/ddoong.png" className="w-[150px] rounded-[120px]" />
                <p className="message">
                    아직도 가입 안해써 ?
                </p>
            </div>
            <div className="signup">
                <span>Sign Up</span>
                <p>Name</p>
                <input type="text"
                value={username}
                autoFocus
                onChange={handleUsername} />
                <p>Email</p>
                <input type="email"
                value={email}
                onChange={handleEmail} />
                <p>Password</p>
                <input type="password"
                value={password}
                onChange={handlePassword} />
                <p>Confirm Password</p>
                <input type="password"
                value={confirmPassword}
                onChange={handleConfirmPassword} />
                <button type="submit"
                onClick={()=> supabaseSignup()}>Sign Up</button>
            </div>
        </section>
    )
}