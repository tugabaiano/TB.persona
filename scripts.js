/*Animacao do icones do fim da pagina*/
VanillaTilt.init(document.querySelectorAll(".icone"), {
    max: 30,
    speed: 400,
    glare: true
});
/*-----------------------------------------*/


/*Animacao da pagina toda com o aparecer e desaparecer*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel');
        } else {
            entry.target.classList.remove('visivel');
        }
    });
});

const blocks = document.querySelectorAll('.bloco');

blocks.forEach(block => observer.observe(block));
/*-----------------------------------------*/


/*Animacao do menu superio da tela*/
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 100)
})

/*-----------------------------------------*/


/*Animacao do funda roxa*/
function createEnergyWave() {
    const wave = document.createElement('div');
    wave.classList.add('energy-wave');
    document.getElementById('energy-background').appendChild(wave);
}

document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < 3; i++) {
        createEnergyWave();
    }
});
