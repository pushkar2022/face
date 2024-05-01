import './App.css';

import { auth } from "./config";
import { signInWithPopup,FacebookAuthProvider } from "firebase/auth";


function App() {
  console.log("App",process.env.REACT_APP_APIKEY);
  const facebook=()=>{
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Facebook Login Successful", user);
      })
      .catch((error) => {
        if (error.code === 'auth/popup-closed-by-user') {
          console.log("Error: User closed the Facebook login popup before signing in.");
          // alert("Oops! It looks like you closed the login popup before you could sign in. Please try again, and make sure to allow popup windows if necessary.");
        } else {
          console.log("Error during Facebook login", error);
          // alert("An error occurred during the login process. Please try again later.");
        }
      });
       
       

   
  }
  return (
    <div className="App">
    <button onClick={()=>facebook()}>FacebookButton</button>
    </div>
  );
}

export default App;
