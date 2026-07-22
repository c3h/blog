/**
 * No papel um link vira citação: endereço curto o bastante para caber na linha.
 * Um endereço longo demais é reduzido ao domínio — melhor um destino reconhecível
 * do que uma linha de caminho que ninguém vai digitar.
 */
export const printUrl = (href: string) => {
	const bare = href
		.replace(/^https?:\/\//, '')
		.replace(/^mailto:/, '')
		.replace(/^www\./, '')
		.split('?')[0]
		.replace(/\/$/, '');
	return bare.length > 48 ? bare.split('/')[0] : bare;
};
