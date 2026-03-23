import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import styles from './Cadastro.module.css';

import google from './imgcadastro/icongoogle.jpg';
import apple from './imgcadastro/iconapple.png';

export default function Cadastro() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post('http://localhost:8080/api/v1/Usuario', {
        nome: data.name,
        email: data.email,
        senha: data.password,
        nivel_acesso: 'CLIENTE',
        data_cadastro: new Date().toISOString(),
        statusUsuario: true,
      });

      setSuccess("Cadastro realizado com sucesso!");
    } catch (error) {
      setError("Erro ao cadastrar usuário.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById('nome').value,
      email: document.getElementById('email').value,
      password: document.getElementById('senha').value,
    };

    onSubmit(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card} id="formulario">

        <h1 className={styles.titulo}>Cadastre-se</h1>

        {success && <div className={styles.success}>{success}</div>}
        {error && <div className={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit} className={styles.form}>

          <input type="text" id="nome" placeholder="Nome completo" required />
          <input type="tel" id="telefone" placeholder="Telefone" required />
          <input type="email" id="email" placeholder="E-mail" required />
          <input type="password" id="senha" placeholder="Criar senha" required />

          <button type="submit" disabled={loading} className={styles.btn}>
            {loading ? "Cadastrando..." : "Cadastrar"}
          </button>

        </form>

        <div className={styles.divider}>
          <span></span>
          <p>ou</p>
          <span></span>
        </div>

        <div className={styles.social}>
          <img src={google} alt="Google" />
          <img src={apple} alt="Apple" />
        </div>

      </div>
    </div>
  );
}