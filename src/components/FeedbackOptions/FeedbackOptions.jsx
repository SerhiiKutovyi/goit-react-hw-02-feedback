import styled from 'styled-components';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(ele => {
    return (
      <Button key={ele}>
        <button type="button" name={ele} onClick={() => onLeaveFeedback(ele)}>
          {ele}
        </button>
      </Button>
    );
  });
};

const Button = styled.div`
  border-radius: 4px;

  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 20px;

  button {
    padding: 10px 30px;
    border-radius: 4px;
    color: white;
    background-color: #3437e7;
  }
`;
