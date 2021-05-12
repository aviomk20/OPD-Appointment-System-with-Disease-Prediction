import React, { useState } from 'react';
import {View, StyleSheet,Button, Text,  Image, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

import Submitstyles from '../styles/Submitstyles';
import InputsStyles from '../styles/InputsStyles';
import DefaultPreference from 'react-native-default-preference';

const LoginScreen = props => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const Validate = () => {
        if(Email.length == 0 && Password.length==0)
        {
            alert("Enter login details");
        }
        else if(Password.length == 0)
        {
            alert("Please enter password")
        }
        else if(Email.length == 0)
        {
            alert("Enter email address")
        }
       
        if(Password.length > 0 && Email.length > 0)
        {

            try{
                fetch("http://10.0.2.2:8000/api/loginapi", {
                    method: 'POST', 
                    mode: "no-cors", 


                    headers: {
                        'Accept': 'application/json', 
                        'Content-Type': 'application/json'
                    }, 

                    body: JSON.stringify({
                        "email" : Email, 
                        "password" : Password, 
                        "device_name": "react-app", 
                    })
                }).then(res=>res.json()).then(resData => {
                    if(resData['code'] == 200)
                    {
                        DefaultPreference.set('LoggedInUserInformation', resData["token"]).then(function() {
                            console.log(resData)
                            DefaultPreference.set('isLoggedin','true').then(function() {
                            props.navigation.navigate('HomeScreen');
                        });
                    });
                        
                    }
                    else
                    {
                        alert("Wrong password or username"); 
                    }
                }); 
            }
            catch(error)
            {
                alert(error); 
            }

        }
        else
        {
            alert("Check credentials")
        }
    }; 
    return (
        <ScrollView style={{backgroundColor: '#FFFFFF'}}>
            <View style={styles.container}>
            <View style={styles.categoryIcon}>
            <Image source={require('../assets/logo.png')} style={styles.imageContainer}/>
          </View> 
                <Text style={styles.textTitle}>Welcome back</Text>
                <Text style={styles.textBody}>Log in to your existing account</Text>
                <View style={{marginTop: 20}} />


                <View style={[InputsStyles.container]}>
                <Input style={InputsStyles.inputContainer}
                    placeholder= "Email"
                    onChangeText={Email => setEmail(Email)}

                    inputContainerStyle={InputsStyles.inputContainer}
                    inputStyle={InputsStyles.inputText}
                    leftIcon= {
                        <Icon 
                            name="user"
                            size={22}
                        
                        />
                    }
                />
            </View>

            <View style={[InputsStyles.container]}>
                <Input 
                    placeholder="Password"
                    inputContainerStyle={InputsStyles.inputContainer}
                    inputStyle={InputsStyles.inputText}
                    onChangeText={Password => setPassword(Password)}

                    secureTextEntry={true}
                    leftIcon= {
                        <Icon 
                            name= "lock"
                            size={22}   
                        />
                    }
                />
            </View>
                <View style={{width: '90%'}}>
                    <Text style={[styles.textBody], {alignSelf: 'flex-end'}}>Forgot Password?</Text>
                </View>

                <TouchableOpacity style={Submitstyles.container} onPress={Validate}>
                    <Text style={Submitstyles.submitText}> Log In </Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <Text style={styles.textBody}>Don't Have an account</Text>
                    <Text style={[styles.textBody, {color: '#001F6D'}]}
                     onPress={() => props.navigation.navigate('SignUpScreen')}> Sign Up
                     </Text>
                </View>
            </View>
        </ScrollView>      
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#FFFFFF", 
        justifyContent: 'center', 
    },
    image: {
        width: 400,
        height: 250,
        marginVertical: 10
    },
    textTitle: {
        fontFamily: 'Foundation',
        fontSize: 40,
        marginVertical: 10,
    },
    textBody: {
        fontFamily: 'Foundation',
    
        fontSize: 16
    }, 
    imageContainer: {
        width: 200, 
        height: 200
    }
});

export default LoginScreen;