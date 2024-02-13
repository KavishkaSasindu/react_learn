import { useState,useEffect, useCallback } from "react";

const UseCallback = () => {
  const [getName, setName] = useState("");
  const [getAge, setAge] = useState();

  const myFunction = useCallback(()=>{
    return ()=>console.log("I am useCallback")
  },[])

  useEffect(()=>{
    console.log("I am useEffect called");
    myFunction();

  },[myFunction])

  return (
    <div className="w-full">
      <div className="mt-10 container w-1/2 mx-auto space-y-3">
        <h1>Your name is {getName}</h1>
        <input
          type="text"
          value={getName}
          placeholder="Enter Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        <br />
        <h1> your age is {getAge}</h1>
        <input
          type="text"
          value={getAge}
          placeholder="Enter age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default UseCallback;
