import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function Postmortems() {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4} color="orange.600">
        Postmortems
      </Heading>
      <Text fontSize="lg">
        This is a simple Postmortems page.
      </Text>
    </Box>
  )
}
