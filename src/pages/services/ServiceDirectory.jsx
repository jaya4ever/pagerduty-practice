import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function ServiceDirectory() {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4}>
        Service Directory
      </Heading>
      <Text fontSize="lg">
        Service Directory content goes here.
      </Text>
    </Box>
  )
}
