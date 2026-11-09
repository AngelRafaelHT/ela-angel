import { useEffect, useState } from "react";

function Contador() {
  const [cuenta, setCuenta] = useState(0);
  const [paso, setPaso] = useState(1);

  useEffect(() => {
    document.title = `Clics: ${cuenta}`;
  }, [cuenta]);

  return (
    <section className="tarjeta">
      <h2>Contador</h2>
      <p>Has hecho clic {cuenta} veces.</p>
      
      <p>
        Sumar de{" "}
        <input
          type="number"
          min="1"
          style={{ width: "70px" }}
          value={paso}
          onChange={(e) => setPaso(Number(e.target.value))}
        />
        en {paso}
      </p>

      <button onClick={() => setCuenta(cuenta + paso)}>+{paso}</button>
      <button 
        onClick={() => setCuenta(cuenta - paso)} 
        disabled={cuenta - paso < 0}
      >
        -{paso}
      </button>
      <button onClick={() => setCuenta(0)}>Reiniciar</button>
    </section>
  );
}

export default Contador;