import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <>
        <header className="bg-orange-600 w-full py-10 px-5">
            <div className="text-right ">
                <Link to="/" className="pr-10 text-2xl hover:text-yellow-300">Home</Link>
                <Link to="/doces" className="pr-10 text-2xl hover:text-yellow-300">Doces</Link>
                <Link to="/salgados" className="pr-10 text-2xl hover:text-yellow-300">Salgados</Link>
                <Link to="/saladas" className="pr-10 text-2xl hover:text-yellow-300">Saladas</Link>
                <Link to="/bebidas" className="pr-10 text-2xl hover:text-yellow-300">Bebidas</Link>
                <Link to="/login" className="pr-30 text-2xl hover:text-yellow-300">Login</Link>
            </div>
            
        </header>
        </>
    )
}
export default Header;