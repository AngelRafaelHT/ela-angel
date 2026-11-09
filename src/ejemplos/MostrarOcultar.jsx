import { useState } from "react";

function MostrarOcultar() {
  const [visible, setVisible] = useState(false);

  return (
    <section className="tarjeta">
      <h2>Mostrar y ocultar</h2>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Ocultar" : "Mostrar"} mensaje
      </button>
      {visible && <p>🎉 ¡React actualiza la pantalla cuando cambia el estado!</p>}
    </section>
  );
}

export default MostrarOcultar;