import { StatusBar } from 'expo-status-bar';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import FormWeather from './src/components/FormWeather';
import { useEffect, useState } from 'react';
import { SearchState } from './interfaces';

export default function App() {
    const [search, setSearch] = useState<SearchState>({city:'', country:''})
    const [reqApi, setReqApi] = useState(false)

    useEffect(() => {
        if (reqApi) {
            const apiKey = 'a37a5ed701efa068745a9223d005c03b'
            const {city,country} = search
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
            console.log(url)
            setReqApi(false)
        }
    },[reqApi])

    const handleSearch = () => {
        console.log('Buscando')
        setReqApi(true)
    }

    const hideKeyboard = () => {
        Keyboard.dismiss()
    }

    return (
        <TouchableWithoutFeedback onPress={() => hideKeyboard()}>
            <View style={styles.app}>
            <StatusBar style="auto" />

            <View style={styles.content}>

                <FormWeather search={search} handleSearch={handleSearch} setSearch={setSearch}/>

            </View>

        </View>
        </TouchableWithoutFeedback>
    );
    }

    const styles = StyleSheet.create({
    app:{
        flex:1,
        backgroundColor:'rgb(71,149,212)',
        justifyContent:'center'
    },
    content:{
        marginHorizontal:'4%'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    });
