import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from 'screens/HomeScreen';

import './global.css';

export type TabParamList = {
  Home: undefined;
};

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: keyof typeof Ionicons.glyphMap;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Search') {
                iconName = focused ? 'search' : 'search-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#3b82f6',
            tabBarInactiveTintColor: '#9ca3af',
            headerStyle: {
              backgroundColor: '#ffffff',
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 1,
              borderBottomColor: '#e5e7eb',
            },
            headerTintColor: '#111827',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 18,
            },
            tabBarStyle: {
              borderTopWidth: 1,
              borderTopColor: '#e5e7eb',
              paddingBottom: 8,
              paddingTop: 8,
              height: 65,
              backgroundColor: '#ffffff',
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '600',
            },
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
