import { useState } from "react";
import styles from "./Questionario.module.css";
import logo from "../../assets/logo2.svg";

export default function Questionario() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

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
      question: "Você está em qual trimestre?",
      options: ["1º trimestre", "2º trimestre", "3º trimestre"],
      type: "buttons"
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
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const progress = ((step - 1) / questions.length) * 100;

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

          {/* TOPO */}
          <div className={styles.top}>
            <span className={styles.back} onClick={prevStep}>
              ‹
            </span>

            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <img src={logo} alt="BabyBuddy" className={styles.logo} />

          <h2>{questions[step - 1].question}</h2>

          {/* SELECT OU BOTÕES */}
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

          <button
            className={styles.button}
            onClick={nextStep}
            disabled={!answers[step]}
          >
            Continuar
          </button>
        </div>
      )}

      {/* FINAL */}
      {step > questions.length && (
        <div className={styles.welcome}>
          <h1>Finalizado 🎉</h1>
        </div>
      )}
    </div>
  );
}