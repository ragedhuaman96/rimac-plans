export const getPlansInRangeAge =(plans, age)=>{
    return plans.filter(plan=>plan.age <= age)
}

export const reducePriceInPlans= (plans) =>{
    return plans.map(plan=>({...plan, price: plan.price * 0.95}))
}