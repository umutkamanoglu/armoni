import { ScrollView, Text } from 'react-native';

type Props = {
  navigation: any;
};

export default function LibraryScreen({ navigation }: Props) {
  return (
    <ScrollView className="flex-1 bg-white">
      <Text>Kütüphane</Text>
    </ScrollView>
  );
}
