import React, { useState,useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import auth from '@react-native-firebase/auth';

const OtpVerification = () => {

    const [confirm, setConfirm] = useState(null);
    const [number, setNumber] = useState(null); 
    const [user, setUser] = useState(null);  
    const [code, setCode] = useState('');

   

    function onAuthStateChanged(user) 
    {
        setUser(user);    
        console.log(user) 
    }
        
    useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    }, []);

    async function signInWithPhoneNumber(phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        console.log(confirmation)
        setConfirm(confirmation);
    }
        
    async function confirmCode() {
        console.log(confirm.confirm)
        try {
            const result= await confirm.confirm(code);
            console.log(result)
            alert("OTP verified")
            setCode(null)
        } catch (error) {
            alert('Invalid code.');
        }
    }

    if (!confirm) {
        return (
              <>
              <View style={styles.container}>
              <TextInput keyboardType='phone-pad' value={number} placeholder="Enter Mobile Number" placeholderTextColor="gray"  onChangeText={text => setNumber(text)} style={styles.phone}/>
              <TouchableOpacity style={styles.phbtn}
                onPress={() => signInWithPhoneNumber(number)}
              >
                <Text style={styles.phntxt}>Continue</Text>
              </TouchableOpacity>
              </View>
              </>
            );
    }
    return (
            <>  
            <View style={styles.container}>
            <TextInput keyboardType='numeric' value={code} onChangeText={text => setCode(text)} style={styles.phone}/>
            <TouchableOpacity style={styles.phbtn} onPress={() => confirmCode()} >
                <Text style={styles.phntxt}>Confirm Code</Text>
            </TouchableOpacity>
            </View>
            </>  
    );
}

const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'white',
            justifyContent:'center',
            alignItems:'center'
        },
        phone:{
            borderColor:'black',
            borderStyle:'solid',
            borderWidth:2,
            marginBottom:20,
            width:'60%',
            color:'gray',
            borderRadius:10,
            padding:10,
            fontSize:17,
            textAlign:'center'
        },
        phbtn:{
            backgroundColor:'black',
            width:'40%',
            borderRadius:10,
            padding:10,
            
        },
        phntxt:{
            color:'white',
            textAlign:'center',
            fontSize:18
            
        }
    }
)

export default OtpVerification;
            
                  
              
    