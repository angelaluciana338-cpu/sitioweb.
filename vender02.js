function mostrarInfo(id) {
    const elemento = document.getElementById(id);
    if (elemento) {
        if (elemento.style.display === "none" || elemento.style.display === "") {
            elemento.style.display = "block";
        } else {
            elemento.style.display = "none";
        }
    }
}
let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    mostrarCarrito();
}

function mostrarCarrito() {
    const lista = document.getElementById("lista");
    const totalDiv = document.getElementById("total");
    lista.innerHTML = "";
    let total = 0;

    carrito.forEach((producto, index) => {
        total += producto.precio;

        const li = document.createElement("li");
        li.innerHTML = `${producto.nombre} -$${producto.precio} <br><button onclick="eliminarProducto(${index})">Cancelar</button>`;
        lista.appendChild(li);
    });

    totalDiv.textContent = total;
}
function eliminarProducto(index) {
    carrito.splice(index, 1);
    mostrarCarrito();
}