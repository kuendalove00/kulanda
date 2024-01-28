import React from 'react'

export const ListProduct = () => {
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
          <h2 className="text-xl font-bold py-4 mb-4">Produtos</h2>

          <div className="flex justify-center ">
            <button className="w-1/2 py-3  mt-8 bg-indigo-800 hover:bg-indigo-600 relative text-white rounded-sm transition duration-200 ease-in">
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}