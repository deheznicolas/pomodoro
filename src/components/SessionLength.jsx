import React from 'react';

function SessionLength(props) {
    function increaseSession() {
        if (props.sessionLength === 60) {
            return;
        }
        props.increaseSession();
    }
    function decreaseSession() {
        if (props.sessionLength === 1) {
            return;
        }
        props.decreaseSession();
    }


    return (
        <section class="QualityWork">
            <h4>Quality work</h4>
            <section className="interval-container">
              <ul>
                <li><button disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseSession}>Down</button></li>
                <li><p className="interval-length">{props.sessionLength}</p></li>
                <li><button disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseSession}>Up</button></li>
              </ul>
            </section>
        </section>
    )
}

export default SessionLength;
