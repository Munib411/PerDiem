//libraries
import React, { useEffect, useRef } from 'react';
import { LogBox, StatusBar, Platform, UIManager,View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';
import { useSelector } from 'react-redux';

// local
import MainNavigator from './src/navigation/MainNavigator';


const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
     </Provider>
  );
};

const App = () => {

  return (
    <PersistGate loading={null} persistor={persistor}>
      <>
        <MainNavigator />
      </>
     </PersistGate>
  );
};

export default AppWrapper;
