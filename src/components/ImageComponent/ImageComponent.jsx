import React, { Fragment, useRef, useState } from 'react'
import { Container, Text } from '../Global_Styled_Components/Styles';
import { CopyLink, Preview, ReloadBtn, Url, UrlContainer } from './ImageStyle'
import CheckCircle from '@material-ui/icons/CheckCircle'

export default function Image( props ) {

  const urlRef = useRef("");
  const [copied, setCopied] = useState(false)

  const copyHandler = (e) =>{

    const urlCopy = urlRef;
    const range = document.createRange();
    const selection = window.getSelection();
    
    range.selectNodeContents( urlCopy.current );
    selection.removeAllRanges();
    selection.addRange(range);
    
    document.execCommand('copy');
    setCopied(true)
  }

  const reloadHandler = () => {
    window.location.reload(false);
  }

  return (
    <Fragment>
      <Container width={30} height={60} padding={30}>
        <CheckCircle
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            color: "#219653",
            fontSize: 50,
          }}
        />
        <Text style={{margin: 0}} >Upload complete</Text>
        <Preview src={props.Url} />
        <UrlContainer width={85}>
          <Url ref={urlRef}>{props.Url}</Url>
          <CopyLink onClick={copyHandler}>Copy Link</CopyLink>
        </UrlContainer>
      </Container>
      { copied ? 
        <Fragment>
          <p style={{"color": "green"}} >File location copied</p>
          <ReloadBtn onClick={ reloadHandler } >Upload image</ReloadBtn>
        </Fragment>
        : <div></div> }
    </Fragment>
  );
}
