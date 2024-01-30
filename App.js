import React,{useEffect} from "react";
import BootSplash from "react-native-bootsplash";
import WelcomeScreen from "./screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OtpVerification from "./utils/OtpVerification";


const App=()=>{

  const Stack=createStackNavigator();

    useEffect(()=>{
        const init = async () => {
            // …do multiple sync or async tasks
          };
      
          init().finally(async () => {
            await BootSplash.hide({ fade: true });
          });
    },[])

    return (
       <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="welcomescreen" component={WelcomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="OtpVerification" component={OtpVerification} options={{headerShown:false}}/>
          </Stack.Navigator>
       </NavigationContainer>
       
    )
}


export default App;