function promedio(num,qty){
    return num/qty;
}
let suma = 0;
let contador = 0;
let entrada = "";
do{
    entrada = prompt("Ingresar un numero, digite ESC si no quiere seguir");
    if (entrada == "ESC") break;
    let numero = parseFloat(entrada);
    console.log(numero);
    if(isNaN(numero)){
        alert("El valor introducido " + entrada + " no es un numero");
    } else {
        contador++
        suma = suma + numero;
        promedio(suma,contador);
    }
    if(confirm("¿Desea seguir ingresando datos?")){
    } else break;
} while (entrada != "ESC")

alert(promedio(suma,contador));