import { usePlans } from "@/src/context-api/context/plans-module"
import LoginForm from "../components/LoginForm"
import family from "@/src/assets/images/Family.webp"

const LoginContainer = () => {
    const { getAllData, status } = usePlans()
    const { loading } = status

    return (
        <div className='login centrado'>
            <div className='login__content'>
                <div className='login__img'>
                    <img src={family} alt="" width="100%" loading="lazy" />
                </div>
                <div>
                    <LoginForm getAllData={getAllData} loading={loading} />
                </div>
            </div>
        </div>
    )
}

export default LoginContainer