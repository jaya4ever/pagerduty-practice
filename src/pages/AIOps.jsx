import React from 'react'
<<<<<<< HEAD
import { Box } from '@chakra-ui/react'

export default function AIOps() {
  return <Box p={8} />
=======
import { Box, Heading, Text } from '@chakra-ui/react'

export default function AIOps() {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4} color="orange.600">
        AIOps
      </Heading>
      <Text fontSize="lg">
        This is a simple AIOps page.
      </Text>
    </Box>
  )
>>>>>>> 6ed5483ab154d09ef2aa0d58b1c8035ae4594f0e
}