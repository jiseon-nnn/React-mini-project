import { Link, useNavigate } from "react-router-dom"
import supabase from "../supabase/SupabaseConfig"
import swal from 'sweetalert';


export const Logout = () => {
    const navigate = useNavigate()

    const supabaseLogout = async () => {
        console.log('logout 호출')

        let {error} = await supabase.auth.signOut()

        if (error) {
            console.error(error)
            return;
        } else{
        // alert('로그아웃 되었습니다.')
        <a href="#" onClick={swal('로그아웃 됐어! 또만나!')} />
        navigate('/')
        }
    }

    return (
    <Link to={'/'}>
        <span onClick={supabaseLogout}>로그아웃</span>
    </Link>
    )
}