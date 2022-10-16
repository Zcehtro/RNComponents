import { HeaderTitle } from '@app/components/HeaderTitle';
import { styles } from '@app/theme/appTheme';
import { SectionList, Text, View } from 'react-native';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Superman',
      'Robin',
      'Superman',
      'Robin',
      'Superman',
      'Robin',
      'Superman',
      'Robin',
      'Superman',
      'Robin',
      'Superman',
      'Robin',
      'Superman',
      'Robin',
      'Superman',
      'Robin',
      'Superman',
      'Robin',
      'Superman',
      'Robin',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: ['Antman', 'Thor', 'Spiderman', 'Antman'],
  },
  {
    casa: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama'],
  },
];

export const CustomSectionListScreen = () => {
  return (
    <View style={{ ...styles.globalMargin, flex: 1 }}>
      {/* <HeaderTitle title="Section List" /> */}
      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text>{item}</Text>}
        stickySectionHeadersEnabled
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: 'white' }}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
      />
    </View>
  );
};
