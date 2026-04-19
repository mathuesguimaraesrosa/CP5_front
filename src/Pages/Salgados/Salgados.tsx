import { receitasSalgadas } from "../../Data/receitasSalgadas";
import { Link } from "react-router-dom";

{receitasSalgadas.map((item) => (
  <div key={item.id}>

    <img src={item.imagem} />

    <h2>{item.nome}</h2>

    <Link to={`/receita/${item.id}`}>
      <button>Ver receita</button>
    </Link>

  </div>
))}

const Salgados = () =>{
    return(
        <>
            <h1>TESTE SALGADOS</h1>
            <div className="p-6">

                <h1 className="text-2xl font-bold mb-6 text-center">
                    Pratos Salgados 👇
                </h1>

                <div className="grid grid-cols-3 gap-6">

                    {receitasSalgadas.map((item) => (
                        <div key={item.id} className="bg-white p-4 rounded shadow">

                            <img
                            src={item.imagem}
                            className="w-full h-40 object-cover"
                            />

                            <h2 className="font-bold mt-2">
                            {item.nome}
                            </h2>

                            <p>{item.descricao}</p>
                        </div>
                    ))}
                </div>
             </div>
        </>
    )
}
export default Salgados;