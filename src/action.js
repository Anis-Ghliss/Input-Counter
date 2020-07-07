export const inc = () => {
  return {
    type: "INCR"
  };
};

export const dec = () => {
  return {
    type: "DECR"
  };
};

export const amount = amount => {
  return {
    type: "AMOUNT",
    payload: amount
  };
};
