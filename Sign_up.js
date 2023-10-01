import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
  ScrollView,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import LogoPlusName from "./LogoPluseName";

export default function Sign_up() {
  function handlenavigation_login(){
    navigation.navigate('Login') 
  }
  
  function InputText({styles,placeholder,placeholderTextColor,password}){
   return(
   <>
    { password ? 
     <TextInput
     style={styles.TextInput}
     placeholder={placeholder}
     placeholderTextColor={placeholderTextColor}
     secureTextEntry={true}
    />: <TextInput style={styles.TextInput} placeholder={placeholder} placeholderTextColor={placeholderTextColor} 
 /> 
    }
    
    </>)
  }

 
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");

  return (
   
    <SafeAreaView style={styles.container}>
      
      <StatusBar style="auto" />
      <LogoPlusName text="Sign up" activity={'false'} />


      <Text style={styles.text}>First_Name:</Text>
      <View style={styles.inputView}>

        <InputText styles={styles} placeholder={"Choudhary"} placeholderTextColor={"#fff"} password={false} />
       
      </View> 
      <Text style={styles.text}>Last_Name:</Text>
      <View style={styles.inputView}>
      
        <InputText styles={styles} placeholder={"Talha"} placeholderTextColor={"#fff"} password={false} />
      </View> 
      <Text style={styles.text}>Email:</Text>
      <View style={styles.inputView}>
     
        <InputText styles={styles} placeholder={"Awais@123"} placeholderTextColor={"#fff"} password={false}/>
       
      </View>
      <Text style={styles.text}>Password:</Text> 
      <View style={styles.inputView}>
    
        <InputText styles={styles} placeholder={"...."} placeholderTextColor={"#fff"} password={true} />
       
      </View> 
      <TouchableOpacity onPress={handlenavigation_login}>
        <Text style={styles.forgot_button}>Already exit account Login?</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}  onPress={handlenavigation_login}>
        <Text>Submit</Text> 
      </TouchableOpacity> 


 

      
    
    </SafeAreaView>

     
   
 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft:20
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    
    width: "90%",
    borderRadius:20,
    height: 50,
    marginBottom: 20,
    alignItems: "flex-start",
    backgroundColor:'grey'
    
    
  },
  TextInput: {
    
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    borderBottomColor:'black',
    color:'white'
    
  },
  forgot_button: {
    height: 30,
    marginBottom: 10,
    marginTop:20,
    // borderBottomStartRadius:29,
  
    textDecorationLine:'underline'
  },
  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#345bd1",
    alignSelf:'center'
  
  
  },
 text:{
  marginLeft:12,
  marginBottom:12,
  marginTop:12,
  fontSize:17
 }
});