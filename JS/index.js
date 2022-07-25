let nombreUsuario = prompt("Bienvenido Alumno, ingrese su nombre")
let edadUsuario = parseInt(prompt("Ingrese Su edad"))

alert(`Bienvenido ${nombreUsuario}`)
let nota1 = parseInt(prompt("Ingrese la nota de su primer parcial"))
let nota2 = parseInt(prompt("Ingrese la nota del segundo parcial"))
let nota3 = parseInt(prompt("Ingrese la nota del tercer parcial"))
function notaFinal(){
    let resultado = nota1 + nota2 + nota3
    let promedio = resultado / 3

    if (promedio >= 7){
        alert (`Felicitaciones promocionaste el curso porque tu nota final es ${promedio}`)
    }else if (promedio >= 4){
        alert(`Bien hecho, pero tendras que realizar un final para aprobar la materia ya que tu nota final es ${promedio}`)
    }else
    alert(`Lamentablemente no llegaste a nuestro estandar ya que tu nota final es ${promedio} pero no te preocupes, intentalo nuevamente`)
}
notaFinal()
