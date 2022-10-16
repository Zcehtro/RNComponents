import { HeaderTitle } from '@app/components/HeaderTitle';
import { ItemSeparator } from '@app/components/ItemSeparator';
import { styles } from '@app/theme/appTheme';
import { Header } from '@react-navigation/stack';
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
      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        ListFooterComponent={() => (
          <View style={{ marginBottom: 70 }}>
            <HeaderTitle title={'Total de casas ' + casas.length} />
          </View>
        )}
        renderItem={({ item }) => <Text>{item}</Text>}
        stickySectionHeadersEnabled
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: 'white' }}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        renderSectionFooter={({ section }) => (
          <HeaderTitle title={'Total: ' + section.data.length} />
        )}
        // SectionSeparatorComponent={() => <ItemSeparator />}
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
