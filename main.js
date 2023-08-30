const card = document.querySelectorAll('.card');
const start = document.querySelector('.start');

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
    let time = 3;
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
        }
    }, 1000);
}
