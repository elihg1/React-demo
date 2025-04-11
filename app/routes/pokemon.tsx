// pokemon.tsx
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import type { PokeResponse } from "./interfaces/pokemon";

export default function PokemonRoute() {
  const [data, setData] = useState<PokeResponse | undefined>();

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-6xl">
        <h1 className="bg-blue-600 text-white py-3 text-center text-2xl font-semibold rounded-t-lg">
          Buscador de Pokémon
        </h1>
        <div className="flex flex-col lg:flex-row bg-white p-6 rounded-b-lg shadow-md gap-6">
          <PokemonCard data={data} setData={setData} />
          
          {data && (
            <div className="flex-1 p-6 border-2 border-gray-200 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-blue-700">
                Detalles de {data.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p><strong>ID:</strong> {data.id}</p>
                  <p><strong>Altura:</strong> {(data.height / 10).toFixed(1)} m</p>
                  <p><strong>Peso:</strong> {(data.weight / 10).toFixed(1)} kg</p>
                </div>
                <div>
                  <p><strong>Habilidades:</strong></p>
                  <ul className="list-disc pl-5 capitalize">
                    {data.abilities.map((ability, index) => (
                      <li key={index}>{ability.ability.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}