/**
 * Register hook to process TypeScript files using ts-node
 */
import { register } from 'node:module'
register('ts-node/esm', import.meta.url)

/**
 * Import ace console entrypoint
 */
await import('./bin/console.js')