import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // If package included using file: in package.json, two instances of Vue are created, generating weird errors.
    // See: https://github.com/vuejs/core/issues/2064#issuecomment-797365133
    dedupe: ['vue'],
  }
})
