import { receitas } from "../../Data/receitas";
import { Link } from "react-router-dom";

{receitas.map((item) => (
  <div key={item.id}>

    <img src={item.imagem} />

    <h2>{item.nome}</h2>

  </div>
))}

const Entradas = () =>{
    return(
        <>
            <div className="p-6">

                <h1 className="text-2xl font-bold mb-6 text-center">
                    Entradas 👇
                </h1>

                <div className="grid grid-cols-3 gap-6">

                    {receitas.map((item) => {
                        if(item.id > 75 && item.id <= 87){
                            return(
                                <Link to={`/receita/${item.id}`} key={item.id} className="bg-white p-4 rounded shadow">

                                    <img
                                    src={item.imagem}
                                    className="w-full h-40 object-cover"
                                    />

                                    <h2 className="font-bold mt-2">
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
export default Entradas;