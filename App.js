import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Start</Text>
      <Text>One</Text>
      <Text>Two {'\n'}Three</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
      marginHorizontal: 20,
      marginTop: 40
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
