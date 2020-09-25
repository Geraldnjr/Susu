import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, TextInput, Text, View, Dimensions } from 'react-native';

class Page3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.leftside}>
                    <Text style={{color: 'white', fontSize: 40, position: 'absolute', left: 100, top: 100}}>Welcome back,</Text>
                    <Text style={{color: 'white', fontSize: 20, position: 'absolute', left: 100, top: 170}}>Log in to continue</Text>
                    <Text style={{fontSize: 200, position: 'absolute', top: 560, color: "white", transform: [{rotate: "20deg"}]}}>
                        SUSU
                    </Text>
                </View>
                <View style = {styles.rightside}>
                    <Text style={{fontSize: 40}}>Log in</Text>
                    <Text style={{lineHeight: 90}}>Welcome to the future of Savings & Investments</Text>

                    <Text style={styles.text}>Email or Username</Text>
                    <TextInput style = {styles.textinput} underlineColorAndroid = "transparent"/>

                    <Text style={styles.text}>Password</Text>
                    <TextInput style = {styles.textinput} secureTextEntry={true} underlineColorAndroid = "transparent"/>

                    <TouchableOpacity style = {styles.submitButton} onPress = {
                        () => alert("Thank You")
                    }>
                    <Text style={{textAlign: 'center', fontSize: 20, color: 'white'}}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Page3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  submitButton: {
    backgroundColor: 'lightgreen',
    height: 40,
    width: 500,
    position: 'absolute',
    top: 360,
    borderRadius:5,
 },
  textinput: {
    width: 500,
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius:5,
 },
 text: {
  fontSize: 20,
  lineHeight: 50,
 },
  leftside: {
    width: 700,
    height: Dimensions.get('window').height,
    overflow: 'hidden',
    backgroundColor: 'lightgreen',
  },
  rightside: {
    left: 100,
  }
});
