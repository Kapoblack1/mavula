//LoginScreen1.js
import React,{useState} from 'react';
import { View, Text, Modal, Button } from 'react-native';

export default function LoginScreen1(){
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View>
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Abrir Modal" onPress={() => setModalVisible(true)} />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text>Conteúdo do Modal</Text>
            <Button title="Fechar Modal" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
    </View>
  );
};