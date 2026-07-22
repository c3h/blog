export type Project = {
	title: string;
	description: string;
	href: string;
	role: string;
	period: string;
	stack: string[];
};

export const projects: Project[] = [
	{
		title: 'ito',
		description:
			'issue tracker local para o terminal: um binário único, um sqlite central e zero cerimônia. desenhado para ser operado tanto por pessoas quanto por agentes de ia.',
		href: 'https://github.com/c3h/ito',
		role: 'autor',
		period: '2026',
		stack: ['go', 'sqlite', 'tui', 'ai agents'],
	},
	{
		title: 'eca-adds-analysis',
		description: 'código que sustenta o artigo publicado pela springer: simulação e análise de autômatos celulares elementares sob atualização bloco-sequencial.',
		href: 'https://github.com/c3h/eca-adds-analysis',
		role: 'autor',
		period: 'ASCAT 2026',
		stack: ['wolfram language', 'cellular automata', 'research'],
	},
];
