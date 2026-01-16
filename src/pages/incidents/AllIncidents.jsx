import React, { useState, useRef, useEffect } from 'react'
import { 
  Box, 
  Heading, 
  Text, 
  HStack, 
  VStack, 
  Button, 
  Input,
  Flex
} from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'

const Dropdown = ({ label, options, onSelect, rightIcon }) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef()

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
        rightIcon={<Text>{rightIcon || '▼'}</Text>}
      >
        {label}
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

export default function AllIncidents() {
  const [searchParams, setSearchParams] = useSearchParams()
  
  const status = searchParams.get('status') || 'any'
  const assignedTo = searchParams.get('assignedTo') || 'all'
  const timeRange = searchParams.get('timeRange') || '30days'

  const handleStatusChange = (newStatus) => {
    const params = new URLSearchParams(searchParams)
    params.set('status', newStatus)
    setSearchParams(params)
  }

  const handleAssignedToChange = (value) => {
    const params = new URLSearchParams(searchParams)
    params.set('assignedTo', value)
    setSearchParams(params)
  }

  const handleTimeRangeChange = (value) => {
    const params = new URLSearchParams(searchParams)
    params.set('timeRange', value)
    setSearchParams(params)
  }

  const snoozeOptions = [
    { label: '15 minutes', value: '15min' },
    { label: '1 hour', value: '1hour' },
    { label: '4 hours', value: '4hours' },
    { label: '24 hours', value: '24hours' }
  ]

  const teamOptions = [
    { label: 'All Teams', value: 'all' },
    { label: 'Engineering', value: 'engineering' },
    { label: 'Operations', value: 'operations' },
    { label: 'Support', value: 'support' }
  ]

  const timeRangeOptions = [
    { label: 'Last 7 days', value: '7days' },
    { label: 'Last 30 days', value: '30days' },
    { label: 'Last 90 days', value: '90days' },
    { label: 'All time', value: 'all' }
  ]

  return (
    <Box p={8} bg="white">
      <Heading as="h1" size="lg" mb={6} fontWeight="semibold" color="gray.800">
        Incidents on All Teams
      </Heading>

      <VStack align="stretch" spacing={6} mb={6}>
        <Box>
          <Text fontSize="sm" color="gray.600" mb={2}>
            Your open incidents (Last 30 days)
          </Text>
          <HStack spacing={4}>
            <Text fontSize="sm" color="blue.600" fontWeight="medium">
              0 triggered
            </Text>
            <Text fontSize="sm" color="gray.500">
              0 acknowledged
            </Text>
          </HStack>
        </Box>

        <Box>
          <Text fontSize="sm" color="gray.600" mb={2}>
            All open incidents (Last 30 days)
          </Text>
          <HStack spacing={4}>
            <Text fontSize="sm" color="blue.600" fontWeight="medium">
              0 triggered
            </Text>
            <Text fontSize="sm" color="gray.500">
              0 acknowledged
            </Text>
          </HStack>
        </Box>
      </VStack>

      <HStack spacing={3} mb={6} flexWrap="wrap">
        <Button size="sm" variant="outline">
          <Text mr={2}>!</Text>
          Acknowledge
        </Button>
        <Button size="sm" variant="outline">
          <Text mr={2}>↻</Text>
          Reassign
        </Button>
        <Button size="sm" variant="outline">
          <Text mr={2}>✓</Text>
          Resolve
        </Button>
        <Dropdown label="Snooze" options={snoozeOptions} />

        <Box ml="auto" />
        
        <Box maxW="200px">
          <Input
            placeholder="Go to incident #..."
            size="sm"
            bg="white"
            border="1px solid"
            borderColor="gray.300"
          />
        </Box>

        <Dropdown label="All Teams" options={teamOptions} />
      </HStack>

      <HStack spacing={0} mb={4} borderBottom="2px solid" borderColor="gray.200">
        <Button
          variant="ghost"
          size="sm"
          borderRadius="none"
          borderBottom={status === 'open' ? "2px solid" : "none"}
          borderColor="green.500"
          color={status === 'open' ? "green.500" : "gray.600"}
          fontWeight={status === 'open' ? "medium" : "normal"}
          onClick={() => handleStatusChange('open')}
          _hover={{ bg: "gray.50" }}
        >
          Open
        </Button>
        <Button
          variant="ghost"
          size="sm"
          borderRadius="none"
          borderBottom={status === 'triggered' ? "2px solid" : "none"}
          borderColor="green.500"
          color={status === 'triggered' ? "green.500" : "gray.600"}
          fontWeight={status === 'triggered' ? "medium" : "normal"}
          onClick={() => handleStatusChange('triggered')}
          _hover={{ bg: "gray.50" }}
        >
          Triggered
        </Button>
        <Button
          variant="ghost"
          size="sm"
          borderRadius="none"
          borderBottom={status === 'acknowledged' ? "2px solid" : "none"}
          borderColor="green.500"
          color={status === 'acknowledged' ? "green.500" : "gray.600"}
          fontWeight={status === 'acknowledged' ? "medium" : "normal"}
          onClick={() => handleStatusChange('acknowledged')}
          _hover={{ bg: "gray.50" }}
        >
          Acknowledged
        </Button>
        <Button
          variant="ghost"
          size="sm"
          borderRadius="none"
          borderBottom={status === 'resolved' ? "2px solid" : "none"}
          borderColor="green.500"
          color={status === 'resolved' ? "green.500" : "gray.600"}
          fontWeight={status === 'resolved' ? "medium" : "normal"}
          onClick={() => handleStatusChange('resolved')}
          _hover={{ bg: "gray.50" }}
        >
          Resolved
        </Button>
        <Button
          variant="ghost"
          size="sm"
          borderRadius="none"
          borderBottom={status === 'any' ? "2px solid" : "none"}
          borderColor="green.500"
          color={status === 'any' ? "green.500" : "gray.600"}
          fontWeight={status === 'any' ? "medium" : "normal"}
          onClick={() => handleStatusChange('any')}
          _hover={{ bg: "gray.50" }}
        >
          Any Status
        </Button>
      </HStack>

      <HStack spacing={3} mb={4} justify="flex-end">
        <Button
          size="sm"
          variant={assignedTo === 'me' ? "solid" : "outline"}
          colorScheme={assignedTo === 'me' ? "green" : "gray"}
          onClick={() => handleAssignedToChange(assignedTo === 'me' ? 'all' : 'me')}
        >
          Assigned to me
        </Button>
        <Button
          size="sm"
          variant={assignedTo === 'all' ? "solid" : "outline"}
          colorScheme={assignedTo === 'all' ? "green" : "gray"}
          onClick={() => handleAssignedToChange('all')}
        >
          All
        </Button>
        <Dropdown 
          label={timeRangeOptions.find(opt => opt.value === timeRange)?.label || 'Last 30 days'} 
          options={timeRangeOptions}
          onSelect={handleTimeRangeChange}
        />
      </HStack>

      <Box border="1px solid" borderColor="gray.200" borderRadius="md" overflow="hidden">
        <Box bg="gray.50" borderBottom="1px solid" borderColor="gray.200">
          <Flex
            as="header"
            px={4}
            py={3}
            fontSize="xs"
            fontWeight="semibold"
            color="gray.600"
            textTransform="uppercase"
          >
            <Box flex="1">Status</Box>
            <Box flex="1">
              Urgency
              <Text as="span" ml={1}>▼</Text>
            </Box>
            <Box flex="1">Type</Box>
            <Box flex="2">Title</Box>
            <Box flex="1">
              Created
              <Text as="span" ml={1}>↕</Text>
            </Box>
            <Box flex="1">Service</Box>
            <Box flex="1">Assigned To</Box>
          </Flex>
        </Box>
        <Box py={20} textAlign="center">
          <VStack spacing={3}>
            <Text fontSize="lg" color="gray.500" fontWeight="medium">
              No incidents found
            </Text>
            <Text fontSize="sm" color="gray.400">
              There are no incidents matching your current filters.
            </Text>
          </VStack>
        </Box>
      </Box>
    </Box>
  )
}
