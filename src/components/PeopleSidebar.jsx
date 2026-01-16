import React from 'react'
import { Box, VStack, Text, Link as ChakraLink, Grid, GridItem } from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'

export default function PeopleSidebar() {
  const location = useLocation()
  
  const scheduleLinks = [
    { path: '/people/on-call-shifts', label: 'My On-Call Shifts' },
    { path: '/people/schedules', label: 'Schedules' },
    { path: '/people/escalation-policies', label: 'Escalation Policies' },
  ]

  const directoryLinks = [
    { path: '/people/users', label: 'Users' },
    { path: '/people/teams', label: 'Teams' },
  ]

  return (
    <Box w="100%" p={8}>
      <Grid templateColumns="repeat(2, 1fr)" gap={12} maxW="800px">
        <GridItem>
          <Text fontSize="xs" fontWeight="bold" color="gray.500" mb={3} textTransform="uppercase">
            SCHEDULE
          </Text>
          <VStack align="stretch" spacing={2}>
            {scheduleLinks.map((link) => {
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
            DIRECTORY
          </Text>
          <VStack align="stretch" spacing={2}>
            {directoryLinks.map((link) => {
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
