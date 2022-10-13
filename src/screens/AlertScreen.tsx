import { Alert, Button, View } from "react-native";
import { HeaderTitle } from "@app/components/HeaderTitle";
import { styles } from "@app/theme/appTheme";

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      "Título",
      "Este es el mensaje de la alerta",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "destructive",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      {
        cancelable: true,
        onDismiss: () => console.log("onDismiss"),
      },
    );
  };
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />

      <Button title="Mostrar Alerta" onPress={showAlert} />
    </View>
  );
};
