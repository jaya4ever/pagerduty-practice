import React from 'react'
import { Flex, Box, HStack, Link as ChakraLink } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { routes } from '../layout/route.js'

export default function Navbar() {
 
  

  return (
    <Box as="nav" bg="green.600" px={8} py={4} boxShadow="md">
      <Flex align="center" justify="space-between">
        <HStack spacing={6}>
          {routes.map(
            (route) =>
              route.path &&
              <ChakraLink
                key={route.path}
                as={RouterLink}
                to={route.path}
                color="white"
                fontWeight="semibold"
                _hover={{ color: "green.200" }}
              >
                {route.label}
              </ChakraLink>
          )}
        </HStack>
      </Flex>
    </Box>
  )
}