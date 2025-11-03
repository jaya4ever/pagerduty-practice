import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function Automation() {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4} color="purple.600">
        Automation
      </Heading>
      <Text fontSize="lg">
        This is a simple Automation page.
      </Text>
    </Box>
  )
}