let tareas = [
    { id: 1, descripcion: "Tarea 1", completada: false },
    { id: 2, descripcion: "Tarea 2", completada: false },
    { id: 3, descripcion: "Tarea 3", completada: false }
];

function actualizarListaTareas() {
    const listaTareas = document.getElementById('listaTareas');
    listaTareas.innerHTML = '';
    tareas.forEach(tarea => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="${tarea.completada ? 'completada' : ''}">${tarea.descripcion}</span>
            <button onclick="cambiarTarea(${tarea.id})">Cambiar</button>
            <button onclick="eliminarTarea(${tarea.id})">Eliminar</button>
        `;
        listaTareas.appendChild(listItem);
    });
    actualizarContadores();
}

function agregarTarea() {
    const entradaTarea = document.getElementById('entradaTarea');
    if (entradaTarea.value.trim() === '') return;
    const nuevaTarea = {
        id: tareas.length ? tareas[tareas.length - 1].id + 1 : 1,
        descripcion: entradaTarea.value,
        completada: false
    };
    tareas.push(nuevaTarea);
    entradaTarea.value = '';
    actualizarListaTareas();
}

function eliminarTarea(id) {
    tareas = tareas.filter(tarea => tarea.id !== id);
    actualizarListaTareas();
}

function cambiarTarea(id) {
    const tarea = tareas.find(tarea => tarea.id === id);
    tarea.completada = !tarea.completada;
    actualizarListaTareas();
}

function actualizarContadores() {
    const totalTareas = document.getElementById('totalTareas');
    const tareasCompletadas = document.getElementById('tareasCompletadas');
    totalTareas.textContent = tareas.length;
    tareasCompletadas.textContent = tareas.filter(tarea => tarea.completada).length;
}

actualizarListaTareas();
