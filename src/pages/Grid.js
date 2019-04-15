import React from 'react';
import { TenatsConsumer } from '../context/TenantsContext';
import Card from '../components/Card';

const Grid = () => {
  return (
    <TenatsConsumer>
      {({ tenants }) => {
        return (
          <div className="w-full flex flex-col md:flex-row">
            {tenants.data.map(item => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  image={item.logo}
                  title={item.name}
                />
              );
            })}
          </div>
        );
      }}
    </TenatsConsumer>
  );
};

export default Grid;
