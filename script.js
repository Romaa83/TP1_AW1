function filtrarPorCategoria(categoria) {
    const tarjetas = document.querySelectorAll('.tarjeta_producto');

    tarjetas.forEach(tarjeta => {
        const dataCategoria = tarjeta.getAttribute('data-categoria');

        if (dataCategoria === categoria) {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });
}

