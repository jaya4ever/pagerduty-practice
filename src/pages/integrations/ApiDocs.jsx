import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function ApiDocs() {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4}>
        API Documentation
      </Heading>
      <Text fontSize="lg">
        API Documentation content goes here.
      </Text>
    </Box>
  )
}
