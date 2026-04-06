import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import styles from './Cadastro.module.css';

export default function Cadastro() {
  const location = useLocation();
  const navigate = useNavigate();

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

  // 🔥 LOGIN COM GOOGLE (sem backend)
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

        setSuccess("Login com Google realizado!");

        // 👉 vai direto pro questionário
        navigate('/questionario');

      } catch (err) {
        setError("Erro no login com Google.");
      }
    },
    onError: () => {
      setError("Erro ao autenticar com Google.");
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const data = {
      nome: document.getElementById('nome').value,
      email: document.getElementById('email').value,
      senha: document.getElementById('senha').value,
      nivelAcesso: 'USUARIO',
    };

    try {
      const response = await fetch('http://localhost:8080/api/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const msg = await response.text();
        throw new Error(msg || 'Erro ao cadastrar usuário.');
      }

      setSuccess('Cadastro realizado com sucesso!');
      setTimeout(() => navigate('/questionario'), 1000);

    } catch (err) {
      setError(err.message || 'Erro ao cadastrar usuário.');
    } finally {
      setLoading(false);
    }
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