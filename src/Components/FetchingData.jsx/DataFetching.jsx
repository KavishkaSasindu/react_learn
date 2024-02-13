/* eslint-disable no-unused-vars */
import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.value,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: "Something Went Wrong!!",
        post: {},
      };
    default:
      return currentState;
  }
};

function DataFetching() {
  const [get, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({
          type: "FETCH_SUCCESS",
          value: response.data,
        });
      })
      .catch(() => {
        dispatch({
          type: "FETCH_ERROR",
        });
      });
  }, []);
  return (
    <div>
      {get.loading ? "loading..." : get.post.title}
      {get.error ? get.error : null}
    </div>
  );
}

export default DataFetching;
