import React, {useState} from "react";
import { SafeAreaView, SwitchComponent, Text, View, ScrollView, Image, StyleSheet } from "react-native";
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import lankaNIC from 'lanka-nic';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';




    const Login=()=>{
        const [nic,setNic]= useState('')
        const [dateOfBirth,setGetDob]= useState('')
        const [gender,setGetGender]= useState('')

    const onLogin=()=>{
        let { dateOfBirth, gender } = lankaNIC.getInfoFromNIC(nic);
        setGetDob(dateOfBirth);
        setGetGender(gender);
    }

    const clear=()=>{
        setNic('');
        setGetDob('')
        setGetGender('')
    }

    return(
        
        <SafeAreaView>
            
        <ScrollView>
       
        <View>
       
        <View>
           <Image source={require('./src/image/sl.png')} resizeMode='contain' style={styles.image} />
        </View>

            <TextInput style={{marginTop:'-5%',marginLeft:'20%',marginRight:'-10%',marginTop:'17%',width:'60%'}}
            label="Enter your NIC number:"
            mode='flat'
            value={nic}
            onChangeText={x=>setNic(x)}
            right={<TextInput.Icon icon="identifier" size={25}/>}
            />

            <View style={styles.container}>
            <Button icon="cursor-default-click" style={{width:'50%',marginTop:'5%',marginLeft:'-10%'}} mode="contained" onPress={onLogin}>
            Click me 
            </Button>

            <Button icon="format-clear" style={{width:'40%',marginTop:'5%',marginLeft:'27%'}} mode="contained" onPress={clear}>
            Clear
            </Button>
            </View>

            

            <TextInput style={{marginTop:'10%',marginLeft:'20%',marginRight:'10%',width:'60%'}}
            label="Your B'day is:"
            mode='flat'
            value={dateOfBirth.toString()}
            right={<TextInput.Icon icon="cake-variant" size={20}/>}
            />

            <TextInput style={{marginTop:'10%',marginLeft:'20%',marginRight:'10%',width:'60%'}}
            label="Your Gender is:"
            mode='flat'
            value={gender}
            right={<TextInput.Icon icon="gender-male-female"/>}  
            />

        </View>
        </ScrollView> 
        </SafeAreaView>
    )
}


const styles=StyleSheet.create({
    image:{
        height:130,
       // width:206,
        marginTop:'-7%',
        marginLeft:110,
        justifyContent:'center',
        alignItems:"center",
        },

    container:{
        //flex: 1,
        flexDirection: 'row',
        marginHorizontal:107,
       alignItems: 'center',
       //justifyContent: 'center',
    },
})

export default Login;

