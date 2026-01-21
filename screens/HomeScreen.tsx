import { ScrollView, Text } from 'react-native';

type Props = {
  navigation: any;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <ScrollView className="flex-1 bg-white">
      <Text>Home Screen</Text>
    </ScrollView>
  );
}
