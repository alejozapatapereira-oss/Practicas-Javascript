let nombre = "Alejo";
if (nombre == "Alejo") {
  console.log("Hola " + nombre);
}
if (nombre == "Alejo") {
  console.Log("Hola " + nombre);
}



let numero = 5;
if (numero%2 == 0) {
    console.log("El numero es par");
}



if (calificacion >= 0 && calificacion <= 100) {
    if (calificacion >= 60) {
        console.log("Aprobado");
    } else {
        console.log("Reprobado");
    
    }

}



switch (dia) {
    case "lunes":
        console.log("hoy es lunes");
    break;
        
    case "martes":
        console.log("hoy es martes");
    
    case "miercoles":
        console.log("hoy es miercoles");

    case "jueves":
        console.log("hoy es jueves");

    case "viernes":
        console.log("hoy es viernes");
    
        default:
        console.log("hoy es domingo");

}



let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");

}



let temperatura = 25;
if  (temperatura <10) {
    console.log("frio"); 
}
else if (temperatura <=20){
    console.log ("templado");
}

else {
    console.log('calor')

} 



let numero = 10;
if (numero >1) {
    console.log ("el numero es positivo");
} else if (numero <0) {
    console.log ("el numero es negativo");

}


let monto = 100;
if (monto >= 100) {
    console.log("tienes un descuento del 10%");
} else if (monto >= 200) {
    console.log("tienes un descuento del 20%");
}


 let lado1 = 3;
 let lado2 = 2;
 let lado3 = 3;
    if (lado1 == lado2 && lado2 == lado3) {
        console.log("el triangulo es equilatero");

    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        console.log("el triangulo es isosceles");
    } else {
        console.log("el triangulo es escaleno");
    }



let contraseña = "12345678";
if (contraseña.length >= 8) {
    console.log("contraseña valida"); }
 else 
 {
     console.log("contraseña demasiado corta");
}
        



let mes = (1);
switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log ("es verano");

    case 3:
    case 4:
    case 5:
        console.log ("es otoño");

    case 6:
    case 7:
    case 8:
        console.log ("es invierno");

    case 9:
    case 10:
    case 11:
        console.log ("es primavera");
}



let puntos = 100;

if (puntos >= 0 && puntos <= 50) {
    console.log("Novato");
}
else if (puntos >= 51 && puntos <= 100) {
    console.log("Intermedio");
}
else if (puntos >100) {
    console.log("Experto");
}



let operacion = "+";
let num1 = 5;
let num2 = 3;

switch (operacion) {
    case "+":
        console.log(num1 + num2);
    break;
    case "-":
        console.log(num1 - num2);
    break;
    case "*":
        console.log(num1 * num2);
    break;
    case "/":
        console.log(num1 / num2);
    break;
}


let email = "nombrecualquiera@gmail.com";
if (email.includes("@") && email.includes(".")) {
    console.log("correo valido");
} else
{
    console.log("correo no valido");
}



let opcion = "1";

switch (opcion) {
    case "1":
        console.log("iniciar");
    break;
    
    case "2":
        console.log("Configurar");
    break;
    
    case "3":
        console.log("Salir");
    break;

}


