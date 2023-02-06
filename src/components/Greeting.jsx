import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";
import LoginButton from "../btnComponents/BtnLogin";
import LogoutButton from "../btnComponents/BtnLogout";
function Greeting(props) {
  
  
    const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return (
      <div>
        <GuestGreeting />
        <LogoutButton />
      </div>
    )
  }
    return (
      <div>
        <UserGreeting />
        <LoginButton />
      </div>
    );
    // return (isLoggedIn ? ( <div>
    //     <UserGreeting />
    //     <LoginButton />
    //   </div>) : ((
    //   <div>
    //     <GuestGreeting />
    //     <LogoutButton />
    //   </div>
    // )))
  }


export default Greeting;
