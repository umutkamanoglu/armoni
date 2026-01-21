import ScreenProvider from 'components/ScreenProvider';
import { Text } from 'react-native';

type Props = {
  navigation: any;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <ScreenProvider>
      <Text>Home Screen deneme</Text>
      <Text className="h-screen bg-red-500">Home Screen deneme</Text>
      <Text>Home Screen deneme</Text>
    </ScreenProvider>
  );
}
