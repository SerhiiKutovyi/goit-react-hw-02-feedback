import styled from 'styled-components';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <Button key={option}>
        <button
          type="button"
          name={option}
          onClick={event => console.log(event.target.name)}
        >
          {option}
        </button>
      </Button>
    );
  });
};

const Button = styled.div`
  display: flex;

  gap: 20px;
  background: transparent;
  border-radius: 3px;

  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 20px;

  button {
    padding: 10px 30px;
    border-radius: 4px;
    background-color: coral;
  }
`;
