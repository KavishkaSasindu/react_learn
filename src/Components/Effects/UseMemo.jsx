import { useEffect, useMemo, useState } from "react";

const inputHandle = (name) =>{
    let data;
    for(let i =1 ; i<=100000000 ; i++){
        data=i;
        
    }
    return [name,"AMila"];
}

const UseMemo = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();

  useEffect(() => {
    console.log("I am useEffcet");

    return () => {
      setName((e) => e);
      setAge((e) => e);
    };
  }, [name, age]);

  const url = useMemo(()=>inputHandle(name),[name]);

  console.log(url)

  return (
    <div className="mt-20 space-y-4">
      <h1>UseMemo</h1>
      <div className="flex justify-center items-center ">
        <div className="space-y-3">
          <h1>Your Name is : {name}</h1>
          <input className="p-2 font-semibold rounded-md shadow-md bg-slate-200 w-[400px] outline-none"
            type="text"                                                                   
            placeholder="Name"                                                            
            onChange={(e) => {                                                            
              setName(e.target.value);                                                    
            }}                                                                            
          />                                                                              
          <br />                                                                          
          <h1>                                                                            
            <h1>Your Age is : {age}</h1>                                                  
          </h1>                                                                           
          <input className="p-2 font-semibold rounded-md shadow-md bg-slate-200 w-[400px] outline-none" 
            type="text"
            placeholder="age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <p>{url}</p>
        </div>
      </div>
    </div>
  );
};

export default UseMemo;
