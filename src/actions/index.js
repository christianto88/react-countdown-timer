export const setTimer = time => {
  return { type: "SET_TIMER", time };
};
export const setMessage = message => {
  return {
    type: "SET_MESSAGE",
    message
  };
};
