import React, { Component } from 'react';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};

class Statistics extends Component {
  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
      </div>
    );
  }
}
