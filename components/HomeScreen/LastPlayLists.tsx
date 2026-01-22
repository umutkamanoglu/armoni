import { FlashList } from '@shopify/flash-list';
import { View } from 'react-native';
import PlaylistCard from './PlaylistCard';

export default function LastPlayLists() {
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
      <FlashList
        data={playlists.slice(0, 6)}
        numColumns={2}
        renderItem={({ item, index }) => <PlaylistCard {...item} index={index} />}
      />
    </View>
  );
}
