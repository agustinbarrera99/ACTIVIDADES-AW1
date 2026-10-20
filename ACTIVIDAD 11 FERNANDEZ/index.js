
// 1.


// a) 
function saludar() {
    console.log("Hola, bienvenido");
}
saludar();

// b) 
function saludarPersona(nombre) {
    console.log(`Hola ${nombre}, bienvenido`);
}
saludarPersona("Andres"); 

// c) 
function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}
let verificacion = esMayorDeEdad(21); 
console.log("¿Es mayor de edad?", verificacion);



// 2.


// a) 
const esMayorDeEdadFlecha = (edad) => {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
};
let verificacionFlecha = esMayorDeEdadFlecha(15);
console.log("¿Es mayor de edad?", verificacionFlecha);

// b) 
const compararNumeros = (parametro1, parametro2) => {
    if (parametro1 < parametro2) {
        console.log(`El número ${parametro1} es menor que ${parametro2}`);
    } else if (parametro1 === parametro2) {
        console.log(`El número ${parametro1} es igual que ${parametro2}`);
    } else {
        console.log(`El número ${parametro1} es mayor que ${parametro2}`);
    }
};


console.log("Inicio del bucle");
for (let i = 1; i <= 5; i++) {
    
    compararNumeros(i, 3); 
}
console.log("Fin del bucle");



// 3. 


//a)
const suma = (a, b) => {
    let resultado = a + b;
    console.log(`El resultado de la suma es ${resultado}`);
};

const resta = (a, b) => {
    let resultado = a - b;
    console.log(`El resultado de la resta es ${resultado}`);
};

//b)
const operacion = (num1, num2, callback) => {
   
    if (typeof num1 === 'numero' && typeof num2 === 'numero') {
        callback(num1, num2); 
    } else {
        console.log("Debe ingresar solo números.");
    }
};

// Pruebas del callback
operacion(10, 5, suma);   
operacion(10, 5, resta);  
operacion("Hola", 5, suma); 