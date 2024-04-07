import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/main.ts',
  output: [
    {
      file: 'dist/DKit.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/DKit.esm.js',
      format: 'es'
    },
    {
      file: 'dist/DKit.iife.js',
      format: 'iife',
      name: 'DKit'
    }
  ],
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    terser()
  ]
};
