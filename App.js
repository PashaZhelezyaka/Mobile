import { StatusBar } from 'expo-status-bar';
import {TouchableWithoutFeedback, Image ,Alert, Button, StyleSheet, Text, View} from 'react-native';

export default function App() {
    const pressText = () => {
        console.log("Press text")
    }
    // const clickMessageLog = (text) => {
    //     console.log(text)
    // }
    const pressButtonClick = () => {
      Alert.alert("Click Title", "Click message", [{text: "Yes",onPress: ()=> console.log("Yes")},
          {text: "No", onPress: ()=> console.log("No")}])
    }
    const pressButtonSendText = () => {
        console.log("Hi")
                /*text => console.log(text))*/
    }

  return (
    <View style = {styles.container}>
        <TouchableWithoutFeedback onPress = {pressButtonSendText}>
            <Image style={styles.image} blurRadius = {2}
               source={{uri: "https://snack-web-player.s3.us-west-1.amazonaws.com/v2/43/static/media/react-native-logo.79778b9e.png"}}/>
        </TouchableWithoutFeedback>

        <Text style = {styles.text} onPress = {pressText} >Start</Text>
        <Text>One</Text>
        <Text>Two {'\n'}Three</Text>
        <Button title={"Click"} onPress = {pressButtonClick} color={"green"}/>
        <Button title={"Send Text"} onPress = {pressButtonSendText} color={"blue"}/>

        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 40
  },
    text: {
      color: 'green'
    },
    image: {
      width: 40,
      height: 40,


    }
});
