import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.calculateTime = this.calculateTime.bind(this);
        this.state = {
            time: null
        };
    }

    calculateTime() {
        const dateTime = new Date();
        const h = String(dateTime.getHours());
        const m = String(dateTime.getMinutes());
        this.setState({
            time: h.concat(":", m)
        });
    }

    componentDidMount() {
        this.interval = setInterval(this.calculateTime, 1000);
    }

    render() {
        return (
          <div className="Clock">
            {this.state.time}
          </div>
        );
    }
}

export default Clock