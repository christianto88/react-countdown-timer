import React from "react";

// class countdownDisplay extends Component {
//   // shouldComponentUpdate(nextProps, nextState) {
//   //   console.log("nextProps", nextProps.time);
//   //   return nextProps.time >= 0 ? true : false;
//   // }
//   // componentDidMount() {
//   //   let { message, time, setTime, setMsg } = this.props;
//   //   console.log("time=", time);
//   //   if (time > 0 && message === "start") {
//   //     setMsg("Runniing");
//   // setInterval(() => {
//   //   time >= 0 ? setTime(time--) : clearInterval();
//   //   // setTime(time--);
//   // }, 1000);
//   //   } else if (time === 0) {
//   //     clearInterval();
//   //   }
//   // }
//   // componentDidUpdate() {
//   //   let { message, time, setTime, setMsg } = this.props;
//   //   console.log("time=", time);
//   //   if (time > 0 && message === "start") {
//   //     setMsg("Runniing");
//   //     setInterval(() => {
//   //       time >= 0 ? setTime(time--) : clearInterval();
//   //       // setTime(time--);
//   //     }, 1000);
//   //   } else if (message === 0) {
//   //     clearInterval();
//   //   }
//   // }
//   render() {
//     const { time, message } = this.props;
//     console.log("render time", time);
//     return (
//       <div style={{ backgroundColor: "#FFFFFF", margin: "0 20px 0 20px" }}>
//         <span>{message ? message : "Time left: " + time}</span>
//       </div>
//     );
//   }
// }
const countdownDisplay = ({ message, time }) => {
  console.log("render time", time);
  return (
    <div
      key={time}
      style={{ backgroundColor: "#FFFFFF", margin: "0 20px 0 20px" }}
    >
      <span>{message ? message : "Time left: " + time}</span>
    </div>
  );
};

export default countdownDisplay;
