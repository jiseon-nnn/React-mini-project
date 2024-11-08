import { Link } from "react-router-dom"

export const NavBar = () => {
    return(
        <nav>
            <Link className='grow-[1] flex items-center' to={'/'}>
                <img src='src/assets/doong.png' alt="logo" className="h-[60px] mr-2" />
                <span className="title">DOONG MOVIE</span>
            </Link>
            <Link to={'/signup'}>
                <span>회원가입</span>
            </Link>
            <Link to={'/login'}>
                <span>로그인</span>
            </Link>
        </nav>
    )
}