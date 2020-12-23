export const ADD = 'ADD'
export const REMOVE = 'REMOVE'
export const CLEAR = 'CLEAR'


export const currentOrderReducer = (orderData, action) => {
  switch (action.type) {
    case ADD: {
      return addItemToOrder(orderData, action);
    }
    case REMOVE: {
      return removeItemFromOrder(orderData, action);
    }
    case CLEAR:return {items:[], price:0}
    default:
      return orderData;
  }
};

 const addItemToOrder = (orderData,action)=>{
    const updatedPrice = orderData.price + action.price
      const updatedOrder = [...orderData.items]
      const itemIndex = updatedOrder.findIndex((order)=> order.name === action.name)
      if(itemIndex >= 0){
        updatedOrder[itemIndex].amount += 1
      }else{
        updatedOrder.push({name:action.name, amount:1})
      }
      return {
        items:updatedOrder,
        price:updatedPrice
      }
}

 const removeItemFromOrder = (orderData, action)=>{
    const updatedPrice = orderData.price - action.price
      const updatedOrder = [...orderData.items]
      const itemIndex = updatedOrder.findIndex((order)=> order.name === action.name)
      if(itemIndex >= 0){
        if(updatedOrder[itemIndex].amount > 0){
          updatedOrder[itemIndex].amount -= 1
        }else{
          return orderData
        }
      }else{
        return orderData
      }
      return {
        items:updatedOrder,
        price:updatedPrice
      }
}