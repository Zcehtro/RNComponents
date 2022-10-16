import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { FlatListMenuItem } from '@app/components/FlatListMenuItem';

import { styles } from '@app/theme/appTheme';
import { menuItems } from '@app/data/menuItems';
import { HeaderTitle } from '@app/components/HeaderTitle';
import { ItemSeparator } from '@app/components/ItemSeparator';

export const HomeScreen = () => {
  return (
    <View style={{ ...stylesHomeScreen.flex, ...styles.globalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Opciones de Menú" />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};

const stylesHomeScreen = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
