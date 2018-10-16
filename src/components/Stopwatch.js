import React, { Component } from 'react'

class Stopwatch extends Component {
    
    state = {
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0
    }

    componentDidMount() {
        fetch('https://www.hackthebox.eu/api/invite/generate', {
            method: 'POST',
            headers: {
              'Content-Type': 'text/plain',
              'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
              firstParam: 'yourValue'
            })
          }).then((response) => {
              console.log(response.text());
          });
        this.intervalID =  setInterval(() => this.tick() , 100);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick = () => {
        if (this.state.isRunning) {
            const now = Date.now();
            this.setState( prevState => ({
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now - this.state.previousTime) 
            }));
        }
    }

    handleStopWatch = () => {
        this.setState( prevState => ({
            isRunning: !prevState.isRunning
        }));
        if (!this.state.isRunning) {
            this.setState({ previousTime: Date.now() });
        }
    }

    handleReset = () => {
        this.setState( { elapsedTime: 0 })
    }

    render() {
        const seconds = Math.floor(this.state.elapsedTime / 1000);
        return(
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">
                    { seconds }
                </span>
                <button onClick={ this.handleStopWatch }>
                    { this.state.isRunning ? 'Stop' : 'Start' }
                </button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

export default Stopwatch;

