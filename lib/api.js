import fs from 'fs'
import path from 'path'

export const EVENTS_PATH = path.join(process.cwd(), '_events')

export const eventFilePaths = await fs
	.readdirSync(EVENTS_PATH)
	// Only include md(x) files
	.filter((path) => /\.md?$/.test(path))
