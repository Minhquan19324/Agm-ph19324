// const users = ["datlt", "thienth", "sontv"];
// for (let i in users) {
//     console.log(users[i]);
// }

// for (let item of users) {
//     console.log(item);
// }
/*
    v1: item - datlt
    v2: item - thienth
    v3: item - sontv
*/

// users.forEach((index, item) => {
//     console.log(index);
// })

const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 }
]
// map
// const result = products.map((item) => {
//     // console.log(item);
//     return `
//         <div>${item.name}</div>
//         <div>${item.price}</div>
//     `
// })
const result = products.map( (item) =>{
    return `
        <div>${item.name}</div>
        <div>${item.price}</div>
        <div>${item.id}</div>  `
})
console.log(result);
// console.log(result);
// const app = document.querySelector("#app")
// app.innerHTML = result.join("");

// find
// const result = products.find((item) =>{
//     // console.log(item.id);
//     return item.id == 3
// })
// console.log(result);

// filter
// const result = products.filter((item) => {
//     return item.id != 1
// })
// console.log(result);