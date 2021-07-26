const fs = require('fs');

const axios = require('axios');

class Searchers {

    history = [];
    PATH = './db.json';


    constructor() {
        // TODO: read db
        this.readDb();
    }

    get showCapitalizePlaces() {
        console.log(this.history);
        return this.history.map(
            place => {
                let words = place.split(' ');
                words = words.map(
                    p => {
                        p[0].toUpperCase() + p.substring(1)
                    }
                );
                return words.join(' ');
            }
        );
    }

    get params() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    async searchCity(city = '') {
        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json`,
                params: this.params
            });
            const resp = await instance.get();
            return resp.data.features.map(
                place => ({
                    id: place.id,
                    name: place.place_name,
                    lng: place.center[0],
                    lat: place.center[1]
                })
            );
        } catch (error) {
            console.log('erros', error);
            return [];
        }
    }

    get getWeatherParams() {
        return {
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'es'
        }
    }

    async getWeatherCountrie(lat, lon) {
        try {

            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {...this.getWeatherParams, lat, lon }
            });

            const resp = await instance.get();
            const { weather, main } = resp.data;
            return {
                'feel': weather[0].description,
                'temp': main.temp,
                'max': main.temp_max,
                'min': main.temp_min
            }

        } catch (error) {
            console.log(error)
        }
    }

    addToHistory(place = '') {

        if (this.history.includes(place.toLocaleLowerCase()))
            return;

        if (this.history.length == 3)
            this.history.pop();

        this.history.unshift(place);
        this.saveToDb();
    }

    saveToDb() {

        const payload = {
            history: this.history
        };

        fs.writeFileSync(this.PATH, JSON.stringify(payload));
    }

    readDb() {
        if (!fs.existsSync(this.PATH)) {
            console.log('The history is EMPTY'.bold.red);
            return;
        }
        const reading = fs.readFileSync(this.PATH, {
            encoding: 'utf-8'
        });

        const data = JSON.parse(reading);
        this.history = data.history;

    }


}

module.exports = Searchers;