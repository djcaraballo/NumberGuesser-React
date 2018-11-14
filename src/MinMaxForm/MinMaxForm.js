import React, { Component } from 'react';
import './MinMaxForm.css'

class MinMaxForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      min: 0,
      max: 100,
      minGreaterThanMax: false,
      maxLessThanMin: false,
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    const { min, max, minGreaterThanMax, maxLessThanMin } = this.state
    this.setState({ [name]: parseInt(value) })
    if (min > max) {
      this.setState({
        minGreaterThanMax: true
      })
    } else {
        this.setState({
          minGreaterThanMax: false
        })
      }

    if (max < min && min === 0) {
      this.setState({
        maxLessThanMin: true
      })
    } else {
      this.setState({
        maxLessThanMin: false
      })
    }
  }

  handleSubmit = (event) => {
    const { min, max } = this.state
    event.preventDefault()
  }

  render() {
    const { min, max, minGreaterThanMax, maxLessThanMin } = this.state

    return(
      <form 
        className="min-max-form"
        onSubmit={this.handleSubmit}>
        <h4>Minimum Guess</h4>
        <input 
          className="min-input"
          name="min"
          value={min}
          placeholder="Minimum Guess"
          onChange={this.handleChange} 
        />
        <h5 
          className={minGreaterThanMax ? "min-greater-error-active" : "min-greater-error-inactive"}
        >
          Minimum guess should be less than the maximum guess!
        </h5>
        <h4>Maximum Guess</h4>
        <input
          className="max-input"
          name="max"
          value={max}
          placeholder="Maximum Guess"
          onChange={this.handleChange} 
        />
        <h5 
          className={maxLessThanMin ? "max-lesser-error-active" : "max-lesser-error-inactive"}
        >
          Maximum guess should be greater than the minimum guess!
        </h5>
        <button>Update</button>
        <p>The current guessing range is <span>{min}</span> to <span>{max}</span></p>
      </form>
    )
  }
}

export default MinMaxForm;
