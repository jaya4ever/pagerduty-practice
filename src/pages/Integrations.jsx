import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function Integrations() {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4} color="cyan.600">
        Integrations
      </Heading>
      <Text fontSize="lg">
        Connect PagerDuty with your existing tools and services.
      </Text>
    </Box>
  )
}