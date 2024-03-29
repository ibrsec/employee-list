import React from "react";

const Buttons = (props) => {
  return (
    <div className="mt-4 mb-0 d-flex align-items-center justify-content-center gap-2">
      <button
        className="btn btn-dark px-4 py-2" 
        onClick={props.onClick}
        id="prev"
      >
        Prev
      </button>
      <button
        className="btn btn-dark  px-4 py-2" 
        onClick={props.onClick}
        id="next"
      >
        Next
      </button>
    </div>
  );
};

export default Buttons;
