import React, { Component } from 'react'
import { Container, Text } from '../Global_Styled_Components/Styles';
import { Drag, Nothing, Button } from "./CardStyles";

class DragDrop extends Component {
  render(){
    return (
      <Container width={30} height={70} direction="column">
        <Text size={ 27 } alpha={ 0.7 } >Upload you image</Text>
        <Text size={ 14 } alpha={ 0.4 } >File should be Jpeg, Png...</Text>
        <Drag>
          <Text size={14} alpha={ 0.4 } position="bottom" >Drag &amp; Drop your image here </Text>
        </Drag>
        <Text size={ 14 } alpha={ 0.4 }>Or</Text>
        <Button htmlFor="files" >Choose a file</Button>
        <Nothing type='file' id="files" onChange= { this.props.uploadImage } />
      </Container>
    )
  }
}

export default DragDrop
