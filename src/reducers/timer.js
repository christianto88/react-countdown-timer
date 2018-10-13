const timer = (state = 0, action) => {
  switch (action.type) {
    case "SET_TIMER":
      return action.time;
    default:
      return state;
  }
};
export default timer;
