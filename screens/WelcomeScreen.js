import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

const WelcomeScreen=({navigation})=>{
    return(
    <View style={styles.container}>
    <Text style={styles.heading}>Uber</Text>
    <Image source={require('../assets/mask.png')} style={{width: 180, height: 180}}></Image>
    <Text style={styles.heading}>Move With Safety</Text>
    <TouchableOpacity style={styles.stbtn} onPress={()=> navigation.navigate('OtpVerification')}>
    <Text style={{fontSize:20,color:'white',fontFamily:'sans-serif-medium'}}>Get Started</Text><Icon name='arrowright' size={25} color='white'></Icon>
    </TouchableOpacity>
</View>)
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor:'#1877F2',
          
    },
    heading:{
        color:'white',
        fontSize:40,
        fontFamily:'sans-serif-medium'
    },
    stbtn:{
        width:'80%',
        height:60,
        borderRadius:20,
        backgroundColor:'black',
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row'
    }
})


export default WelcomeScreen;