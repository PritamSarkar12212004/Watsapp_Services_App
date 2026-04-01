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
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/configs/Tost/TostConfig';
import RootWraper from './src/layouts/wrapers/RootWraper';

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
            <RootWraper>
              <NavProvider.ROOT_NAVIGATION />
            </RootWraper>
          </NavigationContainer>
        </PaperProvider>
      </Provider>
      <Toast config={toastConfig}
        position="top"
        visibilityTime={1800}
      />
    </SafeAreaProvider>
  )
}

export default App;