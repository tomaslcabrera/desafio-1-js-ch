function promedio(num,qty){
    return num/qty;
}
let suma = 0;
let contador = 0;
let entrada = "";
let listaNumeros = [];
do{
    entrada = prompt("Ingresar un numero, digite ESC si no quiere seguir");
    if (entrada == "ESC") break;
    let numero = parseFloat(entrada);
    console.log(numero);
    if(isNaN(numero)){
        alert("El valor introducido " + entrada + " no es un numero");
    } else {
        contador++
        suma += numero;
        promedio(suma,contador);
        listaNumeros.push(entrada);
    }
    if(confirm("¿Desea seguir ingresando datos?")){
    } else break;
} while (entrada != "ESC")

alert("Los valores ingresados son los siguientes: " + "\n" + listaNumeros.join("\n"));
alert("Resultado: " + promedio(suma,contador));


