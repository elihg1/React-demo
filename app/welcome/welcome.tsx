// welcome.tsx
import PokemonRoute from "../routes/pokemon"; 

export function Welcome() {
  return (
    <div className="flex flex-col items-center gap-8 p-4">
      <div className="text-3xl font-bold">¡Bienvenido a la Pokedex!</div>
      <div className="text-xl">
        <p>Explora el  mundo de los Pokémon</p>
      </div>
      
      {/* Llamada al componente PokemonRoute */}
      <PokemonRoute />
    </div>
  );
}