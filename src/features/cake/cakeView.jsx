import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cakeActions } from "./cakeSlice";

const CakeView = ({ cake }) => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  if (numOfCakes) {
    return (
      <div className="cake-view">
        <h2> Cakes </h2>
        <p> Num cakes: {numOfCakes}</p>
        <button
          onClick={() => {
            dispatch(cakeActions.ordered());
          }}
        >
          {" "}
          Order cake
        </button>
        <button
          onClick={() => {
            dispatch(cakeActions.restocked(5));
          }}
        >
          {" "}
          Restock Cakes{" "}
        </button>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default CakeView;
