import { Ionicons } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';
import { Text, View } from 'react-native';
import PlaylistCard from './PlaylistCard';

export default function LastListened() {
  const playlists = [
    {
      id: '1',
      title: 'kaybedecek bir canım kaldı onu da kaybetmek üzereyim.',
      image: 'https://picsum.photos/200?random=1',
    },
    {
      id: '2',
      title: 'örnek playlist 2',
      image: 'https://picsum.photos/200?random=2',
    },
    {
      id: '3',
      title: 'örnek 3',
      image: 'https://picsum.photos/200?random=3',
    },
    {
      id: '4',
      title: 'lorem picsum',
      image: 'https://picsum.photos/200?random=4',
    },
    {
      id: '5',
      title: 'lorem picsum333',
      image: 'https://picsum.photos/200?random=5',
    },
    {
      id: '6',
      title: 'lorem picsum222',
      image: 'https://picsum.photos/200?random=6',
    },
  ];
  return (
    <View className="flex">
      <Text className="mb-2 text-xl font-bold">
        Son Dinlenenler <Ionicons name="musical-notes-outline" size={18} color="black" />
      </Text>
      <FlashList
        data={playlists.slice(0, 6)}
        numColumns={2}
        renderItem={({ item }) => <PlaylistCard {...item} />}
      />
    </View>
  );
}
