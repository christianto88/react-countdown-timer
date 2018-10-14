import Forms from "../components/Forms";
import { connect } from "react-redux";
import { setMessage, setTimer, setTime } from "../actions";
const mapStateToProps = state => {
  return { secondsLeft: state.timer.secondsLeft, timer: state.timer.timer };
};
const mapDispatchToProps = dispatch => {
  return {
    setMsg: message => dispatch(setMessage(message)),
    setTime: time => dispatch(setTime(time)),
    setTimer: timer => dispatch(setTimer(timer))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forms);
