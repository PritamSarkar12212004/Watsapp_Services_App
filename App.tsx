import { PaperProvider } from 'react-native-paper';
import React from 'react'
import "./global.css";
import { NavigationContainer } from '@react-navigation/native';
import themeProvider from './src/constants/theme/Provider'
import { Provider } from 'react-redux'
import { store } from './src/store/store';
import NavProvider from './src/navigations/Provider'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import ToastManager from 'toastify-react-native/components/ToastManager';

const App = () => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Provider store={store}>
        <PaperProvider>
          <NavigationContainer theme={themeProvider.NAVIGATION.ROOT_THEME}>
            <ToastManager />
            <NavProvider.ROOT_NAVIGATION />
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </SafeAreaProvider>
  )
}

export default App;