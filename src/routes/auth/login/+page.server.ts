import { auth } from '$lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) {
		throw redirect(302, '/');
	}
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const { email, password } = Object.fromEntries(await request.formData()) as Record<
			string,
			string
		>;

		try {
			const key = await auth.useKey('email', email, password);
			const session = await auth.createSession(key.userId);
			locals.auth.setSession(session);
		} catch (err) {
			console.error(err);
			return fail(400, { message: 'Could not login user.' });
		}
		throw redirect(302, '/');
	}
};
