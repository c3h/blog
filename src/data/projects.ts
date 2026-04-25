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
		title: 'eca-adds-analysis',
		description: 'supplementary code for ASCAT 2026 paper on correlating asynchrony degree with ECA dynamics under block-sequential updates.',
		href: 'https://github.com/c3h/eca-adds-analysis',
		role: 'autor',
		period: 'ASCAT 2026',
		stack: ['wolfram language', 'cellular automata', 'research'],
	},
];
