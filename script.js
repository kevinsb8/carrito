let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ id: Date.now(), nombre, precio });
    actualizarCarrito();
}

function eliminarProducto(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById('lista-carrito');
    const totalEl = document.getElementById('total');
    lista.innerHTML = '';
    let total = 0;

    carrito.forEach(item => {
        total += item.precio;
        lista.innerHTML += `
            <div class="item">
                <span>${item.nombre} ($${item.precio})</span>
                <button class="btn-del" onclick="eliminarProducto(${item.id})">🗑</button>
            </div>
        `;
    });
    totalEl.innerText = `Total: $${total}`;
}