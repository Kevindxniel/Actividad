import { createStackNavigator } from '@react-navigation/stack';
import { Index } from '../screens/Index';
import { PRIMARY_COLOR, SECOND_COLOR } from '../commons/colors';
import { Division } from '../screens/Division';

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{cardStyle: {backgroundColor: SECOND_COLOR}}}>
      <Stack.Screen name="Home" component={Index} options={{headerShown: false}} />
      <Stack.Screen name="Division" component={Division}/>
    </Stack.Navigator>
  );
}