export type Publication = {
	title: string;
	authors: string;
	venue: string;
	country: string;
	year: string;
	description: string;
	href?: string;
};

export const publications: Publication[] = [
	{
		title: 'correlating a measure of asynchrony of block-sequential updates with the dynamics of elementary cellular automata',
		authors: 'd. a. gimigliano, p. p. balbi',
		venue: 'ascat 2026 · springer (ccis, vol. 2801, pp. 270–282)',
		country: 'calicut, índia',
		year: '2026',
		description: 'investigates whether the asynchrony degree of a block-sequential update schedule correlates with the dynamics of elementary cellular automata, using structural equivalence of basins of attraction.',
		href: 'https://doi.org/10.1007/978-3-032-18612-6_20',
	},
	{
		title: 'trabalhando com a deficiência auditiva: uma proposta de ensino a distância com o uso de chatbot',
		authors: 'd. a. joveliano, i. m. galli, g. n. santos júnior, m. r. a. silva, c. s. benites, f. c. ribeiro',
		venue: "icits'20 · pp. 135–147",
		country: 'bogotá, colômbia',
		year: '2020',
		description: 'investiga inclusão de estudantes com deficiência auditiva no ensino superior por meio de ead acessível e chatbots com ia.',
		href: 'https://www.proquest.com/openview/fb8bfe36673b48be722692d37b7b8d05/1?pq-origsite=gscholar&cbl=1006393',
	},
];
