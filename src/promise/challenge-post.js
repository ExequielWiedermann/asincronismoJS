import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        //tipo de método a utilizar
        //headers para enviar la información
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

//promesa para enviar la información
const data = {
    "title": "Nuevo producto para Exequiel",
    "price": 9999,
    "description": "Exequiel Wiedermann guardando en la api",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data)
    .then(response => console.log(response.json()))
    .then(data => console.log(data));