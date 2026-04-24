import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

type FormValues ={
  email: string;
  senha : string;
}

const Login = () =>{

  const { register, handleSubmit, formState : {  errors } } = useForm<FormValues>();

  const Enviar: SubmitHandler<FormValues> = (data) => {
  const userStorage = localStorage.getItem("user");

  if (!userStorage) {
    alert("Nenhum usuário cadastrado!");
    return;
  }

  const usuario = JSON.parse(userStorage);

  if (
    data.email === usuario.email &&
    data.senha === usuario.senha
  ) {
    alert("✅ Login realizado!");

    localStorage.setItem("auth", "true");

    console.log("Usuário logado:", usuario);

  } else {
    alert("❌ Email ou senha inválidos!");
  }
};

 const inputClass = `
    w-full px-4 py-3 mb-5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700
    focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 focus:bg-white transition-all duration-200`;

  return(
    <>
        <section className="py-16 px-6 max-w-2xl mx-auto min-h-[64.7vh]">
            <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
                <h1>Realize seu Login: </h1>
                <form onSubmit={ handleSubmit(Enviar) }>
                
                    <div >
                        <label htmlFor="email">Email:</label>
                        <input className={inputClass} { ...register("email", { 
                            required : "O email é obrigatório!",
                            pattern :{
                            value : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message : "Digite um email válido!"
                            }
                            
                        }) } />
                        { errors.email && <span style={{ color:"#f00" }}>{ errors.email.message }</span> }
                    </div>
                    <div >
                        <label>Senha: </label>
                        <input className={inputClass} type="password"
                            { ...register("senha",{
                            required : "A senha é obrigatória!",
                            
                            }) }
                        />
                        { errors.senha && <span style={{ color:"#f00" }}>{ errors.senha.message }</span> }
                    </div>
                    
                    
                    <button type="submit" className="w-full px-4 py-3 bg-blue-600 text-white border border-gray-200 rounded-lg text-sm mt-20">Enviar</button>
                </form>
                <Link to="/criarConta" className="text-blue-600 hover:text-yellow-400">Criar Conta</Link>
            </div>
        </section>
    </>
  )
}
export default Login;