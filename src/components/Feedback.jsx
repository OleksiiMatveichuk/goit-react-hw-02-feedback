import React, { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickGood = () => {
    this.setState(stat => ({
      good: stat.good + 1,
    }));
  };

  clickNeutral = () => {
    this.setState(stat => ({
      neutral: stat.neutral + 1,
    }));
  };

  clickBad = () => {
    this.setState(stat => ({
      bad: stat.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button type="button" onClick={this.clickGood}>
            Good
          </button>
          <button type="button" onClick={this.clickNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.clickBad}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <ul>
          <li>
            <p>Good:</p>
            <span>{this.state.good}</span>
          </li>
          <li>
            <p>Neutral:</p>
            <span>{this.state.neutral}</span>
          </li>
          <li>
            <p>Bad:</p>
            <span>{this.state.bad}</span>
          </li>
          <li>
            <p>Total</p>
            <span>{this.countTotalFeedback()}</span>
          </li>
          <li>
            <p>Positive feedback:</p>
            <span>{this.countPositiveFeedbackPercentage() || 0} %</span>
          </li>
        </ul>
      </div>
    );
  }
}
