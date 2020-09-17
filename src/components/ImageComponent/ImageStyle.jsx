import styled from 'styled-components'

export const Container = styled.div`
  width: 50%;
  height: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.13);
`;

export const Preview = styled.img`
  width: 300px;
  margin: 20px auto;
  border-radius: 10px;
`

export const UrlContainer = styled.div`
  display: flex;
  width: 85%;
  margin: 0 auto;
  border-radius: 12px;

  border: 1px solid #000;
`;

export const Url = styled.span`
  width: 80%;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px; 
`;

export const CopyLink = styled.button`
  width: 20%;
  color: #fff;
  border: none;
  border-radius: 10px;
  background-color: #2f80ed;
`;