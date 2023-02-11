import React from "react";
import {StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import Login from "./Login";


const App=()=>{
    return(
      <View style={styles.container}>
        <ImageBackground source={require('./src/image/background.png')} resizeMode="cover" style={{width:(420),
        height:(732),justifyContent:'center',alignItems:'center',marginTop:'-10%',marginLeft:"-2%" }} >
        
        <Text style={styles.txt}>SL NIC App</Text>
         <Login/>
        
        </ImageBackground>
           
    </View>
    )
}
export default App;

const styles=StyleSheet.create({
    txt:{
       
        marginTop:'30%',
        fontWeight:'bold',
        color:'#1c1118',
        fontSize:30,
        fontFamily:'San Francisco',
        textAlign:'center',
        },

    

    container:{
        flex:1,
    },

 
})
//style={styles.view}