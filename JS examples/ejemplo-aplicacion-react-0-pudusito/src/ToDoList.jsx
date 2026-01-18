import React from 'react'
import { useState,useRef,useEffect } from "react"; //estos son hooks de react
import {v4 as uuid} from 'uuid';//npm install uuid,, permite encriptar el id.

import ToDoItem from "./ToDoItem";




const KEY="todolist-todos";//el nombre que tendrá el arreglo en el localStorage(inspeccionar para ver)

function ToDoList() {

    const [todos,setTodos]=useState(
        JSON.parse(localStorage.getItem(KEY))?JSON.parse(localStorage.getItem(KEY)):[]
    ); 

    const taskRef = useRef(); // !!! aqui la pasamos la referencia del input.!!!

    useEffect(()=>{
    localStorage.setItem(KEY,JSON.stringify(todos));
    },[todos]);//cuando cambie el todos lo guarda en localStorage, es decir, se genera un cambio


//funcion para agregar tarea
    const agregarTarea=()=>{
        const task=taskRef.current.value;
        const id=uuid();
        console.log(id);
        if(task==='')return;
        setTodos((prevTodos)=>{
            const newTask = {
                id: id,
                task: task,
                complete:false
            }
            return [...prevTodos, newTask]
        });
        taskRef.current.value="";
    }

    //funcion eliminar tarea
    const eliminarTareasCompletadas=()=>{
        const newTodos=todos.filter((todo)=>!todo.complete);
        console.log("se ha eliminado una tarea");
        setTodos(newTodos);
    }
    
    //cambia estado de la tarea
    const cambiarEstadoTarea=(id)=>{
    
        const newTodos=[...todos];
        const todo=newTodos.find((todo)=>todo.id===id);
        todo.complete=!todo.complete;
        setTodos(newTodos);
    }

    //devuelve la cantidad de tareas
    const cantidadTareas=()=>{
        return todos.filter((todo)=>!todo.complete).length; //devuelve un nuevo arreglo cono con las cantidad de tareas incompletas
    }


    //
    const ResumenTareas=()=>{
        const cantidad=cantidadTareas();
        if(cantidad>1){
            return (<div className="alert alert-info mt-3">
            Te quedan {cantidad} tareas pendientes!
            </div>);
        }else if(cantidad===1){
            return (<div className="alert alert-info mt-3">
            Te queda {cantidad} tarea pendiente!
            </div>);
        }else{
            return (<div className="alert alert-info mt-3">
            No te quedan tareas pendientes!
        </div>);
        }   
    }


  return (
    <>
        <h1>Listado de Tareas</h1>
            <div className="input-group mb-3 mt-4">
                <input ref={taskRef} placeholder="Ingrese una tarea" className="form-control" type="text" name="" id="">
                </input>{/*  soy un comentario  */}
                <button onClick={agregarTarea} className="btn btn-success ms-2"><i className="bi bi-plus-circle-fill">
                    </i></button>
                <button onClick={eliminarTareasCompletadas} className="btn btn-danger ms-2"><i className="bi bi-trash">
                    </i></button>
            </div>
            
            <ul className="list-group">
                {todos.map((todo) =>
                <ToDoItem todo={todo} key={todo.id} cambiarEstado={cambiarEstadoTarea}></ToDoItem>
                )}
            </ul>
            <ResumenTareas/>
    </>
  )
}

export default ToDoList;



/*
 .map() 
 El método map() en JavaScript se utiliza para crear un nuevo array aplicando una función a cada elemento de un array existente. 
 Este método no modifica el array original, sino que retorna un nuevo array con los resultados de la función aplicada a cada elemento. 
En términos más sencillos, map() te permite transformar los elementos de un array en algo nuevo, 
y guardar esos elementos transformados en un array nuevo, sin alterar el array original. */