// import React, {useState} from "react";
// function GuestGreeting() {

//   const [click, setClick] = useState();
//   function clickHandler(){
//     setClick(!click);
//   }
//   return (
//     <div className="signup">
//       <h3>Please sign up</h3>
//       <button onClick={clickHandler}>
//         <b>logout </b>
//       </button>
//       <div>{click && <h1>Asylbek Ibrakhimov</h1>}</div>
//     </div>
//   );
// }
// export default GuestGreeting;


function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
  export default GuestGreeting;