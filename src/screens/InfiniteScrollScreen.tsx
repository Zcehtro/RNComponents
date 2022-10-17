import { FadeInImage } from '@app/components/FadeInImage';
import { HeaderTitle } from '@app/components/HeaderTitle';
import { styles } from '@app/theme/appTheme';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = (item: number) => {
    return <FadeInImage uri={`https://picsum.photos/id/${item}/500/400`} />;
  };

  return (
    <View style={{ ...styles.globalMargin, flex: 1 }}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({ item }) => renderItem(item)}
        ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={25} color="#5856D6" />
          </View>
        )}
      />
    </View>
  );
};

const stylesLocal = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150,
  },
});
