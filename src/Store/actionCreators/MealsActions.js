export const ADD_MEALS = 'ADD_MEALS'
export const CLEAR__MEALS = 'CLEAR__MEALS'

export const updateMeals = (meals, totalprice)=>{
    return {
        type:ADD_MEALS,
        meals:meals,
        totalPrice:totalprice
    }
}

export const clearMeals = ()=>{
    return {type:CLEAR__MEALS}
}