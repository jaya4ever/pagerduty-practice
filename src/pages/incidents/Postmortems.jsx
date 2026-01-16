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
export default function Postmortems() {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4} color="orange.600">
        Postmortems
      </Heading>
      <VStack align="stretch" spacing={3}>
    <Text>Understand why incidents happen and take specific steps toward prevention. For a walkthrough of creating a postmortem report, see the PagerDuty Knowledge Base.</Text>
    <Text>For information on how to run a postmortem process, check out the PagerDuty Incident Response Documentation.</Text>
  </VStack>
    </Box>
  )
}
