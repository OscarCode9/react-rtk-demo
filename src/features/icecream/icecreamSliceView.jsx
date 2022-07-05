import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { icecreamActions } from "./icecreamSlice";

const icecreamSliceView = ({ icecream }) => {
  const [value, setValue] = useState(0);
  const numOfIcreamSlices = useSelector(
    (state) => state.icecream.numOfIcreamSlices
  );
  const dispatch = useDispatch();

  if (numOfIcreamSlices) {
    return (
      <div className="icecream-view">
        <h2> IceCream </h2>

        <p> Num of icecream: {numOfIcreamSlices}</p>
        <button
          onClick={() => {
            dispatch(icecreamActions.ordered());
          }}
        >
          {" "}
          Order icecream
        </button>
        <input type="number" onChange={(e) => setValue(e.target.value)} />
        <button
          onClick={() => {
            dispatch(icecreamActions.restocked(Number(value)));
          }}
        >
          {" "}
          Restock icecream{" "}
        </button>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default icecreamSliceView;
