import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    {
      name: "html-import",
      apply: "serve",
      transform(src, id) {
        if (id.endsWith('.html')) {
          return {
            code: `export default ${JSON.stringify(src)}`,
          };
        }
      }
    }
  ],
})
