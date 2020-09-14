import React from 'react'
import { Card, Container, Drag, DragText } from './MainStyles'

function Main() {
  return (
    <Container>
      <Card>
        <Drag>
          <DragText>Drag &amp; Drop your image here </DragText>
        </Drag>
      </Card>
    </Container>
  )
}

export default Main
