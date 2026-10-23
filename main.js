/* =========================================================
   Você decide o futuro da IA
   Tudo em um só arquivo: dados, sorteio e lógica do jogo.
   ========================================================= */
 
/* ---------- 1. PERGUNTAS ----------
   Cada alternativa tem:
   - texto: o que aparece no botão
   - consequencia: o que acontece depois da escolha
   - pontos: 0 (pouco responsável), 1 (razoável), 2 (muito responsável)
 
   >>> Para usar as SUAS perguntas de alunos, substitua o conteúdo
   >>> de perguntas.alunos mantendo este mesmo formato.
*/
const perguntas = {
    alunos: [
        {
            enunciado: "Seu professor passou um trabalho sobre o Sistema Solar. Uma IA pode escrever tudo em segundos. O que você faz?",
            alternativas: [
                { texto: "Peço para a IA fazer tudo e entrego sem ler.", consequencia: "O professor percebeu que o texto não parecia seu. Você perdeu pontos e não aprendeu nada sobre os planetas.", pontos: 0 },
                { texto: "Uso a IA para tirar dúvidas e escrevo o trabalho com minhas palavras.", consequencia: "Você entendeu o assunto de verdade e ainda ganhou elogios pela clareza. A IA foi uma ótima ajudante!", pontos: 2 },
                { texto: "Copio da IA, mas troco algumas palavras.", consequencia: "Parece esperto, mas na prova você não soube explicar nada. Trocar palavras não é aprender.", pontos: 1 }
            ]
        },
        {
            enunciado: "Você recebe uma foto de um colega que parece engraçada, mas foi feita por IA para zombar dele. O que você faz?",
            alternativas: [
                { texto: "Compartilho no grupo da turma, é só uma brincadeira.", consequencia: "A foto se espalhou e seu colega ficou muito triste. Brincadeira que machuca é bullying, e a escola foi avisada.", pontos: 0 },
                { texto: "Não compartilho e aviso um adulto de confiança.", consequencia: "A foto foi apagada rapidamente e seu colega recebeu apoio. Você ajudou a manter a turma segura.", pontos: 2 },
                { texto: "Só ignoro, não é problema meu.", consequencia: "A foto continuou circulando. Ignorar não protegeu seu colega, às vezes é preciso falar.", pontos: 1 }
            ]
        },
        {
            enunciado: "Um chatbot pede seu nome completo, endereço e o nome da sua escola para \"te conhecer melhor\". E agora?",
            alternativas: [
                { texto: "Passo tudo, ele parece muito simpático.", consequencia: "Seus dados foram parar em lugares que você nem imagina. Informações pessoais são como a chave da sua casa.", pontos: 0 },
                { texto: "Não passo e conto para meus pais ou responsáveis.", consequencia: "Seus responsáveis te ajudaram a configurar a privacidade. Você protegeu a si mesmo e sua família.", pontos: 2 },
                { texto: "Passo só o nome e a escola.", consequencia: "Com apenas essas duas informações, já é possível te encontrar. Pouco dado ainda é dado.", pontos: 1 }
            ]
        },
        {
            enunciado: "Você viu uma notícia incrível na internet, mas ela parece estranha e não tem fonte. Uma IA diz que é verdade.",
            alternativas: [
                { texto: "Confio na IA e compartilho com todo mundo.", consequencia: "A notícia era falsa. IAs também erram e podem inventar coisas. Você espalhou uma mentira sem querer.", pontos: 0 },
                { texto: "Confiro em sites confiáveis e pergunto a um professor.", consequencia: "Você descobriu que era boato e evitou que a mentira se espalhasse. Virou um detetive da verdade!", pontos: 2 },
                { texto: "Fico na dúvida e não faço nada.", consequencia: "Você não espalhou o boato, mas também não ajudou a esclarecer. Investigar é o próximo passo.", pontos: 1 }
            ]
        },
        {
            enunciado: "Na aula de artes, você pode desenhar à mão ou pedir para uma IA criar a imagem. Qual caminho escolhe?",
            alternativas: [
                { texto: "Peço a imagem pronta e digo que fui eu que desenhei.", consequencia: "Mentir sobre a autoria tira o valor do trabalho. Seus colegas e o professor perderam a confiança.", pontos: 0 },
                { texto: "Desenho à mão e uso a IA só para pegar ideias de cores.", consequencia: "Seu desenho ficou único e cheio de personalidade. A criatividade é sua maior superpotência.", pontos: 2 },
                { texto: "Uso a IA e conto para o professor que ela ajudou.", consequencia: "Honestidade conta pontos! O professor valorizou a sinceridade e te desafiou a criar algo seu da próxima vez.", pontos: 1 }
            ]
        },
        {
            enunciado: "Você passa horas conversando com uma IA porque ela sempre concorda com você. Seus amigos te chamaram para brincar. O que faz?",
            alternativas: [
                { texto: "Fico com a IA, ela me entende melhor que todo mundo.", consequencia: "Aos poucos, você se afastou dos amigos. Máquinas ajudam, mas amizades de verdade fazem falta.", pontos: 0 },
                { texto: "Largo a tela e vou brincar com meus amigos.", consequencia: "Foi a tarde mais divertida do mês! A tecnologia é ótima, mas a vida real é ainda melhor.", pontos: 2 },
                { texto: "Digo que vou depois e fico mais um tempinho.", consequencia: "O \"tempinho\" virou a tarde inteira e a brincadeira acabou sem você. Combine limites antes de começar.", pontos: 1 }
            ]
        }
    ],
 
    pais: [
        {
            enunciado: "Seu filho usa uma IA para fazer as tarefas de casa e as notas melhoraram muito. Como você reage?",
            alternativas: [
                { texto: "Fico satisfeito: as notas são o que importam.", consequencia: "Meses depois, a defasagem apareceu nas avaliações presenciais. O desempenho aparente escondeu lacunas de aprendizagem.", pontos: 0 },
                { texto: "Converso com ele, combino regras de uso e peço que explique o que aprendeu.", consequencia: "A IA virou ferramenta de estudo e não de atalho. Seu filho passou a compreender o conteúdo e a ter autonomia.", pontos: 2 },
                { texto: "Proíbo qualquer uso de IA nos estudos.", consequencia: "O uso continuou escondido, sem orientação. Proibir sem dialogar tira a chance de ensinar o uso crítico.", pontos: 1 }
            ]
        },
        {
            enunciado: "Um aplicativo educacional com IA pede acesso à câmera, ao microfone, à localização e aos dados do seu filho. O que você faz?",
            alternativas: [
                { texto: "Aceito tudo para não atrapalhar o uso.", consequencia: "Os dados de uma criança foram coletados em excesso, sem finalidade clara. Isso fere princípios da LGPD, que dá proteção especial a dados de crianças e adolescentes.", pontos: 0 },
                { texto: "Leio a política de privacidade e libero só o estritamente necessário.", consequencia: "Você reduziu os riscos e deu o exemplo de consentimento consciente. Dados de menores exigem cuidado redobrado.", pontos: 2 },
                { texto: "Aceito, mas peço que a escola se responsabilize.", consequencia: "A escola também tem responsabilidades, mas a decisão de consentir é da família. Delegar tudo deixa brechas.", pontos: 1 }
            ]
        },
        {
            enunciado: "Você descobre que um colega do seu filho foi vítima de uma imagem falsa criada por IA (deepfake) e que ela circulou na turma. Qual a sua atitude?",
            alternativas: [
                { texto: "Não me envolvo, o problema é da outra família.", consequencia: "O conteúdo continuou circulando. O silêncio dos adultos ajuda a normalizar a violência digital.", pontos: 0 },
                { texto: "Oriento meu filho a não compartilhar, guardo provas e comunico a escola.", consequencia: "A escola acionou os responsáveis e as plataformas, e a imagem foi removida. Sua postura protegeu a vítima e ensinou empatia.", pontos: 2 },
                { texto: "Mando mensagem de indignação no grupo de pais.", consequencia: "O grupo se dividiu em acusações e o foco saiu da proteção da vítima. Canais oficiais costumam resolver melhor.", pontos: 1 }
            ]
        },
        {
            enunciado: "Seu filho passa várias horas por dia conversando com um assistente de IA e demonstra se isolar de outras pessoas. O que você faz?",
            alternativas: [
                { texto: "Deixo, pelo menos ele está quieto e seguro em casa.", consequencia: "A dependência emocional cresceu e o convívio social diminuiu. Sinais de isolamento merecem atenção.", pontos: 0 },
                { texto: "Estabeleço limites de tempo em conjunto, incentivo atividades presenciais e, se necessário, busco apoio profissional.", consequencia: "Seu filho retomou amizades e hábitos saudáveis, entendendo que a IA não substitui relações humanas.", pontos: 2 },
                { texto: "Tiro o dispositivo de uma vez como castigo.", consequencia: "Surgiram conflitos e ele passou a esconder o uso. Limites funcionam melhor quando são combinados.", pontos: 1 }
            ]
        },
        {
            enunciado: "A escola vai adotar ferramentas de IA em sala de aula e pede a opinião das famílias. Como você participa?",
            alternativas: [
                { texto: "Não respondo, deixo a escola decidir.", consequencia: "As regras foram definidas sem a voz das famílias, deixando dúvidas sobre dados e supervisão.", pontos: 0 },
                { texto: "Participo, pergunto sobre privacidade, supervisão humana e formação dos professores.", consequencia: "A escola criou diretrizes claras de uso, e as famílias passaram a acompanhar a adoção da tecnologia.", pontos: 2 },
                { texto: "Sou contra qualquer uso de IA, sem discutir detalhes.", consequencia: "O debate esfriou. Sem argumentos concretos, a escola não conseguiu endereçar suas preocupações.", pontos: 1 }
            ]
        },
        {
            enunciado: "Seu filho afirma que \"a IA disse que está certo\" sobre um assunto que você sabe que é falso. Como lida com isso?",
            alternativas: [
                { texto: "Digo que a IA está sempre errada e ponto final.", consequencia: "Ele passou a desconfiar de tudo, inclusive de informações verdadeiras. Faltou ensinar a verificar.", pontos: 0 },
                { texto: "Pesquisamos juntos em fontes confiáveis e comparamos as respostas.", consequencia: "Ele aprendeu que IAs podem errar ou inventar informações e ganhou o hábito de checar. Pensamento crítico é a melhor proteção.", pontos: 2 },
                { texto: "Aceito a resposta da IA, ela deve ter razão.", consequencia: "A informação errada foi repetida na escola. Confiar cegamente em qualquer fonte é arriscado, inclusive na IA.", pontos: 1 }
            ]
        }
    ]
};
 
