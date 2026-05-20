import styles from "./Administrador.module.css";
import { useEffect, useState } from "react";

import {
  LayoutDashboard,
  FileText,
  Users,
  ShieldCheck,
  Search,
  Pencil,
  Trash2,
  Ban,
 CheckCircle2,
  Plus,
  Bell,
  Settings,
  CalendarHeart,
} from "lucide-react";

// imagens
import art1 from "../../assets/art1.png";
import art2 from "../../assets/art2.png";
import art3 from "../../assets/art3.png";

export default function AdminDashboard() {
  const admin =
    localStorage.getItem("nome") ||
    "Administrador";

  // ARTIGOS PADRÃO
  const artigosPadrao = [
    {
      id: 1,
      titulo: "Cuidados com o bebê",
      categoria: "Bebê",
      descricao:
        "Tudo que você precisa saber para cuidar do seu bebê.",
      imagem: art1,
      status: "ativo",
      rota: "/cuidados-bebe",
    },

    {
      id: 2,
      titulo: "Tentando engravidar?",
      categoria: "Fertilidade",
      descricao:
        "Quanto tempo demora a fecundação após a relação sexual?",
      imagem: art2,
      status: "ativo",
      rota: "/tentando-engravidar",
    },

    {
      id: 3,
      titulo: "Período gestacional",
      categoria: "Gestação",
      descricao:
        "Tudo que você precisa saber sobre o período gestacional.",
      imagem: art3,
      status: "ativo",
      rota: "/periodo-gestacional",
    },
  ];

  // CARREGA STORAGE
  const [artigos, setArtigos] = useState(() => {
    const artigosSalvos = JSON.parse(
      localStorage.getItem("artigos")
    );

    if (
      !artigosSalvos ||
      artigosSalvos.length === 0
    ) {
      localStorage.setItem(
        "artigos",
        JSON.stringify(artigosPadrao)
      );

      return artigosPadrao;
    }

    return artigosSalvos;
  });

  const [pesquisa, setPesquisa] =
    useState("");

  // SALVA E SINCRONIZA
  useEffect(() => {
    localStorage.setItem(
      "artigos",
      JSON.stringify(artigos)
    );

    window.dispatchEvent(
      new Event("artigosAtualizados")
    );
  }, [artigos]);

  // EDITAR
  function editarArtigo(id) {
    const artigoSelecionado =
      artigos.find(
        (artigo) => artigo.id === id
      );

    if (!artigoSelecionado) return;

    const novoTitulo = prompt(
      "Editar título do artigo:",
      artigoSelecionado.titulo
    );

    if (novoTitulo === null) return;

    const novaDescricao = prompt(
      "Editar descrição do artigo:",
      artigoSelecionado.descricao
    );

    if (novaDescricao === null) return;

    const novaCategoria = prompt(
      "Editar categoria:",
      artigoSelecionado.categoria
    );

    if (novaCategoria === null) return;

    const artigosAtualizados =
      artigos.map((artigo) => {
        if (artigo.id === id) {
          return {
            ...artigo,
            titulo: novoTitulo,
            descricao: novaDescricao,
            categoria: novaCategoria,
          };
        }

        return artigo;
      });

    // atualiza state
    setArtigos(artigosAtualizados);

    // salva no localStorage
    localStorage.setItem(
      "artigos",
      JSON.stringify(
        artigosAtualizados
      )
    );

    // atualiza page perfil
    window.dispatchEvent(
      new Event("artigosAtualizados")
    );
  }

  // ALTERAR IMAGEM
  function alterarImagem(id, event) {
    const file = event.target.files[0];

    if (!file) return;

    const imageUrl =
      URL.createObjectURL(file);

    const artigosAtualizados =
      artigos.map((artigo) =>
        artigo.id === id
          ? {
              ...artigo,
              imagem: imageUrl,
            }
          : artigo
      );

    setArtigos(artigosAtualizados);

    localStorage.setItem(
      "artigos",
      JSON.stringify(
        artigosAtualizados
      )
    );

    window.dispatchEvent(
      new Event("artigosAtualizados")
    );
  }

  // EXCLUIR
  function excluirArtigo(id) {
    const confirmar = window.confirm(
      "Deseja realmente excluir este artigo?"
    );

    if (!confirmar) return;

    const artigosAtualizados =
      artigos.filter(
        (artigo) => artigo.id !== id
      );

    setArtigos(artigosAtualizados);

    localStorage.setItem(
      "artigos",
      JSON.stringify(
        artigosAtualizados
      )
    );

    window.dispatchEvent(
      new Event("artigosAtualizados")
    );
  }

  // SUSPENDER
  function suspenderArtigo(id) {
    const artigosAtualizados =
      artigos.map((artigo) =>
        artigo.id === id
          ? {
              ...artigo,
              status:
                artigo.status ===
                "ativo"
                  ? "suspenso"
                  : "ativo",
            }
          : artigo
      );

    setArtigos(artigosAtualizados);

    localStorage.setItem(
      "artigos",
      JSON.stringify(
        artigosAtualizados
      )
    );

    window.dispatchEvent(
      new Event("artigosAtualizados")
    );
  }

  // NOVO ARTIGO
  function adicionarArtigo() {
    const novoArtigo = {
      id: Date.now(),
      titulo: "Novo artigo",
      categoria: "Categoria",
      descricao:
        "Descrição do novo artigo.",
      imagem: art1,
      status: "ativo",
      rota: "/",
    };

    const artigosAtualizados = [
      novoArtigo,
      ...artigos,
    ];

    setArtigos(artigosAtualizados);

    localStorage.setItem(
      "artigos",
      JSON.stringify(
        artigosAtualizados
      )
    );

    window.dispatchEvent(
      new Event("artigosAtualizados")
    );
  }

  // PESQUISA
  const artigosFiltrados =
    artigos.filter((artigo) =>
      artigo.titulo
        .toLowerCase()
        .includes(
          pesquisa.toLowerCase()
        )
    );

  return (
    <div className={styles.container}>
      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        <div className={styles.logoArea}>
          <div className={styles.logoIcon}>
            <CalendarHeart size={28} />
          </div>

          <div>
            <h2>Babybuddy</h2>
            <span>
              Painel Administrador
            </span>
          </div>
        </div>

        <nav className={styles.nav}>
          <button className={styles.active}>
            <LayoutDashboard size={20} />
            Dashboard
          </button>

          <button>
            <FileText size={20} />
            Artigos
          </button>

          <button>
            <Users size={20} />
            Usuários
          </button>

          <button>
            <ShieldCheck size={20} />
            Segurança
          </button>

          <button>
            <Settings size={20} />
            Configurações
          </button>
        </nav>
      </aside>

      {/* CONTEÚDO */}
      <main className={styles.content}>
        {/* TOPBAR */}
        <header className={styles.topbar}>
          <div>
            <h1>
              Dashboard Administrativo
            </h1>

            <p>
              Gerencie artigos,
              usuários e conteúdos da
              plataforma.
            </p>
          </div>

          <div className={styles.topActions}>
            <div
              className={styles.searchBox}
            >
              <Search size={18} />

              <input
                type="text"
                placeholder="Pesquisar artigo..."
                value={pesquisa}
                onChange={(e) =>
                  setPesquisa(
                    e.target.value
                  )
                }
              />
            </div>

            <button
              className={
                styles.notification
              }
            >
              <Bell size={20} />
            </button>

            <div className={styles.profile}>
              {admin
                .charAt(0)
                .toUpperCase()}
            </div>
          </div>
        </header>

        {/* CARDS */}
        <section className={styles.stats}>
          <div className={styles.statCard}>
            <h3>Total de Artigos</h3>

            <strong>
              {artigos.length}
            </strong>
          </div>

          <div className={styles.statCard}>
            <h3>Artigos Ativos</h3>

            <strong>
              {
                artigos.filter(
                  (a) =>
                    a.status ===
                    "ativo"
                ).length
              }
            </strong>
          </div>

          <div className={styles.statCard}>
            <h3>Suspensos</h3>

            <strong>
              {
                artigos.filter(
                  (a) =>
                    a.status ===
                    "suspenso"
                ).length
              }
            </strong>
          </div>

          <div className={styles.statCard}>
            <h3>Usuários</h3>

            <strong>1.248</strong>
          </div>
        </section>

        {/* HEADER */}
        <div className={styles.sectionHeader}>
          <div>
            <h2>
              Gerenciamento de Artigos
            </h2>

            <p>
              Controle completo dos
              conteúdos publicados.
            </p>
          </div>

          <button
            className={styles.addButton}
            onClick={adicionarArtigo}
          >
            <Plus size={18} />
            Novo Artigo
          </button>
        </div>

        {/* GRID */}
        <div className={styles.grid}>
          {artigosFiltrados.map(
            (artigo) => (
              <div
                key={artigo.id}
                className={`${styles.card} ${
                  artigo.status ===
                  "suspenso"
                    ? styles.suspended
                    : ""
                }`}
              >
                <img
                  src={artigo.imagem}
                  alt={artigo.titulo}
                />

                <div
                  className={
                    styles.cardContent
                  }
                >
                  <span>
                    {artigo.categoria}
                  </span>

                  <h3>
                    {artigo.titulo}
                  </h3>

                  <p>
                    {artigo.descricao}
                  </p>

                  <div
                    className={
                      styles.statusArea
                    }
                  >
                    <div
                      className={`${styles.status} ${
                        artigo.status ===
                        "ativo"
                          ? styles.activeStatus
                          : styles.suspendedStatus
                      }`}
                    >
                      {artigo.status ===
                      "ativo"
                        ? "ATIVO"
                        : "SUSPENSO"}
                    </div>
                  </div>
                </div>

                {/* BOTÕES */}
                <div
                  className={
                    styles.actions
                  }
                >
                  <button
                    className={
                      styles.editBtn
                    }
                    onClick={() =>
                      editarArtigo(
                        artigo.id
                      )
                    }
                  >
                    <Pencil size={18} />
                    Editar
                  </button>

                  <label
                    className={
                      styles.editBtn
                    }
                  >
                    Alterar Imagem

                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={(e) =>
                        alterarImagem(
                          artigo.id,
                          e
                        )
                      }
                    />
                  </label>

                  <button
                    className={
                      styles.suspendBtn
                    }
                    onClick={() =>
                      suspenderArtigo(
                        artigo.id
                      )
                    }
                  >
                    {artigo.status ===
                    "ativo" ? (
                      <>
                        <Ban size={18} />
                        Suspender
                      </>
                    ) : (
                      <>
                        <CheckCircle2 size={18} />
                        Ativar
                      </>
                    )}
                  </button>

                  <button
                    className={
                      styles.deleteBtn
                    }
                    onClick={() =>
                      excluirArtigo(
                        artigo.id
                      )
                    }
                  >
                    <Trash2 size={18} />
                    Excluir
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
}