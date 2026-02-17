<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react'
import { 
  Box, 
  Heading, 
  Text, 
  HStack, 
  VStack, 
  Button, 
  Flex,
  Badge
} from '@chakra-ui/react'

const Dropdown = ({ label, options, onSelect, rightIcon }) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
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
    <Box ref={menuRef} position="relative" display="inline-block">
      <Button
        size="sm"
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HStack spacing={1}>
          <Text>{label}</Text>
          <Text>{rightIcon || '▼'}</Text>
        </HStack>
      </Button>
      {isOpen && (
        <Box
          position="absolute"
          top="100%"
          left={0}
          mt={1}
          bg="white"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="md"
          boxShadow="lg"
          minW="150px"
          zIndex={1000}
        >
          {options.map((option) => (
            <Box
              key={option.value || option}
              px={4}
              py={2}
              cursor="pointer"
              _hover={{ bg: "gray.50" }}
              onClick={() => {
                if (onSelect) onSelect(option.value || option)
                setIsOpen(false)
              }}
            >
              <Text fontSize="sm">{option.label || option}</Text>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}

const FilterTag = ({ label, onRemove }) => {
  return (
    <Badge
      display="flex"
      alignItems="center"
      px={3}
      py={1}
      borderRadius="md"
      bg="gray.100"
      color="gray.700"
      fontSize="sm"
      fontWeight="normal"
    >
      {label}
      <Box
        as="button"
        onClick={onRemove}
        cursor="pointer"
        _hover={{ color: "gray.900" }}
        fontSize="xs"
        lineHeight={1}
        ml={2}
      >
        ×
      </Box>
    </Badge>
  )
}

export default function Alerts() {
  const [filters, setFilters] = useState(['[Created At] from Last 30 days'])

  const removeFilter = (index) => {
    setFilters(filters.filter((_, i) => i !== index))
  }

  const clearAllFilters = () => {
    setFilters([])
  }

  const teamOptions = [
    { label: 'All Teams', value: 'all' },
    { label: 'Engineering', value: 'engineering' },
    { label: 'Operations', value: 'operations' },
    { label: 'Support', value: 'support' }
  ]

  const perPageOptions = [
    { label: '10 per page', value: '10' },
    { label: '25 per page', value: '25' },
    { label: '50 per page', value: '50' },
    { label: '100 per page', value: '100' }
  ]

  return (
    <Box p={8} bg="white">
      <Flex justify="space-between" alignItems="flex-start" mb={6}>
        <Heading as="h1" size="lg" fontWeight="semibold" color="gray.800">
          Alerts
        </Heading>
        
        <HStack spacing={3}>
          <Dropdown label="10 per page" options={perPageOptions} />
          <Text fontSize="sm" color="gray.600">0-0</Text>
          <Button size="sm" variant="ghost" disabled>
            <Text>←</Text>
          </Button>
          <Button size="sm" variant="ghost" disabled>
            <Text>→</Text>
          </Button>
          <Button size="sm" variant="ghost">
            <Text fontSize="sm">☰</Text>
          </Button>
        </HStack>
      </Flex>

      <HStack spacing={3} mb={6} wrap="wrap">
        <Button size="sm" variant="outline">
          <HStack spacing={2}>
            <Text fontSize="sm">👥</Text>
            <Text>All Teams</Text>
          </HStack>
        </Button>
        
        {filters.map((filter, index) => (
          <FilterTag 
            key={index} 
            label={filter} 
            onRemove={() => removeFilter(index)}
          />
        ))}
      </HStack>

      <Box border="1px solid" borderColor="gray.200" borderRadius="md" overflow="hidden">
        <Box bg="gray.50" borderBottom="1px solid" borderColor="gray.200">
          <Flex
            px={4}
            py={3}
            fontSize="xs"
            fontWeight="semibold"
            color="gray.600"
            textTransform="uppercase"
            alignItems="center"
          >
            <Box w="40px">
              <input type="checkbox" />
            </Box>
            <Box flex="1">Status</Box>
            <Box flex="1">Severity</Box>
            <Box flex="1.5">Summary</Box>
            <Box flex="1">
              <HStack spacing={1}>
                <Text>Created</Text>
                <Text fontSize="xs">▼</Text>
                <Text fontSize="xs">🔽</Text>
              </HStack>
            </Box>
            <Box flex="1.5">Incident Title</Box>
            <Box flex="1">Service</Box>
            <Box flex="1">Integration</Box>
            <Box flex="1">Source</Box>
          </Flex>
        </Box>
        
        <Box py={20} textAlign="center">
          <VStack spacing={4}>
            <Text fontSize="lg" color="gray.500" fontWeight="medium">
              No alerts found
            </Text>
            <Text fontSize="sm" color="gray.400">
              To see more alerts, try adjusting or clearing the table filters.
            </Text>
            <Button
              size="sm"
              variant="outline"
              onClick={clearAllFilters}
              mt={2}
            >
              Clear Filters
            </Button>
          </VStack>
        </Box>
      </Box>
=======
import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function Alerts() {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4} color="orange.600">
        Alerts
      </Heading>
      <Text fontSize="lg">
        This is a simple Alerts page.
      </Text>
>>>>>>> 6ed5483ab154d09ef2aa0d58b1c8035ae4594f0e
    </Box>
  )
}