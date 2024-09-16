import { usePlans } from '@/src/context-api/context/plans-module'
import React from 'react'
import ResumeCard from '../components/ResumeCard'

const ResumeContainer = () => {
  const { planSelected, user } = usePlans()

  return (
    <div className='resume'>
        <div className='resume__title'>
            Resumen del seguro
        </div>
        <ResumeCard plan={planSelected} user={user}/>
    </div>
  )
}

export default ResumeContainer