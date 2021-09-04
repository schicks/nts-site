const getFilename = (path: string): string | undefined => path.split('/').pop();

export type Post = {
	slug: string;
};

export default async (): Promise<Post[]> => {
	const sketchFiles = import.meta.glob('/src/routes/sketches/*');
	const posts = await Promise.all(
		Object.entries(sketchFiles)
			.filter(([path]) => !(getFilename(path)?.startsWith('_') ?? true))
			.map(async ([path, page]) => {
				const { metadata } = await page();
				const filename = getFilename(path) as string;
				const slug = filename.split('.svelte', 1)[0];
				return { ...metadata, slug };
			})
	);
	console.log(posts);
	return posts;
};
