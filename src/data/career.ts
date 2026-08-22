/**
 * A trajetória é a fonte da régua, do filtro por tecnologia e do PDF.
 * Toda data usa o formato 'YYYY-MM'; 'agora' é resolvido no build para o
 * mês corrente, para que a régua não envelheça sozinha entre dois deploys.
 */

export type CareerKind = 'engenharia' | 'pesquisa' | 'ensino' | 'dados';

/** Um item de "o que eu fiz". `href` vira link na tela e citação no papel. */
export type CareerBullet = {
	text: string;
	href?: string;
	after?: string;
};

export type CareerEntry = {
	id: string;
	from: string;
	to: string;
	kind: CareerKind;
	role: string;
	org: string;
	orgHref?: string;
	/** contexto que não cabe dentro do link da empresa — clientes, por exemplo */
	orgNote?: string;
	/** ids do filtro; cada um precisa aparecer na stack declarada da posição */
	tech: string[];
	what: string;
	did?: CareerBullet[];
	stack: string;
};

/** Nem toda entrada é engenharia de produto: a régua tem duas trilhas. */
export const researchKinds: ReadonlySet<CareerKind> = new Set<CareerKind>(['pesquisa', 'ensino']);

export const careerEntries: CareerEntry[] = [
	{
		id: 'e-mackenzie-dr',
		from: '2026-08',
		to: 'agora',
		kind: 'pesquisa',
		role: 'doutorado em engenharia elétrica e computação',
		org: 'mackenzie',
		orgHref: 'https://www.mackenzie.br',
		tech: [],
		what: 'continuidade da pesquisa do mestrado em dinâmica de autômatos celulares.',
		stack: 'wolfram language · simulação · análise de dados',
	},
	{
		id: 'e-mackenzie',
		from: '2024-02',
		to: '2026-03',
		kind: 'pesquisa',
		role: 'mestrado em engenharia elétrica e computação',
		org: 'mackenzie',
		orgHref: 'https://www.mackenzie.br',
		tech: [],
		what: 'pesquisa computacional em dinâmica de autômatos celulares, com bolsa CAPES. geração e análise de grandes volumes de simulações para correlacionar assincronismo de atualização e comportamento dinâmico.',
		did: [
			{
				text: 'artigo publicado no ASCAT 2026',
				href: 'https://doi.org/10.1007/978-3-032-18612-6_20',
				after: ' — Springer, CCIS vol. 2801, pp. 270–282',
			},
			{ text: 'resumo aceito no EMARC 2026' },
		],
		stack: 'wolfram language · simulação · análise de dados',
	},
	{
		id: 'e-capta',
		from: '2024-10',
		to: '2024-10',
		kind: 'engenharia',
		role: 'desenvolvedor de software',
		org: 'capta',
		orgHref: 'https://capta.com.br/',
		tech: ['dotnet', 'csharp'],
		what: 'migração de sistema legado para .NET 8 MVC, com atualização de arquitetura e adequação à nova versão do framework.',
		stack: '.net 8 · mvc · c#',
	},
	{
		id: 'e-sinergy',
		from: '2024-05',
		to: '2024-07',
		kind: 'engenharia',
		role: 'engenheiro de software',
		org: 'sinergyrh',
		orgHref: 'https://sinergyrh.com.br',
		tech: ['typescript', 'node', 'nestjs', 'nextjs', 'react', 'sqlserver', 'prisma', 'modelagem', 'cicd', 'api'],
		what: 'produto novo, do zero, ao lado dos fundadores — do escopo ao deploy, participando também da priorização de funcionalidades.',
		did: [
			{ text: 'estruturei o projeto do zero: modelagem, arquitetura da API e organização dos repositórios' },
			{ text: 'API em NestJS sobre SQL Server e Prisma; front-end em Next.js' },
			{ text: 'pipelines de CI/CD padronizando os ambientes de desenvolvimento e produção' },
		],
		stack: 'nestjs · next.js · sql server · prisma · gitflow · ci/cd',
	},
	{
		id: 'e-metro',
		from: '2023-09',
		to: '2024-06',
		kind: 'dados',
		role: 'analista de dados',
		org: 'metro telworks',
		orgHref: 'https://metrotelworks.com/',
		orgNote: '(tim brasil, tim itália, vivo)',
		tech: ['python'],
		what: 'análise de desempenho de rede no Crowdsourced Benchmark Service, do dado bruto ao relatório que chegava às equipes de rede.',
		did: [
			{ text: 'dashboards em Power BI usados por equipes técnicas e pela diretoria da TIM Brasil no acompanhamento de desempenho de rede' },
			{ text: 'modelo preditivo inicial em Python e PyTorch para prever tendências de desempenho' },
			{ text: 'scripts e documentação técnica para projetos de instalação de antenas (Vivo)' },
		],
		stack: 'python · pytorch · power bi · sql',
	},
	{
		id: 'e-mottu',
		from: '2023-01',
		to: '2023-03',
		kind: 'engenharia',
		role: 'desenvolvedor back-end',
		org: 'mottu',
		orgHref: 'https://mottu.com.br',
		tech: ['typescript', 'node', 'nestjs', 'testes', 'api'],
		what: 'camada BFF em Node.js e NestJS, responsável pela integração entre os microsserviços internos e o front-end da aplicação.',
		did: [{ text: 'testes com Jest, elevando a cobertura da camada BFF' }],
		stack: 'node.js · nestjs · typescript · jest',
	},
	{
		id: 'e-trybe',
		from: '2022-01',
		to: '2022-08',
		kind: 'ensino',
		role: 'instrutor back-end',
		org: 'trybe',
		orgHref: 'https://www.betrybe.com',
		tech: ['typescript', 'node', 'docker', 'mongodb', 'api'],
		what: 'módulos de back-end: Docker, SQL, Node.js, TypeScript, MongoDB e deploy. melhor índice de desempenho entre as turmas da Trybe no período.',
		did: [
			{ text: 'mentorias técnicas semanais, gravadas e disponibilizadas como material de apoio' },
			{ text: 'simulações 1:1 de entrevistas técnicas e comportamentais' },
			{ text: 'videoaulas sobre arquitetura REST, ORM, autenticação com JWT, POO e SOLID' },
		],
		stack: 'docker · sql · node.js · typescript · mongodb',
	},
	{
		id: 'e-avita',
		from: '2020-07',
		to: '2022-01',
		kind: 'engenharia',
		role: 'engenheiro de software',
		org: 'avita insurtech & lawtech',
		orgHref: 'https://avitaseg.com.br',
		tech: ['csharp', 'dotnet', 'react', 'angular', 'mysql', 'modelagem', 'api'],
		what: 'integrei o desenvolvimento desde o início da empresa, presente em concepção, desenvolvimento, homologação e entrega em produção.',
		did: [
			{ text: 'APIs em .NET e front-ends em Angular, React e micro-frontends com SingleSPA' },
			{ text: 'modelagem de schemas, consultas e operações de dados em MySQL' },
			{ text: 'gestão de deploys, com padronização entre desenvolvimento, homologação e produção' },
		],
		stack: '.net · c# · react · angular · singlespa · mysql',
	},
	{
		id: 'e-radix',
		from: '2019-07',
		to: '2020-06',
		kind: 'engenharia',
		role: 'desenvolvedor full stack',
		org: 'radix engenharia e software',
		orgHref: 'https://radixeng.com.br',
		tech: ['csharp', 'typescript', 'mysql'],
		what: 'entrei como estagiário e fui efetivado como pleno em seis meses. desenvolvimento e manutenção de aplicações em C#, TypeScript e MySQL, com testes em ambientes de desenvolvimento e homologação.',
		stack: 'c# · typescript · mysql',
	},
	{
		id: 'e-unasp-acessibilidade',
		from: '2019-07',
		to: '2020-02',
		kind: 'pesquisa',
		role: 'pesquisa em tecnologia assistiva',
		org: 'unasp',
		orgHref: 'https://www.unasp.br',
		tech: [],
		what: 'último semestre da graduação, com as demais frentes encerradas para levar uma só até o fim: ensino a distância acessível para estudantes com deficiência auditiva, apoiado por chatbot. dados de matrícula do IBGE e do INEP como base, e um modelo de adaptação para plataformas como o Moodle.',
		did: [
			{ text: 'melhor artigo na categoria trabalho completo', after: ' — enaic xxi, 2019' },
			{
				text: 'trabalhando com a deficiência auditiva: uma proposta de ensino a distância com o uso de chatbot',
				href: 'https://www.proquest.com/openview/fb8bfe36673b48be722692d37b7b8d05/1?pq-origsite=gscholar&cbl=1006393',
				after: " — icits'20, bogotá, pp. 135–147",
			},
		],
		stack: 'chatbot · acessibilidade · ead',
	},
	{
		id: 'e-unasp-mas',
		from: '2017-07',
		to: '2019-06',
		kind: 'pesquisa',
		role: 'iniciação científica em sistemas multiagentes',
		org: 'unasp',
		orgHref: 'https://www.unasp.br',
		tech: [],
		what: 'dois anos na mesma pergunta: como uma população de agentes autônomos admite um agente novo, que ainda não tem histórico. reputação como critério de entrada, verificada em simulação.',
		did: [
			{ text: 'sistemas multiagentes: uma abordagem prática', after: ' — enaic xix, 2017' },
			{
				text: 'sistemas multiagentes: reconhecimento automático de novos agentes baseado em reputação',
				after: ' — enaic xix, 2017, continuado no enaic xx, 2018',
			},
		],
		stack: 'sistemas multiagentes · reputação · simulação',
	},
	{
		id: 'e-ibgc',
		from: '2018-04',
		to: '2018-12',
		kind: 'engenharia',
		role: 'estagiário full stack',
		org: 'ibgc',
		orgHref: 'https://www.ibgc.org.br',
		tech: ['csharp', 'javascript', 'sqlserver'],
		what: 'primeiro emprego na área. sistemas internos em C#, ASP.NET, JavaScript, PHP e SQL Server: novas funcionalidades, correções e operações de banco — CRUD, consultas, jobs e triggers.',
		stack: 'c# · asp.net · javascript · sql server',
	},
	{
		id: 'e-unasp-smartgrid',
		from: '2016-08',
		to: '2017-06',
		kind: 'pesquisa',
		role: 'iniciação científica em smart grids',
		org: 'unasp',
		orgHref: 'https://www.unasp.br',
		tech: [],
		what: 'primeiro ano da graduação e primeiro contato com pesquisa: redes elétricas inteligentes — medição, resposta à demanda e o que muda numa rede que passa a trocar dados nos dois sentidos.',
		did: [{ text: 'redes elétricas inteligentes (smart grids)', after: ' — enaic xviii, 2016' }],
		stack: 'smart grids · pesquisa',
	},
];

