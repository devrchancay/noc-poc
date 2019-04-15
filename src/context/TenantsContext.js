import React, { createContext, useEffect, useState } from 'react';

import axios from '../utils/axios';

const TenatsContext = createContext({ data: [] });

const TenantsProvider = ({ children }) => {
  const [tenants, setTenants] = useState({
    loading: true,
    data: [],
    markerChecked: null,
    currentTenant: null,
  });

  const contextReducer = update => {
    setTenants({ ...tenants, ...update });
  };

  const getAllTenants = async () => {
    try {
      const { data } = await axios.get('/api/tenants');
      setTenants({ ...tenants, data, loading: false });
    } catch (ex) {
      setTenants({ data: [], loading: false });
    }
  };

  useEffect(() => {
    getAllTenants();
  }, []);

  return (
    <TenatsContext.Provider value={{ tenants, contextReducer }}>
      {children}
    </TenatsContext.Provider>
  );
};

const TenatsConsumer = TenatsContext.Consumer;

export { TenatsConsumer, TenantsProvider };
export default TenatsContext;
