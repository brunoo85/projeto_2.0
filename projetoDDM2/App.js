import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput,Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.loginContainer}>
         <TextInput style={styles.input}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  loginContainer:{
    backgroundColor: 'green',
    justifyContent: 'center',
    margin: 20,
  },
  input:{
    height:40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: 'yellow',
  }
});
