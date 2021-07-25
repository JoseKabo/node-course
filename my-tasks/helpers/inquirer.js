const inquirer = require('inquirer');
require('colors');

const optionsMenu = [{
    type: 'list',
    name: 'option',
    message: 'What are you do?',
    choices: ['opt1', 'opt2']
}]

const inquirerMenu = async() => {
    console.clear();

    console.log('##########################'.blue);
    console.log('       Chosse Option      '.green);
    console.log('##########################\n'.blue);

    const opt = await inquirer.prompt(optionsMenu);

    return opt;


}

module.exports = {
    inquirerMenu
}