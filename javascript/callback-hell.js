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


const getEmployee = (id, callback) => {
    const currentEmployee = employees.find(
        (e) => e.id === id
    );
    if (currentEmployee)
        callback(null, currentEmployee);
    else
        callback(`Not exists ${id}`);

}

const getSalary = (id, callback) => {
    const currentPayment = salary.find((e) => e.id === id);

    if (currentPayment)
        callback(null, currentPayment.payment);
    else
        callback(`Payment not found with id: ${id}`);
};

console.log(getEmployee(1, (err, currentEmployee) => {
    if (err)
        return console.log(err);
    else {
        getSalary(1, (err, currentPayment) => {
            if (err) {
                console.log('ERROR!!');
                return console.log(err);
            }
            return console.log(`Employee ${currentEmployee.name} with $${currentPayment}`);
        });
    }
}));