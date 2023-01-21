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
    const total = Object.values(this.state).reduce(
      (acc, total) => acc + total,
      0
    );
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const positivePercentage = (good * 100) / (good + neutral + bad);

    return positivePercentage;
  };

  onHandleClick = event => {
    this.setState(prevState => ({
      [event]: prevState[event] + 1,
    }));
  };

  render() {
    const option = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <Title>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={option}
            onLeaveFeedback={this.onHandleClick}
          />
        </Section>
        <h3>Statistics</h3>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
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
