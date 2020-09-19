import React, { Fragment } from 'react'
import { Text } from './GlobalStyles'
import Uploader from './UploaderComponent'

function Main() {
  return (
    <Fragment>
      <Uploader />
      <Text size={ 12 } font= {"Courier New"} >&copy;Zuzki made this</Text>
    </Fragment>
  )
}

export default Main
