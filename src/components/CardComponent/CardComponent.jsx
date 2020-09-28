import React from 'react'
import { Container, Text } from '../GlobalStyles';
import { Drag, Nothing, Button } from "./CardStyles";

function DragDrop( props ) {
  return (
    <Container width={30} height={70}>
      <Text size={ 36 } alpha={ 0.7 } >Upload you image</Text>
      <Text size={ 16 } alpha={ 0.4 } >File should be Jpeg, Png...</Text>
      <Drag 
        onDragEnter={ props.fileEnter }
        onDragOver={ props.fileOver }
        onDragLeave={ props.fileLeave } 
        onDrop={ props.fileDrop } >
          <img src="./assets/images/upload.png" alt="upload icon" className="icon" />
        <Text size={ 14 } alpha={ 0.4 } position="bottom" >Drag &amp; Drop your image here </Text>
      </Drag>
      <Text size={ 14 } alpha={ 0.4 } mobile>Or</Text>
      <Button htmlFor="files" >Choose a file</Button>
      <Nothing type='file' id="files" onChange= { props.uploadImage } />
    </Container>
  )
}

export default DragDrop
