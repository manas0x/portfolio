import * as vite from 'vite'

export default vite.defineConfig(({ command }) => ({
    // Use relative base only for production build to support GitHub Pages
    // In dev mode, use default '/' to avoid path resolution issues
    base: command === 'build' ? './' : '/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: false
    }
}))
