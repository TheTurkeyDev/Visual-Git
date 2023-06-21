import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { prismjsPlugin } from 'vite-plugin-prismjs';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        vanillaExtractPlugin(),
        prismjsPlugin({
            'languages': ['diff'],
            'plugins': ['line-numbers'],
            'theme': 'tomorrow',
            'css': true
        })
    ]
});
