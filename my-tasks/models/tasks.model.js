require('colors');

const { bold } = require('colors');
const Task = require("./task.model");

class Tasks {

    _myTasks = {};

    get getTasks() {
        const tasklist = [];

        Object.keys(this._myTasks).forEach(
            key => {
                const task = this._myTasks[key];
                tasklist.push(task);
            }
        );

        return tasklist;
    }

    constructor() {
        this._myTasks = {};
    }

    loadTasks(tasks = []) {
        tasks.forEach(
            task => {
                this._myTasks[task.id] = task;
            }
        );
    }

    makeaTask(desc = '') {
        const task = new Task(desc);
        this._myTasks[task.id] = task;
    }

    showTasks() {
        this.getTasks.forEach(
            (task, index) => {
                const { description, completed } = task;
                if (completed != null)
                    console.log(`${index.toString().green}. - ${description} | ${'Completed'.bold.green}`);
                else
                    console.log(`${index.toString().red} - ${description} | ${'Pending'.bold.red}`);
            }
        );
    }

    showPendingTasks() {
        let isEmpty = true;
        this.getTasks.forEach(
            (task, index) => {
                const { description, completed } = task;
                if (completed == null) {
                    isEmpty = false;
                    console.log(`${index.toString().bold.red} - ${description} | ${'Pending'.bold.red}`);
                }
            }
        );
        (isEmpty) ?
        console.log(`All's okay😎`.yellow): console.log(`You have some pending tasks 😢`.bold.red);
    }

    showCompletedTasks() {
        let isEmpty = true;
        this.getTasks.forEach(
            (task, index) => {
                const { description, completed } = task;
                if (completed != null) {
                    isEmpty = false;
                    console.log(`${index.toString().bold.green}. - ${description} | ${'Completed'.bold.yellow}`);
                }
            }
        );
        (isEmpty) ?
        console.log(`Bad work 😒`.bold.red): console.log(`Nice work ❤`.yellow);
    }

    deleteTask(id = '') {
        if (this._myTasks[id]) {
            delete this._myTasks[id];
        }
    }

    toggleComplete(ids = []) {
        ids.forEach(
            id => {
                const task = this._myTasks[id];
                if (task.completed == null) {
                    task.completed = new Date().toISOString();
                }
            }
        );

        this.getTasks.forEach(
            task => {
                if (!ids.includes(task.id)) {
                    this._myTasks[task.id].completed = null;
                }
            }
        );
    }
}

module.exports = Tasks;