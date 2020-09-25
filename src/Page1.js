import React, { Component } from 'react';
import { Image, TouchableOpacity, StyleSheet, TextInput, Text, View } from 'react-native';

class Page1 extends Component {
    state = {
        email: ''
     }
     handleEmail = (text) => {
        this.setState({ email: text })
     }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('./Susu.png')}/>
                <View style={styles. section}>
                    <Text style={styles.text}>Money Without Borders</Text>
                    <Text style={{width: 350}}>Send money in multiple currencies at the best rates. Save and earn up to 10% interest on dollars, pounds and euros, paid daily. Enter your email to get early access!</Text>
                    <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Enter email here"
                    autoCapitalize = "none"
                    onChangeText = {this.handleEmail} />
                    <TouchableOpacity style = {styles.submitButton}
                    onPress = {
                        () => alert(this.state.email)
                    }>
                    <Text style = {styles.submitButtonText}> Submit </Text>
                    </TouchableOpacity>
                </View>
                <Image style={{width: 570, height: 670, bottom: 290, alignSelf: "flex-end"}} source={require('./clean.png')}/>
            </View>
        );
    }
}

export default Page1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  logo: {
    width: 200,
    height: 60,
  },
  section: {
    top: 150,
    left: 100,
  },
  submitButton: {
    backgroundColor: 'lightgreen',
    padding: 10,
    margin: 15,
    height: 40,
    width: 100
 },
 submitButtonText:{
    color: 'white'
 },
  text: {
    fontSize: 50,
  },
  input: {
    margin: 15,
    height: 40,
    width: 360,
    borderColor: '#7a42f4',
    borderWidth: 1
 },
});
