import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function Status() {
return (
    <Box p={8}>
        <Heading as="h1" size="xl" mb={4} color="gray.600">
            Status
        </Heading>
        <Text fontSize="lg">
            This is a simple status page.
        </Text>
    </Box>
)
}