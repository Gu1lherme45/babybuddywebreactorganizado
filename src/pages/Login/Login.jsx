import React, { useState } from 'react';
import styles from './Login.module.css';

import { Link, useNavigate } from 'react-router-dom';

import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
} from 'react-icons/fi';

const Login = () => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  // ALTERAÇÃO DOS INPUTS
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // REMOVE ERRO AO DIGITAR
    setError('');
  };

  // LOGIN
  const handleSubmit = (e) => {

    e.preventDefault();

    // PEGA USUÁRIOS CADASTRADOS
    const usuarios =
      JSON.parse(
        localStorage.getItem('usuarios')
      ) || [];

    // PROCURA USUÁRIO
    const usuarioEncontrado = usuarios.find(
      (user) =>
        user.nome.toLowerCase() ===
          formData.nome.toLowerCase() &&
        user.email.toLowerCase() ===
          formData.email.toLowerCase() &&
        user.senha === formData.senha
    );

    // SE NÃO ENCONTRAR
    if (!usuarioEncontrado) {

      setError(
        'Nome, e-mail ou senha incorretos.'
      );

      return;
    }

    // VERIFICA SE É ADMIN
    const adminRegex =
      /^admin0[1-6]@babybuddy\.com\.br$/;

    const isAdmin = adminRegex.test(
      usuarioEncontrado.email.toLowerCase()
    );

    // USUÁRIO LOGADO
    const usuarioLogado = {
      ...usuarioEncontrado,
      tipo: isAdmin
        ? 'admin'
        : 'usuario',
    };

    // SALVA LOGIN
    localStorage.setItem(
      'usuario',
      JSON.stringify(usuarioLogado)
    );

    console.log(usuarioLogado);

    // REDIRECIONAMENTO
    if (isAdmin) {

      navigate('/administrador');

    } else {

      navigate('/perfil');

    }
  };

  return (

    <div className={styles.container}>

      <div className={styles.card}>

        <h1 className={styles.title}>
          Login
        </h1>

        <p className={styles.subtitle}>
          Digite seus dados para acessar
          sua conta
        </p>

        {/* MENSAGEM DE ERRO */}
        {
          error && (
            <div className={styles.errorMessage}>
              {error}
            </div>
          )
        }

        <form
          onSubmit={handleSubmit}
          className={styles.form}
        >

          {/* NOME */}
          <div className={styles.inputGroup}>

            <label>
              Nome
            </label>

            <div className={styles.inputWrapper}>

              <FiUser className={styles.icon} />

              <input
                type="text"
                name="nome"
                placeholder="Digite seu nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          {/* EMAIL */}
          <div className={styles.inputGroup}>

            <label>
              E-mail
            </label>

            <div className={styles.inputWrapper}>

              <FiMail className={styles.icon} />

              <input
                type="email"
                name="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          {/* SENHA */}
          <div className={styles.inputGroup}>

            <label>
              Senha
            </label>

            <div className={styles.inputWrapper}>

              <FiLock className={styles.icon} />

              <input
                type={
                  showPassword
                    ? 'text'
                    : 'password'
                }
                name="senha"
                placeholder="Digite sua senha"
                value={formData.senha}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className={styles.eyeButton}
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
              >

                {
                  showPassword ? (
                    <FiEyeOff />
                  ) : (
                    <FiEye />
                  )
                }

              </button>

            </div>

          </div>

          {/* BOTÃO */}
          <button
            type="submit"
            className={styles.loginButton}
          >
            Login
          </button>

          <div className={styles.divider}>
            <span>ou</span>
          </div>

          <p className={styles.registerText}>

            Ainda não tem uma conta?{' '}

            <Link to="/cadastro">
              Cadastre-se
            </Link>

          </p>

        </form>

      </div>

    </div>
  );
};

export default Login;