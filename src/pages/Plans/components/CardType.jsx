import Check from "@/src/assets/icons/check"
import { usePlans } from "@/src/context-api/context/plans-module"

const CheckBox=({value})=>{

    return (
        <div className={`checkbox centrado`}>
            {
                value
                ? (
                    <Check />
                )
                :null
            }
        </div>
    )
}

const CardType = ({icon, title, subtitle, type, plansRef}) => {
  const { typePlan, setTypePlan } = usePlans()

  const handleClick=()=>{
        setTypePlan(type)
        if (plansRef.current) {
            plansRef.current.scrollIntoView({ behavior: 'smooth' });
          }
    }
  return (
    <div className={`cardType ${typePlan == type && 'selected'}`} onClick={handleClick}>
        <div className="cardType__check">
            <CheckBox value={typePlan == type}/>
        </div>
        <div className="cardType__icon">
        {
            icon
        }
        </div>
        <div className="cardType__title">
            {title}
        </div>
        <div className="cardType__text">
            {subtitle}
        </div>
    </div>
  )
}

export default CardType