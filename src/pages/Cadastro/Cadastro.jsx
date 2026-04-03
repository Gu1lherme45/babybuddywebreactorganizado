import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import styles from './Cadastro.module.css';

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

  // 🔥 LOGIN COM GOOGLE
  const loginGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfo = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });

        const user = await userInfo.json();
        console.log("Usuário Google:", user);

        // 🔥 enviando pro seu backend
        await axios.post('http://localhost:8080/api/v1/Usuario', {
          nome: user.name,
          email: user.email,
          senha: "google_login", // pode ajustar depois
          nivel_acesso: 'CLIENTE',
          data_cadastro: new Date().toISOString(),
          statusUsuario: true,
        });

        setSuccess("Login com Google realizado!");
      } catch (err) {
        setError("Erro no login com Google.");
      }
    },
    onError: () => {
      setError("Erro ao autenticar com Google.");
    }
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await axios.post('http://localhost:8080/api/v1/Usuario', {
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
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" 
            alt="Google"
            style={{ cursor: "pointer" }}
            onClick={() => loginGoogle()}
          />
        </div>

      </div>
    </div>
  );
}