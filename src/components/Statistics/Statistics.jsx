import styled from 'styled-components';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Counter className="counter">
      <span className="counterGood">Good: {good}</span>
      <span className="counterNeutral">Neutral: {neutral}</span>
      <span className="counterBad">Bad: {bad}</span>
      <span className="counterTotal">Total: {total}</span>
      <span className="counterPositive">
        Positive feedback: {positivePercentage} %
      </span>
    </Counter>
  );
};

const Counter = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