/* ---------- 2. TEXTOS DE RESULTADO ---------- */
const resultados = {
    alunos: [
        { minimo: 0.75, titulo: "🏆 Herói da IA!", texto: "Você usa a tecnologia com inteligência, respeita os outros e protege seus dados. O futuro da IA está em boas mãos, as suas!" },
        { minimo: 0.4, titulo: "🌟 Aprendiz em evolução", texto: "Você já acerta bastante, mas ainda tem decisões para melhorar. Continue perguntando, conferindo informações e conversando com adultos de confiança." },
        { minimo: 0, titulo: "🔦 Hora de repensar", texto: "Algumas escolhas trouxeram consequências ruins, e tudo bem: errar faz parte de aprender. Que tal jogar de novo e testar outros caminhos?" }
    ],
    pais: [
        { minimo: 0.75, titulo: "🛡️ Guardião digital", texto: "Suas decisões equilibram diálogo, limites e proteção de dados. Você prepara seu filho para usar a IA com autonomia e senso crítico." },
        { minimo: 0.4, titulo: "🧭 Em construção", texto: "Há boas intenções, mas algumas decisões deixam brechas. Aposte mais no diálogo, na verificação de informações e no acompanhamento próximo." },
        { minimo: 0, titulo: "⚠️ Atenção redobrada", texto: "Algumas escolhas podem expor seu filho a riscos de privacidade, desinformação ou dependência. Vale buscar informação e conversar com a escola." }
    ]
};
 
