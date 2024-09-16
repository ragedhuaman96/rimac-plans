module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // para importar configuraciones adicionales si es necesario
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',  // Ajusta según el alias de tus rutas
    },
  };