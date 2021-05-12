import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from  '@react-navigation/stack';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import HomeScreen from './screens/HomeScreen';
import DiseasePredictionScreen from './screens/DiseasePredictionScreen';
import BookAppointment from './screens/BookAppointment';
import DoctorProfileScreen from './screens/DoctorProfileScreen';

// import MedicineReminder from './screens/MedicineReminder';
import ExampleOne from './screens/ExampleOne';
import AppointmentHistory from './screens/AppointmentHistory';
import DefaultPreference from 'react-native-default-preference';
import MyAppoinment from './components/MyAppoinment';
import Prescription from './components/Prescription';

const Stack = createStackNavigator();


const Navigation = props => {

    const [isLaunched,setIsLaunched] =React.useState(false);
    const [isLoggedin,setIsLoggedin] = React.useState(false);

    DefaultPreference.get('isLaunched').then(function(value) {
        if(!value == ""){
            setIsLaunched(true);
        }
        else{
            setIsLaunched(false)
        }
        console.log("isLaunched function");
        console.log(value);

    });

    DefaultPreference.get('isLoggedin').then(function(value) {
        if(!value == ""){
            setIsLoggedin(true);
        }
        else{
            setIsLoggedin(false)
        }
        console.log("isLoggedin function");
        console.log(value);
    });



        if(!isLaunched)
        {
            return (
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="OnboardingScreen">

                        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{headerShown: false}} />

                        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />
                        <Stack.Screen name="AppointmentHistory" component={AppointmentHistory} options={{headerShown: false}} />

                        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown:false}} />

                        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:true}} />

                        <Stack.Screen name="DiseasePredictionScreen" component={DiseasePredictionScreen} options={{headerShown:true}} />

                        <Stack.Screen name="BookAppointment" component={BookAppointment} options={{headerShown:true}}/>
                       

                        <Stack.Screen name="MedicineReminder" component={ExampleOne} options={{headerShown:true}}/>
                        <Stack.Screen name="MyAppoinment" component={MyAppoinment} options={{headerShown:true}}/>
                        <Stack.Screen name="Prescription" component={Prescription} options={{headerShown:true}}/>

                        <Stack.Screen name="DoctorProfileScreen" component={DoctorProfileScreen} options={{headerShown:true}}/>

                        </Stack.Navigator>
                </NavigationContainer>
            );
        }


        else if(isLoggedin)
        {
                return (
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName="HomeScreen">

                            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:true}} />

                            <Stack.Screen name="DiseasePredictionScreen" component={DiseasePredictionScreen} options={{headerShown:true}} />
                            <Stack.Screen name="AppointmentHistory" component={AppointmentHistory} options={{headerShown:true}} />

                            <Stack.Screen name="BookAppointment" component={BookAppointment} options={{headerShown:true}}/>
                           
                            <Stack.Screen name="MedicineReminder" component={ExampleOne} options={{headerShown:true}}/>
                            <Stack.Screen name="Prescription" component={Prescription} options={{headerShown:true}}/>

                           
                            <Stack.Screen name="MyAppoinment" component={MyAppoinment} options={{headerShown:true}}/>
                            <Stack.Screen name="DoctorProfileScreen" component={DoctorProfileScreen} options={{headerShown:true}}/>
                            </Stack.Navigator>
                    </NavigationContainer>
                );
        }
        else{
            return (
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="LoginScreen">
                    

                        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />

                        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown:false}} />

                        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:true}} />

                        <Stack.Screen name="DiseasePredictionScreen" component={DiseasePredictionScreen} options={{headerShown:true}} />
                        <Stack.Screen name="AppointmentHistory" component={AppointmentHistory} options={{headerShown:true}} />

                        <Stack.Screen name="BookAppointment" component={BookAppointment} options={{headerShown:true}}/>
                        

                        <Stack.Screen name="MedicineReminder" component={ExampleOne} options={{headerShown:true}}/>
                        
                        <Stack.Screen name="DoctorProfileScreen" component={DoctorProfileScreen} options={{headerShown:true}}/>
                        <Stack.Screen name="Prescription" component={Prescription} options={{headerShown:true}}/>
                        <Stack.Screen name="MyAppoinment" component={MyAppoinment} options={{headerShown:true}}/>
                        </Stack.Navigator>
                </NavigationContainer>
            );

            }





};

export default Navigation;
