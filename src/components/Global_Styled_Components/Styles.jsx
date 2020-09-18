import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);

  width: ${(props) => props.width}%;
  height: ${(props) => props.height}%;

  @media (max-width: 1023px){
    width: 75%;
    height: 60%;
  }

`;

export const Text = styled.p`
  text-align: center;
  ${(props) => {
    switch (props.position) {
      case "bottom":
        const bottom = ["position: relative;", "top: 130px;"];
        return bottom;

      case "left":
        const left = ["margin: 10px 0px 10px 40px;", "text-align: start;"];
        return left;

      default:
        break;
    }
  }}

  font-size: ${(props) => props.size || "15"}px;
  font-family: ${(props) => props.font || "sans-serif"};
  color: rgba(0, 0, 0, ${(props) => props.alpha || "1"});

  ${ props => {
    if( props.mobile ){
      return `@media (max-width: 1023px){
        position:absolute;
        top: -500px;
        visibility: hidden;
      }`;
    }
  }}
`;