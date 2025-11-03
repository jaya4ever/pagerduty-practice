import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function People() {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4} color="green.600">
        People
      </Heading>
      <Text fontSize="lg">
        Manage users, teams, and escalation policies. Configure on-call schedules, 
    
      </Text>
    </Box>
  )
}