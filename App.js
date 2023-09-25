import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import Main from './src/components/Main';
import Rodape from './src/components/Rodape';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Main/>
      <Rodape/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: "center",
    justifyContent:"center",
    
  },
});
