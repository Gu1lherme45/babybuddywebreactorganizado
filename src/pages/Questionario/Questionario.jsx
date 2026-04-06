import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Questionario.module.css";
import logo from "../../assets/logo2.svg";
import Lottie from "lottie-react";
import checkAnimation from "../../assets/check.json";

export default function Questionario() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const questions = [
    {
      question: "Qual o seu tipo sanguíneo?",
      options: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
      type: "select"
    },
    {
      question: "Você já teve algum parto?",
      options: ["Sim", "Não"],
      type: "buttons"
    },
    {
      question: "Possui algum problema de saúde?",
      options: ["Sim", "Não"],
      type: "buttons"
    },
    {
      question: "Seu ciclo menstrual costuma ser regular?",
      options: ["Sim", "Não"],
      type: "buttons"
    },
    {
      question: "Você autoriza o uso dessas informações para personalização de conteúdos?",
      options: ["Sim", "Não"],
      type: "buttons",
      hasTerms: true
    }
  ];

  const handleSelect = (value) => {
    setAnswers({
      ...answers,
      [step]: value
    });
  };

  const nextStep = () => {
    if (!answers[step]) return;

    if (step === questions.length) {
      setStep(step + 1);

      setTimeout(() => {
        navigate("/login");
      }, 2500);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const progress = (step / questions.length) * 100;

  return (
    <div className={styles.container}>

      {/* TELA INICIAL */}
      {step === 0 && (
        <div className={styles.welcome}>
          <h1>Bem vinda ao BabyBuddy!</h1>

          <button onClick={() => setStep(1)} className={styles.button}>
            Vamos começar
          </button>
        </div>
      )}

      {/* QUESTIONÁRIO */}
      {step > 0 && step <= questions.length && (
        <div className={styles.questionario}>

          <div className={styles.top}>
            <span className={styles.back} onClick={prevStep}>‹</span>

            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <img src={logo} alt="BabyBuddy" className={styles.logo} />

          <h2>{questions[step - 1].question}</h2>

          {/* SELECT */}
          {questions[step - 1].type === "select" ? (
            <select
              className={styles.select}
              value={answers[step] || ""}
              onChange={(e) => handleSelect(e.target.value)}
            >
              <option value="">Selecionar</option>
              {questions[step - 1].options.map((opt, index) => (
                <option key={index} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <div className={styles.options}>
              {questions[step - 1].options.map((opt, index) => (
                <button
                  key={index}
                  className={`${styles.option} ${
                    answers[step] === opt ? styles.selected : ""
                  }`}
                  onClick={() => handleSelect(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}

          {/* TERMOS */}
          {questions[step - 1].hasTerms && (
            <p
              className={styles.terms}
              onClick={() => navigate("/termos")}
            >
              Ler termos de uso
            </p>
          )}

          <button
            className={styles.button}
            onClick={nextStep}
            disabled={!answers[step]}
          >
            Continuar
          </button>
        </div>
      )}

      {/* FINAL COM ANIMAÇÃO */}
      {step > questions.length && (
        <div className={styles.welcome}>
          <div className={styles.animation}>
            <Lottie animationData={checkAnimation} loop={false} />
          </div>
          <h1>Tudo pronto! 💖</h1>
        </div>
      )}
    </div>
  );
}