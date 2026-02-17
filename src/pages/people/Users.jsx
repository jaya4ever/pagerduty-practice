import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function Users() {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4}>
        Users
      </Heading>
      <Text fontSize="lg">
        Users content goes here.
      </Text>
    </Box>
  )
}
