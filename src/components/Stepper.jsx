import React from 'react'

const Step=({index, status = false, name})=>{
    return (
        <div className={`step ${status && 'selected'}`}>
            <div className='step__number'>
                {index}
            </div>
            <div className='step__name'>
                {name}
            </div>
        </div>
    )
}

const Stepper = ({ phase }) => {
  return (
    <div className='steps'>
        <Step index={1} name="Planes y coberturas" status={phase == "plans"} />
        <div className='divider'>- - -</div>
        <Step index={2} name="Resumen" status={phase == "resume"} />
    </div>
  )
}

export default Stepper