const NOMES_PUBLICO = { alunos: "🎒 Modo Aluno", pais: "👨‍👩‍👧 Modo Pais" };
 
/* ---------- 3. UTILITÁRIOS ---------- */
function embaralhar(lista) {
    const copia = [...lista];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}
 
const $ = (id) => document.getElementById(id);
 
/* ---------- 4. ELEMENTOS ---------- */
const telaInicial = $("tela-inicial");
const telaQuiz = $("tela-quiz");
const telaResultado = $("tela-resultado");
const etiquetaPublico = $("etiqueta-publico");
const contador = $("contador");
const barra = $("barra");
const barraPreenchida = $("barra-preenchida");
const elPergunta = $("pergunta");
const elAlternativas = $("alternativas");
const caixaConsequencia = $("consequencia");
const textoConsequencia = $("texto-consequencia");
const btnProxima = $("btn-proxima");
 
/* ---------- 5. ESTADO ---------- */
let publicoAtual = null;
let fila = [];
let indice = 0;
let pontos = 0;
 
/* ---------- 6. FLUXO DO JOGO ---------- */
function mostrarTela(tela) {
    [telaInicial, telaQuiz, telaResultado].forEach((t) => (t.hidden = t !== tela));
    window.scrollTo({ top: 0, behavior: "smooth" });
}
 
