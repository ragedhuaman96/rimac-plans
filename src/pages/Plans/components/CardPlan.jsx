import Clinic from "@/src/assets/icons/Clinic"
import Home from "@/src/assets/icons/Home"
import { usePlans } from "@/src/context-api/context/plans-module"
import { useNavigate } from "react-router-dom"

const _data = {
    "name": "Plan en Casa + Bienestar",
    "price": 70,
    "description": [
        "Videoconsulta con especialistas de psicología y nutrición.",
        "Acceso a videos y recursos sobre bienestar.",
        "Incluye todos los beneficios del Plan en Casa."
    ],
    "age": 25
}

const CardPlan = ({ data }) => {
    const { name, price,  description } = data
    const { setSelectedPlan } = usePlans()
    const navigate = useNavigate()

    const selectPlan=()=>{
        setSelectedPlan(data)
        navigate('/resume')
    }

    return (
        <div className="cardPlan">
            <div>

            </div>
            <div className="cardPlan__header">
                <div>
                    {name}
                </div>
                {
                    name.includes('Clínica')
                    ?(<Clinic />)
                    :(<Home />)
                }
            </div>
            <div className="cardPlan__price">
                <div className="text">
                    COSTO DEL PLAN
                </div>
                <div className="price">
                    ${price} al mes
                </div>
            </div>
            <ul className="cardPlan__description">
                {
                    description.map(item=>(
                        <li className="item">
                            {item}
                        </li>
                    ))
                }
            </ul>
            <div className="cardPlan__btn" onClick={selectPlan}>
                Seleccionar Plan
            </div>
        </div>
    )
}

export default CardPlan