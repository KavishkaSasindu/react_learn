import { useState, useEffect, useMemo } from "react";

const Test = () => {
  
const [randomNumber,setRandomNumber] = useState(0);


useEffect(()=>{
    console.log(`random Number changed ${randomNumber}`)

    
    // setRandomNumber(Math.random());
},[randomNumber])

const getRandomNum = useMemo(()=>{
    const number = Math.random();
    setRandomNumber(number);

},[])
 



  return (
    <div>
     <h1>Generate Random Number</h1>
     <p onClick={getRandomNum}>{randomNumber}</p>
    </div>
  );
};

export default Test;
