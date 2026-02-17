import React from 'react'
<<<<<<< HEAD
import { Box } from '@chakra-ui/react'

export default function Incidents() {
  return <Box p={8} bg="white" />
=======
import { Link } from 'react-router-dom'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function Incidents() {
  return (
    <Box p={4}>
      <Heading as="h1" size="lg" mb={4}>
        Incidents
      </Heading>
      <Text fontSize="lg">
            Incident Page
           </Text>
      <ul>
        <li><Link to="all">All Incidents</Link></li>
        <li><Link to="alerts">Alerts</Link></li>
        <li><Link to="visibility-console">Visibility Console</Link></li>
        <li><Link to="jeli-reviews">Jeli Reviews</Link></li>
        <li><Link to="postmortems">Postmortems</Link></li>
        <li><Link to="incident-types">Incident Types</Link></li>
        <li><Link to="conference-bridges">Conference Bridges</Link></li>
        <li><Link to="status-templates">Status Templates</Link></li>
        <li><Link to="incident-roles">Incident Roles</Link></li>
      </ul>
    </Box>
  )
>>>>>>> 6ed5483ab154d09ef2aa0d58b1c8035ae4594f0e
}