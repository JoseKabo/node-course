// setTimeout(() => {
//     console.log('say hello');
// }, 3500);

const getUserById = (id, callback) => {
    const user = {
        id: id,
        name: 'jose'
    };

    setTimeout(() => {
        callback(user);
    }, 1500);
}

getUserById(10, (user) => {
    console.log(user.id);
});