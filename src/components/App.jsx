import styled from 'styled-components';
import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((acc, total) => {
      return acc + total;
    }, 0);
  };

  onHandleClick = event => {
    this.setState(prevState => ({
      [event]: prevState[event] + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {};

  render() {
    const option = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <Title>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          options={option}
          onLeaveFeedback={this.onHandleClick}
        />
        <h3>Statistics</h3>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback}
          // positiveP55ercentage={this.state}
        />
      </Title>
    );
  }
}

const Title = styled.div`
  h2 {
    margin-left: 20px;
    margin-bottom: 20px;
    color: green;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
  }

  h3 {
    margin-left: 20px;
    margin-bottom: 20px;
    color: #5418e0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
  }
`;
