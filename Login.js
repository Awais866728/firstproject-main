import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground,
  } from "react-native";
  import { createStackNavigator } from '@react-navigation/stack';
  import { StatusBar } from "expo-status-bar";
  import React, { useState } from "react";
  import Sign_up from "./Sign_up";
  import CustomerHome from './CustomerHome';

import SelectDropdown from 'react-native-select-dropdown';
import LogoPlusName from "./LogoPluseName";
export default function Login(){
  function handleNavigation_signup()
  {
    navigation.navigate('Sign_up') 
  }
  function handleNavigation_home()
  {
    navigation.navigate('CustomerHome') 
  }
  const adminandcustomer = ["Admin", "Customer"];
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [value, setValue] = useState("Admin");
        return (
            <>
                
    
    <SafeAreaView style={styles.container}>
           <LogoPlusName text="Login" />
           <StatusBar style="auto" />
           <View style={{margin:10}}>
           <SelectDropdown
            data={adminandcustomer}
            onSelect={(selectedItem, index) => console.log(selectedItem, index)}

/>
           </View> 
           <View style={styles.inputView}>
             <TextInput
               style={styles.TextInput}
               placeholder="Email."
               placeholderTextColor="#003f5c"
               onChangeText={(email) => setEmail(email)}
             /> 
           </View> 
           <View style={styles.inputView}>
             <TextInput
               style={styles.TextInput}
               placeholder="Password."
               placeholderTextColor="#003f5c"
               secureTextEntry={true}
               onChangeText={(password) => setPassword(password)}
             /> 
           </View> 
           <TouchableOpacity>
             <Text style={styles.forgot_button.forgot}>Forgot Password?</Text> 
           </TouchableOpacity> 
           <TouchableOpacity style={styles.loginBtn} onPress={handleNavigation_home}>
             <Text style={styles.loginText}>Login</Text> 
           </TouchableOpacity>
           <TouchableOpacity onPress={handleNavigation_signup}>
             <Text style={styles.forgot_button.createAnAccount}>Create an Account</Text> 
           </TouchableOpacity> 
           
        
        </SafeAreaView>
    

            
            </>


        );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },    
  
  inputView: {
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    width: "70%",
    height: 45,
    marginBottom: 15,
    alignItems: "start",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    forgot:{
      height: 30,
      color:'#ab0000',
      textDecorationLine: 'underline'
    },
    createAnAccount:{
      height: 30,
      marginTop:20,
      color:'#99697e',
      textDecorationLine: 'underline'
    }

    // borderBottomStartRadius:29,
  },
  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#345bd1",
  
  },
  dropdown: {
    marginLeft: 12,
    height: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
   
  },
});