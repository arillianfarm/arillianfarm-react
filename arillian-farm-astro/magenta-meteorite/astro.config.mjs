// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react'; // <--- THIS LINE IS KEY

export default defineConfig({
    integrations: [react()], // <--- AND THIS LINE IS KEY
});
