import { StatusBar } from 'expo-status-bar';
import { Alert, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import FormWeather from './src/components/FormWeather';
import { useEffect, useState } from 'react';
import { SearchState, weatherData } from './interfaces';
import Weather from './src/components/Weather';
import { kelvinToCelcius } from './src/helpers';

export default function App() {
    const [search, setSearch] = useState<SearchState>({city:'', country:''})
    const [reqApi, setReqApi] = useState(false)
    const [response, setResponse] = useState<weatherData>({})
    const [bgColor, setBgColor] = useState('rgb(71,149,212)')

    useEffect(() => {
        const reqWeather = async () =>{
            if (reqApi) {
                const apiKey = 'a37a5ed701efa068745a9223d005c03b'
                const {city,country} = search
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
                
                try {
                    const res = await fetch(url)
                    const result:weatherData = await res.json()

                    if(result.cod === '404'){
                        throw new Error
                    }

                    setResponse(result)

                    //change backgoundcolor
                    const {main} = result
                    const actual = kelvinToCelcius(main?.temp)
                    if(actual < 10) {
                        setBgColor('rgb(105,108,149)')
                    } else if (actual >= 10 && actual < 25) {
                        setBgColor('rgb(71,149,212)')
                    } else {
                        setBgColor('rgb(178,28,61)')
                    }

                    setReqApi(false)
                } catch (error) {
                    Alert.alert(
                        'Error',
                        'No hay resultados, intenta con otra ciudad o pais')
                    setReqApi(false)
                }
                
            }
        }

        reqWeather()
    },[reqApi])

    const handleSearch = () => {
        setReqApi(true)
        hideKeyboard()
    }

    const bgColorApp = {
        backgroundColor: bgColor
    }

    const hideKeyboard = () => {
        Keyboard.dismiss()
    }

    return (
        <TouchableWithoutFeedback onPress={() => hideKeyboard()}>
            <View style={[styles.app, bgColorApp]}>
            <StatusBar style="auto" />

            <View style={styles.content}>

                <Weather response={response}/>

                <FormWeather search={search} handleSearch={handleSearch} setSearch={setSearch}/>

            </View>

        </View>
        </TouchableWithoutFeedback>
    );
    }

    const styles = StyleSheet.create({
    app:{
        flex:1,
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
