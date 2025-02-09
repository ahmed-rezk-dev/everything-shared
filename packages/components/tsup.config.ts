import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => ({
  entry: ['index.ts', './src/input/index.ts', './src/input/input.tsx'],
  banner: {
    js: "'use client'",
  },
  clean: true,
  format: ['cjs', 'esm'],
  external: ['react', './commponents'],
  dts: true,
  ...options,
  esbuildOptions(options) {
    options.jsx = 'preserve';
  },
}));
