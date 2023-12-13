import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const containerStyle = {
    ...styles.container,
    backgroundColor: darkMode ? '#192734' : 'white',
  };

  const titleStyle = {
    ...styles.title,
    color: darkMode ? 'white' : 'black',
  };

  const itemTextStyle = {
    ...styles.itemText,
    color: darkMode ? 'white' : 'black',
  };

  return (
    <View style={containerStyle}>
      <Text style={titleStyle}>Definições</Text>

      <TouchableOpacity style={styles.itemContainer} onPress={() => handlePress('Mudar palavra-passe')}>
        <Text style={itemTextStyle}>Mudar palavra-passe</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={() => handlePress('Mudar linguagem')}>
        <Text style={itemTextStyle}>Mudar linguagem</Text>
      </TouchableOpacity>

      <View style={styles.itemContainer}>
        <Text style={itemTextStyle}>Modo escuro</Text>
        <Switch value={darkMode} onValueChange={handleDarkModeToggle} />
      </View>

      <View style={styles.itemContainer}>
        <Text style={itemTextStyle}>Autenticação de dois fatores</Text>
        <Switch /* Adicione a lógica do switch aqui */ />
      </View>
    </View>
  );
}

const handlePress = (action) => {
  // Lidar com o evento de pressionar com base na ação
 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 70,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingVertical: 15,
  },
  itemText: {
    fontSize: 16,
  },
});