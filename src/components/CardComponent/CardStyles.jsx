import styled from 'styled-components'

export const Drag = styled.div`
  width: 80%;
  height: 40%;
  align-self: center;
  position: relative;
  border-radius: 10px;
  border: 2px dashed rgba(128, 198, 255, 1);
  background-color: rgba(128, 198, 255, 0.25);

  @media (max-width: 1023px){
    position:absolute;
    top: -500px;
    visibility: hidden;
  }

  .icon{
    width: 80px;
    height: 80px;
    position: absolute;
    top: 30px;
    left 110px;
  }
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

  &:hover {
    background-color: #2b68ba;
    cursor: pointer;
  }
`;