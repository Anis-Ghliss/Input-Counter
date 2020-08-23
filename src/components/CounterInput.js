import React from "react";
import { amount } from "../action";
import { connect } from "react-redux";

const inputRef = React.createRef();

const CounterInput = ({ dispatch }) => {
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(amount(parseInt(inputRef.current.value, 10)));
        }}
      >
        <input placeholder="amount to add" type="number" required="" ref={inputRef} />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default connect()(CounterInput);
