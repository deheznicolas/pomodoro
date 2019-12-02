import React from 'react';

function BreakInterval(props) {
    function decreaseCounter() {
        if (props.breakInterval === 1) {
            return;
        }
        props.decreaseBreak();
    }

    function increaseCounter() {
        if (props.breakInterval === 60) {
            return;
        }

        props.increaseBreak();
    }
    return (
        <section class="QPause">
            <h4>Quality pause</h4>
            <section className="interval-container">
            <ul>
                <li><button disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseCounter}>Down</button></li>
                <li><p className="interval-length">{props.breakInterval}</p></li>
                <li><button disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseCounter}>Up</button></li>
            </ul>
            </section>
        </section>
    )
}

export default BreakInterval;
