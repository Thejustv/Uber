import React from "react";
import { View,Text, SafeAreaView } from "react-native";

const App=()=>{
    return (
        <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
            <Text style={{color:'red'}}>Hello World!</Text>
        </SafeAreaView>
    )
}

export default App;