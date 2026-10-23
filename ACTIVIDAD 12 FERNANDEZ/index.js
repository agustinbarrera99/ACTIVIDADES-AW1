//1

//a-b)
let numerosImpares = [];

for (let i = 0; i < 5; i++) {

    let numero = parseInt(prompt("Ingrese un número (intento " + (i + 1) + " de 5):"));
    
    
    if (numero % 2 !== 0) {
        numerosImpares.push(numero);
    }
}
console.log("a y b (solo impares):", numerosImpares);


//c)
let frutas = ["pera", "manzana", "banana", "durazno"];

frutas.forEach((fruta, index) => {
    
    frutas[index] = fruta.toUpperCase(); 
});
console.log("c - Frutas a mayúsculas (forEach):", frutas);


//d)
let frutasOriginales = ["pera", "manzana", "banana", "durazno"]; 

let frutasMap = frutasOriginales.map(fruta => fruta.toUpperCase());
console.log("d - Frutas a mayúsculas (map - nuevo arreglo):", frutasMap);


//e)
let frutasFiltradas = frutasOriginales.filter(fruta => fruta.includes("na"));
console.log("e - Frutas que contienen 'na':", frutasFiltradas);




// 2

//a)
let productoUnico = {
    nombre: "Remera Lisa",
    precio: 8000,
    stock: 12,
    talles: ["s", "m", "l"]
};
console.log("a - Objeto producto único:", productoUnico);


//b)
let productos = [
    { nombre: "Remera Lisa", precio: 8000, stock: 12, talles: ["s", "m", "l"] },
    { nombre: "Pantalón Cargo", precio: 25000, stock: 3, talles: ["s", "m", "l"] },
    { nombre: "Buzo Oversize", precio: 30000, stock: 15, talles: ["s", "m", "l"] },
    { nombre: "Campera de Jean", precio: 45000, stock: 2, talles: ["s", "m", "l"] }
];
console.log("b - Arreglo de productos:", productos);


//c)
console.log("c - Productos con stock menor a 5:");
productos.forEach(producto => {
    if (producto.stock < 5) {
        console.log(producto);
    }
});


//d)
let productosConDescuento = productos.map(producto => {
    return {
        nombre: producto.nombre,
        precio: producto.precio * 0.90, 
        stock: producto.stock,
        talles: producto.talles
    };
});
console.log("d - Productos con 10% de descuento:", productosConDescuento);


//e)
let productosStockMayor10 = productos.filter(producto => producto.stock > 10);
console.log("e - Productos con stock mayor a 10:", productosStockMayor10);