export const ADD__USERDATA = 'ADDUSERDATA'
export const USER_CART = 'USER_CART'
export const USER__ORDERS = 'USERORDERS'


export const userData = (user)=>{
    return {
        type:ADD__USERDATA,
        user:user
    }
}



export const userOrders = (orderMeals, orderPrice)=>{
    
    return {
        type:USER__ORDERS,
        orderMeals,
        orderPrice,
        
    }
}