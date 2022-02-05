import React from 'react';
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { addToOrderList } from '../Redux/OrderSlice';



function Foods() {
    const [data,setData]= useState([]);
    const dispatch = useDispatch();
    async function getData(){
        const api  =('https://resturant-database-3d62f-default-rtdb.firebaseio.com/Foods.json')
        const result =await fetch(api);
        console.log(result);
        const getResult = await result.json();
        setData(getResult);
        console.log(getResult)
       }
       useEffect(() => { 
        getData();
    }, []); 
  return <div className='flex flex-wrap'>
    {data && data.map(val => val && <div className='w-1/2 flex justify-center mt-5 mb-5'>
      <div  className="bg-white w-4/5 h-60 rounded shadow-md flex card text-grey-darkest border-dotted border-2 border-gre	">
            <img className="w-1/2 h-full rounded-l-sm" src={val?.img} alt="Room Image"/>
            <div className="w-full flex flex-col">
                <div className="p-4 pb-0 flex-1">
                    <h2 className="font-light mb-1 text-grey-darkest">{val?.name}</h2>
            
                    <span className="text-5xl text-grey-darkest">{val?.price}</span>
    
                </div>
                <div className="bg-grey-lighter p-8 flex  justify-around transition">
                   
                    <li className="list-none">{val?.category}</li>
                    <li className="list-none w-6 h-6"><button onClick={() => {
                dispatch(addToOrderList(val));
             
              }}> <img src='https://pic.onlinewebfonts.com/svg/img_407396.png' /></button>
           </li>
                </div>
            </div>
        </div>
  </div> )}
 

  </div>;
}

export default Foods;
