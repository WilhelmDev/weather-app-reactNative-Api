import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { WeatherProps } from '../../interfaces'
import { kelvinToCelcius } from '../helpers'

export default function Weather({response}:WeatherProps) {

    const {name, main, weather} = response

    if (!name) return null
    return (
        <View style={styles.weather}>
            <Text style={[styles.text, styles.actual]}
                >{kelvinToCelcius(main?.temp)}
                <Text style={styles.temp}>&#x2103;</Text>

                <Image style={{ width:88, height:66, maxWidth:100, maxHeight:100}}
                source={{uri: `http://openweathermap.org/img/w/${weather![0].icon}.png`}}
                />
            </Text>

            <View style={styles.temps}>
                <Text style={styles.text}> Min {''}
                    <Text style={styles.temp}>
                        {kelvinToCelcius(main?.temp_min)}&#x2103;
                    </Text>
                </Text>

                <Text style={styles.text}> Max {''}
                    <Text style={styles.temp}>
                        { kelvinToCelcius(main?.temp_max)}&#x2103;
                    </Text>
                </Text>
            </View>

            
        </View>
    )
}

const styles = StyleSheet.create({
    weather:{
        marginBottom:20,
    },
    text:{
        color:'white',
        fontSize:20,
        textAlign:'center',
        marginRight:10,
    },
    actual:{
        fontSize:80,
        marginRight:0,
        fontWeight:'bold',
    },
    temp:{
        fontSize:24,
        fontWeight:'bold'
    },
    temps:{
        flexDirection:'row',
        justifyContent:'center',
    }
})