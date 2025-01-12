import { useState } from "react";
import './css/counter.css';

function Counter() {
    const [count, setCount] = useState(0);

    const inc = () => {
        setCount(prevCount => prevCount + 1);
    }

    const dec = () => {
        setCount(prevCount => Math.max(0, prevCount - 1));
    }

    return (
        <>
            <div className="counter-container">
                <h1 className="counter-display">Count : {count}</h1>
                <div className="counter-box">
                    <button className="counter-button" onClick={inc}>
                        Increase
                        <img 
                            width="24" 
                            height="24" 
                            src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-up-arrow-arrows-tanah-basah-basic-outline-tanah-basah.png" 
                            alt="external-up-arrow-arrows-tanah-basah-basic-outline-tanah-basah"
                        />
                    </button>
                    <button className="counter-button" onClick={dec}>
                        Decrease
                        <img 
                            width="24" 
                            height="24" 
                            src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-down-arrow-arrows-tanah-basah-basic-outline-tanah-basah.png" 
                            alt="external-down-arrow-arrows-tanah-basah-basic-outline-tanah-basah"
                        />
                    </button>      
                    <button className="counter-button" onClick={() => setCount(0)}>
                        Reset
                        <img 
                            width="50" 
                            height="50" 
                            src="https://img.icons8.com/ios-filled/50/recurring-appointment.png" 
                            alt="recurring-appointment"
                        />
                    </button>
                </div>
            </div>
        </>
    );
} 

export default Counter;