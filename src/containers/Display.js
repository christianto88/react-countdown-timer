import CountdownDisplay from "../components/CountdownDisplay";
import { connect } from "react-redux";
import { setMessage, setTimer } from "../actions";
const mapStateToProps = state => {
  return {
    message: state.message,
    secondsLeft: state.timer.secondsLeft,
    timer: state.timer.timer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setMsg: message => dispatch(setMessage(message)),
    setTime: timer => dispatch(setTimer(timer))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountdownDisplay);
