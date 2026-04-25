export const site = {
	name: 'Daniel Gimigliano',
	title: 'Daniel Gimigliano - Blog',
	description: 'Engenheiro de software escrevendo sobre software, sistemas web e interfaces cuidadosamente construídas.',
	url: 'https://gimigliano.blog',
	author: 'Daniel Gimigliano',
	locale: 'pt_BR',
	social: {
		github: 'https://github.com/c3h',
		linkedin: 'https://www.linkedin.com/in/daniel-gimigliano/',
		lattes: 'http://lattes.cnpq.br/6585120736457645',
		email: 'mailto:hey@gimigliano.blog',
	},
};

export const navItems = [
	{ href: '/', label: 'início', key: 'i' },
	{ href: '/blog/', label: 'blog', key: 'b' },
	{ href: '/projects/', label: 'projetos', key: 'p' },
] as const;

export const secondaryNav = [
	{ href: '/uses/', label: 'ferramentas' },
	{ href: '/publications/', label: 'publicações' },
] as const;

export const socialLinks = [
	{ href: site.social.linkedin, label: 'linkedin' },
	{ href: site.social.lattes, label: 'lattes' },
	{ href: site.social.github, label: 'github' },
	{ href: site.social.email, label: 'email' },
] as const;
