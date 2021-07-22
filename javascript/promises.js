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

// getEmployee(14)
//     .then(
//         employee => console.log(employee)
//     )
//     .catch(
//         err => console.log(err)
//     );

// getSalary(2)
//     .then(
//         payment => console.log(payment)
//     )
//     .catch(
//         err => console.log(err)
//     );

let currentEmployee;

getEmployee(2)
    .then(employee => {
        currentEmployee = employee;
        return getSalary(2);
    })
    .then(payment => console.log(`${currentEmployee} has ${payment}`))
    .catch((err) => console.log(err));