import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function SuggestedPlaylists() {
  const playlists = [
    { id: 1, title: 'Playlist 1', image: 'https://picsum.photos/200?random=1' },
    { id: 2, title: 'Playlist 2', image: 'https://picsum.photos/200?random=2' },
    { id: 3, title: 'Playlist 3', image: 'https://picsum.photos/200?random=3' },
    { id: 4, title: 'Playlist 4', image: 'https://picsum.photos/200?random=4' },
    { id: 5, title: 'Playlist 5', image: 'https://picsum.photos/200?random=5' },
  ];

  return (
    <View>
      <Text className="my-5 text-xl font-bold text-neutral-800">
        Sizin İçin Önerilen Oynatma Listeleri
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {playlists.map((playlist) => (
          <View key={playlist.id} className="mr-4">
            <TouchableOpacity activeOpacity={0.8}>
              <ImageBackground
                source={{ uri: playlist.image }}
                className="relative h-48 w-48 overflow-hidden rounded-md">
                <Text className="absolute bottom-1 left-1 mt-2 text-lg font-semibold text-neutral-100">
                  {playlist.title}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
