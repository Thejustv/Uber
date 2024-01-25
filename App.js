import React,{useEffect} from "react";
import { Text, SafeAreaView } from "react-native";
import BootSplash from "react-native-bootsplash";

const App=()=>{

    useEffect(()=>{
        const init = async () => {
            // …do multiple sync or async tasks
          };
      
          init().finally(async () => {
            await BootSplash.hide({ fade: true });
          });
    },[])

    return (
        <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
            <Text style={{color:'red'}}>Hello World!</Text>
        </SafeAreaView>
    )
}

export default App;