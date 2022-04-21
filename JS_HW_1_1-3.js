let age_1 = 10
let age_2 = 18
let age_3 = 60

// 1*
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

// const checkAge = function(age) {
//     if (age < age_2) {
//         console.log("You don't have access cause your age is " + age_1 + " It's less then 18" )
//     } 
//     else if (age >= age_2 && age <= age_3) {
//         console.log("Welcome !")
//     } 
//     else if (age > age_3) {
//         console.log("Keep calm and watch Culture channel !")
//     } 
//     else {console.log("Technical work")}  
// }
// checkAge(17)

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

// const checkAge = function(age) {
//     if(typeof age == 'number') {

//     if (age < age_2) {
//         console.log("You don't have access cause your age is " + age_1 + " It's less then 18" )
//     } 
//     else if (age >= age_2 && age <= age_3) {
//         console.log("Welcome !")
//     } 
//     else if (age > age_3) {
//         console.log("Keep calm and watch Culture channel !")
//     } 
//     else {console.log("Technical work")
//     }
// } else { console.log("Not integer value")}
// }
// checkAge(17)
// checkAge("glkhf")

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number


// const checkAge = function(age) {

                // age = Number(age)
    
                // if(!isNaN(age)) {
                // if(Namber(age)) {
//     if(+age) {

//     if (age < age_2) {
//         console.log("You don't have access cause your age is " + age_1 + " It's less then 18" )
//     } 
//     else if (age >= age_2 && age <= age_3) {
//         console.log("Welcome !")
//     } 
//     else if (age > age_3) {
//         console.log("Keep calm and watch Culture channel !")
//     } 
//     else {console.log("Technical work")
//     }
// } else { console.log("Not integer value")}
// }
// checkAge(17)
// checkAge("22")
// checkAge("22ghm")

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

const checkAge = function(age) {

    if(+age) {

    if (age < age_2) {
        console.log("You don't have access cause your age is " + age_1 + " It's less then 18" )
    } 
    else if (age >= age_2 && age <= age_3) {
        console.log("Welcome !")
    } 
    else if (age > age_3) {
        console.log("Keep calm and watch Culture channel !")
    } 
    else {console.log("Technical work")
    }
} else { console.log("Not integer value")}
}
checkAge(17)
checkAge("22")
checkAge("22ghm")

let agePromt = prompt("Enter age")
checkAge(agePromt)