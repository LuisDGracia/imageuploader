import styled from 'styled-components'

export const Preview = styled.img`
  width: 50%;
  margin: 20px auto;
  border-radius: 10px;

  @media (max-width: 1023px) {
    height: 50%;
    margin: 5px auto;
  }
  
  
  @media (max-width: 425px) {
    width: 60%;
    margin: 5px auto;
  }
`;

export const UrlContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);

  width: ${(props) => props.width}%;
  height: ${(props) => props.height}%;

  @media (max-width: 1023px) {
    width: 80%;
    height: 10%;
    margin-top: 10px;
  }
`;

export const Url = styled.p`
  margin: 0 auto;
  width: 70%;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CopyLink = styled.button`
  width: 30%;
  height: 100%;
  color: #fff;
  border: none;
  border-radius: 10px;
  background-color: #2f80ed;

  &:hover {
    background-color: #2b68ba;
    cursor: pointer;
  }
`;

export const ReloadBtn = styled.button`
  background-color: #2f80ed;
  border-radius: 10px;
  border: none;
  color: #fff;
  height: 35px;

  &:hover {
    background-color: #2b68ba;
    cursor: pointer;
  }
`;