import React, { useState, useRef, useEffect } from 'react'
import { 
  Flex, 
  Box, 
  HStack, 
  Link as ChakraLink, 
  Input,
  Text,
  Badge,
  Grid,
  GridItem,
  VStack
} from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { routes } from '../layout/route.js'

const SearchIcon = ({ color = "gray.400" }) => (
  <Box as="svg" w={4} h={4} viewBox="0 0 20 20" fill="none" color={color}>
    <path
      d="M19 19l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Box>
)

const IncidentsDropdown = ({ isActive }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
        setIsHovering(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

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
      ref={menuRef} 
      position="relative" 
      display="inline-block"
      onMouseEnter={() => {
        setIsHovering(true)
        setIsOpen(true)
      }}
      onMouseLeave={() => {
        setIsHovering(false)
        setIsOpen(false)
      }}
    >
      <ChakraLink
        as="button"
        fontWeight="medium"
        color={isHovering || isActive ? "green.500" : "gray.700"}
        borderBottom={isHovering || isActive ? "2px solid" : "none"}
        borderColor="green.500"
        pb={2}
        _hover={{ color: "green.500", textDecoration: "none" }}
        style={{ textDecoration: "none", background: "none", border: "none", cursor: "pointer" }}
      >
        Incidents
      </ChakraLink>
      
      {isOpen && (
        <Box
          position="absolute"
          top="100%"
          left={0}
          mt={0}
          pt={1}
          bg="white"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="md"
          boxShadow="lg"
          minW="500px"
          p={4}
          zIndex={1000}
          onMouseEnter={() => {
            setIsHovering(true)
            setIsOpen(true)
          }}
          onMouseLeave={() => {
            setIsHovering(false)
            setIsOpen(false)
          }}
        >
          <Grid templateColumns="repeat(2, 1fr)" gap={8}>
            <GridItem>
              <Text fontSize="xs" fontWeight="bold" color="gray.500" mb={3} textTransform="uppercase">
                RESPONSE
              </Text>
              <VStack align="stretch" spacing={2}>
                {responseLinks.map((link) => (
                  <ChakraLink
                    key={link.path}
                    as={RouterLink}
                    to={link.path}
                    display="block"
                    color="gray.700"
                    _hover={{ color: "green.500", textDecoration: "none" }}
                    style={{ textDecoration: "none" }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </ChakraLink>
                ))}
              </VStack>
            </GridItem>
            <GridItem>
              <Text fontSize="xs" fontWeight="bold" color="gray.500" mb={3} textTransform="uppercase">
                SETTINGS
              </Text>
              <VStack align="stretch" spacing={2}>
                {settingsLinks.map((link) => (
                  <ChakraLink
                    key={link.path}
                    as={RouterLink}
                    to={link.path}
                    display="block"
                    color="gray.700"
                    _hover={{ color: "green.500", textDecoration: "none" }}
                    style={{ textDecoration: "none" }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </ChakraLink>
                ))}
              </VStack>
            </GridItem>
          </Grid>
        </Box>
      )}
    </Box>
  )
}

const NavDropdown = ({ label, isActive, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
        setIsHovering(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <Box 
      ref={menuRef} 
      position="relative" 
      display="inline-block"
      onMouseEnter={() => {
        setIsHovering(true)
        setIsOpen(true)
      }}
      onMouseLeave={() => {
        setIsHovering(false)
        setIsOpen(false)
      }}
    >
      <ChakraLink
        as="button"
        fontWeight="medium"
        color={isHovering || isActive ? "green.500" : "gray.700"}
        borderBottom={isHovering || isActive ? "2px solid" : "none"}
        borderColor="green.500"
        pb={2}
        _hover={{ color: "green.500", textDecoration: "none" }}
        style={{ textDecoration: "none", background: "none", border: "none", cursor: "pointer" }}
      >
        {label}
      </ChakraLink>
      
      {isOpen && (
        <Box
          position="absolute"
          top="100%"
          left={0}
          mt={0}
          pt={1}
          bg="white"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="md"
          boxShadow="lg"
          minW="220px"
          zIndex={1000}
          onMouseEnter={() => {
            setIsHovering(true)
            setIsOpen(true)
          }}
          onMouseLeave={() => {
            setIsHovering(false)
            setIsOpen(false)
          }}
        >
          {menuItems.map((item) => (
            <ChakraLink
              key={item.path}
              as={RouterLink}
              to={item.path}
              display={item.badge ? "flex" : "block"}
              alignItems={item.badge ? "center" : "normal"}
              px={4}
              py={2}
              color="gray.700"
              _hover={{ bg: "gray.50", color: "green.500", textDecoration: "none" }}
              style={{ textDecoration: "none" }}
              onClick={() => setIsOpen(false)}
              gap={item.badge ? 2 : 0}
            >
              {item.label}
              {item.badge && (
                <Badge colorScheme="purple" fontSize="xs">NEW</Badge>
              )}
            </ChakraLink>
          ))}
        </Box>
      )}
    </Box>
  )
}

export default function Navbar() {
  const location = useLocation()
  const isIncidentsBaseRoute = location.pathname === '/' || location.pathname === '/incidents'

  const dropdownMenus = {
    '/services': [
      { path: '/services/directory', label: 'Service Directory' },
      { path: '/services/business', label: 'Business Services' },
      { path: '/services/graph', label: 'Service Graph' },
      { path: '/services/custom-fields', label: 'Service Custom Fields', badge: 'NEW' },
    ],
    '/people': [
      { path: '/people/on-call-shifts', label: 'My On-Call Shifts' },
      { path: '/people/schedules', label: 'Schedules' },
      { path: '/people/escalation-policies', label: 'Escalation Policies' },
      { path: '/people/users', label: 'Users' },
      { path: '/people/teams', label: 'Teams' },
    ],
    '/automation': [
      { path: '/automation/actions', label: 'Automation Actions' },
      { path: '/automation/workflows', label: 'Incident Workflows' },
    ],
    '/aiops': [
      { path: '/aiops/noise-reduction', label: 'Noise Reduction', badge: 'NEW' },
      { path: '/aiops/event-orchestration', label: 'Event Orchestration' },
      { path: '/aiops/recent-changes', label: 'Recent Changes' },
      { path: '/aiops/event-rules', label: 'Event Rules' },
    ],
    '/analytics': [
      { path: '/analytics/dashboard', label: 'Dashboard' },
      { path: '/analytics/insights', label: 'Insights' },
      { path: '/analytics/operational-reviews', label: 'Operational Reviews' },
      { path: '/analytics/event-analytics', label: 'Event Analytics' },
      { path: '/analytics/advance', label: 'PagerDuty Advance', badge: 'NEW' },
      { path: '/analytics/operational-maturity', label: 'Operational Maturity' },
      { path: '/analytics/on-call-readiness', label: 'On-Call Readiness' },
      { path: '/analytics/user-onboarding', label: 'User Onboarding' },
      { path: '/analytics/service-recommendations', label: 'Service Recommendations' },
    ],
    '/integrations': [
      { path: '/integrations/slack', label: 'Slack Integration' },
      { path: '/integrations/extensions', label: 'Extensions' },
      { path: '/integrations/addon-settings', label: 'Add-On Settings' },
      { path: '/integrations/service-integrations', label: 'Service Integrations' },
      { path: '/integrations/workflow-integrations', label: 'Workflow Integrations' },
      { path: '/integrations/app-registration', label: 'App Registration' },
      { path: '/integrations/api-keys', label: 'API Access Keys' },
      { path: '/integrations/api-docs', label: 'API Documentation' },
      { path: '/integrations/webhooks', label: 'Generic Webhooks (v3)' },
    ],
    '/status': [
      { path: '/status/internal', label: 'Internal Status Page' },
      { path: '/status/external', label: 'External Status Page' },
    ],
  }

  return (
    <Box as="nav" bg="white" borderBottom="1px" borderColor="gray.200" px={8} py={4}>
      <Flex align="center" justify="space-between">
        <Text fontSize="xl" fontWeight="bold" color="black" mr={8}>
          PagerDuty
        </Text>

        <HStack spacing={8} flex={1}>
          {routes.map((route) => {
            const isActive = route.path === '/' 
              ? isIncidentsBaseRoute
              : location.pathname === route.path || location.pathname.startsWith(route.path + '/')
            
            if (route.path === '/') {
              return (
                <IncidentsDropdown key={route.path} isActive={isIncidentsBaseRoute} />
              )
            }
            
            const menuItems = dropdownMenus[route.path]
            
            if (menuItems) {
              return (
                <NavDropdown
                  key={route.path}
                  label={route.label}
                  isActive={isActive}
                  menuItems={menuItems}
                />
              )
            }

            return (
              <ChakraLink
                key={route.path}
                as={RouterLink}
                to={route.path}
                fontWeight="medium"
                color={isActive ? "green.500" : "gray.700"}
                borderBottom={isActive ? "2px solid" : "none"}
                borderColor="green.500"
                pb={2}
                _hover={{ color: "green.500", textDecoration: "none" }}
                style={{ textDecoration: "none" }}
              >
                {route.label}
              </ChakraLink>
            )
          })}
          
          <ChakraLink
            as={RouterLink}
            to="/ai"
            fontWeight="medium"
            color="gray.700"
            _hover={{ color: "green.500", textDecoration: "none" }}
            style={{ textDecoration: "none" }}
          >
            ⭐ AI
          </ChakraLink>
        </HStack>

        <Box position="relative" maxW="300px" ml={8}>
          <Box
            position="absolute"
            left={3}
            top="50%"
            transform="translateY(-50%)"
            zIndex={1}
            pointerEvents="none"
          >
            <SearchIcon color="gray.400" />
          </Box>
          <Input
            placeholder="Search..."
            bg="gray.50"
            border="none"
            borderRadius="md"
            pl={10}
            _focus={{ bg: "white", boxShadow: "sm" }}
          />
        </Box>
      </Flex>
    </Box>
  )
}
