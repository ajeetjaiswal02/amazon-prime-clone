import React, { useState } from "react";
import "./LoginScreen.css";

import SignInScreen from "./SignInScreen";

function LoginScreen(){
    const [signIn,setSignIn] = useState(false);
    return(
        <div className="loginScreen">
            <div className="loginScreen_background">
                <img
                  className="loginScreen_logo"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light._SY32_FMpng_.png"
                  alt="Netflix_logo"                
                />
                <button onClick={() => setSignIn(true)} 
                   className="loginScreen_button">
                    Sign In
                </button>
                <div className="loginScreen_gradient">
                </div>
            </div>
            <div className="loginScreen_body">
                {signIn? (
                    <SignInScreen />
                ):(
                    <>
                    <h1>Welcome to Prime Video.</h1>
                    <h3>Join Prime to watch the latest movies,TV shows and award-winning Amazon Originals</h3>
                    <h4>Ready to watch? Enter your email to Start watching.</h4>

                    <div className="loginScreen_input">
                        <form>
                            <input type="email" placeholder="Email Address" />
                            <button onClick={()=> setSignIn(true)}
                            className="loginScreen_getStarted">Start your 30-day trial
                            </button>
                        </form>

                    </div>
                    </>
                )}
                   
            </div>
        </div>
    )
}

export default LoginScreen;