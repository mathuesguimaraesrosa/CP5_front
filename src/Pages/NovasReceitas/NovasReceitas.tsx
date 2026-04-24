import { useState } from 'react'
import { useForm, type SubmitHandler } from "react-hook-form";

type FormValues ={
  nome: string,
  descricao:string,
  ingredientes:string,
  modoPreparo:string,
}

const NovasReceitas = () => {
  const [enviado, setEnviado] = useState(false)
  const{ register, handleSubmit,formState : {errors},reset } = useForm<FormValues>(); 

  const Enviar:  SubmitHandler<FormValues> = () =>{
    setEnviado(true)
    reset();
  }

  const inputClass =
    'w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 ' +
    'focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 focus:bg-white transition-all duration-200' 
  return (
    <>
      
      <section className="py-16 px-6 max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
          {enviado ? (
            <div className="text-center py-8">
              <p className="text-5xl mb-4">✅</p>
              <h3 className="text-primary font-bold text-2xl mb-3">Mensagem enviada com sucesso!</h3>
              <p className="text-gray-500 mb-8">Entraremos em contato em breve. Obrigado!</p>
              <button
                onClick={() => setEnviado(false)}
                className="bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-accent transition-colors duration-200 cursor-pointer border-none"
              >
                Enviar nova mensagem
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-primary font-bold text-xl mb-6">Envie sua receita 👇</h3>
              <form onSubmit={ handleSubmit(Enviar)} noValidate className="flex flex-col gap-4">
                <div>
                  <input { ...register("nome", {required: true})} placeholder="Nome" className={inputClass}/> 
                  {errors.nome && <span style={{ color:"#f00" }}>O nome é obrigatório! </span>}
                </div>
                
                <div>
                  <input {...register("descricao", {required: "A descrição é obrigatoria"})}
                  placeholder="Descrição" className={inputClass} />
                  {errors.descricao && <span style={{ color:"#f00" }}>{errors.descricao.message} </span>}
                </div>
                
                <div>
                  <input {...register("ingredientes" , {required: "Os ingredientes são obrigatorios"})}
                  placeholder="Ingredientes" className={inputClass} />
                  {errors.ingredientes && <span style={{color:"#f00"}}>{errors.ingredientes.message}</span>}
                </div>
                
                
                <div>
                  <textarea {...register("modoPreparo",{required: "O modo de preparo é obrigatório",
                    validate: value =>
                      value.length >= 20 || "O modo de preparo deve ter pelo menos 20 caracteres"                   
                  })} placeholder="Modo de preparo"
                  className={`${inputClass} resize-y min-h-32.5`} />
                  {errors.modoPreparo && <span style={{ color:"#f00" }}>{errors.modoPreparo.message}</span>}
                </div>

                <button type="submit"
                  className="bg-accent bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-accent-dark hover:-translate-y-0.5 transition-all duration-200 mt-2 cursor-pointer border-none text-base">
                  Enviar Mensagem
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  )
}
export default NovasReceitas;