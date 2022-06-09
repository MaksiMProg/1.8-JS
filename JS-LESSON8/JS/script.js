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

//2)Из объекта сделать массив с массивами, а потом коллекцию (Мар) В эту коллекцию добавить 2 свойства (на ваше усмотрение) После чего выполнить проверку на наличие в массиве свойства по ключу name, результат вывести в консоль

let student = {
    name: "Your name",
    age: "Your age",
    id: 1,
}
let arrStudent = Object.entries(student);
let mapStudent = new Map(arrStudent);
mapStudent.set('profession', 'IT');
mapStudent.set('Lvl', '24');
for (let checkName of mapStudent.keys()) {
    if (checkName === 'name') {
        console.log('ЕСТЬ');
    }
}
console.log(mapStudent);

//3)Созданную коллекцию пройти через цикл for .. of и вывести в консоль все ключи, значения и ентрис

for (let value of mapStudent.values()) {
    console.log(value);
}

for (let key of mapStudent.keys()) {
    console.log(key);
}

for (let entry of mapStudent) {
    console.log(entry);
}

//4)В объекте с количеством продуктов, уменьшить количество каждого в 2 раза (Изменить структуру до массива с массивами, выполнить преобразование и вернуть объект)

let amount = {
    apple: 440,
    burger: 316,
    juice: 1120,
}
let ourPrices = Object.fromEntries(
    Object.entries(amount).map(([key, value]) => {
        return [key, value / 2]
    })
);

console.log(ourPrices);

//5) В измененном выше объекте рассчитать общую сумму продуктов

function getSumSalary(obj) {
    let sum = 0;
    for (let salary of Object.values(obj)) {
        sum += salary;
    }
    return sum;
}
console.log(getSumSalary(ourPrices));

//6) - Написать функцию, которая принимает массив и возвращает массив с уникальными значениями(Использовать Set, и rest оператор)

let numbers = [1, 2, 3, 4, 4, 5, 5, 6, ];

function uniqueNumbers(arr) {
    return [...new Set(arr)]
}
console.log(uniqueNumbers(numbers));

//7)Копировать объект не используя Object.assign и цикл

const weather = {
    "coord": {
        "lon": -122.08,
        "lat": 37.39
    },
    "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
    }],
    "base": "stations",
    "main": {
        "temp": 282.55,
        "feels_like": 281.86,
        "temp_min": 280.37,
        "temp_max": 284.26,
        "pressure": 1023,
        "humidity": 100
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.5,
        "deg": 350
    },
    "clouds": {
        "all": 1
    },
    "dt": 1560350645,
    "sys": {
        "type": 1,
        "id": 5122,
        "message": 0.0139,
        "country": "US",
        "sunrise": 1560343627,
        "sunset": 1560396563
    },
    "timezone": -25200,
    "id": 420006353,
    "name": "Mountain View",
    "cod": 200
}

let result = JSON.parse(JSON.stringify(weather));
console.log(result);
