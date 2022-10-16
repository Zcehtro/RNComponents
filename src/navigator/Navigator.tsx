import { AlertScreen } from '@app/screens/AlertScreen';
import { Animation101Screen } from '@app/screens/Animation101Screen';
import { Animation102Screen } from '@app/screens/Animation102Screen';
import { CustomSectionListScreen } from '@app/screens/CustomSectionListScreen';
import { InfiniteScrollScreen } from '@app/screens/InfiniteScrollScreen';
import { ModalScreen } from '@app/screens/ModalScreen';
import { PullToRefreshScreen } from '@app/screens/PullToRefreshScreen';
import { SwitchScreen } from '@app/screens/SwitchScreen';
import { TextInputScreen } from '@app/screens/TextInputScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      <Stack.Screen
        name="PullToRefreshScreen"
        component={PullToRefreshScreen}
      />
      <Stack.Screen
        name="CustomSectionListScreen"
        component={CustomSectionListScreen}
      />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen
        name="InfiniteScrollScreen"
        component={InfiniteScrollScreen}
      />
    </Stack.Navigator>
  );
};
