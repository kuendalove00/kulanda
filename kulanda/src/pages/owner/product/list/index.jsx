import React from "react";
import { AppRouteName } from "../../../../routes/AppRouteName";
import { useListProduct } from "./state";

export const ListProduct = () => {
  const { data, handleUpdate, setDeleteItem, totalData, navigate } =
    useListProduct();

  return (
    <div className="w-10/12 mt-10 px-5 pt-5 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontWeight: "bolder",
        }}
      >
        <div className="flex items-center gap-x-3">
          <h2 className="h1 text-lg font-medium text-gray-800 dark:text-white">
            Produtos
          </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
            {`${totalData} Produtos`}
          </span>
        </div>
        <div className="flex justify-end items-center">
          <button
            onClick={() => navigate(AppRouteName.product.add)}
            className="flex items-center w-1/2 mx-2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-green-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-green-600 dark:hover:bg-green-500 dark:bg-green-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <span>Adicionar Produto</span>
          </button>
        </div>
      </div>
      <hr className="mt-2" />

      <div className="overflow-hidden rounded-sm border  m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-green-500 text-white text-center">
            <tr>
              <th>Nome</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product, index) => {
              const { id, name } = product || {};

              return (
                <tr
                  key={index}
                  className={`${index % 2 == 0 ? "bg-gray-100" : "bg-gray-50"} ` }
                >
                  <td>
                    <i className="fa-solid fa-user icon-opacity mr-5"></i>
                    {name}
                  </td>
                  <td className="table-options">
                    <span className="flex justify-center"> 
                      <button
                        className="flex items-center w-1/2 mx-2 my-1 px-2 py-1 text-sm tracking-wide text-white transition-colors duration-200 bg-green-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-green-600 dark:hover:bg-green-500 dark:bg-green-600"
                        id={id}
                        onClick={() => {
                          handleUpdate(product);
                        }}
                      >
                        <i className="fa-solid fa-pencil mx-2">Editar</i>
                      </button>
                      <button
                        id={id}
                        className="flex items-center w-1/2 mx-2 my-1 px-2 py-1 text-sm tracking-wide text-white transition-colors duration-200 bg-green-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-green-600 dark:hover:bg-green-500 dark:bg-green-600"
                        onClick={() => setDeleteItem(product)}
                      >
                        <i className="fa-solid fa-trash mx-2">Excluir</i>
                      </button>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
