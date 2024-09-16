import { useNavigate } from "react-router-dom"
import BackGrey from "../assets/icons/BackGrey"

const ProgressBar = ({ phase }) => {
    const navigate = useNavigate()

    return (
        <div className='progressBar'>
            <div className="progressBar__icon" onClick={()=>navigate(-1)}>
                <BackGrey />
            </div>
            <div className="progressBar__text">
                {
                    phase == 'plans'
                    ?<div>PASO 1 DE 2</div>
                    :<div>PASO 2 DE 2</div>
                }
            </div>
            <div className="progressBar__container">
                <div className={`${phase == 'plans' ? 'p-50' : 'p-100'}`}>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar