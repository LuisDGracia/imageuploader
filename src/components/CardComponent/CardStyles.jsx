import styled from 'styled-components'

export const Drag = styled.div`
  width: 80%;
  height: 40%;
  align-self: center;
  border-radius: 10px;
  border: 2px dashed rgba(128, 198, 255, 1); 
  background-color: rgba(128, 198, 255, 0.25);
`;

export const Nothing = styled.input`
  visibility: hidden;
`;

export const Button = styled.label`
  display: inline-block;
  color: #fff;
  width: 100px;
  height: 40px;
  margin: 0 auto;
  line-height: 220%;
  text-align: center;
  border-radius: 10px;
  background-color: #2f80ed;
`;