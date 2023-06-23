import { View, Text, TextInput, StyleSheet, StatusBar, TouchableWithoutFeedback, Animated, Alert } from 'react-native'
import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker';
import { FromProps } from '../../interfaces';

export default function FormWeather({search, handleSearch, setSearch}:FromProps) {
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

    const {city, country} = search

    const handleSubmit = () => {
        if (Object.values(search).includes('')) {
            Alert.alert(
                'Error',
                'Agrega una ciudad y pais para la busqueda'
                )
                return
        }

        handleSearch(search)
    }

    return (
        <>
            <View style={styles.container}>

                <View style={styles.form}>
                    <TextInput style={styles.input} value={city} onChangeText={(city) => setSearch({...search, city})}
                    placeholder='Ciudad' placeholderTextColor={'#666'}
                    />
                </View>

                <View >

                    <Picker style={{backgroundColor:'#fff', } }
                    selectedValue={country}
                    onValueChange={(country) => setSearch({...search, country})}
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
                onPress={() => handleSubmit()}
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
        textAlign:'center',
        borderRadius:10
    },
    btn:{
        marginTop:40,
        backgroundColor:'#000',
        paddingHorizontal:10,
        paddingVertical:14,
        justifyContent:'center',
        borderRadius:10
    },
    btnText:{
        color:'white',
        fontWeight:'bold',
        textTransform:'uppercase',
        textAlign:'center',
        fontSize:16,

    },
})