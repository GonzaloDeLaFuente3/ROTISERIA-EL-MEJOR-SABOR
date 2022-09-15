const contenedorMenus = document.getElementById('contenedorMenus'); //TABLA
const contenedorModificarMenu = document.getElementById('contenedorModificarMenu'); //MODAL
const botonAceptarPedido = document.getElementById('aceptarPedido');
const botonEnCamino = document.getElementById('pedidoenCamino');
const botonEntregado = document.getElementById('pedidoEntregado');

//CARGAR LOS MENUS DE UNA LISTA A UNA TABLA
listaPlatos.forEach((plato) => {
    const tabla = document.createElement('tr');

    tabla.innerHTML = `
        <td scope="row">${plato.id}</th>
        <td>${plato.nombre}</td>
        <td>${plato.descripcion}</td>
        <td>${plato.tipo_menu}</td>
        <td>${plato.tipo_comida}</td>
        <td>${plato.precio}</td>
        <td>${plato.vigencia}</td>
        <td>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalModificarMenu" id="modificar${plato.id}"><i class="bi bi-pencil-square"></i></button>
            <button class="btn btn-danger mx-2" onClick = "eliminarMenu(${plato.id})"><i class="bi bi-trash-fill"></i></button>
        </td>`

    contenedorMenus.appendChild(tabla);

    const boton = document.getElementById(`modificar${plato.id}`);
    boton.addEventListener('click', () =>{
        modificarMenu(plato.id);
    })
})

//MODAL DE MODIFICAR UN MENU
const modificarMenu = (pedId) => {
    /*
        <option selected>Seleccione una opción...</option>
        <option value="1">entrada</option>
        <option value="2">plato principal</option>
        <option value="3">postre</option>*/
    
    contenedorModificarMenu.innerHTML = ""
    const item = listaPlatos.find((plato) => plato.id === pedId);

    const info = document.createElement('div');
    info.innerHTML = `
    <div class="input-group input-group-sm mb-2">
        <span class="input-group-text" id="inputGroup-sizing-sm">Código:</span>
        <input type="text" class="form-control" value="${item.id}" readonly>
    </div>
    <div class="input-group input-group-sm mb-2">
        <span class="input-group-text" id="inputGroup-sizing-sm">Nombre:</span>
        <input type="text" class="form-control" value="${item.nombre}">
    </div>
    <div class="input-group input-group-sm mb-2">
        <span class="input-group-text" id="inputGroup-sizing-sm">Descripción:</span>
        <input type="text" class="form-control" value="${item.descripcion}">
    </div>

    <div class="input-group input-group-sm mb-3">
        <label class="input-group-text">Tipo de plato:</label>
        <select class="form-select">
            ${selectTipoMenu()}
        </select>
    </div>
    
    <div class="input-group input-group-sm mb-2">
        <span class="input-group-text" id="inputGroup-sizing-sm"></span>
        <input type="text" class="form-control" value="${item.tipo_menu}">
    </div>
    <div class="input-group input-group-sm mb-2">
        <span class="input-group-text" id="inputGroup-sizing-sm">Tipo de comida:</span>
        <input type="text" class="form-control" value="${item.tipo_comida}">
    </div>
    <div class="input-group input-group-sm mb-2">
        <span class="input-group-text" id="inputGroup-sizing-sm">Precio:</span>
        <input type="text" class="form-control" value="${item.precio}">
    </div>
    <div class="input-group input-group-sm mb-2">
        <span class="input-group-text" id="inputGroup-sizing-sm">Stock/Vigencia:</span>
        <input type="text" class="form-control" value="${item.vigencia}">
    </div>
    `
    contenedorModificarMenu.appendChild(info);

    // const comentarioCliente = document.getElementById('comentarioCliente');
    // if(item.estado == "Devuelto" || item.estado == "Cancelado"){
    //     comentarioCliente.classList.remove('d-none');
    // }
}