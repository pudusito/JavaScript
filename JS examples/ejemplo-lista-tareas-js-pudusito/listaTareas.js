let tareas=["Tarea 1", "Tarea 2", "Tarea 3", "Tarea 4" , "Tarea 5"];

const listaTareas= document.getElementById("listaTareas");
listarTareas(tareas);

function listarTareas(task) {
    listaTareas.textContent=""; //limpia antes de dibujar en pantalla(Evita repeticiones)
    task.forEach(tarea => {
        let li=document.createElement("li");
        li.textContent= tarea;
        li.className="list-group-item";
        listaTareas.appendChild(li);
    });
};

const btnAgregar= document.getElementById("btnAgregar");

btnAgregar.addEventListener("click", agregarTarea);
const tarea = document.getElementById("tarea");

function agregarTarea(){
    if(tarea.value==""){
    Swal.fire({
        title: "Debes ingresar una tarea. \n !NYAA!",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://sweetalert2.github.io/images/nyan-cat.gif")
          left top
          no-repeat
        `
    });
        return;

    }
    tareas.push(tarea.value);
    tarea.value="";//limpia el value
    listarTareas(tareas);
};



const btnEliminar=document.getElementById("btnEliminar");
btnEliminar.addEventListener("click", eliminarTarea);

//crea un modal de bootstrap a partir del id modalEliminar del html
let modalEliminar = new bootstrap.Modal(document.getElementById("modalEliminar"));

let i= -1;


function eliminarTarea() {  //función que busca la tarea para eliminar

    let tarea_buscada = document.getElementById("tarea").value; //captura el valor del input tarea
    i = tareas.findIndex((task1) => task1 == tarea_buscada); //busca la tarea en el arreglo de tareas
    if (i == -1) {
    //si no se encontró la tarea
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se encontro tarea para eliminar, ingrese una existente!",
      footer: "",
    });
    } 
    else {
    //si se encontró la tarea
    let tituloModal = document.getElementById("modalEliminarLabel"); //captura el título del modal
    tituloModal.textContent = "Eliminando " + tareas[i]; //le asigna el texto del título
    modalEliminar.show(); //muestra el modal
    }
};

let btnDelete = document.getElementById("btnDelete"); //captura el botón eliminar del modal
btnDelete.addEventListener("click", deleteTarea); //agrega un evento click al botón eliminar que llama a la función eliminarTarea
function deleteTarea() {
  //función que elimina la tarea
  modalEliminar.hide(); //oculta el modal
  tareas = tareas.filter((task) => task != tareas[i]);
  listarTareas(tareas); //llama a la función listarTareas para mostrar las tareas en el ul
        Swal.fire({
        icon: "borrado",
        title: "asd.",
        text: "se borro la wea ",
        footer: "",
    });
};


//boton buscar

let btnBuscar = document.getElementById("btnBuscar"); //captura el botón buscar
btnBuscar.addEventListener("click", buscarTarea); //agrega un evento click al botón buscar que llama a la
// función buscarTarea
function buscarTarea() {
  //función que busca tareas
  let tareaBuscada = document.getElementById("tarea").value; //captura el valor del input tarea
  if (tareaBuscada == "") {
    //si el input está vacío
    listarTareas(tareas); //llama a la función listarTareas para mostrar todas las tareas en el ul
  } 
  else {
    //si el input no está vacío
        tareasEncontradas = tareas.filter((tarea) => tarea == tareaBuscada); //filtra las tareas que coincidan con
        //  la tarea buscada
        if (tareasEncontradas.length > 0) {
          //si se encontraron tareas
          listarTareas(tareasEncontradas); //llama a la función listarTareas para mostrar las tareas
          // encontradas en el ul
        } 
        else {
          //si no se encontraron tareas
            Swal.fire({
              //muestra un mensaje de error
              icon: "error", //tipo de mensaje
              title: "Oops...", //título del mensaje
              text: "No se encontraron tareas!", //texto del mensaje
              footer: "", //pie del mensaje
            });
            }    
    }
}



let modalEditar = new bootstrap.Modal(document.getElementById("modalEditar")); //crea un modal de bootstrap a partir del id modalEditar del html
let btnEditar = document.getElementById("btnEditar"); //captura el botón editar

btnEditar.addEventListener("click", buscarTareaEditar); //agrega un evento click al botón editar que llama a la función buscarTareaEditar
let x = 0; //variable que guardará la posición de la tarea a editar
function buscarTareaEditar() {
  //función que busca tareas para editar
  let tarea_buscada = document.getElementById("tarea").value; //captura el valor del input tarea
  x = tareas.findIndex((tarea) => tarea == tarea_buscada); //busca la tarea en el arreglo de tareas
  if (x == -1) {
    //si no se encontró la tarea
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se encontro tarea para editar, ingrese una existente!",
      footer: "",
    });
  } else {
    //si se encontró la tarea
    let tituloModal = document.getElementById("modalEditarLabel"); //captura el título del modal
    tituloModal.textContent = "Editando " + tareas[i]; //le asigna el texto del título
    modalEditar.show(); //muestra el modal
  }
};
//boton guardar de modal.
let btnGuardar = document.getElementById("btnGuardar"); //captura el botón guardar del modal
btnGuardar.addEventListener("click", guardarTarea); //agrega un evento click al botón guardar que llama a la función guardarTarea
function guardarTarea() {
  //función que guarda la tarea editada
  let tarea_nueva = document.getElementById("tarea_nueva").value; //captura el valor del input tarea_nueva
  modalEditar.hide(); //oculta el modal
  tareas[x] = tarea_nueva; //asigna la tarea nueva en la posición i
  listarTareas(tareas); //llama a la función listarTareas para mostrar las tareas en el ul
}
