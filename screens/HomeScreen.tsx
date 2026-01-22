import LastListened from 'components/HomeScreen/LastListened';
import ScreenProvider from 'components/ScreenProvider';
type Props = {
  navigation: any;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <ScreenProvider>
      <LastListened />
    </ScreenProvider>
  );
}
