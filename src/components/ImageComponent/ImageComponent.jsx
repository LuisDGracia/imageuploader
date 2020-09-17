import React from 'react'
import { Container, CopyLink, Preview, Url, UrlContainer } from './ImageStyle'
import CheckCircle from '@material-ui/icons/CheckCircle'
import { Text } from '../CardComponent/CardStyles';

export default function Image() {
  return (
    <Container>
      <CheckCircle style={{marginLeft: "auto", marginRight: "auto", color: "#219653", fontSize: 68 }} />
      <Text>Upload complete</Text>
      <Preview src="https://firebasestorage.googleapis.com/v0/b/image-upload-tester-70ec7.appspot.com/o/imagenes%2Fpexels-nout-gons-378570.jpg?alt=media&token=77a1b355-392e-4e50-931b-1bec5727f5cb" />
      <UrlContainer>
        <Url>
          {
            "https://firebasestorage.googleap is.com/v0/b/image-upload-tester-70ec7.appspot.com/o/imagenes%2Fpexels-nout-gons-378570.jpg?alt=media&token=77a1b355-392e-4e50-931b-1bec5727f5cb"
          }
        </Url>
        <CopyLink>Copy Link</CopyLink>
      </UrlContainer>
    </Container>
  );
}
