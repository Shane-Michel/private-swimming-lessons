import { promises as fs } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const SOURCE_DIR = path.resolve('public/images')
const OUTPUT_DIR = path.resolve('public/generated')
const VALID_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png'])

async function readImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const resolved = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await readImages(resolved)))
    } else if (VALID_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(resolved)
    }
  }

  return files
}

async function ensureEmptyDir(dir) {
  await fs.rm(dir, { recursive: true, force: true })
  await fs.mkdir(dir, { recursive: true })
}

async function createWebp(sourcePath) {
  const relative = path.relative(SOURCE_DIR, sourcePath)
  const parsed = path.parse(relative)
  const targetDir = path.join(OUTPUT_DIR, parsed.dir)
  const targetPath = path.join(targetDir, `${parsed.name}.webp`)

  await fs.mkdir(targetDir, { recursive: true })
  await sharp(sourcePath).webp({ quality: 80 }).toFile(targetPath)
  return { sourcePath, targetPath }
}

async function main() {
  try {
    await fs.access(SOURCE_DIR)
  } catch (error) {
    console.error(`Source directory not found: ${SOURCE_DIR}`)
    process.exit(1)
  }

  await ensureEmptyDir(OUTPUT_DIR)
  const sources = await readImages(SOURCE_DIR)

  if (!sources.length) {
    console.warn(`No source images found under ${SOURCE_DIR}`)
    return
  }

  const results = await Promise.all(
    sources.map(async (file) => {
      try {
        return await createWebp(file)
      } catch (error) {
        console.error(`Failed to optimize ${file}:`, error)
        process.exitCode = 1
        return null
      }
    }),
  )

  const successful = results.filter(Boolean)
  console.log(`Generated ${successful.length} WebP assets in ${OUTPUT_DIR}`)

  if (process.exitCode) {
    process.exit(process.exitCode)
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
