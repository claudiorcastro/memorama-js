const card = document.querySelectorAll('.card');
const start = document.querySelector('.start');
let = tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0

let contador_movimientos = document.getElementById('contador_movimientos');
let contador_aciertos = document.getElementById('contador_aciertos');



document.addEventListener('DOMContentLoaded',() =>{
    iniciarApp();
})
start.addEventListener('click', () =>{
    cronometro();
})


function iniciarApp() {
    for (let i = 0; i < card.length; i++) {
        card[i].disabled = true;
    }
}
function desbloquearCards() {
    for (let i = 0; i < card.length; i++) {
        card[i].disabled = false;
    }
}
function cronometro() {
    desbloquearCards();
    let time = 60;
    start.classList.add('disabled');
    const contador = setInterval(() => {
        time--
        contador_cronometro.innerHTML = time;
        if (time == 0) {
            clearInterval(contador);
            Swal.fire('Tiempo terminado, volve a intentarlo!')
            .then((result) => {
                if (result.isConfirmed) {
                    location.reload();                  
                }
            })
        };
    }, 1000);
}

let numero = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numero = numero.sort(() => {return Math.random()-0.5});
console.log(numero);

function destapar(id) {
    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);

    if(tarjetasDestapadas == 1) {
        tarjeta1 = document.getElementById(id);
        primerResultado = numero[id];
        tarjeta1.innerHTML = primerResultado;
        tarjeta1.disabled = true;
    }else if(tarjetasDestapadas == 2) {
        tarjeta2 = document.getElementById(id);
        segundoResultado = numero[id];
        tarjeta2.innerHTML = segundoResultado;
        tarjeta2.disabled = true;
        movimientos++;
        contador_movimientos.innerHTML = `${movimientos}`;

        if (primerResultado == segundoResultado) {
            tarjetasDestapadas = 0;

            aciertos++;
            contador_aciertos.innerHTML = `${aciertos}`;
            if (aciertos == 8) {
                contador_aciertos.innerHTML = `${aciertos} &#128540;`;
                Swal.fire('GANASTE!!<br>Volve a jugar!')
                .then((result) => {
                    if (result.isConfirmed) {
                        location.reload();                  
                    }
                })
            }
        }else{
            setTimeout(() => {
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            },500);
        }
    }
}
