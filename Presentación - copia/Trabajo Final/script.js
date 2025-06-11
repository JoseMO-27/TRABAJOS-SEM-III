// Esperamos a que la página se cargue por completo
document.addEventListener('DOMContentLoaded', function() {

    // 1. Encontramos TODOS los botones que tengan la clase 'btn-consejo'
    const botonesConsejo = document.querySelectorAll('.btn-consejo');

    // 2. Recorremos cada uno de los botones que encontramos
    botonesConsejo.forEach(function(boton) {
        
        // 3. A cada botón, le decimos que esté atento a un 'click'
        boton.addEventListener('click', function() {
            
            // 4. Cuando se hace click, buscamos el contenedor <section> más cercano (su "padre")
            const seccionPadre = boton.closest('section');
            
            // 5. Dentro de esa sección, buscamos el elemento con la clase 'info-oculta'
            const infoOculta = seccionPadre.querySelector('.info-oculta');
            
            // 6. Si lo encontramos, le quitamos la clase 'oculto' para mostrarlo
            if (infoOculta) {
                infoOculta.classList.remove('oculto');
            }
            
            // 7. Ocultamos el botón que fue presionado
            boton.style.display = 'none';
        });
    });
});