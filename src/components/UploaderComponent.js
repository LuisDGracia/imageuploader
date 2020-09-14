import React, { Component, Fragment } from 'react'
import { Card, Drag, Text, Nothing, Button } from "./MainStyles";
import axios from 'axios';

export default class Uploader extends Component {

  state = {
    selectedFile: null
  }

  fileSelectedHandler = event => {
    console.log( event.target.files[0] )
    this.setStateU({
      selectedFile: event.target.files[0]
    });
  }

  render() {
    return (
      <Fragment>
        <Card>
          <Text size={ 27 } alpha={ 0.7 } >Upload you image</Text>
          <Text size={ 14 } alpha={ 0.4 } >File should be Jpeg, Png...</Text>
          <Drag>
            <Text size={14} alpha={ 0.4 } bottom>Drag &amp; Drop your image here </Text>
          </Drag>
          <Text size={ 14 } alpha={ 0.4 }>Or</Text>
          <Button htmlFor="files" >Choose a file</Button>
          <Nothing type='file' id="files" onChange= { this.fileSelectedHandler } />
        </Card>
      </Fragment>
    )
  }
}
