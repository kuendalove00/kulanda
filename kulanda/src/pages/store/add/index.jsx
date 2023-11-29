import React from 'react'

export const AddStore = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        className="absolute bg-[#f1f5f9] w-full h-full object-cover -z-10"
        alt=""
      />

      <div className="flex justify-center items-center h-full">
        <form
          className=" w-1/2 mx-auto bg-white py-10 px-8 rounded-md shadow-md"
          action=""
        >
          <h2 className="text-xl font-bold py-4 mb-4">Registar Produto</h2>

          <div className="flex flex-col mb-4">
            <label className="text-black font-medium text-sm ">Nome</label>
            <input
              className="border relative bg-gray-100 p-2 rounded-sm focus:outline-indigo-600"
              type="text"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-black font-medium text-sm">Descrição</label>
            <textarea 
            className="border relative bg-gray-100 p-2 rounded-sm focus:outline-indigo-600" 
            draggable="false"
            ></textarea>
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-black font-medium text-sm ">Categoria</label>
            <select
              className="border relative bg-gray-100 p-2 rounded-sm focus:outline-indigo-600"
              name=""
              id=""
            >
              <option value="">Selecionar a categoria</option>
            </select>
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-black font-medium text-sm ">Fotos</label>
            <input
              className=" relative py-2 rounded-sm focus:outline-indigo-600"
              type="file"
            />
          </div>

          <div className="flex justify-center ">
            <button className="w-1/2 py-3  mt-8 bg-indigo-800 hover:bg-indigo-600 relative text-white rounded-sm transition duration-200 ease-in">
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}