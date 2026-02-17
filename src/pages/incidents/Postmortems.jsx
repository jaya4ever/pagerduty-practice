<<<<<<< HEAD
import React, { useState } from 'react'
import { 
  Box, 
  Heading, 
  Text, 
  HStack, 
  VStack, 
  Button, 
  Flex,
  Link
} from '@chakra-ui/react'
=======
import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

>>>>>>> 6ed5483ab154d09ef2aa0d58b1c8035ae4594f0e
export default function Postmortems() {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4} color="orange.600">
        Postmortems
      </Heading>
<<<<<<< HEAD
      <VStack align="stretch" spacing={3}>
    <Text>Understand why incidents happen and take specific steps toward prevention. For a walkthrough of creating a postmortem report, see the PagerDuty Knowledge Base.</Text>
    <Text>For information on how to run a postmortem process, check out the PagerDuty Incident Response Documentation.</Text>
  </VStack>
=======
      <Text fontSize="lg">
        This is a simple Postmortems page.
      </Text>
>>>>>>> 6ed5483ab154d09ef2aa0d58b1c8035ae4594f0e
    </Box>
  )
}
