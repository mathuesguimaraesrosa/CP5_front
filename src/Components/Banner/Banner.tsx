import { useState, useEffect } from "react";

export default function Banner() {

  const imagens = [
    "/Public/Banners/receitas-salgadas.png",
    "/Public/Banners/receitas-doces.jpg",
    "/Public/Banners/saladas.jpg",
    "/Public/Banners/drinks.webp",
    "/Public/Banners/novas-receitas.jpg"
  ];

  const [index, setIndex] = useState(0);

  const proximo = () => {
    setIndex((prev) => (prev + 1) % imagens.length);
  };

  const anterior = () => {
    setIndex((prev) => (prev - 1 + imagens.length) % imagens.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      proximo();
    }, 3000); // 3 segundos

    return () => clearInterval(interval); // limpa quando muda
  }, []);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden rounded-2xl shadow-xl">
      
      <img
        src={imagens[index]}
        className="w-full h-full object-cover"
        alt="Banner"
      />

      <button
        onClick={anterior}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-grey text-white px-3 py-2 rounded"
      >
        ◀
      </button>

      <button
        onClick={proximo}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-grey text-white px-3 py-2 rounded"
      >
        ▶
      </button>
    </div>
  );
}