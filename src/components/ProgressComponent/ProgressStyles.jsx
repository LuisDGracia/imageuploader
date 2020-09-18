import styled from 'styled-components'

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