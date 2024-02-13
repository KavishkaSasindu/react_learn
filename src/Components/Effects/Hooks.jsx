/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect,useCallback } from "react";

const Hooks = () => {

const [getName,setName] = useState("");
const [getCounter,setCounter] = useState(0);

const handleData = useCallback(() =>{
    return `Hello ${getName}`
},[getName]);

useEffect(() =>{
    console.log("I am UseEffect")
},[getName])
  return (
    <div>
      <h1>{getName}</h1>
      <div>
        <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
      </div>
      <h1>{getCounter}</h1>
      <div>
        <button onClick={()=>{
            setCounter(getCounter+1);
        }}>Counter</button>
      </div>
    </div>
  );
};
 
export default Hooks;
