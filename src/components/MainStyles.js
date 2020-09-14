import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 400px;
  height: 470px;
  border-radius: 10px;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
  align-self: center;
`;

export const Drag = styled.div`
  width: 80%;
  height: 40%;
  align-self: center;
  border-radius: 10px;
  border: 2px dashed rgba(128, 198, 255, 1); 
  background-color: rgba(128, 198, 255, 0.25);
`;

export const DragText = styled.p`
  text-align: center;
  position: relative;
  top: 130px;
  font-family: sans-serif;
  color: rgba(0, 0, 0, 0.4);
`;