import { useState } from "react";
import styles from "./Questionario.module.css";
import logo from '../../assets/logo1.png';

export default function Questionario() {
  const [step, setStep] = useState(0);

  const questions = [
    {
      question: "Qual o seu tipo sanguíneo?",
      options: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]
    }
  ];

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div className={styles.container}>
      
      {/* Tela de boas-vindas */}
      {step === 0 && (
        <div className={styles.welcome}>
          <img src={logo} alt="BabyBuddy" className={styles.logo} />

          <h1>Bem vinda ao BabyBuddy!</h1>

          <button onClick={nextStep} className={styles.button}>
            Vamos começar
          </button>
        </div>
      )}

      {/* Questionário */}
      {step > 0 && (
        <div className={styles.questionario}>
          
          {/* Barra de progresso */}
          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{
                width: `${(step / questions.length) * 100}%`
              }}
            />
          </div>

          <img src={logo} alt="BabyBuddy" className={styles.logo} />

          <h2>{questions[step - 1].question}</h2>

          <select className={styles.select}>
            <option>Selecionar</option>
            {questions[step - 1].options.map((opt, index) => (
              <option key={index}>{opt}</option>
            ))}
          </select>

          <button className={styles.button} onClick={nextStep}>
            Continuar
          </button>
        </div>
      )}

    </div>
  );
}