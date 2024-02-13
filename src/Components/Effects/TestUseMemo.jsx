/* eslint-disable no-unused-vars */
import { useState, useCallback, useEffect } from "react";

const TestUseMemo = () => {
  const [getData, setData] = useState(""); 
  const [result,setResult] = useState(0);
  const [num1] =useState(4)
  const [num2] = useState(5);

const sum =useCallback( ()=>num1+num2,[num1,num2])


  useEffect(()=>{
    console.log(`Sum is ${sum()}`);
    setResult(sum());
  },[getData,sum])

  return (
    <div className="mx-auto w-3/4 mt-5">
      <h1 className="text-pink-700 text-center">{getData || "--"}</h1>
      <input
        type="text"
        placeholder="number 1"
        onChange={(e) => setData(e.target.value)}
        className="px-4 py-2 shadow-md bg-slate-200"
      />
    </div>
  );
};

export default TestUseMemo;
