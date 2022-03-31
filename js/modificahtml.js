function getIdImagen() {
    imagen = document.getElementById('cambiar');
    console.log(imagen);
    imagen.addEventListener('click',cambiaImagen(imagen));
}

function cambiaImagen(imagen){
    imagen.src='img/husky2.jpg';
}