import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function AppHeader() {
  return (
    <SafeAreaView edges={['top']} className="">
      <View className="flex h-14 flex-row items-center justify-between px-[5vw]">
        <Text className="text-2xl font-bold">Armoni</Text>
        <Ionicons name="settings-outline" size={24} color="black" />
      </View>
    </SafeAreaView>
  );
}
