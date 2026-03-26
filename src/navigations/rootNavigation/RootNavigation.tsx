import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navProvider from '../Provider'
import routeProvider from '../../constants/routes/Provider'
const Stack = createNativeStackNavigator();
const RootNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name={routeProvider.AUTH.ROOT_ROUTE} component={navProvider.AUTH_NAVIGATION} />
        </Stack.Navigator>
    )
}
export default RootNavigation