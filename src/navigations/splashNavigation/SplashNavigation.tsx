import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screenProvider from '../../screens/Provider'
import routeProvider from '../../constants/routes/Provider'
const Stack = createNativeStackNavigator();
const SplashNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            animation: "fade",
            animationDuration: 300,
        }} initialRouteName={routeProvider.SPLASH_ROUTE.SPLASH_LOADER}>
            <Stack.Screen name={routeProvider.SPLASH_ROUTE.SPLASH_LOADER} component={screenProvider.SPLASH_SCREEN.SPLASH_LOADER} />
        </Stack.Navigator>
    )
}
export default SplashNavigation