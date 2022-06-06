//1) Создать функцию, которая принимает массив в качестве аргумента и возвращает среднюю цену автомобилей с пробегом < 50000 А также вторую функцию, которая возвращает массив с марками этих авто

let cars = [
    { model: "Jeep", price: 50000, carMileage: 40000 },
    { model: "Audi", price: 46000, carMileage: 80000 },
    { model: "BMW", price: 32000, carMileage: 340000 },
    { model: "Kia", price: 67500, carMileage: 70000 },
    { model: "Geely", price: 22000, carMileage: 49000 },
]


//1) - forEach

// function getAveragePriceFromCarsMileageMoreFiftyThousand(arr) {
//     let sum = 0;
//     let i = 0;
//     arr.forEach(item => {
//         if (item.carMileage < 50000) {
//             sum += item.price;
//             i++;
//         }
//     });
//     return sum / i;
// }
// console.log(getAveragePriceFromCarsMileageMoreFiftyThousand(cars));

// //2) - reduce

// function getAveragePriceFromCarsMileageMoreFiftyThousand(arr) {
//     let i = 0;
//     return arr.reduce((acc, item) => {
//         if (item.carMileage < 50000) {
//             return acc + item.price;
//             i++;
//         };
//         return acc / i;
//     }, 0);
// }
// console.log(getAveragePriceFromCarsMileageMoreFiftyThousand(cars));

// //3) - filter

// function getAveragePriceFromCarsMileageMoreFiftyThousand(arr) {
//     let sum = 0;

//     let i = 0;
//     let result = arr.filter(item => {
//         return item.carMileage < 50000;
//     }).forEach(item => {
//         sum += item.price;
//         i++;
//     })
//     return sum / i;

// }
// console.log(getAveragePriceFromCarsMileageMoreFiftyThousand(cars));

// А также вторую функцию, которая возвращает массив с марками этих авто\

function getNamesOfCars(arr) {
    let newArr = [];
    arr.forEach(item => {
        if (item.carMileage < 50000) {
            newArr.push(item.model);
        }
    })
    console.log(newArr);
}
getNamesOfCars(cars);