import React, { Component, Fragment } from 'react'
import { Card, Drag, Text, Nothing, Button } from "./MainStyles";
import { storage } from '../firebase'

export default class Uploader extends Component {

  fileSelectedHandler = event => {
    console.log( event.target )
    const file = event.target.files[0];

    const storageRef = storage.ref(`imagenes/${file.name}`);
    const task = storageRef.put(file);

    task.on('state_changed', snapshot => {
      console.log( snapshot )
    }, err => console.log( err ), 
    () => {
      storage.ref("imagenes").child(file.name).getDownloadURL().then( url => {
        console.log( url )
      })
    }
  )}

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
          <Nothing type='file' id="files" onChange= { this.fileSelectedHandler } accept="image/x-png, image/gif, image/jpeg" />
        </Card>
      </Fragment>
    )
  }
}
