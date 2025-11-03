import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function Analytics() {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4} color="teal.600">
        Analytics
      </Heading>
      <Text fontSize="lg">
        This is a simple Analytics page.
      </Text>
    </Box>
  )
}