import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AppHeader({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView edges={['top']} className="">
      <View className="flex h-14 flex-row items-center justify-between px-[5vw]">
        <Text className="text-2xl font-bold">
          Armoni <Ionicons name="headset-sharp" size={20} color="black" />
        </Text>
        <View className="flex flex-row items-center justify-center gap-5">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('Search');
            }}>
            <Ionicons name="search-outline" size={24} color="black" />
          </TouchableOpacity>
          <Ionicons name="settings-outline" size={24} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
}
