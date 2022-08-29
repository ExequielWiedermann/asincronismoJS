import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

//otra forma para usar async o await
async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

//fetch usa el concepto de las promesas
const anotherFn = async(urlApi) => {
    //Toda la lógica que queremos
    try {
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`)

        console.log(products);
        console.log(product.title);
        console.log(category.name);
    }
    //Lo contrario
    catch {
        console.error(error);
    }
}

anotherFn(API);