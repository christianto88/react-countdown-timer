const timer = (state = { secondsLeft: 0, timer: 0 }, action) => {
  switch (action.type) {
    case "SET_TIME":
      return { ...state, secondsLeft: action.secondsLeft };
    case "SET_TIMER":
      return { ...state, timer: action.timer };
    default:
      return state;
  }
};
export default timer;
