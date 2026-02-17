import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function RecentChanges() {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4}>
        Recent Changes
      </Heading>
      <Text fontSize="lg">
        Recent Changes content goes here.
      </Text>
    </Box>
  )
}
