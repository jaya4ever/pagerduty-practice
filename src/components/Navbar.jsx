import React from 'react'
import { Flex, Box, HStack, Link as ChakraLink } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <Box as="nav" bg="teal.500" px={8} py={4} boxShadow="md">
      <Flex align="center" justify="space-between">
        <HStack spacing={8}>
          <ChakraLink as={RouterLink} to="/" color="white" fontWeight="bold">Home</ChakraLink>
          <ChakraLink as={RouterLink} to="/products" color="white" fontWeight="bold">Products</ChakraLink>
          <ChakraLink as={RouterLink} to="/about" color="white" fontWeight="bold">About</ChakraLink>
          <ChakraLink as={RouterLink} to="/contact" color="white" fontWeight="bold">Contact</ChakraLink>
        </HStack>
      </Flex>
    </Box>
  )
}