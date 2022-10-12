import { useRef } from "react";
import { StyleSheet, View, Animated, Button, Easing } from "react-native";

export const Animation101Screen = () => {
  const opacity = useRef(new Animated.Value(0.4)).current;
  const top = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => console.log("animación terminó"));

    Animated.timing(top, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };
  
  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    
    Animated.timing(top, {
      toValue: -100,
      duration: 700,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  const reset = () => {
    Animated.timing(opacity, {
      toValue: 0.4,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity: opacity,
          transform: [
            {
              translateY: top,
            },
          ],
        }}></Animated.View>
      <Button title="FadeIn" onPress={fadeIn} />
      <Button title="FadeOut" onPress={fadeOut} />
      <Button title="Reset Opacity" onPress={reset} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  purpleBox: {
    backgroundColor: "#5856D6",
    width: 150,
    height: 150,
  },
});
