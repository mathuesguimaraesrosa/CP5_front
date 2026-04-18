import { Link } from "react-router-dom";

const Footer = () =>{
    return(
        <>
        <footer className="bg-gray-300 w-full py-10 px-5">
            <div className="text-center">
                <Link to="/novasReceitas" className="hover:text-yellow-300 text-2xl">Mande novas receitas aqui!</Link>
            </div>
            <div className="ml-20 ">
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