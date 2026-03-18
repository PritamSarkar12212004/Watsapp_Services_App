import { PaperProvider } from 'react-native-paper';
import React from 'react'
import "./global.css";
import { NavigationContainer } from '@react-navigation/native';
import themeProvider from './src/constants/theme/Provider'
import { Provider } from 'react-redux'
import { store } from './src/store/store';



const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer theme={themeProvider.NAVIGATION.ROOT_THEME}>
          <></>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  )
}

export default App;