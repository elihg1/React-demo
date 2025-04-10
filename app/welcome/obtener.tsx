import { useState } from "react";

const API_URL = "https://pokeapi.co/api/v2/";

export default function Obtener() {
  const [data, setData] = useState<any>();
  const [nombre, setNombre] = useState<string>("ditto");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function obtenerPokemon() {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/pokemon/${nombre}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Input de nombre" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Escribe el nombre de un Pokémon"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          onClick={obtenerPokemon}
          disabled={isLoading}
        >
          {isLoading ? "Buscando..." : "Buscar"}
        </button>
      </div>
      
      {data && (
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <h2 className="text-xl font-bold capitalize">{data.name}</h2>
          <p className="text-gray-600">Pokédex ID: {data.id}</p>
          <div className="flex justify-center mt-2">
            <img 
              className="max-w-full h-auto"
              alt={`Imagen de ${data.name}`} 
              src={data.sprites?.front_default || data.sprites?.back_default} 
            />
          </div>
        </div>
      )}
    </div>
  );
}