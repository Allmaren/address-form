import {
  APILoader,
  PlacePicker,
} from '@googlemaps/extended-component-library/react';
import React from 'react';
import './App.css';
import '@googlemaps/extended-component-library/place_picker.js';
import { key_api } from './services/google-ape';

function App() {
  const [formattedAddress, setFormattedAddress] = React.useState('');
  const handlePlaceChange = e => {
    setFormattedAddress(e.target.value?.formattedAddress ?? '');
  };
  const countries = [];
  return (
    <div>
      <APILoader apiKey={key_api} solutionChannel="GMP_GCC_placepicker_v1" />
      <div className="container">
        <PlacePicker
          country={countries}
          placeholder="Enter a place to see its address"
          onPlaceChange={handlePlaceChange}
        />
        <div className="result">{formattedAddress}</div>
      </div>
    </div>
  );
}

export default App;
