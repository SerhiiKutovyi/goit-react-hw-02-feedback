import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

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
    const positivePercentage =
      (this.state.good * 100) / this.countTotalFeedback();
    return Math.round(positivePercentage);
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
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={option}
            onLeaveFeedback={this.onHandleClick}
          />
        </Section>
        <Section titleStat="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
        {/* <Notification message="There is no feedback" /> */}
      </>
    );
  }
}
