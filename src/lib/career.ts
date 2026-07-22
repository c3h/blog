import {
	careerEntries,
	railExtras,
	researchKinds,
	type CareerEntry,
	type RailSegment,
} from '../data/career';

/** A régua começa no primeiro registro de pesquisa e nunca é reancorada. */
const RAIL_START = '2016-08';

/** Meses decorridos desde o ano 0 — a régua inteira é indexada por esse número. */
const absolute = (ym: string) => {
	const [year, month] = ym.split('-').map(Number);
	return year * 12 + (month - 1);
};

const ORIGIN = absolute(RAIL_START);

/** O mês do build, lido uma vez: a régua e as datas não podem discordar entre si. */
const NOW = (() => {
	const now = new Date();
	return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
})();

/** 'agora' vira o mês do build: a régua não envelhece entre dois deploys. */
const resolve = (ym: string, now: string) => (ym === 'agora' ? now : ym);

/** 04/2018 — 12/2018, ou só 10/2024 quando começa e termina no mesmo mês. */
export const formatWhen = (from: string, to: string, now = NOW) => {
	const [fy, fm] = from.split('-');
	const end = resolve(to, now);
	if (to === 'agora') return `${fm}/${fy} — agora`;
	const [ty, tm] = end.split('-');
	return from === end ? `${fm}/${fy}` : `${fm}/${fy} — ${tm}/${ty}`;
};

export type RailModelItem = {
	target: string;
	from: number;
	to: number;
	track: 'eng' | 'res';
	tech: string[];
	title: string;
};

export type Rail = {
	total: number;
	/** meses decorridos até o início da régua — o cliente precisa dele para rotular um mês */
	origin: number;
	/** por trilha, quais meses têm registro — pintado no build, não no cliente */
	tracks: { name: 'eng' | 'res'; cells: boolean[] }[];
	years: { year: number; column: number; span: number; minor: boolean }[];
	model: RailModelItem[];
	/** 'agosto de 2016' — para quem lê a página com leitor de tela */
	startLabel: string;
	/** anos inteiros cobertos pela régua; alimenta o título da seção */
	spanYears: number;
};

const NUMBER_WORD = [
	'zero',
	'um',
	'dois',
	'três',
	'quatro',
	'cinco',
	'seis',
	'sete',
	'oito',
	'nove',
	'dez',
	'onze',
	'doze',
	'treze',
	'catorze',
	'quinze',
	'dezesseis',
	'dezessete',
	'dezoito',
	'dezenove',
	'vinte',
];

/** "dez", não "10": o título da régua é frase, não número. */
export const spellCount = (value: number) => NUMBER_WORD[value] ?? String(value);

const trackOf = (entry: CareerEntry): 'eng' | 'res' => (researchKinds.has(entry.kind) ? 'res' : 'eng');

export const buildRail = (): Rail => {
	const fromEntries: RailModelItem[] = careerEntries.map((entry) => ({
		target: `#${entry.id}`,
		from: absolute(entry.from) - ORIGIN,
		to: absolute(resolve(entry.to, NOW)) - ORIGIN,
		track: trackOf(entry),
		tech: entry.tech,
		title: `${entry.role} · ${entry.org}`,
	}));

	const fromExtras: RailModelItem[] = railExtras.map((segment: RailSegment) => ({
		target: segment.target,
		from: absolute(segment.from) - ORIGIN,
		to: absolute(resolve(segment.to, NOW)) - ORIGIN,
		track: segment.track,
		tech: [],
		title: segment.title,
	}));

	const model = [...fromEntries, ...fromExtras];

	// a régua vai até o mês corrente, ou além dele se algum registro for mais recente
	const last = model.reduce((max, item) => Math.max(max, item.to), absolute(NOW) - ORIGIN);
	const total = last + 1;

	// recortado uma vez só, aqui: quem consome o modelo — inclusive o cliente —
	// pode indexar a régua direto, sem repetir a defesa a cada uso
	for (const item of model) {
		item.from = Math.max(0, item.from);
		item.to = Math.min(total - 1, item.to);
	}

	const tracks = (['eng', 'res'] as const).map((name) => {
		const cells = new Array<boolean>(total).fill(false);
		for (const item of model) {
			if (item.track !== name) continue;
			for (let i = item.from; i <= item.to; i++) cells[i] = true;
		}
		return { name, cells };
	});

	const firstYear = Math.floor(ORIGIN / 12);
	const lastYear = Math.floor((ORIGIN + total - 1) / 12);
	const years = [];
	for (let year = firstYear; year <= lastYear; year++) {
		// as pontas da régua caem no meio de um ano: a faixa do rótulo é recortada
		// para não criar coluna fora da grade e desalinhar a escala inteira
		const start = year * 12 - ORIGIN + 1;
		const column = Math.max(1, start);
		years.push({
			year,
			column,
			span: Math.min(start + 12 - column, total - column + 1),
			// os anos do meio somem em telas estreitas; as pontas ancoram a leitura
			minor: year !== firstYear && year !== lastYear,
		});
	}

	return {
		total,
		origin: ORIGIN,
		tracks,
		years,
		model,
		startLabel: new Date(firstYear, ORIGIN % 12).toLocaleDateString('pt-BR', {
			month: 'long',
			year: 'numeric',
		}),
		spanYears: Math.floor(total / 12),
	};
};
