const { v4: uuid } = require('uuid');

class Task {

    id = '';
    description = '';
    completed = null;

    constructor(
        description
    ) {
        this.id = uuid();
        this.description = description;
    }

}

module.exports = Task;