import Forms from "../components/Forms";
import { connect } from "react-redux";
import { setMessage, setTimer } from "../actions";
const mapStateToProps = state => {
  return { time: state.timer };
};
const mapDispatchToProps = dispatch => {
  return {
    setMsg: message => dispatch(setMessage(message)),
    setTime: time => dispatch(setTimer(time))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forms);
