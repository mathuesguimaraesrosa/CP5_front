import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormValues ={
  nome : string;
  sobrenome : string;
  email: string;
  senha : string;
  confSenha : string;
  termos : boolean;
}

const CriarConta = () =>{

  const { register, watch, handleSubmit, formState : {  errors } } = useForm<FormValues>();
  const navigate = useNavigate();
  
  const Enviar: SubmitHandler<FormValues> = (data) => {
  const usuario = {
    nome: data.nome,
    sobrenome: data.sobrenome,
    email: data.email,
    senha: data.senha
  };

  localStorage.setItem("user", JSON.stringify(usuario));

  console.log("✅ Usuário cadastrado:", usuario);
  alert("Conta criada com sucesso!");
  navigate("/login");
};

  const senha = watch("senha");

  const inputClass = `
    w-full px-4 py-3 mb-5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700
    focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 focus:bg-white transition-all duration-200`;
  return(
    <>
    <section className="py-16 px-6 max-w-2xl mx-auto min-h-[65vh]">
      <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
        <form onSubmit={ handleSubmit(Enviar) }>
          <div>
            <label  htmlFor="nome">Nome:</label>
            <input className={inputClass} { ...register(
              "nome", { 
                required : true 
              }, ) } />
            { errors.nome && <span style={{ color:"#f00" }}>Campo nome é obrigatório!</span> }
          </div>
          <div>
            <label htmlFor="sobrenome">Sobrenome:</label>
            <input className={inputClass} { ...register(
              "sobrenome", { 
                required : "Campo sobrenome é obrigatório!",
              }) } />
            { errors.sobrenome && <span style={{ color:"#f00" }}>{ errors.sobrenome.message }</span> }
          </div>

          <div>
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
          <div>
            <label>Senha: </label>
            <input className={inputClass} type="password"
              { ...register("senha",{
                required : "A senha é obrigatória!",
                minLength : { value : 6, message : "Mínimo de 6 caracteres" },
                validate : value =>
                  !/[A-Z]/.test(value) ? "Deve conter letras maíusculas!" :
                  !/[a-z]/.test(value) ? "Deve conter letras minúsculas!" :
                  !/\d/.test(value) ? "Deve conter um número!" :
                  !/[^A-Za-z0-9]/.test(value) ? "Deve conter um caracter especial!" :
                  true
              }) }
            />
            { errors.senha && <span style={{ color:"#f00" }}>{ errors.senha.message }</span> }
          </div>
          <div>
            <label>Confirmação de Senha: </label>
            <input className={inputClass} type="password"
              { ...register("confSenha",{
                required : "A Confirmação da Senha é obrigatória!",
                validate : (value) =>
                  value === senha || "As senhas não coincidem!"
              })}
            />
            { errors.confSenha && <span style={{ color:"#f00" }}>{ errors.confSenha.message }</span> }
          </div>
          <div>
            <input type="checkbox"
              { ...register("termos",{
                required : "Termos é obrigatório"
              })}
            />
            <label>Termos</label>
            { errors.termos && <span style={{ color:"#f00" }}>{ errors.termos.message }</span> }
          </div>
          <div>
            <input type="submit" className="w-full px-4 py-3 bg-blue-600 text-white border border-gray-200 rounded-lg text-sm " />
          </div>
          
        </form>
      </div>
    </section>
      
    </>
  )
}
export default CriarConta;