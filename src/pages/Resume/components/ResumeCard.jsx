import User from "@/src/assets/icons/User"

const ResumeCard = ({ user, plan }) => {
    const { name, price } = plan
    const { dni, phone } = user
    return (
        <div className='resumeCard'>
            <div className='resumeCard__subtitle'>
                PRECIOS CALCULADOS PARA:
            </div>
            <div className='resumeCard__user'>
                <User />
                {
                    user.name
                }
            </div>
            <div className="resumeCard__content">
                <span>Responsable de pago</span>
                <div>
                    DNI: {dni}
                </div>
                <div>
                    Celular: {phone}
                </div>
            </div>
            <div className="resumeCard__content">
                <span>Plan elegido</span>
                <div>
                    {name}
                </div>
                <div>
                    Costo del Plan: ${price} al mes
                </div>
            </div>
        </div>
    )
}

export default ResumeCard