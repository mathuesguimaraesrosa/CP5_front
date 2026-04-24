import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "HOME" },
  { to: "/entradas", label: "ENTRADAS" },
  { to: "/salgados", label: "PRATOS SALGADOS" },
  { to: "/doces", label: "DOCES E SOBREMESAS" },
  { to: "/saladas", label: "SALADAS" },
  { to: "/bebidas", label: "BEBIDAS E DRINKS" }, 
  { to: "/login", label: "LOGIN/CRIAR CONTA" },
];

const Header = () =>{
    const [aberto, setAberto] = useState(false);

    const linkClasses =
        "no-underline text-base px-4 py-2 font-medium rounded transition-all duration-300 ease-in-out hover:text-yellow-300";
    
    return(
        <>
        <header className="bg-orange-600 w-full py-10 px-5">
            <nav className="flex items-center justify-between h-full px-[5%]">

                <button
                onClick={() => setAberto(true)}
                className="flex flex-col gap-1 md:hidden"
                >
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
                </button>

                {/* Menu desktop */}
                <div className="hidden md:flex items-center gap-6">
                {links.map((link) => (
                    <Link key={link.to} to={link.to} className={linkClasses}>
                    {link.label}
                    </Link>
                ))}
                
                </div>
            </nav>

            {aberto && (
                <div
                onClick={() => setAberto(false)}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                />
            )}

            <div
                className={`fixed top-0 left-0 h-full w-64 bg-orange-600 shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
                aberto ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="p-4 flex justify-between items-center border-b">
                <span className="font-bold">Menu</span>
                <button onClick={() => setAberto(false)} className="text-xl">✕</button>
                </div>

                <nav className="flex flex-col items-center gap-4 mt-4">
                {links.map((link) => (
                    <Link key={link.to} to={link.to} className={linkClasses}>
                    {link.label}
                    </Link>
                ))}
                </nav>
            </div>
        </header>
        </>
    )
}
export default Header;