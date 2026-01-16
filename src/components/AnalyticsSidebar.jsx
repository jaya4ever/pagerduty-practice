import React from 'react'
import { Box, VStack, Text, Link as ChakraLink, Grid, GridItem, Badge } from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'

export default function AnalyticsSidebar() {
  const location = useLocation()
  
  const interpretLinks = [
    { path: '/analytics/dashboard', label: 'Dashboard' },
    { path: '/analytics/insights', label: 'Insights' },
    { path: '/analytics/operational-reviews', label: 'Operational Reviews' },
    { path: '/analytics/event-analytics', label: 'Event Analytics' },
    { path: '/analytics/advance', label: 'PagerDuty Advance', badge: 'NEW' },
  ]

  const improveLinks = [
    { path: '/analytics/operational-maturity', label: 'Operational Maturity' },
    { path: '/analytics/on-call-readiness', label: 'On-Call Readiness' },
    { path: '/analytics/user-onboarding', label: 'User Onboarding' },
    { path: '/analytics/service-recommendations', label: 'Service Recommendations' },
  ]

  return (
    <Box w="100%" p={8}>
      <Grid templateColumns="repeat(2, 1fr)" gap={12} maxW="800px">
        <GridItem>
          <Text fontSize="xs" fontWeight="bold" color="gray.500" mb={3} textTransform="uppercase">
            INTERPRET
          </Text>
          <VStack align="stretch" spacing={2}>
            {interpretLinks.map((link) => {
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
        </GridItem>

        <GridItem>
          <Text fontSize="xs" fontWeight="bold" color="gray.500" mb={3} textTransform="uppercase">
            IMPROVE
          </Text>
          <VStack align="stretch" spacing={2}>
            {improveLinks.map((link) => {
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
