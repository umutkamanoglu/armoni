import { Ionicons } from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function LastListened() {
  const songs = [
    {
      id: '1',
      title: 'Song Title',
      artist: 'Artist Name',
      duration: '3:45',
      image: 'https://picsum.photos/200?random=12',
    },
    {
      id: '2',
      title: 'Another Song Title',
      artist: 'Another Artist Name',
      duration: '4:20',
      image: 'https://picsum.photos/200?random=21',
    },
    {
      id: '3',
      title: 'Yet Another Song Title',
      artist: 'Yet Another Artist Name',
      duration: '5:15',
      image: 'https://picsum.photos/200?random=33',
    },
  ];

  return (
    <View className="flex-1">
      <Text className="mt-5 text-xl font-bold text-neutral-800">Son Dinlenenler</Text>
      {songs.map((song) => (
        <TouchableOpacity
          activeOpacity={0.8}
          key={song.id}
          className="flex-row items-center justify-between py-2">
          <View className="flex-row items-center">
            <Image source={{ uri: song.image }} className="h-16 w-16 rounded-md" />
            <View className="ml-2">
              <Text className="text-base font-bold text-neutral-800">{song.title}</Text>
              <Text className="text-sm text-neutral-500">{song.artist}</Text>
            </View>
          </View>
          <View className="flex flex-row items-center gap-5">
            <Text className="text-sm font-bold text-neutral-800">{song.duration}</Text>
            <TouchableOpacity>
              <Ionicons name="ellipsis-horizontal-outline" size={25} color="black" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
