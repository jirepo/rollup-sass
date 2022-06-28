import browsersync from 'rollup-plugin-browsersync'
import html from 'rollup-plugin-generate-html-template'
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from "rollup-plugin-postcss";
import autoprefixer from 'autoprefixer';
import cssimport from 'postcss-import';
import json from '@rollup/plugin-json';

      
export default {
   input : 'src/index.js',
   output : {
     file : 'dist/bundle.js',
     format : 'umd'
   },
   plugins : [
     browsersync({
        server : 'dist'
     }),
     html({
       template : 'src/index.html',
       target : 'dist/index.html'
     }),
     json(),   // package.json 파일 읽기 
     nodeResolve(),   // node_modules 폴더의 모듈 찾기 
     commonjs(),  // Common JS 
     postcss({
        includePaths: ['src/styles/'],
        extensions: ['.css', '.scss', '.sass'],
        extract: true, 
        plugins: [cssimport(), autoprefixer()],
      }),
   ]
}