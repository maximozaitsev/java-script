var item_1
item_1 = 5
console.log(item_1)
var item_2
item_2 = 3
console.log(item_2)
var item_3
item_3 = item_1 + item_2
console.log(item_3)
var item_4
item_4 = "Yolochka"
console.log(item_4)
console.log(item_3 + item_4)
console.log(item_3 * item_4)
var item_5 
item_5 = item_3
var item_6
var item_6_type 
item_6 = 15
item_6_type = Number(item_6)
console.log("item_6 == " + typeof (item_6) + " item_6_type == " + typeof (item_6_type))
let item_7 = "asdf"; item_6 = String(item_7) 
var item_7_type
item_7_type = String(item_7)
console.log("item_7 == " + typeof (item_7) + " item_7_type == " + typeof (item_7_type))
let age_1 = 10
let age_2 = 18
let age_3 = 60
if (age_1 < age_2) {
    console.log("You don't have access cause your age is " + age_1 + " It's less then 18" )
} 
else if (age_1 >= age_2 && age_1 <= age_3) {
    console.log("Welcome !")
} 
else if (age_1 > age_3) {
    console.log("Keep calm and watch Culture channel !")
} 
else {console.log("Technical work")}