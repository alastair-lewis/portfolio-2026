import { defineWorkersConfig } from '@cloudflare/vitest-pool-workers/config';

export default defineWorkersConfig({
	test: {
		poolOptions: {
			workers: {
				wrangler: { configPath: './wrangler.jsonc' },
				miniflare: {
					bindings: {
						RESEND_API_KEY: 'test-api-key',
						PERSONAL_EMAIL: 'test@example.com',
					},
				},
			},
		},
	},
});
