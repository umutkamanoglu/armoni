import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AppHeader() {
  return (
    <SafeAreaView edges={['top']} className="">
      <View className="justify-cente h-14 items-center">
        <Text className="text-lg font-bold">Custom Header</Text>
      </View>
    </SafeAreaView>
  );
}
