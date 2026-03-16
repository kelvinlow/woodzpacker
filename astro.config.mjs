import { defineConfig } from 'astro/config';

export default defineConfig({
  // outDir by default is 'dist' for static builds, which Cloudflare Pages handles perfectly
  build: {
    format: 'directory',
  }
});
