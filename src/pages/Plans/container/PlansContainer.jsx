import React, { useEffect, useRef, useState } from 'react'
import PlanTypes from '../components/PlanTypes'
import { usePlans } from '@/src/context-api/context/plans-module'
import CardPlan from '../components/CardPlan'
import { getPlansInRangeAge, reducePriceInPlans } from '../utils';
import LeftArrow from '@/src/assets/icons/LeftArrow';
import RightArrow from '@/src/assets/icons/RightArrow';

const CARD_PLAN_WIDTH_DEFAULT = 300;

const PlansContainer = () => {
  const { plans = [], typePlan, user } = usePlans();
  const [isOverflowDiv, setIsOverflowDiv] = useState(false)
  const { age } = user
  const [data, setData] = useState([])
  const containerRef = useRef(null);

  // Depende al typo de plan "For me" or "For another" filtra la data
  useEffect(() => {
    if (typePlan == 1) {
      setData(getPlansInRangeAge(plans, age))
    }

    if (typePlan == 2) {
      setData(reducePriceInPlans(plans))
    }
  }, [typePlan])

  // Valida si los cards superan al contenedor
  useEffect(() => {
    if(data.length > 0){
      if (containerRef.current) {
        const divWidth = containerRef.current.getBoundingClientRect().width;
        setIsOverflowDiv(data.length * CARD_PLAN_WIDTH_DEFAULT > divWidth)
      }
    }
  }, [data])
  
  // Permite hacer el scroll horizontal
  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className='plans'>
      <PlanTypes plansRef={containerRef} />
      <div className={`cardPlans ${!isOverflowDiv && 'center-x'}`} ref={containerRef}>
        {
          data.map(plan => (
            <CardPlan data={plan} />
          ))
        }
      </div>
      {
        (data.length > 0 && isOverflowDiv) && (
          <div className="plans__scroller">
            <div onClick={scrollLeft} className='icon'>
              <LeftArrow/>
            </div>
            <div onClick={scrollRight} className='icon'>
              <RightArrow />
            </div>
          </div>
        )
      }
    </div>
  )
}

export default PlansContainer