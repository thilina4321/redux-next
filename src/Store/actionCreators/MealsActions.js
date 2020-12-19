export const ADD_MEALS = 'ADD_MEALS'

export const updateMeals = (meals, totalprice)=>{
    return {
        type:ADD_MEALS,
        meals:meals,
        totalPrice:totalprice
    }
}

