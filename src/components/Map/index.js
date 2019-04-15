import React from 'react';
import Proptypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const NocMap = ({ center, zoom, children }) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: apiKey }}
      center={center}
      defaultZoom={zoom}
      options={{
        disableDefaultUI: true,
        clickableIcons: false,
      }}
    >
      {children}
    </GoogleMapReact>
  );
};

NocMap.propTypes = {
  center: Proptypes.shape({
    lat: Proptypes.number.isRequired,
    lng: Proptypes.number.isRequired,
  }),
  zoom: Proptypes.number,
};

NocMap.defaultProps = {
  zoom: 15,
};

export default NocMap;
