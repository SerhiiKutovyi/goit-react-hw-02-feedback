import styled from 'styled-components';

export const Section = ({ title, titleStat, children }) => {
  return (
    <Title>
      {title && <h2>{title}</h2>}
      {titleStat && <h3>{titleStat}</h3>}

      {children}
    </Title>
  );
};

const Title = styled.section`
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
