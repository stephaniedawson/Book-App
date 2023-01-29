import { defineConfig } from '@vue/cli-service'
export default defineConfig({
  transpileDependencies: true
})

export const publicPath = process.env.NODE_ENV === 'production'
  ? '/book-app/'
  : '/'