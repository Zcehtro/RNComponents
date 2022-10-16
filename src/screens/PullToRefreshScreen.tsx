import { HeaderTitle } from '@app/components/HeaderTitle';
import { styles } from '@app/theme/appTheme';
import { useState } from 'react';
import { View } from 'react-native';
import { RefreshControl, ScrollView } from 'react-native-gesture-handler';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('terminamos');
      setRefreshing(false);
    }, 1500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={() => onRefresh()} />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />
      </View>
    </ScrollView>
  );
};
