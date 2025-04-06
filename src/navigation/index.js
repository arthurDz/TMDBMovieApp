import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AppRoutes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Tabs'}
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="Tabs" component={AppNavigator} />
        <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
