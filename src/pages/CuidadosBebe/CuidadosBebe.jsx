import styles from "./CuidadosBebe.module.css";
import imagem from "../../assets/cuidadosbebe.svg";

export default function CuidadosBebe() {
  return (
    <div className={styles.container}>
      
      {/* HERO */}
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h1>Cuidados com o bebê</h1>
          <p>Tudo que você precisa saber para cuidar do seu bebê.</p>

          <p>
            Cuidar de um bebê recém-nascido é uma tarefa cheia de amor,
            atenção e responsabilidade. Nas primeiras semanas e meses de vida,
            o bebê depende completamente dos cuidadores para suas necessidades
            básicas, desde alimentação até segurança e higiene. A seguir,
            você encontrará um guia prático e detalhado com tudo que é
            importante saber.
          </p>
        </div>

        <img src={imagem} alt="Cuidados com o bebê" className={styles.image} />
      </div>

      {/* PREPARAÇÃO */}
      <section className={styles.section}>
        <h2>Preparação para os primeiros dias</h2>

        <h3>Contato inicial com o bebê</h3>
        <p>
          Imediatamente após o nascimento, práticas como o contato pele a pele
          (com a mãe ou pai) são recomendadas — isso ajuda a estabilizar a
          temperatura do bebê, favorece a amamentação e fortalece o vínculo
          afetivo.
        </p>

        <h3>Ambiente em casa</h3>
        <p>
          Nos primeiros dias, manter a casa tranquila, limpa e com pouca
          circulação de pessoas ajuda a reduzir o risco de infecções, além de
          proporcionar um ambiente mais acolhedor para o recém-nascido.
        </p>
      </section>

      {/* ALIMENTAÇÃO */}
      <section className={styles.section}>
        <h2>Alimentação do bebê</h2>

        <p>
          Os especialistas recomendam amamentar exclusivamente no peito até os
          6 meses de idade, quando possível — o leite materno fornece todos os
          nutrientes que o bebê precisa e fortalece o sistema imunológico.
        </p>

        <h3>Sinais de fome</h3>
        <p>
          Os especialistas recomendam amamentar exclusivamente no peito até os
          6 meses de idade, quando possível — o leite materno fornece todos os
          nutrientes que o bebê precisa e fortalece o sistema imunológico.
        </p>
      </section>

      {/* HIGIENE COM CARDS */}
      <section className={styles.section}>
        <h2>Higiene e cuidado com o corpo</h2>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Pele e Banho</h3>
            <p>
              A pele dos recém-nascidos é muito sensível. Use produtos neutros
              e específicos para bebês. O banho pode ser dado em água morna e
              com movimentos suaves.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Coto Umbilical</h3>
            <p>
              Enquanto o coto umbilical não cair, mantenha-o limpo e seco.
              Geralmente ele cai sozinho entre uma a duas semanas após o
              nascimento. Evite banhos completos nesse período.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Unhas e mãos</h3>
            <p>
              As mãos do bebê devem ser mantidas limpas e as unhas cortadas com
              cuidado — muitos bebês levam as mãos à boca com frequência.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Orelhas</h3>
            <p>
              Limpe apenas a parte externa das orelhas após o banho. Não
              introduza cotonetes ou objetos no canal auditivo.
            </p>
          </div>
        </div>
      </section>

      {/* FRALDAS */}
      <section className={styles.section}>
        <h2>Trocando fraldas</h2>
        <p>
          Trocar fraldas regularmente é essencial para evitar assaduras e manter
          o bebê confortável. Verificar fraldas a cada poucas horas,
          especialmente depois de evacuações, ajuda a manter a higiene.
        </p>
      </section>

      {/* SONO */}
      <section className={styles.section}>
        <h2>Sono e segurança ao dormir</h2>

        <p>
          O bebê dorme muitas horas por dia — geralmente entre 14 e 17 horas —
          em pequenos períodos.
        </p>

        <h3>Ambiente Seguro para Dormir:</h3>
        <ul>
          <li>Coloque o bebê para dormir de barriga para cima.</li>
          <li>Evite cobertores, travesseiros e brinquedos no berço.</li>
          <li>
            Compartilhar o quarto com os pais é recomendado, mas não a mesma
            cama.
          </li>
        </ul>

        <h3>Temperatura do quarto:</h3>
        <p>
          Manter a temperatura confortável entre 20–22°C ajuda a evitar
          desconfortos e riscos.
        </p>
      </section>

      {/* DESENVOLVIMENTO */}
      <section className={styles.section}>
        <h2>Desenvolvimento e estímulos</h2>
        <p>
          Conversar, cantar e brincar com o bebê estimula o desenvolvimento
          cognitivo e emocional.
        </p>
        <p>
          Colocar o bebê de bruços por alguns minutos (sempre supervisionado)
          ajuda a fortalecer músculos e contribui para o desenvolvimento motor.
        </p>
      </section>

      {/* PEDIATRA */}
      <section className={styles.section}>
        <h2>Visitas ao Pediatra e Vacinação</h2>

        <p>
          A primeira visita ao pediatra ocorre na primeira semana após a alta
          hospitalar, seguida de consultas regulares.
        </p>

        <h3>Vacinação:</h3>
        <p>
          Siga o calendário de vacinação recomendado — a imunização protege o
          bebê de doenças graves desde os primeiros dias de vida.
        </p>
      </section>

      {/* DESTAQUE FINAL */}
      <div className={styles.highlight}>
        Cuidar de um bebê envolve atenção constante e carinho, mas também
        conhecimento de práticas seguras — desde os primeiros banhos até a
        alimentação, sono, higiene e visitas ao pediatra. A maior parte dessas
        medidas protege o bebê de infecções, estimula um desenvolvimento saudável
        e fortalece o vínculo entre cuidadores e bebê.
      </div>

    </div>
  );
}