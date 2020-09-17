import React, { Component } from 'react'
import { CardContainer, Drag, Text, Nothing, Button } from "./CardStyles";

class DragDrop extends Component {
  render(){
    return (
      <CardContainer>
        <Text size={ 27 } alpha={ 0.7 } >Upload you image</Text>
        <Text size={ 14 } alpha={ 0.4 } >File should be Jpeg, Png...</Text>
        <Drag>
          <Text size={14} alpha={ 0.4 } bottom>Drag &amp; Drop your image here </Text>
        </Drag>
        <Text size={ 14 } alpha={ 0.4 }>Or</Text>
        <Button htmlFor="files" >Choose a file</Button>
        <Nothing type='file' id="files" onChange= { this.props.uploadImage } />
      </CardContainer>
    )
  }
}

export default DragDrop
