require('colors');

const showMenu = () => {

    return new Promise((resolve, reject) => {
        console.clear();
        console.log('##########################'.blue);
        console.log('       Chosse Option      '.green);
        console.log('##########################\n'.blue);

        console.log(`${'1.'.yellow} Add task`);
        console.log(`${'2.'.yellow} Show my tasks`);
        console.log(`${'3.'.yellow} Show completed tasks`);
        console.log(`${'4.'.yellow} Show pending tasks`);
        console.log(`${'5.'.yellow} Mark tasks`);
        console.log(`${'6.'.yellow} Delete task`);
        console.log(`${'0.'.yellow} Exit\n`);

        const readLine = require('readline')
            .createInterface({
                input: process.stdin,
                output: process.stdout
            });

        readLine.question('Chosse an option: ', (opt) => {
            console.log(opt);
            readLine.close();
            resolve(opt);
        });
    });


}

const pausa = () => {
    return new Promise((resolve, reject) => {
        const readLine = require('readline')
            .createInterface({
                input: process.stdin,
                output: process.stdout
            });
        readLine.question(`\nPress ${'ENTER'.blue} to continue\n`, (opt) => {
            readLine.close();
            resolve(opt);
        })
    });
}

module.exports = {
    showMenu,
    pausa
}