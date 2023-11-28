import React from 'react'

export const AddProduct = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img className="absolute w-full h-full object-cover mix-blend-overlay" src={loginImg} alt="" />

      <div className="flex justify-center items-center h-full">
        <form className="w-1/2 mx-auto bg-white py-10 px-8 rounded-md" action="">
            <h2 className="text-4xl font-bold text-center py-4 mb-4">KULANDA</h2>

            <p className="py-4 text-sm">Por Favor, insira as suas credenciais!</p>

            <div className="flex flex-col mb-4" >
              <label className="text-black ">Email</label>
              <input className="border relative bg-gray-100 p-2 rounded-sm" type="text" />
            </div>
            
            <div className="flex flex-col mb-4">
              <label className="text-black">Palavra-Passe</label>
              <input className="border relative bg-gray-100 p-2 rounded-sm" type="password" />
            </div>

            <button className="w-1/2 py-3 mt-8 bg-indigo-800 hover:bg-indigo-500 relative text-black rounded-sm">Entrar</button>

            <p className="flex items-center mt-2"><input className="mr-2 " type="checkbox" name="" id="" />Lembrar por 30 dias</p>
        </form>
      </div>
    </div>
  )
}

