"use strict";
/*const vehicleBodyWidth = 5000;
const vehicleBodylength  = 4000;

console.log("Ширина кузова автомобиля: " + vehicleBodyWidth + ',  длина:'+ vehicleBodylength); 

//snake_case  
//UPPER_SNAKE_CASE 
//Kebab-case
//PascalCase 

let userName = 'John';
console.log (userName);

let userNumber = 25;
    userNumber = 24;
console.log(userNumber);

let number = 4.6;
console.log ('string'* 9);

const bool = true;

const obj = {
    name: "John",
    age: 45,
    isMarried: false
};
console.log (obj['name']);


let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[1])

const arr = [1,2,3]; // это массив(где идет перечень инф по порядку[0,1,2,3..])

const arrObj = {
    0: 'a',
    1: 'b',
    2: 'c'
};
console.log(arrObj[1]);
console.log(arr[1]);

//const obj= {a: 1, b: 2}; // это обьект, структура парная, где есть ключ "а" и значение "1"

const obj = {
    'Anna': 500,
    'Alice': 800,
    abc: {

    }
};

//obj. b = '1234';
obj ['b'] = '1234';
console.log(obj ['b']);
console.log(obj.b);

//const storeName = 'Ukraine';
//const storeDescription = {
    budget : 10000,
    employees : ['Ivan', 'Petya', 'Kolya'],
    products : {
        phone: 1000,
        microwave: 500
    },
    open:true
};
console.log(storeDescription);

//alert('Do you want to close this page?')

//const result = confirm ("Are you here?");
//console.log (result);
const answer = +prompt ("Are you 18?", "18");
console.log (answer + 5);
const answers = []; 
    // answers [0] = promt ('Как ваше имя', '');
    // answers [1] = promt ('Какая у вас фамилия?', '');
    // answers [2] = promt ('Сколько вам лет?', '');

console.log (typeof(answers));

const category = 'toys';

console.log(`https://someurl.com/${category}/5/3`); // C использованием обратных скобок - ИНТЕРПОЛЯЦИЯ

const user = "Ivan";

alert(`Привет, ${user} ` )

let incr = 10,
    decr = 10;

// incr++;
// decr--;

console.log(++incr);
console.log(--decr); 

console.log(5%2); // % - это значит сколько раз число "5" мы можем разделить на "2" = 1 раз мы можем его разделить а результат это единица 1

const isChecked = false,
      isClose = true;

console.log(isChecked || isClose);*/

const numberOFilms = +prompt('Cколько фильмов вы уже посмотрели?', '');
const personalMovieDB ={
count: numberOFilms,
movies: {},
actors:{},
genres:[""],
privat: false
};

const a = prompt('один из последних просмотренных фильмов?',''),
      b = prompt('На сколько вы бы его оценили?',''),
      c = prompt('один из последних просмотренных фильмов?',''),
      d = prompt('На сколько вы бы его оценили?','');

personalMovieDB.movies [a] = b;
personalMovieDB.movies [c] = d;

console.log(personalMovieDB);
 