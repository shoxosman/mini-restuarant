import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { removeFromOrderList ,Increase_Quantity ,Decrease_Quantity} from "../Redux/OrderSlice"
function OrderList() {
  const orderlist = useSelector((state) => state.order.value);
  const dispatch = useDispatch();
  const totalPrice = orderlist.reduce((result, food) => {
    return result + food.price * food.quantity;
}, 0);

const totalItems = orderlist.reduce((result, food) => {
    return result + food.quantity;
}, 0);

  return <div>
      {orderlist.map((food, index) => {
              /* totalPrice += food?.price;
              console.log(totalPrice); */
              
              return (
                <div className="cart-card mt-2">
                   
                    <div className='flex row justify-around'>
                    <div><h2 style={{ fontSize: "2rem" }}>{food?.name}</h2>
                      <h4>${food?.price}</h4>
                      <h4>{food?.category}</h4>
                      <div className='flex row justify-around'> 
                           <button 
                            onClick={() => {
                           dispatch(Increase_Quantity(food.name)); }}
                           className="text-2xl"> +
                            </button> <span  className="text-2xl">{food.quantity}</span>
                           <button  className="text-2xl"
                            onClick={() => {
                             dispatch(Decrease_Quantity(food.name));}}> -</button>
                               </div>                
                      
                    
                      <button
                        onClick={() => {
                          dispatch(removeFromOrderList(food?.name));
                      
                        }}
                        className="text-lg"
                      >Remove</button>

                      </div>
                      
                    <div><img style={{ width: "140px" }} src={food?.img} alt="" /></div>
                      </div>
                      <hr style={{ width: "100%"}}/>
                      
                   
                </div>
              );
            })}
            <div className=" h-20 m-5 mb-10 border-2 border-gre">
              <h4>Numbers of Items: {totalItems}</h4>
    
              <h4>Total Price: ${totalPrice}</h4>
            </div>
  </div>;
}

export default OrderList;
