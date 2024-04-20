import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/react/src/app.css', 'resources/react/src/app.tsx'],
            refresh: true,
        }
        ),
        react(),
    ],
    // resolve: {
    //     alias: {
    //         '@': '/resources/ts',
    //     },
    // },
});
