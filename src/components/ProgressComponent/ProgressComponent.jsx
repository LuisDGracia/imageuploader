import React from 'react'
import { Container, ProgressBar } from './ProgressStyles'
import { Text } from '../CardComponent/CardStyles'

export default function Progress(props) {

  return (
    <Container>
      <Text position={"left"} size={25} font={"Poppins"} alpha={0.65}>
        Uploading...
      </Text>
      <ProgressBar max={100} value={props.progress} />
    </Container>
  );
}
