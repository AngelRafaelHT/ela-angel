import { useEffect, useState } from "react";

function Temporizador() {
  const [segundos, setSegundos] = useState(10);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    // Si no está activo o llegó a 0, no programa nada
    if (!activo || segundos === 0) return;

    // Programa restar 1 segundo después de 1000 ms
    const espera = setTimeout(() => {
      setSegundos(segundos - 1);
    }, 1000);

    // Función de limpieza para cancelar el timer si se pausa o cambia el estado
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

export default Temporizador;