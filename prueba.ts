function comparacion() {

  let numero01: any = prompt("introduce un numero");
  let numero02: any = prompt("introduce otro numero");
  if (numero01 > numero02) {
    console.log("El numero mayor es: " + numero01 + " ( Numero 1 )");
  } else if (numero01 < numero02) {
    console.log("El Numero mayor es : " + numero02 + " ( Numero 2 )");
  } else if (numero01 == numero02) {
    console.log("Los numeros son iguales")
  }
}


function valor() {

  let numero03: any = prompt("introduce un numero")
  if (numero03 > 0) {
    console.log("Es Positivo");
  } else if (numero03 < 0) {
    console.log("Es negativo");
  } else if (numero03 == 0) {
    console.log("Es 0")
  }
}

function par() {
  for (let n = 0; n < 16; n++) {
    if (n % 2 == 0) {
      console.log("el numero " + n + " es par")
    } else {
      console.log("el numero " + n + " es impar")
    }
  }
}

function diasenmes(mes:number, año:number) {
  return new Date(año, mes, 0).getDate();
}

function bolitas(a: number) {
  for (let c = 0; c < a; c++) {
    let b = '';
    for (let d = 0; d < d + 1; d++) {
      b = b + '*';
    }
    console.log(b)
  }
}
