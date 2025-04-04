import { useState } from "react";

export default function Saludar(props: any) {
  // Código JS
  let [borrado, setBorrado] = useState(false);
   !false && true;
   !true && true;
  // Código HTML
  return (
    <div>
      {
        !borrado && (
          <p>
            {props.nombre} {props.apellidos}
          </p>
        )
      }
      
      <button
        onClick={
          function () {
            setBorrado(true)
          }
        }
      >
        Eliminar persona
      </button>
    </div>
  );
}
