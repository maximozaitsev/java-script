function yolochka1(item_1, item_2){

    let mass = 'Hello!!'
    console.log(mass, item_1, item_2)

}

yolochka1(22, 33)


let t1 = 10
let t2 = 20

let f22 = (t1, t2) => {console.log('Sum = ', t1 + t2)}

f22(t1, t2)

let t3 = 20
let t4 = 40

let f33 = (t1 > t2) ?
    (tt1, tt2) => console.log('order = ', tt1 + tt2) :
    (tt1, tt2) => console.log('order = ', tt1 - tt2) ;

f33(t3, t4)


function yolochka33(){}

yolochka33.prototype.fast = function (){
    console.log('FAST !!')
}
yolochka33.prototype.green = function (sun, co2){
    console.log('Green == ', sun, ' + ', co2)
}
yolochka33.prototype.shishki = function(){
    console.log('shishki == Yolki')
}

let forest = new yolochka33()

forest.fast()
forest.green(4500, 54)
forest.shishki()
