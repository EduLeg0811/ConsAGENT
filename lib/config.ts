import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "O que é a Proéxis e como posso descobrir a minha programação existencial?",
    prompt: "O que é a Proéxis e como posso descobrir a minha programação existencial?",
    icon: "book-open",
  },
  {
    label: "Como saber se estou preparado para iniciar a Tenepes? Liste 5 atitudes que devo adotar.",
    prompt: "Como saber se estou preparado para iniciar a Tenepes? Liste 5 atitudes que devo adotar.",
    icon: "book-open",
  },
  {
    label: "Qual é a importância da Dupla Evolutiva no desenvolvimento consciencial?",
    prompt: "Qual é a importância da Dupla Evolutiva no desenvolvimento consciencial?",
    icon: "book-open",
  },
  {
    label: "Como posso aumentar o meu abertismo consciencial na convivência diária?",
    prompt: "Como posso aumentar o meu abertismo consciencial na convivência diária?",
    icon: "book-open",
  },
  {
    label: "O que caracteriza uma projeção lúcida e quais são seus principais benefícios?",
    prompt: "O que caracteriza uma projeção lúcida e quais são seus principais benefícios?",
    icon: "book-open",
  },
  {
    label: "Como identificar se estou vivenciando uma reciclagem intraconsciencial (recin)?",
    prompt: "Como identificar se estou vivenciando uma reciclagem intraconsciencial (recin)?",
    icon: "book-open",
  },
  {
    label: "Qual é o papel da Cosmoética na evolução da consciência?",
    prompt: "Qual é o papel da Cosmoética na evolução da consciência?",
    icon: "book-open",
  },
  {
    label: "O que são as reurbanizações extrafísicas (reurbexes) e como posso contribuir com elas?",
    prompt: "O que são as reurbanizações extrafísicas (reurbexes) e como posso contribuir com elas?",
    icon: "book-open",
  },
  {
    label: "Como aplicar o princípio da descrença na pesquisa conscienciológica?",
    prompt: "Como aplicar o princípio da descrença na pesquisa conscienciológica?",
    icon: "book-open",
  },
  {
    label: "Quais são as principais características do Homo sapiens serenissimus?",
    prompt: "Quais são as principais características do Homo sapiens serenissimus?",
    icon: "book-open",
  },

  {
    label: "Quais as principais características do ser Desperto?",
    prompt: "Quais as principais características do ser Desperto?",
    icon: "book-open",
  },
  {
    label: "Defina o Inacabamento a Maior.",
    prompt: "Defina o Inacabamento a Maior, segundo a Conscienciologia.",
    icon: "book-open",
  },
  {
    label: "Relacione Paradireito e Cosmoética.",
    prompt: "Relacione estes dois conceitos: Paradireito e Cosmoética.",
    icon: "book-open",
  },

  {
    label: "Analise meu verbete (ANTES, adicione o arquivo no símbolo '+' à esquerda).",
    prompt: "Analise meu verbete e dê sugestões de melhoria, de acordo com a base de dados da Enciclopédia da Conscienciologia.",
    icon: "book-open",
  },


];

export const PLACEHOLDER_INPUT = "Olá Conscienciólogo!";

export const GREETING = "ConsAGENT";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
  },
  radius: "round",
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
