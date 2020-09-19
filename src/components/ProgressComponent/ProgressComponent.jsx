import React from 'react'
import { ProgressBar } from './ProgressStyles'
import { Container, Text } from '../GlobalStyles'

export default function Progress(props) {

  return (
    <Container width={70} height={20} direction="column">
      <Text position={"left"} size={25} font={"Poppins"} alpha={0.65}>
        Uploading...
      </Text>
      <ProgressBar max={100} value={props.progress} />
    </Container>
  );
}
