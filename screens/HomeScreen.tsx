import LastListened from 'components/HomeScreen/LastListened';
import LastPlayLists from 'components/HomeScreen/LastPlayLists';
import ScreenProvider from 'components/ScreenProvider';
type Props = {
  navigation: any;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <ScreenProvider>
      <LastPlayLists />
      <LastListened />
    </ScreenProvider>
  );
}
