import React from 'react'
import { Box, VStack, Text, Link as ChakraLink, Grid, GridItem } from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'

export default function IntegrationsSidebar() {
  const location = useLocation()
  
  const yourIntegrationsLinks = [
    { path: '/integrations/slack', label: 'Slack Integration' },
  ]

  const integrationsLinks = [
    { path: '/integrations/extensions', label: 'Extensions' },
    { path: '/integrations/addon-settings', label: 'Add-On Settings' },
    { path: '/integrations/service-integrations', label: 'Service Integrations' },
    { path: '/integrations/workflow-integrations', label: 'Workflow Integrations' },
  ]

  const developerToolsLinks = [
    { path: '/integrations/app-registration', label: 'App Registration' },
    { path: '/integrations/api-keys', label: 'API Access Keys' },
    { path: '/integrations/api-docs', label: 'API Documentation' },
    { path: '/integrations/webhooks', label: 'Generic Webhooks (v3)' },
  ]

  return (
    <Box w="100%" p={8}>
      <Grid templateColumns="repeat(3, 1fr)" gap={12} maxW="1200px">
        <GridItem>
          <Text fontSize="xs" fontWeight="bold" color="gray.500" mb={3} textTransform="uppercase">
            YOUR INTEGRATIONS
          </Text>
          <VStack align="stretch" spacing={2}>
            {yourIntegrationsLinks.map((link) => {
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
        </GridItem>

        <GridItem>
          <Text fontSize="xs" fontWeight="bold" color="gray.500" mb={3} textTransform="uppercase">
            INTEGRATIONS
          </Text>
          <VStack align="stretch" spacing={2}>
            {integrationsLinks.map((link) => {
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
        </GridItem>

        <GridItem>
          <Text fontSize="xs" fontWeight="bold" color="gray.500" mb={3} textTransform="uppercase">
            DEVELOPER TOOLS
          </Text>
          <VStack align="stretch" spacing={2}>
            {developerToolsLinks.map((link) => {
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
        </GridItem>
      </Grid>
    </Box>
  )
}
