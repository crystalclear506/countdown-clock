import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import CountdownClock from './Components/countdown-clock';
import './demo.css';

const DemoPage = () => {    
    let ref = React.createRef();
    let inputRef = React.createRef();

    const setTimeCustom = (countdownClock, inputTime) => {
        let deltaTime = Number.parseInt(inputTime);
        if (deltaTime) {
            countdownClock.setCountdownEnd(new Date().getTime() + deltaTime * 1000);
        }
    }

    return (
        <div>
            <div className='display'>
                <CountdownClock ref={ref}/>
            </div>
            <div className='dashboard-container'>
                <div className='input one-minute'>
                    <button onClick={ e => setTimeCustom(ref.current, 60) } > Set One Minute </button>
                </div>
                <div className='input'>
                    <button onClick={ e => setTimeCustom(ref.current, 60 * 60) } > Set One Hour </button>
                </div>
                <div className='input'>
                    <button onClick={ e => setTimeCustom(ref.current, 60 * 60 * 24) } > Set One Day </button>
                </div>
                <div className='input'>
                    <button onClick={ e => setTimeCustom(ref.current, 60 * 60 * 24 * 7) } > Set 7 Days </button>
                </div>
                <div className='input custom-input'>
                    <input placeholder="Please input seconds" ref={ inputRef }></input>
                    <button onClick={ e => setTimeCustom(ref.current, inputRef.current.value) } > Set Custom Time </button>
                </div>
            </div>
        </div>        
    )
}

ReactDOM.render(<DemoPage/>, document.getElementById('root'));