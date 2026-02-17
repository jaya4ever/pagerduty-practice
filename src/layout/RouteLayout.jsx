import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Navbar from '../components/Navbar.jsx'

export default function RouteLayout() {
  return (
    <Box minH="100vh" bg="white">
      <Navbar />
      <Outlet />
    </Box>
  )
}
