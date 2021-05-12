import React, { useState } from 'react';
import {View, StyleSheet, Button,TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import {Input} from 'react-native-elements';
import InputsStyles from '../styles/InputsStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

import Submitstyles from '../styles/Submitstyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SignUpScreen = props => {
        const [FullName, setFullName] = useState('');
        const [Email, setEmail] = useState('');
        const [Phonenumber, setPhonenumber] = useState('');
        const [Password, setPassword] = useState('');
        const [CNFPassword, setCNFPassword] = useState('');
        const Validate = () => {
            if(!(Password.match(CNFPassword)))
            {
                alert("Password does not match"); 
            }
            else if(FullName.length == 0 || Email.length == 0 || 
                Phonenumber.length ==0 || Password.length==0 || CNFPassword.length==0)
            {
                alert("Please enter all details");
            }
            else if(Phonenumber.length != 10)
            {
                alert("Phone number must be of 10 digits"); 
            }
            else if(!(Email.includes("@")) || (!(Email.includes(".")) ))
            {
                alert("Email format is wrong");
            }
            else{
                try{
                    fetch("http://10.0.2.2:8000/api/registration", {
                        method: 'POST', 
                        mode: "no-cors", 
    
    
                        headers: {
                            'Accept': 'application/json', 
                            'Content-Type': 'application/json'
                        }, 
    
                        body: JSON.stringify({
                            "name" : FullName, 
                            "email" : Email, 
                            "Phonenumber": Phonenumber,
                            "password": Password, 
                        })
                    }).then(res=>res.json()).then(resData => {
                        console.log(resData); 
                        if(resData['code'] == 200)
                        {
                            props.navigation.navigate('HomeScreen');
                        }
                        else
                        {
                            alert("Your account cannot be registered right now, Please try again"); 
                        }
                    }); 
                }
                catch(error)
                {
                    alert(error); 
                }
            }
        };
        return (

        <ScrollView style={{backgroundColor: '#FFFFFF'}}>
            <View style={styles.container}>
            <View style={styles.categoryIcon}>
            <Image source={require('../assets/logo.png')} style={styles.imageContainer}/>
          </View>
                    <Text style={styles.textTitle}>  Create an account 
                    </Text>
            
                    <View style={[InputsStyles.container]}>
                <Input style={InputsStyles.inputContainer}
                    placeholder= "Full Name"
                    onChangeText={FullName => setFullName(FullName)}

                    inputContainerStyle={InputsStyles.inputContainer}
                    inputStyle={InputsStyles.inputText}
                    leftIcon= {
                        <Icon 
                            name="user"
                            size={22}
                            color="#4A7EFB"
                        />
                    }
                />
            </View>


            <View style={[InputsStyles.container]}>
                <Input style={InputsStyles.inputContainer}
                    placeholder= "Email"
                    onChangeText={Email => setEmail(Email)}

                    inputContainerStyle={InputsStyles.inputContainer}
                    inputStyle={InputsStyles.inputText}
                    leftIcon= {
                        <Icon 
                            name="envelope"
                            size={22}
                            color="#4A7EFB"

                        />
                    }
                />
            </View>

            <View style={[InputsStyles.container]}>
                <Input style={InputsStyles.inputContainer}
                    placeholder= "Phonenumber"
                    onChangeText={Phonenumber => setPhonenumber(Phonenumber)}

                    inputContainerStyle={InputsStyles.inputContainer}
                    inputStyle={InputsStyles.inputText}
                    leftIcon= {
                        <Icon 
                            name="phone"
                            size={22}
                            color="#4A7EFB"

                        />
                    }
                />
            </View>

            <View style={[InputsStyles.container]}>
                <Input style={InputsStyles.inputContainer}
                    placeholder= "Password"
                    onChangeText={Password => setPassword(Password)}
                    secureTextEntry={true}

                    inputContainerStyle={InputsStyles.inputContainer}
                    inputStyle={InputsStyles.inputText}
                    leftIcon= {
                        <Icon 
                            name="lock"
                            size={22}
                            color="#4A7EFB"
                        />
                    }
                />
            </View>

            <View style={[InputsStyles.container]}>
                <Input style={InputsStyles.inputContainer}
                    placeholder= "Confirm Password"
                    onChangeText={CNFPassword => setCNFPassword(CNFPassword)}
                    secureTextEntry={true}

                    inputContainerStyle={InputsStyles.inputContainer}
                    inputStyle={InputsStyles.inputText}
                    leftIcon= {
                        <Icon 
                            name="lock"
                            size={22}
                            color="#4A7EFB"
                        />
                    }
                />
            </View>
            
                       
                <TouchableOpacity style={Submitstyles.container} onPress={Validate}>
                    <Text style={Submitstyles.submitText}> Create my new account </Text>
                </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
                <Text styles={styles.textBody}> Already have an account? </Text>
                <Text styles={[styles.textBody, {color: '#001F6D'}]}
                 onPress = {()=> props.navigation.navigate('LoginScreen')}>Login here </Text>

            </View>
            </View>

        </ScrollView>
    );
};
export default SignUpScreen;  

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        backgroundColor: "#FFFFFF", 

    }, 
    image: {
        width: 400, 
        height: 350, 
        marginVertical: 10
    }, 
    textTitle: {
        fontSize: 40, 
        fontFamily: 'Foundation', 
        marginVertical: 5
    }, 
    textBody: {
        fontSize: 16, 
        fontFamily: 'Foundation'
    },
    imageContainer: {
        width: 200, 
        height: 200
    }
});


