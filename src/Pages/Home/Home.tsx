import { Link } from 'react-router-dom'
import Banner from '../../Components/Banner/Banner';




const cards = [
  { icon: '/Cards/bbbb-removebg-preview.png', alt: '/Public/Cards/bbbb-removebg-preview.png', title: 'Pratos Salgados', desc: 'Receitas salgadas para você divorciar do ifood!!!' ,link:'/salgados' },
  { icon: '/Cards/aaaa-removebg-preview.png', alt: 'Public/Cards/aaaa-removebg-preview.png', title: 'Pratos doces', desc: 'Receitas doces para te engordar pra caralho!!!', link:'/doces' },
  { icon: '/Cards/pratos-salada.png', alt: 'Public/Cards/pratos-salada.png', title: 'Saladas', desc: 'Área dos veganos!!!', link:'/saladas' },
  { icon: '/Cards/image-removebg-preview.png', alt: 'Public/Cards/image-removebg-preview.png', title: 'Drinks & Bebidas', desc: 'Drinks para você esquecer até seu nome!!!', link:'/bebidas' },
  { icon: '/Cards/ee-removebg-preview.png', alt: 'Public/Cards/ee-removebg-preview.png', title: 'Entradas', desc: 'Entradas simples e rápidas!!!', link:'/novasReceitas' },
  { icon: '/Cards/para-secar.jpg', alt: 'Public/Cards/para-secar.jpg', title: 'Receitas Fit', desc: 'Para secar!!!' },
  ]



const Home = () =>{

    return(
        <>
            <div >
                <header className={`px-6 py-20 md:py-28 min-h-[80vh] flex items-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]`}>
                <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1 text-white">
                    <h2 className="text-accent uppercase tracking-[10px] text-sm font-semibold mb-3">
                        Passe para o lado 👇
                    </h2>
                    <div>
                        <Banner />
                        <div className="max-w-7xl mx-auto">
                        </div>
                        
                    </div>
                    
                    {/*}
                    <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-8">
                        Atualizadas diariamente:
                    </p> 
                    */}
                    
                </div>
                   {/*} <div className="flex-1 hidden md:flex justify-center">
                    <img src="......." alt="Banner" className="max-h-96 object-contain" />
                    </div> */}
            </div>
                </header>
                
                <section className="py-16 px-6 max-w-6xl mx-auto">
                    <h2 className={`text-3xl font-bold text-center mb-10`}>
                        Qual faz mais sentido pra você no momento?
                        Navegue entre:
                    </h2>
                    <div className="items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 ">
                        {cards.map((c) => (
                            <Link to={c.link ?? '/'} key={c.title} className="relative group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 overflow-hidden cursor-pointer text-center">
                                <img src={c.alt} alt={c.alt} className="mx-auto w-14 h-14 mb-4 transition-opacity duration-300 group-hover:opacity-0 " />
                                <h3 className="text-primary font-bold text-lg mb-2 group-hover:opacity-0">{c.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed group-hover:opacity-0">{c.desc}</p>
                                <div className="absolute inset-0 bg-accent text-white flex flex-col justify-center items-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-black hover:bg-orange-600"><h1>Clique e Confira!</h1>
                                {/* <h3 className="font-bold text-lg mb-2">{c.hoverTitle}</h3>
                                <p className="text-sm leading-relaxed">{c.hoverDesc}</p> */}
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div> 
        </>
    )
}
export default Home;