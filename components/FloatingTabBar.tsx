import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function FloatingTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      pointerEvents="box-none"
      style={{
        position: 'absolute',
        bottom: insets.bottom + 12, // safe area + margin
        left: 0,
        right: 0,
        alignItems: 'center',
      }}>
      <View
        style={{
          height: 60,
          width: '80%',
          backgroundColor: '#ffffff',
          borderRadius: 24,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.12,
          shadowRadius: 20,
          elevation: 10, // Android shadow
        }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          // Icon'u screenOptions.tabBarIcon üzerinden alıyoruz
          const icon = options.tabBarIcon?.({
            focused: isFocused,
            color: isFocused
              ? options.tabBarActiveTintColor || '#3b82f6'
              : options.tabBarInactiveTintColor || '#9ca3af',
            size: 24,
          });

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              {icon}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
