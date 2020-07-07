import React from "react";
import { connect } from "react-redux";

const Counter = prop => {
  return (
    <div>
      <h1>Counter : {prop.count}</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(Counter);
