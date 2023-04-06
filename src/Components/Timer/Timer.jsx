import React from "react";
import cl from "./_Timer.module.scss";

const Timer = () => {
    return (
        <div className={cl.TimerBlock}>
            {/* Должна быть гифка */}
            <span className={cl.TimerSpan}>00:21</span>
        </div>
    );
}
 
export default Timer;