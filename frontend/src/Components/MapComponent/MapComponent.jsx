import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

// Replace lat and lng with your desired location
const location = {
  lat: 37.7749,  // Example latitude (San Francisco)
  lng: -122.4194 // Example longitude
};

function MapComponent() {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={14} // Adjust the zoom level as needed
      >
        {/* Marker for the specific location */}
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
}




export default MapComponent;
