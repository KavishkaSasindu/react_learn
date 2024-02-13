import { useEffect, useState } from "react";

const UseEffect = () => {
  const [getCount, setCount] = useState(0);

  useEffect(() => {
    console.log("I am UseEffect");

    return () => {
      console.log("I am Clean Up");
      setCount((e) => e);
    };
  }, [getCount]);

  return (
    <div>
      <h1>UseState and useEffect</h1>
      <div className="flex justify-center ">
        <div className="space-x-4 space-y-8">
          <h1 className="text-center text-2xl">Count : {getCount}</h1>
          <button
            className="btn-1"
            onClick={() => {
              setCount(getCount + 1);
            }}
          >
            Increment
          </button>
          <button
            className="btn-1"
            onClick={() => {
              setCount(getCount - 1);
            }}
          >
            Decrement
          </button>
          <button
            className="btn-1"
            onClick={() => {
              setCount(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
