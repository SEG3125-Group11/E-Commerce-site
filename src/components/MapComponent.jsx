import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
  minHeight: '350px',
  borderRadius: '8px'
};

const center = {
  lat: 45.4231,
  lng: -75.6831,
};

const MapComponent = () => (
  <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE">
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      options={{
        gestureHandling: 'greedy',
        scrollwheel: true,
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  </LoadScript>
);

export default MapComponent;
