import React, { useRef } from 'react'
import { Container, Text } from '../Global_Styled_Components/Styles';
import { CopyLink, Preview, Url } from './ImageStyle'
import CheckCircle from '@material-ui/icons/CheckCircle'

export default function Image( props ) {

  const urlRef = useRef("");

  const copyHandler = (e) =>{

    const urlCopy = urlRef;
    const range = document.createRange();
    const selection = window.getSelection();
    
    range.selectNodeContents( urlCopy.current );
    selection.removeAllRanges();
    selection.addRange(range);
    
    document.execCommand('copy');
    alert('Photo url copied to clipboard');
  }

  return (
    <Container width={30} height={60} padding={30} direction="column">
      <CheckCircle
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          color: "#219653",
          fontSize: 68,
        }}
      />
      <Text>Upload complete</Text>
      <Preview src={props.Url} />
      <Container width={85} direction="row">
        <Url ref={urlRef}>{props.Url}</Url>
        <CopyLink onClick={copyHandler}>Copy Link</CopyLink>
      </Container>
    </Container>
  );
}
