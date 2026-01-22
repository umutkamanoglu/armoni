import { Image, Text, TouchableOpacity } from 'react-native';

export default function PlaylistCard({
  title,
  image,
  index,
}: {
  title: string;
  image: string;
  index: number;
}) {
  return (
    <TouchableOpacity
      className={`m-[3px] h-[60px] flex-1 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center overflow-hidden rounded-md bg-neutral-100`}
      activeOpacity={0.9}>
      <Image source={{ uri: image }} className="h-full w-[60px]" />
      <Text className="ml-3 flex-1 font-semibold text-neutral-800" numberOfLines={2}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
