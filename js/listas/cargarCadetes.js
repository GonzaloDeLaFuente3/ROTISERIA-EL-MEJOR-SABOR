const contenedorCadetes = document.getElementById('contenedorCadetes');//donde van a ir los td
const contenedorModificarCadete = document.getElementById('contenedorModificarCadete');//modal de modificar


//cargar tabla de cadetes 
listacadetes.forEach((cadete)=>{
    const tabla = document.createElement('tr');
    tabla.innerHTML =`
        <td scope="row">${cadete.id}</th>
            <td>${cadete.cuil}</td>
            <td>${cadete.nombre}</td>
            <td>${cadete.apellido}</td>
            <td>${cadete.barrio}</td>
            <td>${cadete.localidad}</td>
            <td>${cadete.zona}</td>
            <td>${cadete.telefono}</td>
            <td>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalModificarcadete" id="modificar${cadete.id}"><i class="bi bi-pencil-square"></i></button>
                <button class="btn btn-danger mx-2" id="eliminar${cadete.id}" ><i class="bi bi-trash-fill"></i></button>
            </td>
        `
    contenedorcadetes.appendChild(tabla);

    const boton = document.getElementById(`modificar${cadete.id}`);
    boton.addEventListener('click', () =>{
        modificarcadete(cadete.id);
    })
});

//MODAL DE MODIFICAR UN cadete
const modificarcadete = (cliId) => {
    var z1;
    var z2;
    var z3;
    var z4;
    var z5;

    contenedorModificarcadete.innerHTML = ""
    const item = listacadetes.find((plato) => plato.id === cliId);

    switch(item.zona){
        case "norte":
            z1 = `value="1"`;
            z2 = "selected";
            z3 = `value="2"`;
            z4 = `value="3"`;
            z5 = `value="4"`;
            break;
        case "sur":
            z1 = `value="1"`;
            z2 = `value="2"`;
            z3 = "selected";
            z4 = `value="3"`;
            z5 = `value="4"`;
            break;
        case "este":
            z1 = `value="1"`;
            z2 = `value="2"`;
            z3 = `value="3"`;
            z4 = "selected";
            z5 = `value="4"`;
            break;
        case "oeste":
            z1 = `value="1"`;
            z2 = `value="2"`;
            z3 = `value="3"`;
            z4 = `value="4"`;
            z5 = "selected";
            break;
    }

    const info = document.createElement('div');
    info.innerHTML = `
    <div class="input-group input-group-sm mb-2">
        <span class="input-group-text" id="inputGroup-sizing-sm">Código:</span>
        <input type="number" class="form-control" value="${item.id}" readonly>
    </div>
    <div class="input-group input-group-sm mb-2">
        <span class="input-group-text" id="inputGroup-sizing-sm">Cuil:</span>
        <input type="number" class="form-control" value="${item.cuil}">
    </div>
    <div class="input-group input-group-sm mb-2">
        <span class="input-group-text" id="inputGroup-sizing-sm">Nombre:</span>
        <input type="text" class="form-control" value="${item.nombre}">
    </div>
    <div class="input-group input-group-sm mb-2">
        <span class="input-group-text" id="inputGroup-sizing-sm">Apellido:</span>
        <input type="text" class="form-control" value="${item.apellido}">
    </div>
    <div class="input-group input-group-sm mb-2">
        <span class="input-group-text" id="inputGroup-sizing-sm">Barrio:</span>
        <input type="text" class="form-control" value="${item.barrio}">
    </div>
    <div class="input-group input-group-sm mb-2">
        <span class="input-group-text" id="inputGroup-sizing-sm">Localidad:</span>
        <input type="text" class="form-control" value="${item.localidad}">
    </div>
    <div class="input-group input-group-sm mb-3">
        <label class="input-group-text">Tipo de plato:</label>
        <select class="form-select">
            <option ${z1}>Seleccione una opción...</option>
            <option ${z2}>Norte</option>
            <option ${z3}>Sur</option>
            <option ${z4}>Este</option>
            <option ${z5}>Oeste</option>
        </select>
    </div>
    <div class="input-group input-group-sm mb-2">
        <span class="input-group-text" id="inputGroup-sizing-sm">Precio:</span>
        <input type="number" class="form-control" value="${item.telefono}">
    </div>
    `
    contenedorModificarcadete.appendChild(info);
}