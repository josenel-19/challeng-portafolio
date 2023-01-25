
window.addEventListener('scroll', function(){
    let animation_ahorcado = document.getElementById('img_proyecto_ahorcado');
    let animation_encriptador = document.getElementById('img_proyecto_encriptador');
    let posicionObj1 = animation_ahorcado.getBoundingClientRect().top;
    let posicionObj2 = animation_encriptador.getBoundingClientRect().top;
    console.log(posicionObj1 + ' ' + posicionObj2);
    let altoPantalla = window.innerHeight/2;

    if(posicionObj1 < altoPantalla){
        animation_ahorcado.style.animation = 'mover 1s ease-out';
    }

    if(posicionObj2 < altoPantalla){
        animation_encriptador.style.animation = 'mover2 1s ease';
    }

});