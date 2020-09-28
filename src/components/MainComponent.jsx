import React, { Fragment } from 'react'
import { Text } from './GlobalStyles'
import Uploader from './UploaderComponent'
import 'normalize.css'

function Main() {
  return (
    <Fragment>
      <Uploader />
      <Text size={ 20 } font= {"Courier New"} >&copy;Zuzki made this</Text>
    </Fragment>
  )
}

export default Main
