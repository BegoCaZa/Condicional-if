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
    if ((score1+score2+score3)/3 <=4){
        console.log("Estás Fuera")
        //guardar la media en una constante
    }
}