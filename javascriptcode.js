// // "use strict";
// // -------------------------------------
// // const answer = +prompt("Vam 18 let?", "18");
// // console.log(answer + 5);

// // const answer = [];
// // answer [0] = confirm("rasim", "");
// // answer [1] = confirm("got", "");
// // answer [2] = confirm("dur", "");

// // -----------------------------------
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actor: {},
//     genders: [],
//     privat: false
// };


// for ( let i = 0; i < 2; i++ ) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
    
    
// }

// console.log(personalMovieDB);
// -----------------------------------

// const num = 50;

// switch (num){
//     case 51:
//         console.log('net');
//         break;
//     case 49:
//         console.log('yo');
//         break;
// }
// функция-конструктор возвращает новый объект

function sayHiBye(firstName, lastName) {

    // функция-помощник, которую мы используем ниже
    function getFullName() {
      return firstName + " " + lastName;
    }
  
    alert( "Hello, " + getFullName() );
    alert( "Bye, " + getFullName() );
  
  }
sayHiBye("");