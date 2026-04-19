

import { Link } from "react-router-dom";

interface Receita {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
}

interface CardReceitaProps {
  receita: Receita;
}

export default function CardReceita({ receita }: CardReceitaProps) {
  return (
    <div className="bg-white rounded shadow p-4">

      <img
        src={receita.imagem}
        className="w-full h-40 object-cover"
      />

      <h2 className="font-bold mt-2">
        {receita.nome}
      </h2>

      <p>{receita.descricao}</p>

      <Link to={`/receita/${receita.id}`}>
        <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
          Ver receita
        </button>
      </Link>

    </div>
  );
}