const contenedorTabla = document.getElementById('contenedorTabla');

let listaPedidos = [
    {codigo: 1,fecha: "07/09/2022", hora: "15:38",menu: "Tarta de choclo x3, Medallones de pescado x12", precio: 1300,cliente: "Gabriel Avellaneda",domicilio: "La Carrera Fray Mamerto Esquiu",tipoEntrega: "Envío a domicilio",estado: "Pendiente"},
    {codigo: 2,fecha: "01/12/2023", hora: "18:48",menu: "Pizza Calabresa", precio: 800,cliente: "Tomas Cordero",domicilio: "Capital S.F.V.C",tipoEntrega: "Retira en el local",estado: "En preparación"},
    {codigo: 3,fecha: "03/01/2023", hora: "16:30",menu: "Napolitana", precio: 950,cliente: "Carlo Herrera",domicilio: "Capital S.F.V.C",tipoEntrega: "Retira en el local",estado: "En preparación"}
];

//CARGAR LOS PEDIDOS PENDIENTES DE UNA LISTA A UNA TABLA
listaPedidos.forEach((pedido) => {
    const tabla = document.createElement('tr');
    tabla.setAttribute("data-bs-toggle","modal");
    tabla.setAttribute("data-bs-target","#modalInformacion");
    tabla.innerHTML = `
        <td scope="row">${pedido.codigo}</th>
        <td>${pedido.fecha}</td>
        <td>${pedido.hora}</td>
        <td>${pedido.menu}</td>
        <td>${pedido.precio}</td>
        <td>${pedido.cliente}</td>
        <td>${pedido.domicilio}</td>
        <td>${pedido.tipoEntrega}</td>
        <td>${pedido.estado}</td>`

    contenedorTabla.appendChild(tabla);
})

function cargarInformacion(){
    const div = document.createElement('div');
        div.classList.add('pedidoCarrito');
        div.classList.add('row');
        div.classList.add('mx-2');
        div.classList.add('my-2');
        div.innerHTML = `
        <p class="col-sm-4 col-form-label">${prod.nombre}</p>
        <p class="col-sm-4 col-form-label">Precio: $${prod.precio}</p>
        <p class="col-sm-3 col-form-label" id="cantidad">Cantidad: ${prod.cantidad}</p>
        <div class="col-sm-1">
            <button class="btn btn-danger" onClick = "eliminarDelCarrito(${prod.id})"><i class="bi bi-trash-fill"></i></button>
        </div>`

        contenedorCarrito.appendChild(div);
}