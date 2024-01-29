import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AppRouteName } from "../../routes/AppRouteName";
import { useLogin } from "./state";


import loginImg from "../../assets/indigo-cover.jpg";



export const LoginStore = () => {

  const { email, password, isLoading, setEmail, setPassword, handleLogin,  userRef  } = useLogin();

  return (
    <div className="relative w-full h-screen bg-zinc-900/50">
      <img
        className="absolute w-full h-full object-cover -z-10"
        src={loginImg}
        alt=""
      />

      <div className="flex justify-center items-center h-full">
        <form
          className="max-w-[450px] w-full mx-auto bg-white py-10 px-8 rounded-md"
          action=""
        >
          <h2 className="text-4xl font-bold text-center py-4 mb-4">KULANDA</h2>

          <p className="py-4 text-xs font-semibold">Por favor, insira as suas credenciais!</p>

          <div className="flex flex-col mb-4">
            <label className="text-black font-medium text-sm ">Email</label>
            <input
            type="email"
            disabled={isLoading}
            name="email"
            ref={userRef}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Nome de Usuário"
            required
            autoComplete="off"
              className="border relative bg-gray-100 p-2 rounded-sm focus:outline-indigo-600"
              
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-black font-medium text-sm">Palavra-Passe</label>
            <input
            type="password"
            disabled={isLoading}
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Palavra-Passe"
            required
            autoComplete="none"
              className="border relative bg-gray-100 p-2 rounded-sm focus:outline-indigo-600"
              
            />
          </div>

          <p className="flex items-center mt-6 text-xs font-medium">
            <input className="mr-2" type="checkbox" name="" id="" />
            Lembrar por 30 dias
          </p>

          <div className="flex justify-center ">
            <button 
            className="w-1/2 py-3 mt-8 bg-indigo-800 hover:bg-indigo-600 relative text-white rounded-sm transition duration-200 ease-in"
            disabled={isLoading}
            onClick={handleLogin}
            >
            
              Entrar
            </button>
          </div>

          
        </form>
      </div>
    </div>
  );
};
