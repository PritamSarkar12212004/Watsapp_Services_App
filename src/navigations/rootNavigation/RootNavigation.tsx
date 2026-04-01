import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navProvider from '../Provider'
import routeProvider from '../../constants/routes/Provider'
const Stack = createNativeStackNavigator();
const RootNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            animation: "slide_from_right",
            animationDuration: 300,
            gestureEnabled: true,
            fullScreenGestureEnabled: true,
        }} initialRouteName={routeProvider.SPLASH_ROUTE.ROOT_ROUTE} >
            <Stack.Screen name={routeProvider.SPLASH_ROUTE.ROOT_ROUTE} component={navProvider.SPLASH_NAVIGATION} />
            <Stack.Screen name={routeProvider.AUTH.ROOT_ROUTE} component={navProvider.AUTH_NAVIGATION} />
            <Stack.Screen name={routeProvider.PROFILE_SETUP.ROOT_ROUTE} component={navProvider.PROFILE_NAVIGATION} />
            <Stack.Screen name={routeProvider.USER_ROUTE.ROOT_ROUTE} component={navProvider.USER_NAVIGATION} />
        </Stack.Navigator >
    )
}
export default RootNavigation