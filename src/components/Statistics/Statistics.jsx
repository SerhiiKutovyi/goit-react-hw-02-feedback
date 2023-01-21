import styled from 'styled-components';

export const Statistics = ({ good, neutral, bad }, total) => {
  console.log(total);
  return (
    <Counter className="counter">
      <span className="counterGood">Good: {good}</span>
      <span className="counterNeutral">Neutral: {neutral}</span>
      <span className="counterBad">Bad: {bad}</span>
      {/* <span className="counterTotal">Total: {total}</span> */}
      <span className="counterPositive">Positive feedback: 0</span>
    </Counter>
  );
};

const Counter = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
