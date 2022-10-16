import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { FlatListMenuItem } from '@app/components/FlatListMenuItem';

import { styles } from '@app/theme/appTheme';
import { menuItems } from '@app/data/menuItems';
import { HeaderTitle } from '@app/components/HeaderTitle';

export const HomeScreen = () => {
  const itemSeparator = () => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          opacity: 0.4,
          marginVertical: 8,
        }}
      />
    );
  };
  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Opciones de Menú" />}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
