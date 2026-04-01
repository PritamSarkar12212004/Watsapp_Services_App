import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screenProvider from '../../screens/Provider'
import routeProvider from '../../constants/routes/Provider'
const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            animation: "fade",
            animationDuration: 250,
        }} initialRouteName={routeProvider.AUTH.AUTH_SPLASH_ROUTE}>
            <Stack.Screen name={routeProvider.AUTH.AUTH_SPLASH_ROUTE} component={screenProvider.AUTH_SCRREN.SPLASH_SCREEN} />
            <Stack.Screen name={routeProvider.AUTH.LOGIN_ROUTE} component={screenProvider.AUTH_SCRREN.LOGIN_SCREEN} />
        </Stack.Navigator>
    )
}
export default AuthNavigation