/**
 * Trabalho que ocupa meses de verdade mas não é vínculo, e por isso não entra
 * na trajetória. Sem ele a régua terminaria falsamente vazia.
 */
export type RailSegment = {
	id: string;
	from: string;
	to: string;
	track: 'eng' | 'res';
	title: string;
	target: string;
};

export const railExtras: RailSegment[] = [
	{
		id: 'produto',
		from: '2025-12',
		to: 'agora',
		track: 'eng',
		title: 'produto próprio',
		target: '#agora-produto',
	},
	// o doutorado já é entrada da trajetória; este segmento só dá ao item do
	// "agora" o mesmo hover dos demais
	{
		id: 'agora-doutorado',
		from: '2026-08',
		to: 'agora',
		track: 'res',
		title: 'doutorado em engenharia elétrica e computação · mackenzie',
		target: '#agora-doutorado',
	},
];

/** Cada id precisa existir no `tech` de alguma entrada — filtro vazio é promessa quebrada. */
export const techGroups = [
	{
		label: 'linguagens',
		items: [
			{ id: 'typescript', label: 'typescript' },
			{ id: 'javascript', label: 'javascript' },
			{ id: 'csharp', label: 'c#' },
			{ id: 'python', label: 'python' },
		],
	},
	{
		label: 'back-end e front-end',
		items: [
			{ id: 'node', label: 'node.js' },
			{ id: 'nestjs', label: 'nestjs' },
			{ id: 'dotnet', label: '.net' },
			{ id: 'api', label: 'apis rest' },
			{ id: 'react', label: 'react' },
			{ id: 'nextjs', label: 'next.js' },
			{ id: 'angular', label: 'angular' },
		],
	},
	{
		label: 'dados',
		items: [
			{ id: 'modelagem', label: 'modelagem' },
			{ id: 'sqlserver', label: 'sql server' },
			{ id: 'mysql', label: 'mysql' },
			{ id: 'mongodb', label: 'mongodb' },
			{ id: 'prisma', label: 'prisma' },
		],
	},
	{
		label: 'infra e qualidade',
		items: [
			{ id: 'docker', label: 'docker' },
			{ id: 'cicd', label: 'ci/cd' },
			{ id: 'testes', label: 'testes' },
		],
	},
] as const;

export type EducationItem = {
	title: string;
	meta: string;
	description?: string;
};

export const education: EducationItem[] = [
	{
		title: 'doutorado em engenharia elétrica e computação',
		meta: 'universidade presbiteriana mackenzie · 08/2026 — agora',
	},
	{
		title: 'mestrado em engenharia elétrica e computação',
		meta: 'universidade presbiteriana mackenzie · bolsista capes · 02/2024 — 03/2026',
		description: 'dinâmica de autômatos celulares. publicação internacional no ASCAT 2026 e resumo no EMARC 2026.',
	},
	{
		title: 'bacharelado em ciência da computação',
		meta: 'unasp — centro universitário adventista de são paulo · bolsista pibic · 08/2016 — 12/2019',
		description: 'pesquisa em smart grids, sistemas multiagentes e tecnologia assistiva ao longo de toda a graduação. melhor artigo no enaic xxi, 2019.',
	},
];
