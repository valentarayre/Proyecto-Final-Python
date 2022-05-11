import axios from "axios";
import { useState , useContext} from "react";
import { LoginContext } from "../helper/Context";
export const useForm = (initialForm, validateForm, direccion) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [responseError, setResponseError] = useState(null);

  const url = `http://127.0.0.1:5000/${direccion}`;

  const { loggedIn , setLoggedIn } = useContext(LoginContext)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length !== 0) return;

    setLoading(true);
    const data = JSON.stringify({
      email: form.email,
      password: form.password,
    });
    const config = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        setLoading(false);
        setResponse(true);
        setForm(initialForm);
        const tokenJson =  JSON.stringify(response.data.token)
        //console.log(tokenJson)
        localStorage.setItem('token',tokenJson);
        setLoggedIn(true)
        console.log(setLoggedIn);
        setTimeout(() => setResponse(false), 5000);
      })
      .catch(function (error) {
        setLoading(false);
        setResponseError(true);
        setTimeout(() => setResponseError(false), 5000);
      });
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    responseError,
  };
};
