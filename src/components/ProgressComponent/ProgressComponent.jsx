import React from 'react'
import { Container } from './ProgressStyles'
import { Text } from '../CardComponent/CardStyles'

export default function ProgressBar({ progress }) {
  return (
    <Container>
      <Text>Uploading...</Text>
      <ProgressBar />
    </Container>
  )
}
