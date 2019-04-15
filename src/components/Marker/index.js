import React, { useState, useEffect, useContext } from 'react';
import { navigate } from '@reach/router';

import NocFirebase from '../../utils/firebase';
import TenatsContext from '../../context/TenantsContext';

const Marker = ({ lat, lng, name, logo, id, handleClickMap, checked }) => {
  const tenantsContext = useContext(TenatsContext);

  const [badges, setBadges] = useState(null);

  const calcBadges = ({ hight = 0, low = 0 }) => {
    const count = hight + low;
    const priority = low > hight ? 'low' : 'hight';
    setBadges({ count, priority });
  };

  const noc = new NocFirebase();

  const getBadge = async () => {
    try {
      const { hight, low } = await noc.getBadgetsById(id);
      calcBadges({ hight, low });
      noc.refOnChange(calcBadges);
    } catch (exception) {
      // handle exception
    }
  };

  useEffect(() => {
    getBadge();

    return () => {
      noc.cleanRef();
    };
  }, []);

  useEffect(() => {
    handleClickMap({ lat: parseFloat(lat), lng: parseFloat(lng) });
  }, [checked]);

  return (
    <div
      className={` p-1 rounded flex cursor-pointer ${
        checked ? 'bg-grey-darker' : 'bg-white'
      } `}
      onClick={() => {
        tenantsContext.contextReducer({
          currentTenant: { lat, lng, name, logo, id },
          markerChecked: id,
        });
      }}
      onDoubleClick={() => {
        navigate(`/tenant/${id}`);
      }}
      style={{ minWidth: 100 }}
    >
      <div className="w-1/6">
        <img src={logo} alt={name} style={{ width: 14 }} />
      </div>
      <div className="w-5/6 flex align-center content-center relative">
        {badges && badges.count > 0 && (
          <span className={`badge badge-${badges.priority}`}>
            {badges.count <= 99 ? badges.count : '99+'}
          </span>
        )}
        <p
          className={`ml-1 ${checked ? 'text-white' : 'text-black'}`}
          style={{ lineHeight: '16px' }}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default Marker;
