
const generarNumeroRandom = max => {
    alert(Math.floor(Math.random() * (max + 1)))
}

// function random_int(min, max) {
//     return Math.round((Math.random() * (max - min) + min))
//     random_int(0, 36)
// }

// function pedirNum(texto, min, max) {


//     let num = Number(prompt(texto))

//     while (isNaN(num) || num < min || num > max) {
//         alert("por favor, ingrese opcion valida")
//         num = Number(prompt(texto))
//     }

//     return num
// }

// Ruleta
// Generar un numero del 0 al 36

// while (true) {

//     let tipoApuesta = pedirNum("Ingrese \n1) Apostar a un numero \n2) Apostar par o impar", 1, 2)

//     if (tipoApuesta == 1) {
//         // quiereapostar a un numero
//         let apuestaNum = pedirNum("Ingrese el numero al que quiere apostar")
//     } else if (tipoApuesta == 2) {
//         let apuestaParImpar = pedirNum("ingrese \n1) Par \n2) Impar")
//     }

//     let ruletaNum = generarNumeroRandom(36)
//         //                      (0 o 1) + 1
//     if ((ruletaNum % 2) + 1 == apuestaParImpar) {
//         alert("Ganaste")
//     } else {
//         alert("Perdiste")
//     }

//     if (confirm("Desea salir?")) {
//         alert("Hasta la proxima")
//         break
//     }
// }

//!                  ESTO ESTA EN PROCESO



alert("Bienvenido a Casino 'Ready For Play!'")

let datos = {
    nombre: prompt("Ingresa tu Nombre"),
    apellido: prompt("Ingresa tu Apellido"),
    edad: Number(prompt("Ingresa tu edad"))
}

alert("Vos sos " + datos.nombre + (" ") + datos.apellido, " y tu edad es ", datos.edad, " Años")

if (datos["edad"] >= 18) {
    alert("Eres Mayor, puedes pasar")
    while (true) {
        if (comprar_fichas = confirm("Quieres comprar fichas") == true) {
            alert("1) 100 Fichas = 100 Pesos \n2) 500 Fichas = 500 Pesos \n3) 1000 Fichas = 1000 Pesos \n4) 5000 Fichas = 5000 Pesos \n5) Quieres salir?")
            ingresoFichas = Number(prompt("Elige una opcion del 1 al 5"))
            if (ingresoFichas == 1) {
                alert("Compro 100 fichas")
            } else if (ingresoFichas == 2) {
                alert("Compro 500 fichas")
            } else if (ingresoFichas == 3) {
                alert("Compro 1000 fichas")
            } else if (ingresoFichas == 4) {
                alert("Compro 5000 fichas")
            } else if (ingresoFichas == 5) {
                alert("Saliste")
                break
            } else {
                alert("Elige una opcion correcta")
            }
        } else if (comprar_fichas == false) {
            alert("Okey! Que quiere hacer?")
            alert("1) Ruleta \n2) Blackjack \n3) Salir")
            mesaJuego = Number(prompt("Elige una opcion, 1 o 3"))
            if (mesaJuego == 1)
                alert("Entraste a la Ruleta!")
            // en proceso

            function pedirNum(texto, min, max) {


                let num = Number(prompt(texto))

                while (isNaN(num) || num < min || num > max) {
                    alert("por favor, ingrese opcion valida")
                    num = Number(prompt(texto))
                }
                return num
            }
            while (true) {
                let tipoApuesta = pedirNum("Ingrese \n1) Apostar a un numero \n2) Apostar par o impar", 1, 2)

                if (tipoApuesta == 1) {
                    // quiereapostar a un numero
                    let apuestaNum = pedirNum("Ingrese el numero al que quiere apostar")
                } else if (tipoApuesta == 2) {
                    let apuestaParImpar = pedirNum("ingrese \n1) Par \n2) Impar")
                }
                let ruletaNum = generarNumeroRandom(36)
                //                      (0 o 1) + 1
                if ((ruletaNum % 2) + 1 == apuestaParImpar) {
                    alert("Ganaste")
                } else {
                    alert("Perdiste")
                }
                if (confirm("Desea salir?")) {
                    alert("Hasta la proxima")
                    break
                }
            }
        } else if (mesaJuego == 2) {
            alert("Entraste a Blackjack")
        } else if (mesaJuego == 3) {
            alert("Saliste" + " " + datos.nombre)
            break
        } else {
            alert("Elige una opcion correcta")
        }
    }
} else {
    alert("No eres mayor, no puedes pasar")
}

