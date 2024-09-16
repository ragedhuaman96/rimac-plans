import Myselft from "@/src/assets/icons/Myselft"
import CardType from "./CardType"
import Another from "@/src/assets/icons/Another"
import { useState } from "react"
import { usePlans } from "@/src/context-api/context/plans-module"

const PlanTypes = ({plansRef}) => {
    const { user} = usePlans()
    
    return (
        <div className="planTypes centrado">
            <div>
                <div className="planTypes__content">
                    <div className="title">
                        {user.name} ¿Para quién deseas cotizar?
                    </div>
                    <p>
                        Selecciona la opción que se ajuste más a tus necesidades.
                    </p>
                </div>
                <div className="planTypes__types">
                    <CardType icon={<Myselft />} title="Para mi" subtitle="Cotiza tu seguro de salud y agrega familiares si así lo deseas." type={1} plansRef={plansRef}/>
                    <CardType icon={<Another />} title="Para alguien más" subtitle="Realiza una cotización para uno de tus familiares o cualquier persona." type={2} plansRef={plansRef} />
                </div>
            </div>
        </div>
    )
}

export default PlanTypes