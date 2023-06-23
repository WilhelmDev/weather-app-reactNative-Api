export const kelvinToCelcius = (number:number | undefined) => {
    const celcius = (number! - 273.15)
    return Math.trunc(celcius)
}