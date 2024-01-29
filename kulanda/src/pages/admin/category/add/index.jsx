import React from "react";
import { useAddCategory } from "./state";
import { useLocation } from "react-router-dom";
import { appMessages } from "../../../../utils/messages";

export const AddCategory = () => {
  const { state } = useLocation();
  const { isUpdate = false } = state || {};

  const { formData, handleSave, setFormValue } = useAddCategory({
    navigationState: state,
  });

  return (
    <div className="flex justify-center items-center h-full">
      <div
        className=" w-1/2 mx-auto bg-white py-10 px-8 rounded-md shadow-md"
      >
        <h2 className="text-xl font-bold py-4 mb-4">
          {" "}
          
          {isUpdate ? appMessages.category.updateTitle :
          appMessages.category.registerTitle }
        </h2>

        <div className="flex flex-col mb-4">
          <label className="text-black font-medium text-sm ">Nome</label>
          <input
            className="border relative bg-gray-100 p-2 rounded-sm focus:outline-indigo-600"
            value={formData?.name}
            onChange={(e) => setFormValue({ name: e?.target?.value })}
            name="name"
            type="text"
          />
        </div>

        <div className="flex justify-center ">
          <button
            className="w-1/2 py-3  mt-8 bg-indigo-800 hover:bg-indigo-600 relative text-white rounded-sm transition duration-200 ease-in"
            onClick={handleSave}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};
