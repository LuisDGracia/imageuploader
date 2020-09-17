import React, { Fragment } from 'react'
import { Container, Text } from './CardComponent/CardStyles'
import Uploader from './UploaderComponent'

function Main() {
  return (
    <Fragment>
      <Container>
        <Uploader />
        <Text size={ 12 } font= {"Courier New"} >&copy;Zuzki made this</Text>
      </Container>
    </Fragment>
  )
}

export default Main
