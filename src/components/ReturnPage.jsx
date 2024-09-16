import React from 'react'
import { Back } from '../assets/icons/Back'
import { useNavigate } from 'react-router-dom'

const ReturnPage = () => {
  const navigate = useNavigate()
  return (
    <div className='returnPage' onClick={()=>navigate(-1)}>
        <Back />
        Volver
    </div>
  )
}

export default ReturnPage