const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1/products';

//Paso los datos para consumir la información de la API
function fetchData(urlApi, callback) {
    //let para usar como variable
    let xhttp = new XMLHttpRequest();

    //Abro el consumo para la API
    //urlApi tiene la url
    //true se usa para habilitar el consumo
    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function(event) {
        //El valor cuatro significa es por los estados de readyState
        //0 no inicializado
        //1 Loading
        //2 Trabajando
        //3 Interactuando
        //4 Completado
        if (xhttp.readyState === 4) {
            //200 es que el consumo fue realizado
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            }
        } else {
            const error = new Error('Error' + urlApi);
            return callback(error, null);
        }
    }
    xhttp.send();
}

fetchData(`${API}/products`, function(error1, data1) {
    if (error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data1) {
        if (error2) return console.error(error2);
        //El signo de pregunta es para objects
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3) {
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});