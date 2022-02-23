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
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Escribe tu Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && <p style={styles}>{errors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="Escribe tu Contraseña"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.password}
          required
        />
        {errors.password && <p style={styles}>{errors.password}</p>}
        <input type="submit" value="Enviar" />
      </form>
      {loading && <Loader />}
      {response && (
        <Message msg="Los datos han sido enviados" bgColor="#198754" />
      )}
      {responseError && (
        <Message msg="Error en la contraseña y/o email" bgColor="#dc3545" />
      )}
    </>
  );
};

export default Login;
