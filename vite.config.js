import { defineConfig } from 'vite'

export default defineConfig({
    // Base path for GitHub Pages
    // If you are deploying to https://<USERNAME>.github.io/<REPO>/, set base to '/<REPO>/'
    // If you are deploying to https://<USERNAME>.github.io/, set base to '/'
    // Using './' ensures assets are relative, which often works for both but can have caveats with history mode routing (not used here).
    base: './',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: false
    }
})
