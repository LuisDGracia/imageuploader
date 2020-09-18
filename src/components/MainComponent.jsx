import React, { Fragment } from 'react'
import { Text } from './Global_Styled_Components/Styles'
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
