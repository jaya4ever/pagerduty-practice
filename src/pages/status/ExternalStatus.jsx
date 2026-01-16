import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function ExternalStatus() {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4}>
        External Status Page
      </Heading>
      <Text fontSize="lg">
        External Status Page content goes here.
      </Text>
    </Box>
  )
}
