//Ejecucion 1
//1️⃣ Camila quiere montar en una atracción y no sabe si la dejarán subir, la altura mínima para subir son 150cm. Haz una función que reciba la altura en cm y determine si Camila puede montar o no.
const getHeight =(height)=>{
    if (height>= 150){
        console.log("Camila si puede montar la atracción")  
    } else { 
        console.log("Camila no puede montar la atracción" )
    }
    
}

getHeight(150)
getHeight(130)

//Ejercicio 2
//2️⃣ Bego está intentando conseguir envío gratuito en su pedido online. Crea una función que reciba como parámetro el total de su compra y determine si supera los 50€ para obtener el envío gratis o si tendrá que pagarlo.
const freeShipping = (shoppingCart) =>{
    if (shoppingCart>=50){
        console.log("Camila obtiene envío gratis")
    } else {
        console.log("Camila tenrá que pagar el envío")
    }
}

freeShipping(30)
freeShipping(60)

//Ejercicio 3
//Sabrina quiere saber si un número es múltiplo de 7. Crea una función que reciba un número y determine si es múltiplo o no
const sevenMultiplier = (number)=>{
    if (number%7===0){
        console.log("El número es múltiplo de 7")
    } else{
        console.log("El número no es múltiplo de 7")
    }
}

sevenMultiplier(14)
sevenMultiplier(4)

//Ejercicio 4
//4️⃣ Abby está evaluando candidatos para su equipo. Los candidatos harán tres pruebas y cada una se evalúa de 0 a 10. Si la media está entre 0 y 4 mostrará el mensaje "Estás Fuera", si la media está entre 5 y 7 mostrará "Entras en la reserva" y si la media es 8 o más dirá "Salimos al amanecer".
const candidateEvaluation = (score1,score2,score3) =>{
    const avarage=((score1+score2+score3)/3);
    if (avarage <=4){
        console.log("Estás Fuera")
    }
    if (avarage>=5 && avarage<=7){
        console.log("Estás en la reserva")
    }
    if (avarage>=8){
        console.log("Salimos al amanecer")
    }
}

candidateEvaluation(5,7,8)
candidateEvaluation(1,9,1)
candidateEvaluation(10,10,10)

//Ejercicio 5
//5️⃣ Macarena tiene tres perros de distintas razas y quiere saber cuál de ellos es el más grande. Crea una función que reciba el peso de los tres perros y determine cuál es el más pesado.
const heavierDog = (dog1,dog2,dog3)=>{
    if (dog1>dog2 && dog1>dog3){
        console.log("El primer perro es el más grande")
    }
    else if (dog2>dog1 && dog2>dog3) {
        console.log("El segundo perro es el más grande")
    } else if (dog3>dog1 && dog3>dog2) {
        console.log ("El tercer perro es el más grande")
    } else {
        console.log ("Hay dos o más perros que pesan lo mismo")
    }
}

heavierDog(80,60,60)

//Ejercicio 6
//6️⃣ Camila está organizando un sorteo y cada participante tiene un número. Si el número es divisible por 3, gana un descuento. Si es divisible por 5, recibe un regalo. Si es divisible por ambos, obtiene el premio mayor. Si no es divisible por ninguno, no gana nada. Crea una función que reciba un número entero y determine qué premio le corresponde.

const lotteryPrices = (number)=>{
    if (number%3 === 0){
        console.log ("Felicidades! Haz ganado un descuento")
    }
    else if (number%5===0){
        console.log("Felicidades! Haz ganado un regalo")
    } else {
        console.log ("Suerte para la próxima")
    }

}

lotteryPrices(3)
lotteryPrices(5)
lotteryPrices(8)

//Ejercicio 7
//7️⃣ Bego está repartiendo golosinas entre sus amigos. Si la cantidad de golosinas es un número par, podrá dividirlas equitativamente. Si es impar, sobrará una y alguien tendrá que decidir qué hacer con ella. Crea una función que reciba un número entero y determine si es par o impar, mostrando el mensaje correspondiente.
const candyAssignment = (number)=>{
    if (number%2===0){
        console.log ("Todas reciben por igual")
    } else {
        console.log ("Piedra, papel o tijeras, a ver quien se la queda")
    }
}

candyAssignment(9)
candyAssignment(10)

//Ejercicio 8
//8️⃣ Sabrina está planificando un viaje muy especial para celebrar el año nuevo y quiere saber si el año en el que piensa viajar es bisiesto, ya que eso afectará la fecha del viaje. Crea una función que reciba un año como parámetro y determine, siguiendo la regla de que un año es bisiesto si es divisible por 4, pero no por 100, a menos que también sea divisible por 400, si es bisiesto ("Es un año bisiesto") o si no lo es ("No es un año bisiesto").
const isThisALeapYear=(year)=>{
    if((year%4===0 && year%100!==0) || (year%400===0)){
        console.log ('Este año si es biciesto')
    } else {
        console.log ("Este año no es biciesto")
    }
}

isThisALeapYear(2025)
isThisALeapYear(2028)

//Ejercicio 9
//9️⃣ Abby está hackeando un sistema de seguridad en una misión secreta. Para acceder, debe introducir un código numérico. La puerta solo se abrirá si el número es par y mayor que 50, o si es impar pero un múltiplo de 7. Crea una función que reciba un número y determine si Abby podrá entrar ("Acceso concedido") o si la puerta seguirá bloqueada ("Acceso denegado").
const hackingCode=(code)=>{
    if((code%2===0 && code>50) || (code%2!==0 && code%7===0)){
        console.log ("Acceso concedico")
    }else{
        console.log ("Acceso denegado")
    }
}

hackingCode(40)
hackingCode(49)

//Ejercicio 10
//🔟 Macarena está evaluando la salud de sus perros según su peso y edad. Un perro se considera en peso saludable sólo si pesa entre 8 y 30 kg. Además solo se considerará saludable si su edad es un número múltiplo de 3 y menor de 15. Crea una función que reciba el peso del perro y su edad. Determina si está saludable ("El perro está saludable") o si no ("Perro pocho 😢").

const dogsHealth=(weight,age)=>{
    if(weight>=8 && weight<=30 && age%3===0 && age<=15){
        console.log ("El perro está saludable")
    } else {
        console.log ("Perro pocho")
    }
}

dogsHealth(20,6)
dogsHealth(32,12)
dogsHealth(32,19)