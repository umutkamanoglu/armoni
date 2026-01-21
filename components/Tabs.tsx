import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeScreen from 'screens/HomeScreen';
import LibraryScreen from 'screens/LibraryScreen';
import SearchScreen from 'screens/SearchScreen';
import AppHeader from './AppHeader';

export type TabParamList = {
  Home: undefined;
  Search: undefined;
  Library: undefined;
};

export default function Tabs() {
  const insets = useSafeAreaInsets();
  const Tab = createBottomTabNavigator<TabParamList>();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        // ICONS
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home-outline';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Library') {
            iconName = focused ? 'library' : 'library-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#3b82f6',
        tabBarInactiveTintColor: '#9ca3af',
        header: () => <AppHeader />,
        // FLOATING TAB BAR
        tabBarShowLabel: true,
        tabBarStyle: {
          position: 'absolute',
          left: 24,
          right: 24,
          bottom: insets.bottom + 12,
          height: 64,
          borderRadius: 24,
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.12,
          shadowRadius: 20,
          elevation: 10,
        },
        tabBarItemStyle: {
          paddingVertical: 10,
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
    </Tab.Navigator>
  );
}
