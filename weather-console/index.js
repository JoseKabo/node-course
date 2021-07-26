require('dotenv').config();
require('colors');

const { inquirerMenu, pauseMessage, inputReader, showCountriesList } = require('./helpers/inquirer');
const Searchers = require('./models/seachers');


const main = async() => {

    const searchings = new Searchers();
    let opt = -1;

    do {

        opt = await inquirerMenu();
        // console.log(opt);
        switch (opt) {
            case 1:
                const city = await inputReader('City');
                const places = await searchings.searchCity(city);
                if (places.length <= 0) {
                    console.log('Places not found'.bold.red);
                } else {;
                    const idSelected = await showCountriesList(places);
                    if (idSelected != 0) {
                        const countrieSelected = places.find(p => p.id == idSelected);
                        searchings.addToHistory(countrieSelected.name);
                        const weatherInfo = await searchings.getWeatherCountrie(countrieSelected.lat, countrieSelected.lng);
                        console.clear();
                        console.log('\nCity information\n'.bold.green);
                        console.log('City: ', countrieSelected.name);
                        console.log('Lat: ', countrieSelected.lat);
                        console.log('Lng: ', countrieSelected.lng);
                        console.log('Temperature: ', weatherInfo.temp);
                        console.log('Min: ', weatherInfo.min);
                        console.log('Max: ', weatherInfo.max);
                        console.log('Feeling: ', weatherInfo.feel);
                    } else {
                        console.log('something'.bold.red);
                    }
                }
                break;
            case 2:
                searchings.history.forEach(
                    (place, i) => {
                        const idx = `${i + 1}`.bold.green;
                        const name = `${place}`.bold.yellow;
                        console.log(`${idx} - ${name}`);
                    }
                )
                break;
        }

        if (opt != 0)
            await pauseMessage();

    } while (opt > 0);

}

main();