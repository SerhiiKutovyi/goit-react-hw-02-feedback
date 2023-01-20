// import styled from 'styled-components';
import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export const App = () => {
  return (
    <>
      <StatisticsExpresso />
    </>
  );
};

export class StatisticsExpresso extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    const keyBtn = event.target.textContent;
    this.setState(prevState => ({
      [keyBtn]: prevState[keyBtn] + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.state}
        />

        <h3>Statistics</h3>

        <div className="counter">
          <span className="counterGood">Good: {this.state.good}</span>
          <span className="counterNeutral">Neutral: {this.state.neutral}</span>
          <span className="counterBad">Bad: {this.state.bad}</span>
        </div>
      </div>
    );
  }
}

// const Statistics = styled.div`
//   h2 {
//     margin-left: 20px;
//     margin-bottom: 20px;
//     color: green;
//     font-family: 'Poppins';
//     font-style: normal;
//     font-weight: 700;
//     font-size: 48px;
//     line-height: 72px;
//   }

//   h3 {
//     margin-left: 20px;
//     margin-bottom: 20px;
//     color: #5418e0;
//     font-family: 'Poppins';
//     font-style: normal;
//     font-weight: 700;
//     font-size: 48px;
//     line-height: 72px;
//   }
// `;

// const Button = styled.div`
//   display: flex;

//   gap: 20px;
//   background: transparent;
//   border-radius: 3px;

//   margin-top: 40px;
//   margin-bottom: 40px;
//   margin-left: 20px;

//   button {
//     padding: 10px 30px;
//     border-radius: 4px;
//     background-color: coral;
//   }
// `;

// const Counter = styled.span`
//   margin-left: 20px;
//   display: flex;
//   gap: 25px;
// `;
