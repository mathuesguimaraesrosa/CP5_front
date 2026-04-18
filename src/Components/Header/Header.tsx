import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <>
        <header className="bg-orange-600 w-full py-10 px-5">
            <div className="text-center">
                <Link to="/" className="pr-10 pl-20 gap-20 text-2xl hover:text-yellow-300">HOME</Link>
                <Link to="/salgados" className="pr-10 text-2xl hover:text-yellow-300">PRATOS SALGADOS</Link>
                <Link to="/doces" className="pr-10 text-2xl hover:text-yellow-300">DOCES E SOBREMESAS</Link>
                <Link to="/saladas" className="pr-10 text-2xl hover:text-yellow-300">SALADAS</Link>
                <Link to="/bebidas" className="pr-10 text-2xl hover:text-yellow-300">BEBIDAS E DRINKS</Link>
                <Link to="/login" className="pr-30 text-2xl hover:text-yellow-300">LOGIN/CRIAR CONTA</Link>
            </div>
            
        </header>
        </>
    )
}
export default Header;