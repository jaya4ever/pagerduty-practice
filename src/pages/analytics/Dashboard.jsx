import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function Dashboard() {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4}>
        Dashboard
      </Heading>
      <Text fontSize="lg">
        Dashboard content goes here.
      </Text>
    </Box>
  )
}
