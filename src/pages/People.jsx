import React from 'react'
<<<<<<< HEAD
import { Box } from '@chakra-ui/react'

export default function People() {
  return <Box p={8} />
=======
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
>>>>>>> 6ed5483ab154d09ef2aa0d58b1c8035ae4594f0e
}