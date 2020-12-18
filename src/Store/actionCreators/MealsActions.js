export const ADD_MEALS = 'ADD_MEALS'

export const updateMeals = (meals)=>{
    return {
        type:ADD_MEALS,
        meals:meals
    }
}