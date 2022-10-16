import { StyleSheet, View } from 'react-native';

export const Spacer = () => {
  return <View style={styles.flex} />;
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
