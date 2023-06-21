import { View, Text, TextInput, StyleSheet, StatusBar, TouchableWithoutFeedback, Animated } from 'react-native'
import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker';

export default function FormWeather() {
    const [btnAnimation] = useState(new Animated.Value(1))

    const animationEntry = () => {
        Animated.spring( btnAnimation,{
            toValue: 0.75,
            useNativeDriver:false
        }).start()
    }

    const animationExit = () => {
        Animated.spring( btnAnimation,{
            toValue: 1,
            friction: 4,
            tension: 40,
            useNativeDriver:false
        }).start()
    }
    
    const animationStyle = {
        transform:[{scale: btnAnimation}]
    }

    return (
        <>
            <View style={styles.container}>

                <View style={styles.form}>
                    <TextInput style={styles.input}
                    placeholder='Ciudad' placeholderTextColor={'#666'}
                    />
                </View>

                <View>

                    <Picker style={{backgroundColor:'#fff'} }
                    >

                        <Picker.Item label='-- Seleccione un Pais --' value=''/>
                        <Picker.Item label='Estados Unidos' value='US'/>
                        <Picker.Item label='México' value='MX'/>
                        <Picker.Item label='Argentina' value='AR'/>
                        <Picker.Item label='Colombia' value='CO'/>
                        <Picker.Item label='Costa Rica' value='CR'/>
                        <Picker.Item label='España' value='ES'/>
                        <Picker.Item label='Perú' value='PE'/>

                    </Picker>

                </View>

                <TouchableWithoutFeedback
                onPressIn={() => animationEntry()}
                onPressOut={() => animationExit()}
                >
                    <Animated.View style={[styles.btn, animationStyle]}>

                        <Text style={styles.btnText}>
                            Buscar Clima 
                        </Text>

                    </Animated.View>
                </TouchableWithoutFeedback>

            </View>
        </>
    )
}

const styles= StyleSheet.create({
    container:{
        
    },
    form:{

    },
    input:{
        padding:10,
        height:50,
        backgroundColor:'#fff',
        fontSize:20,
        marginBottom:20,
        textAlign:'center'
    },
    btn:{
        marginTop:50,
        backgroundColor:'#000',
        paddingHorizontal:10,
        paddingVertical:12,
        justifyContent:'center'
    },
    btnText:{
        color:'white',
        fontWeight:'bold',
        textTransform:'uppercase',
        textAlign:'center',
        fontSize:16,

    },
})