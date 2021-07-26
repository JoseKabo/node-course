require('colors');

const inquirer = require('inquirer');


const optionsMenu = [{
    type: 'list',
    name: 'option',
    message: 'Choose any option',
    choices: [{
            value: 1,
            name: 'Search city'
        },
        {
            value: 2,
            name: 'History'
        },
        {
            value: 0,
            name: 'Exit'
        },
    ]
}];


const inquirerMenu = async() => {
    console.clear();
    console.log('====================================================='.green);
    console.log('   Welcome to ', 'Weather Console App by JoseKabo'.bold.blue);
    console.log('====================================================='.green);
    const { option } = await inquirer.prompt(optionsMenu);
    return option;
}

const pauseMessage = async() => {
    const question = [{
        type: 'input',
        name: 'continue',
        message: 'continue with execution?'
    }];
    console.log(`Press ${'ENTER'.bold.green} to continue`);
    await inquirer.prompt(question);
}

const inputReader = async(message) => {
    const question = [{
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
            if (value.length <= 0)
                return 'Type something please 😒';
            else
                return true;
        }
    }];
    const { desc } = await inquirer.prompt(question);

    return desc;
}

const showCountriesList = async(places = []) => {
    const choices = places.map((place, i) => {
        const idx = `${i+1}. `.green;
        const countrie = `${place.name}`.bold.blue;
        return {
            value: place.id,
            name: `${idx} ${countrie}`
        }
    });
    choices.unshift({
        value: 0,
        name: '0.'.green + ' Cancel'
    });

    const questions = [{
        type: 'list',
        name: 'id',
        message: 'Select to place',
        choices
    }];

    const { id } = await inquirer.prompt(questions);
    return id;
}


module.exports = {
    inputReader,
    pauseMessage,
    inquirerMenu,
    showCountriesList
}