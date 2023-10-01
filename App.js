

import {
  StyleSheet
} from "react-native";



import React, { useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';


import Welcome from "./Welcome" ;
import Sign_up from "./Sign_up";
import Login from "./Login";
import CustomerHome from "./CustomerHome";
import AllProductView from "./AllProductView";


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();
     
  useEffect(() => {
    
    const delay = 8000; 

    setTimeout(() => {
      navigation.replace('Login')
    }, delay);
  }, []);
  
  return (

<>


<NavigationContainer>
      <Stack.Navigator>
        {/* Define your screens here */}
       
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
        
        <Stack.Screen name="AllProductView" component={AllProductView} />
        <Stack.Screen name="CustomerHome" component={CustomerHome} />
        <Stack.Screen name="Sign_up" component={Sign_up} />
      </Stack.Navigator>
    </NavigationContainer>
    

   </>
  );
}
