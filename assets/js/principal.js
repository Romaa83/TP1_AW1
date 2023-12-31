import tienda from "./producto.js"

const contenedor = document.getElementById("fila-productos")

let ContenidoHTML = ``;

let resultado = "";

tienda.articulos.forEach(elemento => {
    ContenidoHTML += `<div class="tarjeta_producto" id="tarjeta_producto" data-categoria="periferico">
    <div class="producto" id="producto">
        <img src="${elemento.imagen}" alt="Teclado Redragon">
        <div class="body_producto">
            <h3>${elemento.nombre}</h3>
            <p>${elemento.precio}</p>
        </div>
        <div class="carro">
            <button class="agregar-carrito">Agregar</button>
        </div>
    </div>
</div>`
});

contenedor.innerHTML = ContenidoHTML

function filtrarPorCategoria (categoria) {
    let ContenidoHTML = ``;
    tienda.articulos.forEach(elemento => {
        if (elemento.categoria === categoria)
        ContenidoHTML += `<div class="tarjeta_producto" id="tarjeta_producto" data-categoria="periferico">
        <div class="producto" id="producto">
            <img src="${elemento.imagen}" alt="Teclado Redragon">
            <div class="body_producto">
                <h3>${elemento.nombre}</h3>
                <p>${elemento.precio}</p>
            </div>
            <div class="carro">
                <button class="agregar-carrito">Agregar</button>
            </div>
        </div>
    </div>`

    contenedor.innerHTML = ContenidoHTML
    })
}

document.getElementById("btnPerifericos").addEventListener("click", function() {
    filtrarPorCategoria('periferico');
});

document.getElementById("btnHardware").addEventListener("click", function() {
    filtrarPorCategoria('hardware');
});

document.getElementById("btnMonitores").addEventListener("click", function() {
    filtrarPorCategoria('monitores');
});







 