import { DarkTheme } from '@react-navigation/native';

const RootNavigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#000000',
    card: '#000000',
    border: '#121212',
    text: '#ffffff',
    primary: '#1DA1F2',
    notification: '#ff453a',
  },
};

export default RootNavigationTheme;