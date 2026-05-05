// @ts-check
import { defineConfig } from 'astro/config';
import { webcore } from 'webcoreui/integration';

// https://astro.build/config
// Set PUBLIC_SITE_URL=https://your-project.pages.dev in Cloudflare Pages (or .env) so canonical & Open Graph URLs are correct in production.
export default defineConfig({
	site: process.env.PUBLIC_SITE_URL,
	integrations: [webcore()],
});
