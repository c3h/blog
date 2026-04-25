import { getPublishedPosts, postHref } from '../lib/posts';

export async function GET() {
	const posts = await getPublishedPosts();

	return Response.json(
		posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			href: postHref(post),
		})),
	);
}
