import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
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

  const togglePassword = (id, element) => {
    const input = document.getElementById(id);
    if (input.type === 'password') {
      input.type = 'text';
      element.querySelector('i').classList.remove('fa-eye');
      element.querySelector('i').classList.add('fa-eye-slash');
    } else {
      input.type = 'password';
      element.querySelector('i').classList.remove('fa-eye-slash');
      element.querySelector('i').classList.add('fa-eye');
    }
  };

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

      console.log('Resposta da API:', response.data);
      setSuccess("Cadastro realizado com sucesso!");
    } catch (error) {
      console.error('Erro ao cadastrar:', error.response?.data || error.message);
      setError('Erro ao cadastrar usuário. Verifique os dados.');
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
    <div className={styles.appWrapper}>
      {/* Esse id aqui é fundamental para o scroll funcionar */}
      <div className={styles.cadastroContainer} id="formulario">
        <h2>BabyBuddy</h2>

        {success && <div className={styles.successMessage}>{success}</div>}
        {error && <div className={styles.errorMessage}>{error}</div>}

        <form id="formCadastro" onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input type="text" id="nome" placeholder="Nome completo" required />
            <i className="fa fa-user"></i>
          </div>

          <div className={styles.inputGroup}>
            <input type="tel" id="telefone" placeholder="Telefone" required />
            <i className="fa fa-phone"></i>
          </div>

          <div className={styles.inputGroup}>
            <input type="email" id="email" placeholder="Email" required />
            <i className="fa fa-envelope"></i>
          </div>

          <div className={styles.inputGroup}>
            <input type="password" id="senha" placeholder="Senha" required />
            <span
              className={styles.togglePassword}
              onClick={(e) => togglePassword('senha', e.currentTarget)}
            >
              <i className="fa fa-eye"></i>
            </span>
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              id="confirmaSenha"
              placeholder="Confirmar Senha"
              required
            />
            <span
              className={styles.togglePassword}
              onClick={(e) => togglePassword('confirmaSenha', e.currentTarget)}
            >
              <i className="fa fa-eye"></i>
            </span>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
