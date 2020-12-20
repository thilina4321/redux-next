import { Card, CardContent, Divider } from "@material-ui/core";
import { useSelector } from "react-redux";
import "./Checkout.css";

const Checkout = () => {
  const user = useSelector((state) => state.user.user);

  const orders = useSelector((state) => state.user.userOrders);
  let isMeal = false;
  
  // console.log(orders);

  const orderData = orders.map(order=>{
    // console.log(order);
    return Object.keys(order).map(od=>{
      return {name:od, value:order[od]}
    })
    

  })

  console.log(orderData);
 

  if(orders.length > 0){
    isMeal = true
  }

  
  return (
    <div className="checkout">
      {user && <h1> Hello {user.username} </h1>}
      
      {isMeal ? (
        
          <div className="checkout__items">
            
          {orderData.map((order, i)=>
             <Card className="checkout__item"
              key={i} style={{margin:'20px'}}>
             <CardContent style={{ textAlign: "center" }}>Your Foods</CardContent>

             {
              order.map((od, i)=>{
                return <div key={i}> 
                <p> {od.name} {od.value} </p>
                
             </div>
             
              })
             }

             </Card>
          )}

            
          

          </div>
        
      ) : (
        <h1> No checkouts yet </h1>
      )}
    </div>
  );
};

export default Checkout;
