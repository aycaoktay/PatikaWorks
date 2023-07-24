//fonksiyon tanımlama 

/*function hello() {
    console.log("Hello World")
}
hello() //calistir

function sum(num1 ,num2){ //function name and parameters
    console.log(num1 + num2); //body
}*/

/*console.log('Toplam',sumArrayValues(dizi))

function topla(){
    let total = 0 
    for(let i = 0; i<arguments.length ; i++ ){

    }
    return total;

}
console.log(topla(2,5,7,9,33,4,4,444)) */


// Anonim fonksiyon tanımlama :

/*const sayHello =function(name){
    return 'Halo ${name} '
}
console.log(sayHello('Ayca'))*/

//Arrow function tanımlama
/*const hello2 = name =>{ 'hello  ${name}'
console.log(hello2('Ayca'))

} */

const toplama = (num1 , ...numbers) => {
    console.log(numbers)
    console.log(num1)
}
toplama(23,4,54,27,6)
 

