import React from 'react'
import { Card, Container, Drag, Text } from './MainStyles'

function Main() {
  return (
    <Container>
      <Card>
        <Text size={ 27 } alpha={ 0.7 } >Upload you image</Text>
        <Text size={ 14 } alpha={ 0.4 } >File should be Jpeg, Png...</Text>
        <Drag>
          <Text size={14} alpha={ 0.4 } bottom>Drag &amp; Drop your image here </Text>
        </Drag>
      </Card>
    </Container>
  )
}

export default Main
