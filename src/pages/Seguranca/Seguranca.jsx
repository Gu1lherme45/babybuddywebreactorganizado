import styles from "./Seguranca.module.css";

import {
  ShieldCheck,
  Lock,
  User,
  Heart,
  Scale,
  FileCheck,
} from "lucide-react";

function Seguranca() {
  return (
    <main className={styles.seguranca}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          

          <h1>
            Segurança e
            <br />
            Privacidade
          </h1>

          <div className={styles.line}></div>

          <p>
            A proteção dos seus dados e da sua saúde é nossa prioridade.
            Nosso sistema de monitoramento gestacional foi desenvolvido
            com altos padrões de segurança para garantir a
            confidencialidade e a integridade das suas informações.
          </p>
        </div>

        <div className={styles.heroImage}>
          <div className={styles.shield}>
            <ShieldCheck size={120} />
          </div>
        </div>
      </section>

     <section className={styles.cards}>
  <article className={styles.card}>
    <ShieldCheck className={styles.cardIcon} />

    <h3>Proteção de Dados</h3>

    <p>
      As informações cadastradas são armazenadas em ambiente seguro,
      protegidas por tecnologias que evitam acessos indevidos e garantem
      a integridade dos dados.
    </p>
  </article>

  <article className={styles.card}>
    <Lock className={styles.cardIcon} />

    <h3>Privacidade das Informações</h3>

    <p>
      Os dados coletados são utilizados apenas para acompanhamento
      gestacional, consultas e recursos essenciais da plataforma,
      preservando sua privacidade.
    </p>
  </article>

  <article className={styles.card}>
    <User className={styles.cardIcon} />

    <h3>Controle de Acesso</h3>

    <p>
      O acesso às informações é restrito a usuários autorizados,
      garantindo mais segurança, confiabilidade e proteção durante toda
      a utilização.
    </p>
  </article>

  <article className={styles.card}>
    <ShieldCheck className={styles.cardIcon} />

    <h3>Segurança Contínua</h3>

    <p>
      Aplicamos criptografia, monitoramento constante, backups regulares
      e atualizações frequentes para fortalecer a proteção da plataforma.
    </p>
  </article>

  <article className={styles.card}>
    <Scale className={styles.cardIcon} />

    <h3>Compromisso com a LGPD</h3>

    <p>
      Seguimos os princípios da Lei Geral de Proteção de Dados,
      promovendo transparência, responsabilidade e respeito aos usuários.
    </p>
  </article>

  <article className={styles.card}>
    <Heart className={styles.cardIcon} />

    <h3>Transparência e Confiança</h3>

    <p>
      Mantemos uma comunicação clara sobre o uso das informações,
      fortalecendo a confiança e a segurança dos usuários.
    </p>
  </article>
</section>







   <section className={styles.alert}>
  <ShieldCheck size={42} />

  <div className={styles.alertContent}>
    <h4>Importante</h4>

    <p>
      Embora utilizemos diversas medidas de proteção,
      recomendamos que os usuários mantenham suas credenciais em
      sigilo e realizem o acesso apenas em dispositivos confiáveis.
    </p>
  </div>
</section>

      
    </main>
  );
}

export default Seguranca;