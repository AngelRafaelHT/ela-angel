import { useEffect, useState } from "react";
import Reloj from "./ejemplos/Reloj";
import Contador from "./ejemplos/Contador";
import Saludo from "./ejemplos/Saludo";
import MostrarOcultar from "./ejemplos/MostrarOcultar";
import ListaTareas from "./ejemplos/ListaTareas";


function Temporizador() {
  const [segundos, setSegundos] = useState(10);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    if (!activo || segundos === 0) return;

    const espera = setTimeout(() => {
      setSegundos(segundos - 1);
    }, 1000);

    return () => clearTimeout(espera);
  }, [activo, segundos]);

  function reiniciar() {
    setActivo(false);
    setSegundos(10);
  }

  return (
    <section className="tarjeta">
      <h2>Temporizador</h2>
      <p className="reloj">{segundos === 0 ? "¡Tiempo! ⏰" : segundos}</p>
      <button onClick={() => setActivo(!activo)} disabled={segundos === 0}>
        {activo ? "Pausar" : "Iniciar"}
      </button>
      <button onClick={reiniciar}>Reiniciar</button>
    </section>
  );
}

function App() {
  const [verReloj, setVerReloj] = useState(true);

  return (
    <main>
      <h1>Practicando Hooks de React</h1>

      <section className="tarjeta">
        <button onClick={() => setVerReloj(!verReloj)}>
          {verReloj ? "Quitar" : "Poner"} el reloj
        </button>
      </section>

      {verReloj && <Reloj />}
      <Contador />
      <Saludo />
      <MostrarOcultar />
      <ListaTareas />
      <Temporizador />
    </main>
  );
}

export default App;