function iniciar(publico) {
    publicoAtual = publico;
    fila = embaralhar(perguntas[publico]);
    indice = 0;
    pontos = 0;
    etiquetaPublico.textContent = NOMES_PUBLICO[publico];
    mostrarTela(telaQuiz);
    mostrarPergunta();
}
 
function mostrarPergunta() {
    const atual = fila[indice];
    caixaConsequencia.hidden = true;
    elPergunta.textContent = atual.enunciado;
    contador.textContent = `Pergunta ${indice + 1} de ${fila.length}`;
 
    const progresso = Math.round((indice / fila.length) * 100);
    barraPreenchida.style.width = progresso + "%";
    barra.setAttribute("aria-valuenow", progresso);
 
    elAlternativas.innerHTML = "";
    embaralhar(atual.alternativas).forEach((alt) => {
        const botao = document.createElement("button");
        botao.className = "alternativa";
        botao.type = "button";
        botao.textContent = alt.texto;
        botao.addEventListener("click", () => escolher(alt, botao));
        elAlternativas.appendChild(botao);
    });
 
    elPergunta.setAttribute("tabindex", "-1");
    elPergunta.focus({ preventScroll: true });
}
 
function escolher(alternativa, botaoClicado) {
    pontos += alternativa.pontos;
 
    elAlternativas.querySelectorAll(".alternativa").forEach((b) => {
        b.disabled = true;
    });
    botaoClicado.classList.add("escolhida");
 
    textoConsequencia.textContent = alternativa.consequencia;
    btnProxima.textContent = indice === fila.length - 1 ? "Ver resultado" : "Próxima";
    caixaConsequencia.hidden = false;
    btnProxima.focus();
}
 
function proxima() {
    indice++;
    if (indice < fila.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}
 
function mostrarResultado() {
    barraPreenchida.style.width = "100%";
    const maximo = fila.length * 2;
    const proporcao = pontos / maximo;
    const faixa = resultados[publicoAtual].find((r) => proporcao >= r.minimo);
 
    $("titulo-resultado").textContent = faixa.titulo;
    $("pontuacao").textContent = `Você fez ${pontos} de ${maximo} pontos`;
    $("texto-resultado").textContent = faixa.texto;
    mostrarTela(telaResultado);
}
 
/* ---------- 7. EVENTOS ---------- */
document.querySelectorAll(".cartao-publico").forEach((cartao) => {
    cartao.addEventListener("click", () => iniciar(cartao.dataset.publico));
});
 
btnProxima.addEventListener("click", proxima);
$("btn-novamente").addEventListener("click", () => iniciar(publicoAtual));
$("btn-trocar").addEventListener("click", () => mostrarTela(telaInicial));
