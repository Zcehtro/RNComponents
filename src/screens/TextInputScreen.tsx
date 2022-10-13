import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { HeaderTitle } from "@app/components/HeaderTitle";
import { styles } from "@app/theme/appTheme";

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const onChange = (value: string, field: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="TextInputs" />
      <TextInput
        style={stylesScreen.inputStyle}
        placeholder="Ingrese su nombre"
        autoCorrect={false}
        autoCapitalize="words"
        onChangeText={value => onChange(value, "name")}
        />
      <TextInput
        style={stylesScreen.inputStyle}
        placeholder="Ingrese su email"
        onChangeText={value => onChange(value, "email")}
        keyboardType="email-address"
        />
      <TextInput
        style={stylesScreen.inputStyle}
        placeholder="Ingrese su teléfono"
        onChangeText={value => onChange(value, "phone")}
        keyboardType="phone-pad"
      />
      <HeaderTitle title={JSON.stringify(form, null, 3)} />
    </View>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    height: 50,
    paddingHoriztonal: 10,
    borderRadius: 10,
  },
});
