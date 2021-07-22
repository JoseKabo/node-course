const employees = [{
        id: 1,
        name: 'jose'
    },
    {
        id: 2,
        name: 'Medellin'
    },
    {
        id: 3,
        name: 'Gonzalez'
    },
];

const salary = [{
        id: 1,
        payment: 2000
    },
    {
        id: 2,
        payment: 4000
    },
];


const getEmployee = (id) => {
    return new Promise(
        (resolve, reject) => {
            const currentEmployee = employees.find(
                (e) => e.id === id
            );

            (currentEmployee) ?
            resolve(currentEmployee.name): reject(`Not exists id ${id}`);
        }
    );
}

const getSalary = (id) => {
    return new Promise(
        (resolve, reject) => {
            const currentSalary = salary.find(
                (s) => s.id === id
            );
            (currentSalary) ? resolve(currentSalary.payment): reject(`Not payments at ${id} id`)
        }
    );
}

const id = 3;

const getInfo = async(id) => {
    try {
        const employee = await getEmployee(id);
        const payment = await getSalary(id);
        return `${employee} has ${payment}`;
    } catch (error) {
        throw error;
    }
}

getInfo(id)
    .then(result => console.log(result))
    .catch(err => console.log(err));