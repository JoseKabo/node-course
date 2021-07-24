const fs = require('fs');

const fileBuilder = async(base = 2, listar = false, to = 10) => {
    try {
        let output = '';
        output += `
            ========================================
                Tabla de multiplicar de ${base}
            ========================================
        `;

        for (let i = 1; i < to + 1; i++) {
            output += `${base} X ${i} = ${ base * i}\n`;
        }

        fs.writeFileSync(`./output-files/tabla-${base}-to${to}.txt`, output);
        if (listar) {
            console.log(output);
        }
        return `tabla-${base}-to-${to}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    fileBuilder
}