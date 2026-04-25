import { getCollection, type CollectionEntry } from 'astro:content';

let publishedPostsPromise: Promise<CollectionEntry<'posts'>[]> | null = null;

export function getPublishedPosts() {
	if (!publishedPostsPromise) {
		publishedPostsPromise = getCollection('posts', (post) => !post.data.draft).then((posts) =>
			posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()),
		);
	}
	return publishedPostsPromise;
}

export function postHref(post: CollectionEntry<'posts'>) {
	return `/blog/${post.id}/`;
}

export function formatDate(date: Date) {
	return date
		.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
		.replaceAll('.', '')
		.replace(/\s+de\s+/g, ' ')
		.toLowerCase();
}

export function formatLongDate(date: Date) {
	return date
		.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
		.replace(/\s+de\s+/g, ' ')
		.toLowerCase();
}

export function readingTime(body: string) {
	const words = body.trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.ceil(words / 150));
}
