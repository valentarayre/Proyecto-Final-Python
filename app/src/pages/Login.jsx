import React from "react";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useForm } from "../hooks/useForm";

const initialForm = {
  email: "",
  password: "",
};


const validationsForm = (form) => {
  const errors = {};
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
 
  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!form.password.trim()) {
    errors.password = "El campo 'Asunto a tratar' es requerido";
  }

  return errors;
};

const Login = () => {
  const {
    form,
    errors,
    loading,
    response,
    responseError,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm, 'api/auth');

  const styles = {
    
    fontWeight: "bold",
    color: "#dc3545",
  };


  return (
    <>
    <div className="w-screen bg-MainColor h-screen ">
      <form class=" relative mx-auto h-[470px] top-[70px] bg-white shadow-md rounded w-1/3 px-8 pt-10 pb-6  justify-center " onSubmit={handleSubmit}>
      <h2 class="text-5xl font-Bebas text-center text-gray-700 dark:text-white">
      <span className=" mt-2 ml-2 text-4xl">Cine</span>
      <span className="text-AccentColor mt-2 text-4xl">Ya</span>
      </h2>
      
      <h3 class="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Bienvenido de nuevo!</h3>

      <p class="mt-1 text-center text-gray-500 dark:text-gray-400">Inicia sesión</p>
        <div className="pt-9">
          <input className="mr-5 shadow appearance-none border rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            placeholder="Escribe tu Email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.email}
            required
          />
          {errors.email && <p style={styles}>{errors.email}</p>}
          </div>
          <div className="pt-9">
          <input
            className=" mr-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            placeholder="Escribe tu Contraseña"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.password}
            required
          />
          {errors.password && <p style={styles}>{errors.password}</p>}
          </div>
          <div className="pt-9">
        <input className ="px-4 py-2 mt-5  leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"type="submit" value="Enviar" />
        </div>
        </form>
      {loading && <Loader />}
      {response && (
        <Message msg="Los datos han sido enviados" bgColor="#198754" />
      )}
      {responseError && (
        <Message msg="Error en la contraseña y/o email" bgColor="#dc3545" />
      )}
      
      </div>
    </>
  );
};

export default Login;
