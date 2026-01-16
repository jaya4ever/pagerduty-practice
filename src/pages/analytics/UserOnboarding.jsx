import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function UserOnboarding() {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4}>
        User Onboarding
      </Heading>
      <Text fontSize="lg">
        User Onboarding content goes here.
      </Text>
    </Box>
  )
}
