require('colors');

const read = require('./db/read');
const saveInfo = require('./db/save');
const { inquirerMenu, pauseMessage, inputReader, showTaskstoDeleting, confirmMessage, showCheckTasks } = require('./helpers/inquirer');
const Tasks = require('./models/tasks.model');


// console.clear();

const main = async() => {
    let opt = '';
    const tasks = new Tasks();
    const tasksDb = read();

    if (tasksDb) {
        tasks.loadTasks(tasksDb);
    }

    do {

        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await inputReader('Descripcion: ');
                tasks.makeaTask(desc);

                break;
            case '2':
                tasks.showTasks();
                break;
            case '3':
                tasks.showCompletedTasks();
                break;
            case '4':
                tasks.showPendingTasks();
                break;
            case '5':
                const ids = await showCheckTasks(tasks.getTasks);
                tasks.toggleComplete(ids);
                break;
            case '6':
                const id = await showTaskstoDeleting(tasks.getTasks);
                if (id != '0') {
                    const confirm = await confirmMessage('Are you deleting this?');
                    if (confirm) {
                        tasks.deleteTask(id);
                        console.log('You are lazy😂'.blue);
                    }
                }
                break;
        }

        saveInfo(tasks.getTasks);

        await pauseMessage();

    } while (opt != '0');
}



main();