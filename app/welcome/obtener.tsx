import { useState, useEffect } from "react";

const API_URL = "https://pokeapi.co/api/v2/"


export default function Obtener(){
  let [data, setData] = useState<any>();
  let [nombre, setNombre] = useState<string>("ditto");

  useEffect(function () {
    async function obtenerDitto(){
      const response = await fetch(`${API_URL}/pokemon/${nombre}`)
      const data = await response.json();
      return data;
    }

    obtenerDitto().then((value) => {
      setData(value);
    })

  }, [nombre])

  return (
    <div>
      <input aria-label="Input de nombre" value={nombre} onChange={(e) => {
        setNombre(e.target.value);
      }}/>
      Pokedex ID: {data?.id}
      <img alt="La mejor imágen" src={data?.sprites?.back_default} />
    </div>
  )
}