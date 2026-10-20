// 1. 

// a)
let edad = 18; 
if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}
//-----------------------------------------------------------------

// b)
const numero = 10;
if (numero % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}
//-----------------------------------------------------------------

// c)
let nota = 7;
if (nota > 7) { 
    console.log("Excelente");
} else if (nota < 4) {
    console.log("Reprobado");
} else { 
    console.log("Aprobado");
}
//--------------------------------------------------------------------

//2

// a)
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//----------------------------------------------------------------

// b) 
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
//----------------------------------------------------------------

// c) 
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}
//----------------------------------------------------------------

// d) 
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }
}