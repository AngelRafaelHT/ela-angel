import { useEffect, useState } from "react";

function cargarTareas() {
  const guardadas = localStorage.getItem("tareas");
  return guardadas ? JSON.parse(guardadas) : [];
}

function ListaTareas() {
  const [texto, setTexto] = useState("");
  const [tareas, setTareas] = useState(cargarTareas);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  function agregarTarea() {
    if (texto.trim() === "") return;
    setTareas([...tareas, { id: Date.now(), texto: texto }]);
    setTexto("");
  }

  function borrarTarea(id) {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  }

  return (
    <section className="tarjeta">
      <h2>Lista de tareas</h2>
      <input
        value={texto}
        onChange={(evento) => setTexto(evento.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={agregarTarea}>Agregar</button>

      {tareas.length === 0 && <p>No hay tareas todavía.</p>}

      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            {tarea.texto} <button onClick={() => borrarTarea(tarea.id)}>x</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ListaTareas;