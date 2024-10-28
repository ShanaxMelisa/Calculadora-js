//Crea la variable "pantalla" y busca el id del elemento(la pantalla de la calculadora)
let pantalla = document.getElementById('pantalla');
//Crea la variable operación como una cadena vacia. Aqui se escribiran las operaciones del usuario
let operacion = "";
//Crea una función y trae el valor presionado en la calculadora
//La variable operacion añade el valor recien traido
//pantalla.value toma el nuevo valor y hace que la pantalla muestre el texto en tiempo real
function agregar(valor){
    operacion += valor;
    pantalla.value = operacion;
}
//try funciona para manejar errores, si hay un error se maneja en el bloque catch.
//eval interpreta la cadena como operacion matematica y devuelve el resultado
//operacion = pantalla.value, la operacion toma el resultado por si se quiere seguir operando con ese resultado.
function resultado(){
    try{
        pantalla.value = eval(operacion);
        operacion = pantalla.value;
    } catch(e){
        pantalla.value = 'Error';
        operacion = '';
    }
}
//En el catch la pantalla.value mostrara error si lo hay
//operacion = ''; Se borra el contenido de la variable para una nueva operación
function borrar(){
    operacion = '';
    pantalla.value = '';
}
//Borra el contenido de la variable "operacion" y la pantalla no mostrara nada
function eliminar() {
    operacion = operacion.slice(0, -1);
    pantalla.value = operacion;
}