const inquirer = require('inquirer');
require('colors');

const optionsMenu = [{
        type: 'list',
        name: 'option',
        message: 'What are you do?',
        choices: [{
                value: '1',
                name: `${'1.'.white} Add task`
            },
            {
                value: '2',
                name: `${'2.'.white} Show my tasks`
            },
            {
                value: '3',
                name: `${'3.'.white} Show my completed tasks`
            },
            {
                value: '4',
                name: `${'4.'.white} Show my pending tasks`
            },
            {
                value: '5',
                name: `${'5.'.white} Mark as completed my tasks`
            },
            {
                value: '6',
                name: `${'6.'.white} Delete my tasks`
            },
            {
                value: '0',
                name: `${'0.'.white} Exit`
            }
        ]
    }

];



const inquirerMenu = async() => {
    console.clear();

    console.log('##########################'.blue);
    console.log('       Choose Option      '.green);
    console.log('##########################\n'.blue);

    const { option } = await inquirer.prompt(optionsMenu);

    return option;
}

const pauseMessage = async() => {

    const question = [{
        type: 'input',
        name: 'continue',
        message: 'Are you okay?'

    }];
    console.log(`\nPress ${'ENTER'.blue} to continue\n`);

    await inquirer.prompt(question);

}

const inputReader = async(msg) => {
    const question = [{
        type: 'input',
        name: 'desc',
        message: msg,
        validate(value) {
            if (value.length <= 0)
                return 'Type something';
            else
                return true;
        }
    }];

    const { desc } = await inquirer.prompt(question);

    return desc;
}

const showTaskstoDeleting = async(tasks = []) => {
    const choices = tasks.map(
        (task, i) => {
            const idx = `${i + 1}`.blue
            return {
                value: task.id,
                name: `${idx}.- ${task.description}`
            }
        }
    );

    choices.unshift({
        value: '0',
        name: `${'0'.bold} - Cancelar`
    });

    const questions = [{
        type: 'list',
        name: 'id',
        message: 'Delete',
        choices
    }]

    const { id } = await inquirer.prompt(questions);
    return id;
}

const confirmMessage = async(message) => {

    const question = [{
        type: 'confirm',
        name: 'ok',
        message
    }];
    const { ok } = await inquirer.prompt(question);

    return ok;
}


const showCheckTasks = async(tasks = []) => {
    const choices = tasks.map(
        (task, i) => {
            const idx = `${i + 1}`.blue
            return {
                value: task.id,
                name: `${idx}.- ${task.description}`,
                checked: (task.completed) ? true : false
            }
        }
    );

    const questions = [{
        type: 'checkbox',
        name: 'ids',
        message: 'Select',
        choices
    }]

    const { ids } = await inquirer.prompt(questions);
    return ids;
}

module.exports = {
    inquirerMenu,
    pauseMessage,
    inputReader,
    showTaskstoDeleting,
    showCheckTasks,
    confirmMessage
}