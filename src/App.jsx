import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

import RouteLayout from './layout/RouteLayout.jsx'
import Incidents from './pages/Incidents.jsx'
import Services from './pages/Services.jsx'
import People from './pages/People.jsx'
import Automation from './pages/Automation.jsx'
import AIOps from './pages/AIOps.jsx'
import Analytics from './pages/Analytics.jsx'
import Integrations from './pages/Integrations.jsx'
import Status from './pages/Status.jsx'
import AllIncidents from './pages/incidents/AllIncidents.jsx'
import Alerts from './pages/incidents/Alerts.jsx'
import VisibilityConsole from './pages/incidents/VisibilityConsole.jsx'
import Postmortems from './pages/incidents/Postmortems.jsx'
import IncidentTypes from './pages/incidents/IncidentTypes.jsx'
import ConferenceBridges from './pages/incidents/ConferenceBridges.jsx'
import StatusTemplates from './pages/incidents/StatusTemplates.jsx'
import IncidentRoles from './pages/incidents/IncidentRoles.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
  
   <Route path="services" element={<Services />} />
      <Route path="people" element={<People />} />
      <Route path="automation" element={<Automation />} />
      <Route path="aiops" element={<AIOps />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="integrations" element={<Integrations />} />
      <Route path="status" element={<Status />} />

      <Route path="incidents">
        <Route index element={<Incidents />} />
        <Route path="all" element={<AllIncidents />} />
        <Route path="alerts" element={<Alerts />} />
        <Route path="visibility-console" element={<VisibilityConsole />} />
          <Route path="postmortems" element={<Postmortems />} />
        <Route path="incident-types" element={<IncidentTypes />} />
        <Route path="conference-bridges" element={<ConferenceBridges />} />
        <Route path="status-templates" element={<StatusTemplates />} />
        <Route path="incident-roles" element={<IncidentRoles />} />
      </Route>

    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
