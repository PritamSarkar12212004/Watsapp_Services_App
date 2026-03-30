import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screenProvider from '../../screens/Provider'
import routeProvider from '../../constants/routes/Provider'
const Stack = createNativeStackNavigator();
const ProfileSetupNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            animation: "slide_from_bottom",
            animationDuration: 300,
        }} initialRouteName={routeProvider.PROFILE_SETUP.PROFILE_SETUP_SCREEN_ROUTE}>
            <Stack.Screen name={routeProvider.PROFILE_SETUP.PROFILE_SETUP_SCREEN_ROUTE} component={screenProvider.PROFILE_SETUP.PROFILE_SETUP_SCREEN} />
        </Stack.Navigator>
    )
}
export default ProfileSetupNavigation