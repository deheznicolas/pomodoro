import React from "react";
import ReactDOM from "react-dom";


import Time from "../components/time";
import Button from "../components/bouton";
import Modal from "../components/modal";

import "../scss/app.scss";





class App extends React.Component {
    constructor(props) {
        super(props);
        //interval
        this.intervalID = null;
        //other variables
        this.defaultTimer = 1 * 60;
        //binding functions
        this.increment = this.handleIncrement.bind(this);
        this.decrement = this.handleDecrement.bind(this);
        this.reset = this.handleReset.bind(this);
        this.start = this.handleStart.bind(this);
        this.restart = this.restartFunc.bind(this);
        //states
        this.state = {
            seconde: this.defaultTimer,
            play: false,
            modal: false,
        };
    }

    showModalFunc() {
        this.setState({modal: true});
    }

    hideModalFunc() {
        this.setState({modal: false});
    }

    handleIncrement() {
        if (this.state.play) {
            this.setState(prefstats => ({
                seconde: prefstats.seconde + 60,
            }));
        } else {
            this.defaultTimer += 60;
            this.setState(() => ({
                seconde: this.defaultTimer,
            }));
        }
    }

    handleDecrement() {
        //réduction du timer pendant le décompte
        if (this.state.play) {
            this.setState(prefstats => ({
                seconde: prefstats.seconde - 60,
            }));
            if (this.state.seconde <= 0) {
                this.setState(() => ({
                    seconde: 0,
                }));
            }
        } else {
            //réduction du timer par défaut
            this.defaultTimer -= 60;
            this.setState(() => ({
                seconde: this.defaultTimer,
            }));
        }
    }

    decrease() {
        this.setState(prefstats => ({
            seconde: --prefstats.seconde,
        }));
        if (this.state.seconde <= 0) {
            clearInterval(this.intervalID);
            this.setState(() => ({
                seconde: 0,
                play: false,
            }));
            //active alert
            this.showModalFunc();
        }
    }

    handleReset() {
        if (this.intervalID != null) {
            clearInterval(this.intervalID);
        }
        this.setState(() => ({
            seconde: this.defaultTimer,
            play: false,
        }));
    }

    handleStart() {



      console.log(this.defaultTimer);
      console.log(this.state.seconde);








        if (!this.state.play) {
            if (this.state.seconde === 0) {
                this.setState({seconde: this.defaultTimer});
            }
            this.setState(() => ({
                play: true,
            }));
            this.intervalID = setInterval(() => {
                this.decrease();
            }, 1000);
        } else {
            clearInterval(this.intervalID);
            this.setState(() => ({
                play: false,
            }));
        }
    }
    restartFunc() {
        this.handleReset();
        this.handleStart();
    }



    render() {
        let playButtonValue = "Go !";
        if (this.state.play) {
            playButtonValue = "Pause";













        }
        return (
            <div className={"container"}>
                <div className={"container-timer"}>
                    <Time seconde={this.state.seconde} />
                    <div className={"buttonsList"}>
                      <ul>
                        <li>
                            <Button value={"+"} handleFunc={this.increment} />
                        </li>
                        <li>
                            <Button value={"-"} handleFunc={this.decrement} />
                        </li>
                        <li>
                            <Button value={"Reset"} handleFunc={this.reset} />
                        </li>
                        <li>
                            <Button value={playButtonValue} handleFunc={this.start} />
                        </li>
                      </ul>
                  </div>
                </div>
            </div>
        );
    }
}



const Render = document.querySelector("#app");



ReactDOM.render(<App />, Render);
