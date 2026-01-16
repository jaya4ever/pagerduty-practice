import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function Insights() {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4}>
        Insights
      </Heading>
      <Text fontSize="lg">
        Insights content goes here.
      </Text>
    </Box>
  )
}
