"use client";

import { useState } from "react";
import "./formulario.css";
import { useRouter } from "next/navigation";

type Categoria = "tec" | "qui" | "mec" | "const" | "amb";

type Pontuacao = Record<Categoria, number>;

type Resultado = {
  descricao: string;
  cursos: string[];
};

export default function Formulario() {
  const router = useRouter();
  const bancoPerguntas: { q: string; o: { t: string; v: Categoria }[] }[] = [
    {
      q: "1. Diante de um aparelho que parou de funcionar, sua primeira reação é:",
      o: [
        {
          t: "Ficar curioso para abrir, olhar as peças e tentar consertar o circuito físico.",
          v: "mec",
        },
        {
          t: "Pesquisar se o problema é no software ou no sistema operacional dele.",
          v: "tec",
        },
        {
          t: "Pensar em como os materiais químicos dele impactam o descarte na natureza.",
          v: "amb",
        },
      ],
    },
    {
      q: "2. Se você ganhasse um kit de projetos, qual escolheria?",
      o: [
        {
          t: "Um kit de desenvolvimento de jogos digitais ou criação de sites.",
          v: "tec",
        },
        {
          t: "Um mini laboratório para testar fórmulas, reações e compostos.",
          v: "qui",
        },
        {
          t: "Maquetes de construção civil e desenho de plantas estruturais.",
          v: "const",
        },
      ],
    },
    {
      q: "3. Qual dessas matérias na escola mais te agradava (ou agrada)?",
      o: [
        {
          t: "Física (Mecânica, eletricidade, forças em ação).",
          v: "mec",
        },
        {
          t: "Química ou Biologia (Transformações de matéria, ecossistemas).",
          v: "qui",
        },
        {
          t: "Matemática Aplicada ou Lógica computacional.",
          v: "tec",
        },
      ],
    },
    {
      q: "4. No futuro, você gostaria de trabalhar vestindo principalmente:",
      o: [
        {
          t: "Roupas confortáveis em um escritório de tecnologia moderno ou home office.",
          v: "tec",
        },
        {
          t: "Avental/Jaleco dentro de um laboratório limpo e controlado.",
          v: "qui",
        },
        {
          t: "Equipamentos de proteção (EPI) inspecionando indústrias, obras ou frotas.",
          v: "mec",
        },
      ],
    },
    {
      q: "5. Que tipo de problema mundial você gostaria de ajudar a resolver?",
      o: [
        {
          t: "Criar novas medicações ou alternativas biotecnológicas para doenças.",
          v: "qui",
        },
        {
          t: "Desenvolver sistemas de automação que reduzam o esforço humano pesado.",
          v: "mec",
        },
        {
          t: "Combater a poluição, monitorar o desmatamento e purificar águas.",
          v: "amb",
        },
      ],
    },
    {
      q: "6. Qual dessas indústrias parece mais empolgante para fazer carreira?",
      o: [
        {
          t: "Indústria Automobilística ou Aeroespacial.",
          v: "mec",
        },
        {
          t: "Indústria de Entretenimento Digital, Jogos ou Inteligência Artificial.",
          v: "tec",
        },
        {
          t: "Indústria Farmacêutica ou de Cosméticos.",
          v: "qui",
        },
      ],
    },
    {
      q: "7. Quando você joga um videogame ou usa um aplicativo complexo, você pensa em:",
      o: [
        {
          t: "Como as mecânicas, regras e códigos por trás dele foram programados.",
          v: "tec",
        },
        {
          t: "No consumo de energia que aquele processador ou servidor exige.",
          v: "mec",
        },
        {
          t: "Eu prefiro atividades ao ar livre ou que não envolvam telas.",
          v: "amb",
        },
      ],
    },
    {
      q: "8. Em um canteiro de obras de um grande prédio, o que mais chamaria sua atenção?",
      o: [
        {
          t: "A arquitetura, a estrutura das vigas e o desenho das plantas.",
          v: "const",
        },
        {
          t: "A instalação dos geradores elétricos, elevadores e motores térmicos.",
          v: "mec",
        },
        {
          t: "A gestão dos resíduos da obra e o impacto ambiental no bairro.",
          v: "amb",
        },
      ],
    },
    {
      q: "9. Se você trabalhasse com veículos modernos (como carros elétricos), sua área favorita seria:",
      o: [
        {
          t: "A parte de motores, engrenagens e sistemas de suspensão.",
          v: "mec",
        },
        {
          t: "A integração de circuitos elétricos, sensores e baterias inteligentes.",
          v: "mec",
        },
        {
          t: "A inteligência artificial que pilota o veículo de forma autônoma.",
          v: "tec",
        },
      ],
    },
    {
      q: "10. Escolha a palavra que melhor define seu estilo de pensamento:",
      o: [
        {
          t: "Lógica e Abstração (Adoro criar soluções virtuais).",
          v: "tec",
        },
        {
          t: "Prática e Construção (Gosto de ver o resultado físico palpável).",
          v: "mec",
        },
        {
          t: "Investigação e Natureza (Gosto de analisar elementos orgânicos e químicos).",
          v: "qui",
        },
      ],
    },
  ];

  const [indiceAtual, setIndiceAtual] = useState(0);

  const [pontuacao, setPontuacao] = useState<Pontuacao>({
    tec: 0,
    qui: 0,
    mec: 0,
    const: 0,
    amb: 0,
  });

  const [respostaSelecionada, setRespostaSelecionada] =
    useState<Categoria | "">("");

  const [tela, setTela] = useState("inicio");

  const [resultado, setResultado] = useState<Resultado>({
    descricao: "",
    cursos: [],
  });

  function iniciarQuiz() {
    setTela("perguntas");
  }

  function avancarQuiz() {
    if (!respostaSelecionada) {
      alert("Por favor, selecione uma resposta antes de continuar!");
      return;
    }

    const novaPontuacao = { ...pontuacao };
    novaPontuacao[respostaSelecionada]++;
    setPontuacao(novaPontuacao);
    setRespostaSelecionada("");

    if (indiceAtual < bancoPerguntas.length - 1) {
      setIndiceAtual(indiceAtual + 1);
    } else {
      exibirResultado(novaPontuacao);
    }
  }

  function exibirResultado(pontos: Pontuacao) {
    const categorias: Categoria[] = ["tec", "qui", "mec", "const", "amb"];
    const categoriasOrdenadas = categorias.sort(
      (a, b) => pontos[b] - pontos[a]
    );

    const perfilVencedor = categoriasOrdenadas[0];

    let descricao = "";
    let cursosSugeridos: string[] = [];

    if (perfilVencedor === "tec") {
      descricao =
        "Seu raciocínio é voltado à inovação digital, algoritmos e criação lógica. Você se daria muito bem no desenvolvimento de soluções virtuais!";

      cursosSugeridos = [
        "Desenvolvimento de Sistemas",
        "Programação de Jogos Digitais",
      ];
    } else if (perfilVencedor === "qui") {
      descricao =
        "Você possui forte afinidade com as ciências aplicadas, análises laboratoriais e transformações biológicas e químicas.";

      if (pontos.amb > pontos.tec) {
        cursosSugeridos = ["Química", "Biotecnologia"];
      } else {
        cursosSugeridos = ["Farmácia", "Química"];
      }
    } else if (perfilVencedor === "amb") {
      descricao =
        "Seu foco está em cuidar dos recursos do planeta, sustentabilidade e entender processos biológicos integrados ao ecossistema.";

      cursosSugeridos = ["Meio Ambiente", "Biotecnologia"];
    } else if (perfilVencedor === "const") {
      descricao =
        "Você demonstra inclinação para o planejamento urbano, desenho arquitetônico e projetos voltados à construção civil.";

      cursosSugeridos = ["Edificações", "Mecânica"];
    } else {
      descricao =
        "Seu perfil é altamente técnico, industrial e voltado a consertos mecânicos, automação e sistemas elétricos pesados.";

      if (pontos.tec > pontos.qui) {
        cursosSugeridos = ["Eletrônica", "Eletromecânica"];
      } else {
        cursosSugeridos = ["Manutenção Automotiva", "Mecânica"];
      }
    }

    setResultado({
      descricao,
      cursos: cursosSugeridos,
    });

    setTela("resultado");
  }

  function reiniciarQuiz() {
    setIndiceAtual(0);

    setPontuacao({
      tec: 0,
      qui: 0,
      mec: 0,
      const: 0,
      amb: 0,
    });

    setRespostaSelecionada("");

    setResultado({
      descricao: "",
      cursos: [],
    });

    router.push("/inscricao");
  }

  const perguntaAtual = bancoPerguntas[indiceAtual];

  const progresso =
    tela === "perguntas"
      ? ((indiceAtual + 1) / bancoPerguntas.length) * 100
      : 0;

  return (
    <div className="quiz-container">
      {tela === "inicio" && (
        <div className="tela ativa">
          <h1>Descubra Seu Curso Ideal</h1>

          <p className="sub">
            Responda a <strong>10 perguntas rápidas</strong> (leva menos de 2
            minutos) e descubra quais das nossas formações técnicas combinam
            perfeitamente com você!
          </p>

          <button className="btn" onClick={iniciarQuiz}>
            Começar Agora
          </button>
        </div>
      )}

      {tela === "perguntas" && (
        <div className="tela">
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${progresso}%` }}
            ></div>
          </div>

          <h3>{perguntaAtual.q}</h3>

          <div className="opcoes">
            {perguntaAtual.o.map((opcao, index) => (
              <label
                className={`opcao ${
                  respostaSelecionada === opcao.v ? "selecionada" : ""
                }`}
                key={index}
              >
                <input
                  type="radio"
                  name="resposta"
                  value={opcao.v}
                  checked={respostaSelecionada === opcao.v}
                  onChange={(e) =>
                    setRespostaSelecionada(e.target.value as Categoria)
                  }
                />

                {opcao.t}
              </label>
            ))}
          </div>

          <button className="btn" onClick={avancarQuiz}>
            {indiceAtual === bancoPerguntas.length - 1
              ? "Ver Resultado"
              : "Avançar"}
          </button>
        </div>
      )}

      {tela === "resultado" && (
        <div className="tela">
          <h1>Seu Perfil Profissional</h1>

          <p>{resultado.descricao}</p>

          <div className="cursos-box">
            <p
              style={{
                margin: "0 0 10px 0",
                color: "#004085",
                fontWeight: "bold",
              }}
            >
              Nossas 2 principais recomendações:
            </p>

            <ul
              style={{
                margin: 0,
                paddingLeft: "20px",
              }}
            >
              {resultado.cursos.map((curso, index) => (
                <li key={index}>{curso}</li>
              ))}
            </ul>
          </div>

          <button
            className="btn"
            style={{ background: "#004085" }}
            onClick={reiniciarQuiz}
          >
            Ir para inscrição
          </button>
        </div>
      )}
    </div>
  );
}