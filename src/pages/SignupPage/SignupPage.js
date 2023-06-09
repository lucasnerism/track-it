import axios from "axios";
import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { BASE_URL } from "../../constants/url";
import { Container, Form } from "../../components/forms";


export default function SignupPage() {
  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState({ email: "", password: "", image: "", name: "" });
  const navigate = useNavigate();


  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const url = `${BASE_URL}/auth/sign-up`;

    axios.post(url, form)
      .then(() => {
        navigate("/");
      })
      .catch(err => {
        alert(err.response.data.details);
        setLoading(false);
      });
  }

  function handleChange(e) {
    const obj = { ...form };
    obj[e.target.name] = e.target.value;
    setForm(obj);
  }

  return (
    <Container>
      <img src={logo} alt="logo" />
      <Form onSubmit={handleSubmit}>
        <input placeholder="email" value={form.email} disabled={loading} name="email"
          required onChange={event => handleChange(event)}></input>
        <input placeholder="senha" value={form.password} disabled={loading} type="password" name="password"
          required onChange={event => handleChange(event)}></input>
        <input placeholder="nome" value={form.name} disabled={loading} name="name"
          required onChange={event => handleChange(event)}></input>
        <input placeholder="foto" value={form.image} disabled={loading} type="url" name="image"
          required onChange={event => handleChange(event)}></input>
        <button type="submit" disabled={loading} >{loading ? <ThreeDots
          height="13"
          width="51"
          radius="9"
          color="#FFFFFF"
          ariaLabel="three-dots-loading"
          visible={true}
        /> : "Cadastrar"}</button>
      </Form>
      <Link to="/">Já tem uma conta? Faça login!</Link>
    </Container>
  );
}