const iniState = {
  count: 0,
  inputToAdd: 0
};

export const rootReducer = (state = iniState, action) => {
  switch (action.type) {
    case "AMOUNT":
      return {
        ...state,
        count: state.count + action.payload
      };
    default:
      return state;
  }
};
