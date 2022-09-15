const contenedorClientes = document.getElementById('contenedorClientes');//donde van a ir los td
const contenedorModificarCliente = document.getElementById('contenedorModificarCliente');//modal de modificar


//cargar tabla de clientes 
listaClientes.forEach((cliente)=>{
    const tabla = document.createElement('tr');
    tabla.innerHTML =`
        <td scope="row">${cliente.id}</th>
            <td>${cliente.cuil}</td>
            <td>${cliente.nombre}</td>
            <td>${cliente.apellido}</td>
            <td>${cliente.barrio}</td>
            <td>${cliente.localidad}</td>
            <td>${cliente.zona}</td>
            <td>${cliente.telefono}</td>
            <td>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalModificarCliente" id="modificar${cliente.id}"><i class="bi bi-pencil-square"></i></button>
                <button class="btn btn-danger mx-2" data-bs-toggle="modal" data-bs-target="#modalEliminarCliente" id="eliminar${cliente.id}" ><i class="bi bi-trash-fill"></i></button>
            </td>
        `
    contenedorClientes.appendChild(tabla);

    // const boton = document.getElementById(`modificar${cliente.id}`);
    // boton.addEventListener('click', () =>{
    //     modificarCliente(plato.id);
    // })

    

})