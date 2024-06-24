let nombre = "Luis";

const result = 20 + 20;

const promesa2 = new Promise((resolve, reject) => {
    let exito = true;
    setTimeout(() => {
        if (exito) {
            resolve("Operacion Exitosa");
        } else {
            reject("Operacion Fallida");
        }
    }, 3000)
})

const promesa = new Promise((resolve, reject) => {
    let exito = true;

    if (exito) {
        resolve("Operacion Exitosa");
    } else {
        reject("Operacion Fallida");
    }
})




promesa.then(resultado => console.log(resultado))
    .catch(error => console.log(error))

promesa2.then(resultado => console.log(resultado))
    .catch(error => console.log(error))

console.log(promesa)
console.log(promesa2)

/* 

@param uri string
@param options object

*/
let data = {
    username: 'lrodriguez',
    password: '123456'
}
fetch("https://jsonplaceholder.typicode.com/users", {
    method: 'GET', // GET, POST, PUT, DELETE
    // body: JSON.stringify(data), // POST, PUT
    headers: {
        'Content-Type': 'application/json',
    }
})
    .then((response) => {
        console.log(response)
        if (response.status === 404) {
            throw new Error('Recurso no encontrado')
        }
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })