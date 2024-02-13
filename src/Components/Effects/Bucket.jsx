/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useCallback } from "react";
import uuid from "react-uuid";
import { MdDone } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

const Bucket = () => {
  const [state, setState] = useState([]);

  const [wish, setWish] = useState({
    title: "",
    by: "",
  });

  const handleWish = (e) => {
    e.preventDefault();
    const key = e.target.name;
    const value = e.target.value;
    setWish({
        ...wish, 
        [key]: value 
    });
  };

  const addWish =() => {
    console.log(wish)
  }

  return (
    <div className="mt-5">
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold text-center ">My Bucket List</h1>
        <div>
          I want to{" "}
          <input
            type="text"
            name="title"
            onChange={handleWish}
            className="p-2 bg-slate-200 rounded-md"
          />{" "}
          by{" "}
          <input
            type="date"
            name="by"
            onChange={handleWish}
            className="p-2 bg-slate-200 rounded-md"
          />
          <button
            className="ml-3 bg-slate-300 text-black px-4 py-2 rounded-md shadow-lg hover:bg-slate-900 hover:text-white "
            onClick={addWish}
          >
            Make a Wish
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Bucket;
