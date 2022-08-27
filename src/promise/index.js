//Con la promise pido algo a la api

const promise = new Promise(
    function(resolve, reject) {
        resolve('Todo correcto');
    }
);

const vacas = 15;

const contarVacas = new Promise(
    function(resolve, reject) {
        if (vacas > 10) {
            resolve(`Tenemos al cantidad de ${vacas} vacas`);
        } else {
            reject("No tenemos lo que solicitas");
        }
    }
);

contarVacas.then((result) => {
    console.log(promise);
}).catch((erro) => {
    console.log(error);
}).finally