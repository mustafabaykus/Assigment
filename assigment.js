import fetch from 'node-fetch';

let querry = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(querry);

var p = new Promise((resolve,reject) => {
    let url = `https://jsonplaceholder.typicode.com/posts/${querry}/comments`
    console.log(url);
    if(url != null){
        resolve(url)
    } else {
        reject('Failed')
    }

})

p.then(async function fetchData(url){
    let response = await fetch(url);
    console.log('Data fetched and assign to response variable')
    let jsonResponse = await response.json();
    console.log('Data transformed JSON style')
    console.log(jsonResponse);
    console.log('Bunu yapan yeteri kadar java script çalışmıştır.')
}).catch(err => {
    console.log(err);
})