import { HeaderTitle } from '@app/components/HeaderTitle';
import { styles } from '@app/theme/appTheme';
import { useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />

      <Button title="Abrir modal" onPress={() => setIsVisible(true)} />

      <Modal animationType="slide" visible={isVisible} transparent={true}>
        {/* Background negro */}
        <View
          style={{
            flex: 1,
            // height: 100,
            // width: 100,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              backgroundColor: 'white',
            }}>
            <HeaderTitle title="Modal" />
            <Text>Cuerpo del modal</Text>
            <Button title="Cerrar" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
