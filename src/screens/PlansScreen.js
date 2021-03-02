import React from "react";
import "./PlansScreen.css";

function PlansScreen() {
    return (
        <div className="plansScreen">
            <div className="plansScreen_plan">
                <div className="plansScreen_info">
                    <h5>Premium</h5>
                    <h6>4k+HDR</h6>
                </div>
                <button>
                    Subscribe
                </button>
            </div>
            <div className="plansScreen_plan_1">
                <div  className="plansScreen_info">
                    <h5>Normal</h5>
                    <h6>Full-HD</h6>
                </div>
                <button>
                    Subscribe
                </button>
            </div>
        </div>
        
    )
}

export default PlansScreen;