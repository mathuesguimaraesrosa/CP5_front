import { useState } from "react";
import { useForm } from "react-hook-form";

type ReceitaForm = {
  nomeReceita: string;
  categoria: string;
  tempoPreparo: string;
  ingredientes: string;
  modoPreparo: string;
  autor: string;
  email: string;
  imagem: string;
};

const Entradas = () => {
  const [mensagemSucesso, setMensagemSucesso] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReceitaForm>();

  const enviarReceita = (dados: ReceitaForm) => {
    console.log("Receita enviada:", dados);

    setMensagemSucesso(
      `Receita "${dados.nomeReceita}" foi enviada com sucesso! Ela será analisada para futuras atualizações de receitas do site.`
    );

    reset();
  };

  return (
    <main className="min-h-screen bg-orange-50 px-4 py-10 sm:px-6 lg:px-20">
      <section className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-orange-700 sm:text-4xl">
            Envie sua Receita
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-700 sm:text-lg">
            Compartilhe uma receita típica nacional para que ela possa ser
            analisada e adicionada futuramente ao Sabores do Front.
          </p>
        </div>

        {mensagemSucesso && (
          <div className="mb-6 rounded-xl border border-green-300 bg-green-100 p-4 text-center font-medium text-green-800">
            {mensagemSucesso}
          </div>
        )}

        <form
          onSubmit={handleSubmit(enviarReceita)}
          className="rounded-2xl bg-white p-6 shadow-lg sm:p-8"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-semibold text-gray-800">
                Nome da receita
              </label>
              <input
                type="text"
                placeholder="Ex: Feijoada completa"
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
                {...register("nomeReceita", {
                  required: "O nome da receita é obrigatório.",
                  minLength: {
                    value: 3,
                    message: "Digite pelo menos 3 caracteres.",
                  },
                })}
              />
              {errors.nomeReceita && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.nomeReceita.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block font-semibold text-gray-800">
                Categoria
              </label>
              <select
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
                {...register("categoria", {
                  required: "Selecione uma categoria.",
                })}
              >
                <option value="">Selecione</option>
                <option value="Pratos Salgados">Pratos Salgados</option>
                <option value="Doces e Sobremesas">Doces e Sobremesas</option>
                <option value="Saladas">Saladas</option>
                <option value="Bebidas">Bebidas</option>
              </select>
              {errors.categoria && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.categoria.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block font-semibold text-gray-800">
                Tempo de preparo
              </label>
              <input
                type="text"
                placeholder="Ex: 40 minutos"
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
                {...register("tempoPreparo", {
                  required: "Informe o tempo de preparo.",
                })}
              />
              {errors.tempoPreparo && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.tempoPreparo.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block font-semibold text-gray-800">
                Autor da receita
              </label>
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
                {...register("autor", {
                  required: "Informe o nome do autor.",
                })}
              />
              {errors.autor && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.autor.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block font-semibold text-gray-800">
                E-mail
              </label>
              <input
                type="email"
                placeholder="seuemail@email.com"
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
                {...register("email", {
                  required: "O e-mail é obrigatório.",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Digite um e-mail válido.",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block font-semibold text-gray-800">
                URL da imagem
              </label>
              <input
                type="text"
                placeholder="https://..."
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
                {...register("imagem")}
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="mb-2 block font-semibold text-gray-800">
              Ingredientes
            </label>
            <textarea
              rows={5}
              placeholder="Digite os ingredientes da receita..."
              className="w-full resize-none rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
              {...register("ingredientes", {
                required: "Informe os ingredientes.",
                minLength: {
                  value: 10,
                  message: "Descreva melhor os ingredientes.",
                },
              })}
            />
            {errors.ingredientes && (
              <p className="mt-1 text-sm text-red-600">
                {errors.ingredientes.message}
              </p>
            )}
          </div>

          <div className="mt-6">
            <label className="mb-2 block font-semibold text-gray-800">
              Modo de preparo
            </label>
            <textarea
              rows={6}
              placeholder="Explique o passo a passo da receita..."
              className="w-full resize-none rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
              {...register("modoPreparo", {
                required: "Informe o modo de preparo.",
                minLength: {
                  value: 20,
                  message: "Digite um modo de preparo mais completo.",
                },
              })}
            />
            {errors.modoPreparo && (
              <p className="mt-1 text-sm text-red-600">
                {errors.modoPreparo.message}
              </p>
            )}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="w-full rounded-xl bg-orange-600 px-8 py-3 text-lg font-bold text-white transition hover:bg-orange-700 sm:w-auto"
            >
              Enviar Receita
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Entradas;