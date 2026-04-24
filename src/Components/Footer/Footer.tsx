import { Link } from "react-router-dom";

const Footer = () =>{
    return(
        <>
        <footer className="bg-orange-600 w-full py-10 px-5">
            <div className="text-center">
                <Link to="/entradas" className="hover:text-yellow-300 text-2xl">Clique aqui para enviar suas receitas!</Link>
                
            </div>
            <div className="ml-20 mt-10">
                <h1 className=""><strong>Integrantes:</strong></h1>
                <h1 className="">Matheus Guimarães Rosa RM567912</h1>
                <h1 className="">Manuel Pedro de Gouveia Neto RM567458</h1>
                <h1 className="">Lucas Shida Rodrigues da Costa RM568194</h1>
                <h1 className="">Pedro Henrique Pinheiro Falchi RM566967</h1>
            </div>
        </footer>
        </>
    )
}
export default Footer;