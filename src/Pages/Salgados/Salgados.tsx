import { receitas } from "../../Data/receitas";
import { Link } from "react-router-dom";

{receitas.map((item) => (
  <div key={item.id}>

    <img src={item.imagem} />

    <h2>{item.nome}</h2>

  </div>
))}

const Salgados = () =>{
    return(
        <>
            <div className="p-6">

                <h1 className="text-2xl font-bold mb-6 text-center">
                    Pratos Salgados 👇
                </h1>

                <div className="grid grid-cols-3 gap-6 ">

                    {receitas.map((item) => {
                        if(item.id <= 21){
                            return(
                                <Link to={`/receita/${item.id}`} key={item.id} className="bg-white p-4 rounded-xl shadow border-2 border-orange-600">

                                    <img
                                    src={item.imagem}
                                    className="w-full h-40 object-cover rounded-lg shadow-xl"
                                    />

                                    <h2 className="font-bold mt-2 ">
                                    {item.nome}
                                    </h2>

                                    <p>{item.descricao}</p>
                                </Link>
                            )
                        }
                        
                    })}
                </div>
             </div>
        </>
    )
}
export default Salgados;