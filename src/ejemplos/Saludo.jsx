import { useState } from "react";

function Saludo() {
  const [nombre, setNombre] = useState("");

  const enMayusculas = nombre.toUpperCase();
  const alReves = nombre.split("").reverse().join("");

  return (
    <section className="tarjeta">
      <h2>Saludo</h2>
      <input
        type="text"
        value={nombre}
        onChange={(evento) => setNombre(evento.target.value)}
        placeholder="Escribe tu nombre"
      />
      <p>{nombre === "" ? "¿Cómo te llamas?" : `¡Hola, ${nombre}! 👋`}</p>
      <p>Tu nombre tiene {nombre.length} letras.</p>
      {nombre !== "" && (
        <>
          <p>En mayúsculas: {enMayusculas}</p>
          <p>Al revés: {alReves}</p>
        </>
      )}
    </section>
  );
}

export default Saludo;