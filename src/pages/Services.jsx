import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function Services() {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4} color="blue.600">
        Services
      </Heading>
      <Text fontSize="lg">
        This is a simple Service page.
      </Text>
    </Box>
  )
}