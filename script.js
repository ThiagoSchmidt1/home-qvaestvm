// =====================
// Variáveis do DOM
// =====================
const slides = document.querySelectorAll('.carrossel-slide');
const nextButton = document.querySelector('.button-next');
const prevButton = document.querySelector('.button-preview');
const carrosselTrack = document.querySelector('.carrossel-track');
const indicators = document.querySelectorAll('.indicator');

const empresa = document.querySelector('.empresa');
const bg = document.querySelector('.bg-empresa');

let currentIndex = 0; // índice do slide atual

// =====================
// Funções
// =====================

// Mostra o slide atual e atualiza track e indicadores
function showSlide(index) {
    const translateX = -index * 940; // cada slide tem 940px
    carrosselTrack.style.transform = `translateX(${translateX}px)`;
    updateIndicators();
}

// Atualiza os indicadores para mostrar qual slide está ativo
function updateIndicators() {
    indicators.forEach((ind, i) => {
        ind.classList.toggle('active', i === currentIndex);
    });
}

// =====================
// Eventos
// =====================

// Botão próximo
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

// Botão anterior
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

// Clique direto nos indicadores
indicators.forEach((ind, i) => {
    ind.addEventListener('click', () => {
        currentIndex = i;
        showSlide(currentIndex);
    });
});

// Mostrar/ocultar background da empresa ao rolar a página
window.addEventListener('scroll', () => {
    const rect = empresa.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    bg.style.display = inView ? 'block' : 'none';
});

// =====================
// Inicialização
// =====================
showSlide(currentIndex);

// =====================
// cards serviço
// =====================

const cards = document.querySelectorAll('.card');

        cards.forEach(function(card) {
        card.addEventListener('click', function() {
            card.classList.toggle('active');
        });
        });

// =====================
// logo dos clientes
// =====================

const logos = document.querySelectorAll('.logo-wrapper');
const overlay = document.getElementById('overlay');
const overlayImagem = document.getElementById('overlay-imagem');
const overlayTitulo = document.querySelector('.overlay-titulos');
const overlayTexto = document.querySelector('.overlay-texto');
const overlayTituloDois = document.querySelector('.overlay-titulos-dois');
const overlayTextoDois = document.querySelector('.overlay-texto-dois');
const boxMoldura = document.getElementById('box-moldura');
const boxMolduraDois = document.getElementById('box-moldura-dois');
const closeOverlay = document.getElementById('close-overlay');
const boxTitulo = document.querySelector('.megabox-titulo');
const boxTituloDois = document.querySelector('.megabox-titulo-dois');

