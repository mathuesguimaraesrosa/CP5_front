
import { useParams } from "react-router-dom";
import { receitas } from "../../Data/receitas";

{/*type tipoReceita = {
  id: number;
  nome: string;
  imagem: string;
  descricao: string;
  ingredientes: string[];
  preparo: string[];
}; */}

export default function Receita() {
  const { id } = useParams();

  const receita = receitas.find(
    (item: { id: number; }) => item.id === Number(id)
  );

  if (!receita) {
    return <p>Receita não encontrada</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">

      <img
        src={receita.imagem}
        className="w-full h-80 object-cover"
      />
      
      <h1 className="text-4xl font-bold mt-4">
        {receita.nome}
      </h1>

      <p className="mt-2 text-2xl">{receita.descricao}</p>

      <h2 className="mt-6 text-3xl font-bold">Ingredientes:</h2>
      <ul className="list-disc ml-6 text-xl">
        {receita.ingredientes.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>

      <h2 className="mt-6 text-3xl font-bold">Modo de preparo:</h2>
      <ol className="list-decimal ml-6 text-xl">
        {receita.preparo.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>

    </div>
  );
}