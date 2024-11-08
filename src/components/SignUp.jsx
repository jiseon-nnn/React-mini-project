
export const SignUp = () => {
    return (
        <section>
            <div className="flex my-0 mx-auto justify-center items-center gap-4">
                <img src="src/assets/ddoong.png" className="w-[150px] rounded-[120px]" />
                <p className="message">
                    아직도 가입 안해써 ?
                </p>
            </div>
            <div className="signup">
                <span>Sign Up</span>
                <p>Name</p>
                <input type="text" autoFocus />
                <p>Email</p>
                <input type="email" />
                <p>Password</p>
                <input type="password" />
                <p>Confirm Password</p>
                <input type="password" />
                <button type="submit">Sign Up</button>
            </div>
        </section>
    )
}