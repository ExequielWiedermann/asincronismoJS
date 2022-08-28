const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve('Async!!'), 2000): reject(new Error('Error!'));
    });
}

//Esto sucede a los dos segundos
//Primero ejecuta el antes y el después
const anotherFn = async() => {
    const somethig = await fnAsync();
    console.log(somethig);
    console.log('Hello!');
}

console.log('Antes');
anotherFn();
console.log('Después');