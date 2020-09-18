import styled from 'styled-components'

export const Preview = styled.img`
  width: 50%;
  margin: 20px auto;
  border-radius: 10px;
`

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