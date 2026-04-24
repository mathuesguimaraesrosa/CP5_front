import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type CadastroForm = {
  nome: string;
  email: string;
  senha: string;
};

const CriarConta = () => {
  const [mensagemSucesso, setMensagemSucesso] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CadastroForm>();

  const cadastrarUsuario = (dados: CadastroForm) => {
    console.log("Usuário cadastrado:", dados);

    setMensagemSucesso(`Conta criada com sucesso, ${dados.nome}!`);
    reset();
  };

  return (
     <main className="min-h-screen bg-[url('/Banners/fundo-cadastro.png')] bg-cover bg-center bg-no-repeat px-4 py-10">
      <section className="mx-auto flex min-h-[80vh] max-w-6xl items-center justify-center">
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
          <h1 className="text-center text-3xl font-bold text-orange-600">
            Criar Conta
          </h1>

          <p className="mt-2 text-center text-gray-600">
            Cadastre-se para salvar e enviar suas receitas favoritas.
          </p>

          <div className="mt-6 space-y-3">
            <button className="w-full rounded-full bg-blue-700 py-3 font-bold text-white transition hover:bg-blue-800">
              Cadastre-se com o Facebook
            </button>

            <button className="w-full rounded-full bg-red-500 py-3 font-bold text-white transition hover:bg-red-600">
              Cadastre-se com o Google
            </button>
          </div>

          <div className="my-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-gray-300"></span>
            <span className="font-semibold text-gray-600">Ou</span>
            <span className="h-px flex-1 bg-gray-300"></span>
          </div>

          {mensagemSucesso && (
            <p className="mb-4 rounded-lg bg-green-100 p-3 text-center font-medium text-green-700">
              {mensagemSucesso}
            </p>
          )}

          <form onSubmit={handleSubmit(cadastrarUsuario)} className="space-y-5">
            <div>
              <label className="mb-2 block font-bold text-gray-800">
                Nome
              </label>
              <input
                type="text"
                placeholder="Digite seu nome"
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
                {...register("nome", {
                  required: "O nome é obrigatório.",
                  minLength: {
                    value: 3,
                    message: "Digite pelo menos 3 caracteres.",
                  },
                })}
              />
              {errors.nome && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.nome.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block font-bold text-gray-800">
                E-mail
              </label>
              <input
                type="email"
                placeholder="exemplo@email.com"
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
              <label className="mb-2 block font-bold text-gray-800">
                Senha
              </label>
              <input
                type="password"
                placeholder="Mínimo de 8 caracteres"
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
                {...register("senha", {
                  required: "A senha é obrigatória.",
                  minLength: {
                    value: 8,
                    message: "A senha deve ter no mínimo 8 caracteres.",
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d).+$/,
                    message: "A senha deve conter letras e números.",
                  },
                })}
              />
              {errors.senha && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.senha.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-orange-500 py-3 text-lg font-bold text-white transition hover:bg-orange-600"
            >
              Cadastrar
            </button>
          </form>

          <p className="mt-6 text-center font-medium text-gray-700">
            Já possui uma conta?{" "}
            <Link to="/login" className="font-bold text-orange-600 hover:underline">
              Entrar.
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default CriarConta;