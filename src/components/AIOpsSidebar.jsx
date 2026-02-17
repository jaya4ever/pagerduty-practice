import React from 'react'
import { Box, VStack, Text, Link as ChakraLink, Badge } from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'

export default function AIOpsSidebar() {
  const location = useLocation()
  
  const aiopsLinks = [
    { path: '/aiops/noise-reduction', label: 'Noise Reduction', badge: 'NEW' },
    { path: '/aiops/event-orchestration', label: 'Event Orchestration' },
    { path: '/aiops/recent-changes', label: 'Recent Changes' },
    { path: '/aiops/event-rules', label: 'Event Rules' },
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
      <Text fontSize="sm" fontWeight="bold" color="gray.700" mb={4}>
        Operations Console
      </Text>
      <VStack align="stretch" spacing={2}>
        {aiopsLinks.map((link) => {
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
              display="flex"
              alignItems="center"
              gap={2}
            >
              {link.label}
              {link.badge && (
                <Badge colorScheme="purple" fontSize="xs">NEW</Badge>
              )}
            </ChakraLink>
          )
        })}
      </VStack>
    </Box>
  )
}
