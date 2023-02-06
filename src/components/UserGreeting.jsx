
// import React, {useState} from "react"

// function UserGreeting() {
// const [click, setClick]=useState('')
//     const clickHandler=()=>{
//         setClick(!click)
//     }
//   return (
//     <div>
//       <h3>Welcome back!</h3>
//       <button onClick={clickHandler}>
//         <b>login </b>
//       </button>
//       <div>
//         {click && <h1>Elnura Askarova</h1>}
//       </div>
//           </div>
//   );
// }
// export default UserGreeting;


function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  export default UserGreeting;