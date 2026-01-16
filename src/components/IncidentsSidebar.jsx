import React from 'react'
import { Box, VStack, Text, Link as ChakraLink } from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'

export default function IncidentsSidebar() {
  const location = useLocation()
  
  const responseLinks = [
    { path: '/incidents/all', label: 'All Incidents' },
    { path: '/incidents/alerts', label: 'Alerts' },
    { path: '/incidents/postmortems', label: 'Postmortems' },
  ]

  const settingsLinks = [
    { path: '/incidents/incident-types', label: 'Incident Types' },
    { path: '/incidents/conference-bridges', label: 'Conference Bridges' },
    { path: '/incidents/status-templates', label: 'Status Update Templates' },
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
      <VStack align="stretch" spacing={6}>
        <Box>
          <Text fontSize="xs" fontWeight="bold" color="gray.500" mb={3} textTransform="uppercase">
            RESPONSE
          </Text>
          <VStack align="stretch" spacing={2}>
            {responseLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <ChakraLink
                  key={link.path}
                  as={RouterLink}
                  to={link.path}
                  color={isActive ? "green.500" : "gray.700"}
                  fontWeight={isActive ? "medium" : "normal"}
                  _hover={{ color: "green.500", textDecoration: "none" }}
                  style={{ textDecoration: "none" }}
                >
                  {link.label}
                </ChakraLink>
              )
            })}
          </VStack>
        </Box>

        <Box borderTop="1px" borderColor="gray.200" my={2} />

        <Box>
          <Text fontSize="xs" fontWeight="bold" color="gray.500" mb={3} textTransform="uppercase">
            SETTINGS
          </Text>
          <VStack align="stretch" spacing={2}>
            {settingsLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <ChakraLink
                  key={link.path}
                  as={RouterLink}
                  to={link.path}
                  color={isActive ? "green.500" : "gray.700"}
                  fontWeight={isActive ? "medium" : "normal"}
                  _hover={{ color: "green.500", textDecoration: "none" }}
                  style={{ textDecoration: "none" }}
                >
                  {link.label}
                </ChakraLink>
              )
            })}
          </VStack>
        </Box>
      </VStack>
    </Box>
  )
}
