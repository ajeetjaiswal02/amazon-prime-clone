import React , { useRef } from "react";
import { auth } from "../firebase";
import "./SignInScreen.css";


function SignInScreen(){
  const emailRef = useRef(null)
  const passwordRef = useRef(null)


  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser)

    }).catch(error =>{
      alert(error.message)
    })
  };

  const signIn = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser)
    }).catch(error => {
      alert(error.message)
    })
  };



    return(
        <div className="signupScreen">
            <form>
                <h1>Sign Up</h1>
                <input
                  ref={emailRef}
                  type="email" 
                  placeholder="Email"
                  required
                />
                <input
                  ref={passwordRef}
                  type="password"
                  placeholder="Password"
                  required 
                /> 
                <button onClick={signIn} type="submit">Sign In
                </button>
                <h4>
                  <span className="signupScreen_gray">New to Amazon? </span> 
                  <span onClick={register} className="signupScreen_link">Sign Up now.</span></h4>
            </form>
        </div>
    )
}

export default SignInScreen;