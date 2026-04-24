# 🍽️ Sabores do Front

Um site moderno de receitas desenvolvido com **React + Vite + Tailwind CSS**, focado em experiência visual, organização por categorias e navegação fluida.

---

## 🚀 Sobre o projeto

O **Sabores do Front** é um catálogo de receitas interativo que permite ao usuário explorar diferentes categorias como:

* 🍛 Pratos Salgados
* 🍰 Doces e Sobremesas
* 🥗 Saladas
* 🥤 Bebidas & Drinks
* 💪 Receitas Fit
* 🆕 Entradas

O projeto foi pensado com foco em:

* UI moderna (estilo apps reais)
* Componentização
* Escalabilidade (facilmente integrável com API futura)

---

## 🧩 Tecnologias utilizadas

* ⚛️ React
* ⚡ Vite
* 🎨 Tailwind CSS
* 🔀 React Router DOM
* 📦 JSON como base de dados

---

## 📁 Estrutura do projeto

```
src/
│
├── Components/
│   ├── Banner/
│   ├── Header/
│   ├── Footer/
│   ├── Layout/
│   └── CardReceita/
│
├── Pages/
│   ├── Home/
│   ├── Salgados/
│   ├── Doces/
│   ├── Saladas/
│   ├── Bebidas/
│   ├── Fit/
│   ├── NovasReceitas/
│   └── Receita/
│
├── data/
│   ├── receitasSalgadas.js
│   ├── receitasDoces.js
│   ├── receitasSaladas.js
│   ├── receitasBebidas.js
│   ├── receitasFit.json
│   └── receitasNovas.js
│
├── App.tsx
├── main.tsx
└── App.css
```

---

## ✨ Funcionalidades

### 🔄 Banner dinâmico

* Troca automática a cada 3 segundos
* Botões de navegação manual
* Efeito **fade + zoom suave**
* Overlay com degradê

---

### 🧭 Navegação por categorias

* Menu com rotas dinâmicas
* Organização clara por tipo de receita

---

### 🧾 Página de receitas

* Lista com cards estilizados
* Hover com animação
* Layout responsivo

---

### 🔍 Página individual de receita

* Imagem destacada
* Ingredientes organizados
* Modo de preparo em etapas

---

### 🎨 Design moderno

* Tipografia:

  * **Inter** → textos
  * **Poppins** → títulos
* Cards com:

  * borda
  * sombra
  * animação hover
* Banner estilo app (Netflix/iFood)

---

## 📦 Como rodar o projeto

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/seu-repo.git

# Entrar na pasta
cd seu-repo

# Instalar dependências
npm install

# Rodar o projeto
npm run dev
```

---

## 🌐 Rotas principais

| Rota             | Descrição          |
| ---------------- | ------------------ |
| `/`              | Home               |
| `/salgados`      | Pratos salgados    |
| `/doces`         | Doces              |
| `/saladas`       | Saladas            |
| `/bebidas`       | Bebidas            |
| `/fit`           | Receitas fit       |
| `/novasReceitas` | Novidades          |
| `/receita/:id`   | Receita individual |

---

## 💡 Melhorias futuras

* 🔍 Busca de receitas
* ⭐ Favoritos
* 📱 Responsividade mobile completa
* 🌐 Integração com API real
* 🧠 Filtro por categoria/objetivo (fit, low carb, etc)
* 🎞️ Animações avançadas (swiper)

---

## 🎯 Objetivo do projeto

Esse projeto foi desenvolvido com foco em:

* Aprendizado prático de React
* Organização de código
* Criação de interfaces modernas
* Simulação de um produto real

---

## 🧠 Observação final

Este projeto pode evoluir facilmente para:

* um app completo de receitas
* um e-commerce de nicho (food)
* ou até um SaaS culinário

---

🔥 Projeto com estrutura profissional e pronto para evoluir.
