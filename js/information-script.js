const API_KEY = 'ZuY52Vb89mMWnvajCtGRp8Kyfn8HBQmYM4yOo0wn';
const API_URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;

getWeather().then(sols =>{
    console.log(sols)
})

function getWeather()
{
    return fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        const {
            sol_keys,
            validity_checks,
            ...solData
        } = data
        return Object.entries(solData).map(([sol, data]) => {
            return{
                sol:sol,
                maxTemp:data.AT.mx,
                minTemp:data.AT.mn,
                windSpeed:data.HWS.av,
                winDirectionDegrees:data.WD.most_common.compas_point,
                date: new Date(data.First_UTF)
            }
        })
    })
}