import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  increment = () => {
    this.setState(previousState => {
      if (previousState.speed < 200) {
        return {
          speed: previousState.speed + 10,
        }
      }
      return {speed: previousState.speed}
    })
  }

  decrement = () => {
    this.setState(previousState => {
      if (previousState.speed !== 0) {
        return {speed: previousState.speed - 10}
      }
      return {speed: previousState.speed}
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          className="img"
          alt="speedometer"
        />
        <h1 className="speed">
          Speed is <span className="span">{speed}mph</span>
        </h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="button1" onClick={this.increment}>
            Accelerate
          </button>
          <button className="button2" onClick={this.decrement}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
