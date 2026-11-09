import { useEffect, useState } from "react";

function Reloj() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    console.log("Reloj iniciado");
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => {
      console.log("Reloj detenido");
      clearInterval(intervalo);
    };
  }, []);

  return (
    <section className="tarjeta">
      <h2>Reloj</h2>
      <p className="reloj">{hora.toLocaleTimeString("es-MX")}</p>
    </section>
  );
}

export default Reloj;