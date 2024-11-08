
export const Login = () => {
    return (
        <section>
            <div className="flex my-0 mx-auto justify-center items-center gap-4">
                <img src="src/assets/ddoong.png" className="w-[150px] rounded-[200px]" />
                <p className="message">
                    언냐 얼른 로그인해 !
                </p>
            </div>
            <div className="login">
                <span>Login</span>
                <p>Email</p>
                <input type="email" autoFocus />
                <p>Password</p>
                <input type="password" />
                <button type="submit">Login</button>
            </div>
        </section>
    )
}