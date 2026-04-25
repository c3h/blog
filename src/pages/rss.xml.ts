import rss from '@astrojs/rss';
import { getPublishedPosts, postHref } from '../lib/posts';
import { site } from '../lib/site';

export async function GET() {
	const posts = await getPublishedPosts();

	return rss({
		title: site.title,
		description: site.description,
		site: site.url,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.date,
			link: postHref(post),
		})),
	});
}
