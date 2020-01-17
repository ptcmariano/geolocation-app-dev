import React from 'react';
import Routes from './src/Routes'
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#7D40E7" barStyle="light-content" />
      <Routes />
    </>
  );
}
