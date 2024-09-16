import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import jsconfigPaths from 'vite-jsconfig-paths'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  resolve: {
    alias: {
      'components': path.resolve(__dirname, './src/components'),
      'hooks': path.resolve(__dirname, './src/hooks'),
      'pages': path.resolve(__dirname, './src/pages'),
      'assets': path.resolve(__dirname, './src/assets'),
      'adapters': path.resolve(__dirname, './src/adapters'),
      'src/redux': path.resolve(__dirname, './src/redux'),
      'services': path.resolve(__dirname, './src/services'),
      'server': path.resolve(__dirname, './src/server'),
      'utilities': path.resolve(__dirname, './src/utilities'),
      'helpers': path.resolve(__dirname, './src/helpers'),
      'containers': path.resolve(__dirname, './src/containers'),
      'config': path.resolve(__dirname, './src/config'),
    },
  },
  test: {
    environment: 'jsdom',  // Usa jsdom como entorno de pruebas
    globals: true,         // Para usar funciones como `describe`, `it` y `expect` globalmente
    setupFiles: './src/setupTests.js',  // Archivo de configuración adicional para las pruebas
  },
})
