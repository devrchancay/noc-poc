import React from 'react';
import { Router } from '@reach/router';

import Tenants from './pages/Tenants';
import Tenant from './pages/Tenant';
import Grid from './pages/Grid';
import routes from './config/routes';
import { TenantsProvider } from './context/TenantsContext';

import './styles/index.css';

const App = () => {
  return (
    <TenantsProvider>
      <Router>
        <Tenants path={routes.tenants} />
        <Tenant path={routes.tanant} />
        <Grid path={routes.grid} />
      </Router>
    </TenantsProvider>
  );
};

export default App;
