import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, TextInput, Text, View, Dimensions } from 'react-native';

class Page2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.leftside}>
                  <Text style={{fontSize: 200, position: 'absolute', top: 560, color: "white", transform: [{rotate: "20deg"}]}}>
                    SUSU
                  </Text>
                </View>
                <View style = {styles.rightside}>
                    <Text style={{fontSize: 40}}>Sign Up</Text>
                    <Text style={{lineHeight: 90}}>Welcome to the future of Savings & Investments</Text>

                    <Text style={styles.text}>Full Name</Text>
                    <TextInput style = {styles.textinput} underlineColorAndroid = "transparent"/>

                    <Text style={styles.text}>Email</Text>
                    <TextInput style = {styles.textinput} underlineColorAndroid = "transparent"/>

                    <Text style={styles.text}>Phone Number</Text>
                    <TextInput style = {styles.textinput} underlineColorAndroid = "transparent"/>

                    <Text style={styles.text}>Password</Text>
                    <TextInput style = {styles.textinput} secureTextEntry={true} underlineColorAndroid = "transparent"/>

                    <Text style={styles.text}>Confirm Password</Text>
                    <TextInput style = {styles.textinput} secureTextEntry={true} underlineColorAndroid = "transparent"/>

                    <TouchableOpacity style = {styles.submitButton} onPress = {
                        () => alert("Thank You")
                    }>
                    <Text style={{textAlign: 'center', fontSize: 20, color: 'white'}}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Page2

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
    top: 630,
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
