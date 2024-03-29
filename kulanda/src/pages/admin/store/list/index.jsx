import React from 'react'

export const ListStore = () => {
  return (
    <div className="flex justify-center items-center h-full">
        <form
          className=" w-1/2 mx-auto bg-white py-10 px-8 rounded-md shadow-md"
          action=""
        >
          <h2 className="text-xl font-bold py-4 mb-4">Registar Produto</h2>

          <div className="flex justify-center ">
            <button className="w-1/2 py-3  mt-8 bg-indigo-800 hover:bg-indigo-600 relative text-white rounded-sm transition duration-200 ease-in">
              Confirmar
            </button>
          </div>
        </form>
      </div>
  )
}