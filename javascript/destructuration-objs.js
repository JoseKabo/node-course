const me = {
    name: 'jose',
    power: 'developer',
    getName: () => {
        return ` He's ${this.name} ${this.power}`;
    }
}

// const name = me.name;
// const power = me.power;
function printMe({ name, power }) {
    // const {
    //     name,
    //     power
    // } = me;
    console.log(name, power);

}

// printMe(me);

const friends = ['Miguel', 'Catedrla', 'Raul'];

const [, f2, ] = friends;

console.log(f2);