// Informações de cada logo
const infosLogos = [
    {
        img: 'imagens/sp.png',
        titulo: 'Prefeitura de São Paulo: Gestão Eficiente para a Maior Cidade do Brasil',
        texto: 'Órgão administrativo que governa a cidade de São Paulo. Responsável por saúde, educação, segurança, infraestrutura, cultura e lazer. Mais de 130 mil servidores.',
        tituloDois: 'Case: Gestão de Serviço Funerário PMSP',
        textoDois: 'Desenvolvemos e implementamos um Sistema de Gestão de Serviço Funerário, crucial durante a pandemia, abrangendo: Recebimento automatizado de e-mails da CROSS (óbitos). Liberação automatizada de guias de recolhimento. Painel de acompanhamento de viagens em tempo real. Gestão de avarias da frota, banco de horas e CMV da funerária.',
        boxTitulo: 'Tecnologias Utilizadas',
        boxTituloDois: 'Resultados Alcançados',
        box1: ['Portal WEB.','APP Mobile.', 'RPA (Automação Robótica de Processos).', 'AI (Inteligência Artificial).', 'BI (Painéis de Gestão).'],
        box2: ['+35K Utilizações durante a pandemia.', '+25% Aumento na Produtividade.', '-13% Economia de Combustível.', '+20% Eficiência na Geolocalização dos Veículos.']
    },
    {
        img: 'imagens/uber.png',
        titulo: 'Uber: Inovando a Mobilidade Global',
        texto: 'Plataforma de mobilidade global com aplicativo para viagens. Presente em mais de 70 países e 15.000 cidades. Mais de 30.400 funcionários.',
        tituloDois: 'Case: Automação do Faturamento Uber Business',
        textoDois: 'Implementamos um sistema para automação completa do faturamento do Uber Business no Brasil, utilizando Agentes Computacionais Inteligentes para: Processamento de planilhas de faturamento. Busca de dados cadastrais na Receita Federal. Tratamento de clientes com informações pendentes. Processamento prioritário de faturamento. Geração de Notas de Débito (ND) e Notas Fiscais (NF). Criação de arquivos para geração de boletos.',
        boxTitulo: 'Tecnologias Utilizadas',
        boxTituloDois: 'Resultados Alcançados',
        box1: ['RPA (Automação Robótica de Processos).'],
        box2: ['Redução de 15 para 3 dias na execução da demanda.', '-12% Economia Operacional.', '+3% Aumento no Faturamento.', '+20% Eficiência na Geolocalização dos Veículos.']
    },
    {
        img: 'imagens/manserv.png',
        titulo: 'Manserv: Líder em Serviços Técnicos Especializados no Brasil',
        texto: 'Atuação em manutenção de ativos, operação de processos e infra logística. Mais de 36 mil colaboradores.',
        tituloDois: 'Case: Sistema de Gestão de Frotas (SGF)',
        textoDois: 'Desenvolvemos um sistema para otimizar a gestão da frota veicular, abordando desafios como: Controle deficiente de manutenções e consumo de combustível. Subutilização de veículos e falta de visibilidade sobre o uso da frota. Ausência de controle de quilometragem.',
        boxTitulo: 'Tecnologias Utilizadas',
        boxTituloDois: 'Resultados Alcançados',
        box1: ['AI (Inteligência Artificial).', 'APP Mobile.', 'RPA (Automação Robótica de Processos).', 'BI (Painéis de Gestão).', 'Integração com fornecedores de combustível e telemetria para rastreamento.'],
        box2: ['- 30% Redução de Custos com Manutenção.', '-25% Economia de Combustível.', '+20% Aumento de Eficiência Operacional.', '-20% Redução no Uso Indevido dos Veículos.', '-25% Redução de Locações Desnecessárias.', '-15% Menos Acidentes.', '30% Redução de Multas.']
    },
    {
        img: 'imagens/nagumo.png',
        titulo: 'Rede de Supermercados Nagumo: Tradição e Inovação no Varejo',
        texto: 'Foco em clientes de periferias de grandes cidades. 60 lojas em 16 cidades. Fundada em 1962, com quase 10 mil funcionários.',
        tituloDois: 'Case: Gestão de Fornecedores e Produtos',
        textoDois: 'Desenvolvemos um Painel Web para otimizar o cadastro e controle da entrada de novos fornecedores e produtos, automatizando o fluxo desde o cadastro do fornecedor até a importação no ERP do cliente.',
        boxTitulo: 'Tecnologias Utilizadas',
        boxTituloDois: 'Resultados Alcançados',
        box1: ['Portal WEB.', 'Integração via API do ERP.', 'Rotina para atualização da massa de dados a partir do IBGE.', 'RPA (Automação Robótica de Processos).'],
        box2: ['+12K Novos Produtos Cadastrados. Maior transparência no Processo de Compras.', 'Eficiência na Inclusão de Novos Produtos. Comitê para Entrada de Novos Fornecedores.']
    },
    {
        img: 'imagens/marimexx.png',
        titulo: 'Marimexx: Empresa com Quase 100 Anos em Comércio Exterior e Logística',
        texto: 'Serviços de Desembaraço Aduaneiro e Transporte Rodoviário. Operações em 4 terminais do porto de Santos. Quase 1.000 funcionários.',
        tituloDois: 'Case: Gestão de Agenciamento',
        textoDois: 'Desenvolvemos uma ferramenta de gestão estratégica focada no produto LCL, visando: Estudo de viabilidade financeira e operacional da estufagem de contêineres. Máxima eficiência em embarques de importação (e preparada para exportação).',
        boxTitulo: 'Tecnologias Utilizadas',
        boxTituloDois: 'Resultados Alcançados',
        box1: ['Portal WEB.', 'RPA (Automação Robótica de Processos).', 'AI (Inteligência Artificial).', 'BI (Painéis de Gestão).'],
        box2: ['+20% Aumento na Margem.', '+15% Aumento no Agenciamento.', '-18% Diminuição de Erros Humanos.']
    },
    {
        img: 'imagens/arpen.png',
        titulo: 'ARPEN: Representando os Cartórios de Registro Civil do Brasil',
        texto: 'Entidade que representa mais de 5 mil cartórios de registro civil em todo o território nacional.',
        tituloDois: 'Case: Sistema de Cobrança e Gestão',
        textoDois: 'Implementamos um sistema automático de cobrança e gestão via e-mail e WhatsApp para os cartórios brasileiros, com um painel informativo de acesso restrito, mostrando pendências e obrigações legais.',
        boxTitulo: 'Tecnologias Utilizadas',
        boxTituloDois: 'Resultados Alcançados',
        box1: ['AI (Inteligência Artificial).', 'Painel de Gestão da evolução da atualização das cargas, com índices de resultados e ranqueamento.', 'Rotina para atualização da massa de dados a partir do IBGE.'],
        box2: ['+25% Aumento na Arrecadação.', '-15% Diminuição da Inadimplência.', '90K E-mails enviados/Mês.', '20K WhatsApps enviados/Mês.']
    },
    {
        img: 'imagens/informa.png',
        titulo: 'Informa PLC: Líder Global em Eventos e Publicações',
        texto: 'Multinacional britânica de eventos e publicações. Organiza eventos de negócios em mais de 45 países. Mais de 4.500 colaboradores em mais de 30 países.',
        tituloDois: 'Case: Sistema SBF (Feira da Saúde)',
        textoDois: 'Desenvolvemos um sistema para gerenciar a maior feira da América Latina no ramo da saúde, oferecendo: Controle de reuniões para a gestão do evento. Interface com funcionalidades de rede social (postagem de fotos, chat) e agenda de reuniões para os participantes.',
        boxTitulo: 'Tecnologias Utilizadas',
        boxTituloDois: 'Resultados Alcançados',
        box1: ['Portal Web para gerenciamento do evento.', 'Comunicação através de chatbot.'],
        box2: ['+250 Reuniões Marcadas por Agentes de IA.', 'Dashboards para Acompanhamento de Indicadores.']
    },
    {
        img: 'imagens/travel.png',
        titulo: 'Travel Plus: Agência Especializada em Viagens e Eventos Corporativos',
        texto: 'Quase 20 anos de mercado. Foco em viagens de negócios e lazer. Atendimento personalizado e soluções inovadoras.',
        tituloDois: 'Case: Sistema para Gestão de Eventos',
        textoDois: 'Desenvolvemos e implementamos um Sistema de Gestão de Eventos impulsionado por Agentes de Inteligência Artificial, oferecendo: Templates inteligentes que se ajustam automaticamente às variáveis do evento (convidados, patrocinadores, fornecedores, etc.). Plataforma única para gerenciar todos os elementos essenciais: hotéis, pacotes, cotas, patrocinadores, convidados, staff, fornecedores, gestão financeira e traslados, com fluxos de trabalho automatizados. A solução permite à agência atender mais eventos simultaneamente com maior qualidade e menor esforço operacional.',
        boxTitulo: 'Tecnologias Utilizadas',
        boxTituloDois: 'Resultados Alcançados',
        box1: ['AI (Inteligência Artificial).', 'BI (Painéis de Gestão).'],
        box2: ['Configuração Automatizada.', 'Modelos Reutilizáveis.', 'Gestão Integrada.', 'Redução de Erros.', 'Escalabilidade.']
    },
    {
        img: 'imagens/borelli.png',
        titulo: 'Grupo Borelli: Disponibilidade de Frotas',
        texto: 'O Grupo Borelli é uma empresa especializada no Transporte Rodoviário de produtos químicos liquidos a granel e nos serviços de logística para as principais empresas dos principais setores produtivos do país.',
        tituloDois: 'Case: Sistema para Gestão de Eventos',
        textoDois: 'Implementamos um Painel de Disponibilidade de Frotas, alimentado por Agentes de IA, que oferece: Localização em tempo real dos veículos e carretas (disponíveis e em manutenção). Previsão de chegada no cliente. Evolução do cronograma de manutenções com datas estimadas de conclusão.',
        boxTitulo: 'Tecnologias Utilizadas',
        boxTituloDois: 'Resultados Alcançados',
        box1: ['AI (Inteligência Artificial)'],
        box2: ['Informação em Tempo Real da Localização de Cada Carreta.', 'Otimização do Processo com Eliminação de Planilhas Excel.', 'Diminuição da Necessidade de Contratação de Terceiros.']
    }
];

// Função para abrir overlay com dados da logo clicada
logos.forEach((logo, index) => {
    const info = infosLogos[index];

    logo.addEventListener('click', () => {
        overlayImagem.src = info.img;
        overlayTitulo.textContent = info.titulo;
        overlayTexto.textContent = info.texto;
        overlayTituloDois.textContent = info.tituloDois;
        overlayTextoDois.textContent = info.textoDois;

        // Preenche os títulos das mega boxes
        boxTitulo.textContent = info.boxTitulo || '';
        boxTituloDois.textContent = info.boxTituloDois || '';

        // Preenche os conteúdos das mega boxes
        boxMoldura.querySelector('.box-texto').innerHTML = Array.isArray(info.box1) ? info.box1.join('<br>') : info.box1 || '';
        boxMolduraDois.querySelector('.box-texto-dois').innerHTML = Array.isArray(info.box2) ? info.box2.join('<br>') : info.box2 || '';

        // Exibe o overlay
        overlay.style.display = 'flex';

        // Força o scroll para o topo
        overlay.querySelector('.overlay-conteudo').scrollTop = 0;
    });
});

// Fechar overlay
closeOverlay.addEventListener('click', () => overlay.style.display = 'none');
overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.style.display = 'none';
});