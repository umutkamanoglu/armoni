import { Ionicons } from '@expo/vector-icons';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

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
      <Text className="mb-2 text-lg font-bold">
        Son Dinlenenler <Ionicons name="musical-notes-outline" size={14} color="black" />
      </Text>
      <FlatList
        data={playlists}
        numColumns={2} // 2 sütunlu grid
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ gap: 12, marginBottom: 12 }} // sütunlar arası boşluk
        renderItem={({ item, index }) => (
          <TouchableOpacity
            className={`flex-1 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center overflow-hidden rounded-md bg-neutral-100`}
            activeOpacity={0.9}
            style={{ height: 60 }}>
            <Image source={{ uri: item.image }} className="h-full w-[60px]" />
            <Text className="ml-3 flex-1 font-semibold text-neutral-900" numberOfLines={2}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
