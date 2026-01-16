import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function IncidentRoles() {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4} color="orange.600">
        Incident Roles
      </Heading>
      <Text fontSize="lg">
        This is a simple Incident Roles page.
      </Text>
    </Box>
  )
}
