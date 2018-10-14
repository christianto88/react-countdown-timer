export const setTime = secondsLeft => {
  return { type: "SET_TIME", secondsLeft };
};
export const setTimer = timer => {
  return { type: "SET_TIMER", timer };
};
export const setMessage = message => {
  return {
    type: "SET_MESSAGE",
    message
  };
};
