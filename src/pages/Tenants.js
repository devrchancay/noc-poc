import React, { useState } from 'react';

import NocMap from '../components/Map';
import Marker from '../components/Marker';
import { TenatsConsumer } from '../context/TenantsContext';
import TestComponent from '../components/common/TestComponent';

const Tenants = () => {
  const [center, setCenter] = useState({ lat: -2.201545, lng: -79.916432 });

  const toggleDetails = center => {
    setCenter(center);
  };

  return (
    <TenatsConsumer>
      {({ tenants }) => (
        <>
          {tenants.loading ? (
            <span>Loading ... </span>
          ) : (
            <div
              className={`w-full ${
                tenants.markerChecked ? 'h-104' : 'h-screen'
              }`}
            >
              <NocMap center={center}>
                {tenants.data.map(item => {
                  return item.locations.map(marker => {
                    return (
                      <Marker
                        handleClickMap={toggleDetails}
                        key={marker.id}
                        checked={marker.id === tenants.markerChecked}
                        {...marker}
                      />
                    );
                  });
                })}
              </NocMap>
            </div>
          )}
          {tenants.markerChecked && (
            <TestComponent demoData={tenants.currentTenant} />
          )}
        </>
      )}
    </TenatsConsumer>
  );
};

export default Tenants;
