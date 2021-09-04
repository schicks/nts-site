import type { GetSession } from '@sveltejs/kit';
import getSketches from '$lib/sketches';

export const getSession: GetSession = async () => ({
	posts: await getSketches()
});
