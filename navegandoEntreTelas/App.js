import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import AppRotas from './src/rotas/AppRotas';

function App() {

  return (
    <SafeAreaView style={estilos.fullscrenn}>
      <StatusBar />
      <AppRotas/>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  fullscrenn: {
    flex: 1,
  },
});

export default App;
