// Import a library to help create component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create component
const App = () => (
  <Header headerText={'Albums'} />
);

// Render it to a device
AppRegistry.registerComponent('albums', () => App);
