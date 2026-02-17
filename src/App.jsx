import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
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
<<<<<<< HEAD
import JeliReviews from './pages/JeliReviews.jsx'
import ServiceDirectory from './pages/services/ServiceDirectory.jsx'
import BusinessServices from './pages/services/BusinessServices.jsx'
import ServiceGraph from './pages/services/ServiceGraph.jsx'
import ServiceCustomFields from './pages/services/ServiceCustomFields.jsx'
import OnCallShifts from './pages/people/OnCallShifts.jsx'
import Schedules from './pages/people/Schedules.jsx'
import EscalationPolicies from './pages/people/EscalationPolicies.jsx'
import Users from './pages/people/Users.jsx'
import Teams from './pages/people/Teams.jsx'
import AutomationActions from './pages/automation/AutomationActions.jsx'
import IncidentWorkflows from './pages/automation/IncidentWorkflows.jsx'
import SlackIntegration from './pages/integrations/SlackIntegration.jsx'
import Extensions from './pages/integrations/Extensions.jsx'
import AddOnSettings from './pages/integrations/AddOnSettings.jsx'
import ServiceIntegrations from './pages/integrations/ServiceIntegrations.jsx'
import WorkflowIntegrations from './pages/integrations/WorkflowIntegrations.jsx'
import AppRegistration from './pages/integrations/AppRegistration.jsx'
import ApiKeys from './pages/integrations/ApiKeys.jsx'
import ApiDocs from './pages/integrations/ApiDocs.jsx'
import Webhooks from './pages/integrations/Webhooks.jsx'
import NoiseReduction from './pages/aiops/NoiseReduction.jsx'
import EventOrchestration from './pages/aiops/EventOrchestration.jsx'
import RecentChanges from './pages/aiops/RecentChanges.jsx'
import EventRules from './pages/aiops/EventRules.jsx'
import Dashboard from './pages/analytics/Dashboard.jsx'
import Insights from './pages/analytics/Insights.jsx'
import OperationalReviews from './pages/analytics/OperationalReviews.jsx'
import EventAnalytics from './pages/analytics/EventAnalytics.jsx'
import Advance from './pages/analytics/Advance.jsx'
import OperationalMaturity from './pages/analytics/OperationalMaturity.jsx'
import OnCallReadiness from './pages/analytics/OnCallReadiness.jsx'
import UserOnboarding from './pages/analytics/UserOnboarding.jsx'
import ServiceRecommendations from './pages/analytics/ServiceRecommendations.jsx'
import InternalStatus from './pages/status/InternalStatus.jsx'
import ExternalStatus from './pages/status/ExternalStatus.jsx'
=======
>>>>>>> 6ed5483ab154d09ef2aa0d58b1c8035ae4594f0e

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
<<<<<<< HEAD
      <Route index element={<Navigate to="/incidents" replace />} />
      
      <Route path="services">
        <Route index element={<Services />} />
        <Route path="directory" element={<ServiceDirectory />} />
        <Route path="business" element={<BusinessServices />} />
        <Route path="graph" element={<ServiceGraph />} />
        <Route path="custom-fields" element={<ServiceCustomFields />} />
      </Route>

      <Route path="people">
        <Route index element={<People />} />
        <Route path="on-call-shifts" element={<OnCallShifts />} />
        <Route path="schedules" element={<Schedules />} />
        <Route path="escalation-policies" element={<EscalationPolicies />} />
        <Route path="users" element={<Users />} />
        <Route path="teams" element={<Teams />} />
      </Route>

      <Route path="automation">
        <Route index element={<Automation />} />
        <Route path="actions" element={<AutomationActions />} />
        <Route path="workflows" element={<IncidentWorkflows />} />
      </Route>

      <Route path="aiops">
        <Route index element={<AIOps />} />
        <Route path="noise-reduction" element={<NoiseReduction />} />
        <Route path="event-orchestration" element={<EventOrchestration />} />
        <Route path="recent-changes" element={<RecentChanges />} />
        <Route path="event-rules" element={<EventRules />} />
      </Route>

      <Route path="analytics">
        <Route index element={<Analytics />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="insights" element={<Insights />} />
        <Route path="operational-reviews" element={<OperationalReviews />} />
        <Route path="event-analytics" element={<EventAnalytics />} />
        <Route path="advance" element={<Advance />} />
        <Route path="operational-maturity" element={<OperationalMaturity />} />
        <Route path="on-call-readiness" element={<OnCallReadiness />} />
        <Route path="user-onboarding" element={<UserOnboarding />} />
        <Route path="service-recommendations" element={<ServiceRecommendations />} />
      </Route>

      <Route path="integrations">
        <Route index element={<Integrations />} />
        <Route path="slack" element={<SlackIntegration />} />
        <Route path="extensions" element={<Extensions />} />
        <Route path="addon-settings" element={<AddOnSettings />} />
        <Route path="service-integrations" element={<ServiceIntegrations />} />
        <Route path="workflow-integrations" element={<WorkflowIntegrations />} />
        <Route path="app-registration" element={<AppRegistration />} />
        <Route path="api-keys" element={<ApiKeys />} />
        <Route path="api-docs" element={<ApiDocs />} />
        <Route path="webhooks" element={<Webhooks />} />
      </Route>

      <Route path="status">
        <Route index element={<Status />} />
        <Route path="internal" element={<InternalStatus />} />
        <Route path="external" element={<ExternalStatus />} />
      </Route>

      <Route path="incidents">
        <Route index element={<Navigate to="/incidents/all" replace />} />
        <Route path="all" element={<AllIncidents />} />
        <Route path="alerts" element={<Alerts />} />
        <Route path="visibility-console" element={<VisibilityConsole />} />
        <Route path="postmortems" element={<Postmortems />} />
=======
  
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
>>>>>>> 6ed5483ab154d09ef2aa0d58b1c8035ae4594f0e
        <Route path="incident-types" element={<IncidentTypes />} />
        <Route path="conference-bridges" element={<ConferenceBridges />} />
        <Route path="status-templates" element={<StatusTemplates />} />
        <Route path="incident-roles" element={<IncidentRoles />} />
<<<<<<< HEAD
        <Route path="jeli-reviews" element={<JeliReviews />} />
      </Route>
=======
      </Route>

>>>>>>> 6ed5483ab154d09ef2aa0d58b1c8035ae4594f0e
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
