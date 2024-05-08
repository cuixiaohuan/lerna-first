import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // build: {
  //   outDir: path.resolve(__dirname, 'lib')
  // },
  build: {
    // target: ['modules'],
    // modulePreload: { polyfill: true },
    // emptyOutDir: true,
    // outDir: 'lib', // 打包文件的输出目录
    // lib: {
    //   entry: 'src/main.js',
    //   formats: ['es', 'cjs'],
    //   name: 'index',
    //   fileName: (format) => `index.${format}.js`
    // }

    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/.test(assetInfo.name)) { // 匹配资源文件后缀
            return `media/[name].[hash][ext]`;  // 创建media文件夹存放匹配的资源文件,name为该文件的原名，hash为哈希值，ext为文件后缀名，以[name].[hash][ext]命名规则
          }
          return `lib/[name]-[hash].[ext]`; // 不匹配的资源文件存放至assets，以[name]-[hash].[ext]命名规则，注意两处的命名规则不同
        },

        // 入口文件名
        entryFileNames: 'lib/[name].js',
        // 块文件名
        chunkFileNames: 'lib/[name]-[hash].js',

      },
    },
  }
})
