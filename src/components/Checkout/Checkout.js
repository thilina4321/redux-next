import { Button, Card, CardContent, Dialog } from "@material-ui/core";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./Checkout.css";

const Checkout = () => {
  const user = useSelector((state) => state.user.user);
  const [open, setOpen] = useState(false)

  const orders = useSelector((state) => state.user.userOrders);
  let isMeal = false;
 
  if(orders.length > 0){
    isMeal = true
  }

  
  return (
    <div className="checkout">
      {user && <h1> Hello {user.username} </h1>}
      
      {isMeal ? (
        
          <div className="checkout__items">

          {orders.map((order,i)=>
            <Card style={{marginBottom:'10px', marginTop:'10px'}}
             className="checkout__item"
             key={i}>
             <CardContent> Your Order </CardContent>
             {order.items.map((od,i)=>{
              return <div key={i}> 
              <p className="order__data"> {od.name} {od.amount} </p>
              
           </div>
            })}

            <div className="price"> Price  ${order.price} </div>
            <Button onClick={()=>setOpen(true)}
             variant="contained" color="primary"> Payment </Button>
            <Dialog 
             open={open}
             onClose={()=>{setOpen(false)}}>
             <h3 style={{margin:'50px', textAlign:'center'}}>
             Payment section is under contruction.
             Will fix it soon
             </h3>
             </Dialog>
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
