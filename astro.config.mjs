// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  output: 'server',
  image: {
    service: { entrypoint: 'astro/assets/services/noop' },
  },
  vite: {
    ssr: {
      external: ['sharp'],
    },
  },
});
