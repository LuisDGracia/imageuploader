import styled from 'styled-components'

export const Container = styled.div`
  width: 70%;
  height: 150px;
  margin: 0 auto;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.13);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ProgressBar = styled.progress`
  appearance: none;
  width: 85%;
  height: 5%;
  margin: 0 auto;

  ::-webkit-progress-value {
    background: #2f80ed;
    border-radius: 10px;
  }
  ::-webkit-progress-bar {
    background: rgba(0,0,0, 0.05);
    border-radius: 10px;
  }
`;