import React from 'react'
import { Box, VStack, Text, Link as ChakraLink } from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'

export default function AutomationSidebar() {
  const location = useLocation()
  
  const automationLinks = [
    { path: '/automation/actions', label: 'Automation Actions' },
    { path: '/automation/workflows', label: 'Incident Workflows' },
  ]

  return (
    <Box 
      w="250px" 
      p={6} 
      borderRight="1px" 
      borderColor="gray.200" 
      minH="calc(100vh - 80px)"
      bg="white"
      position="relative"
    >
      <VStack align="stretch" spacing={2}>
        {automationLinks.map((link) => {
          const isActive = location.pathname === link.path
          return (
            <ChakraLink
              key={link.path}
              as={RouterLink}
              to={link.path}
              color={isActive ? "green.500" : "gray.700"}
              fontWeight={isActive ? "bold" : "normal"}
              _hover={{ color: "green.500", textDecoration: "none" }}
              style={{ textDecoration: "none" }}
            >
              {link.label}
            </ChakraLink>
          )
        })}
      </VStack>
    </Box>
  )
}
