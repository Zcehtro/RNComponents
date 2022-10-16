import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';

import { HeaderTitle } from '@app/components/HeaderTitle';
import { styles } from '@app/theme/appTheme';
import { useForm } from '@app/hooks/useForm';
import { CustomSwitch } from '@app/components/CustomSwitch';

export const TextInputScreen = () => {
  const { form, onChange, isSubscribed } = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="TextInputs" />
            <TextInput
              style={stylesScreen.inputStyle}
              placeholder="Ingrese su nombre"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
            />
            <TextInput
              style={stylesScreen.inputStyle}
              placeholder="Ingrese su email"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
            />
            <View style={stylesScreen.switchRow}>
              <Text style={stylesScreen.switchText}>Subscribirse</Text>
              <CustomSwitch
                isOn={isSubscribed}
                onChange={value => onChange(value, 'isSubscribed')}
              />
            </View>

            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <TextInput
              style={stylesScreen.inputStyle}
              placeholder="Ingrese su teléfono"
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
            />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <View style={stylesScreen.emptyView} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHoriztonal: 10,
    borderRadius: 10,
  },
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  emptyView: {
    height: 100,
  },
});
