import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from 'screens/HomeScreen';
import LibraryScreen from 'screens/LibraryScreen';
import SearchScreen from 'screens/SearchScreen';
import AppHeader from './AppHeader';
import FloatingTabBar from './FloatingTabBar';

export type TabParamList = {
  Home: undefined;
  Search: undefined;
  Library: undefined;
};

export default function Tabs() {
  const Tab = createBottomTabNavigator<TabParamList>();

  const navigation = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <FloatingTabBar {...props} />}
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
        header: () => <AppHeader navigation={navigation} />,
        // FLOATING TAB BAR
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          borderTopWidth: 0,
          elevation: 0, // Android
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen name="Library" component={LibraryScreen} />
    </Tab.Navigator>
  );
}
