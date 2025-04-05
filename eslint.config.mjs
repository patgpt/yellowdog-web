import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
    allConfig: {
        ignorePatterns: ['./src/graphql/**/*.ts'],
    },
})

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
    {
        // Ignore generated files
        ignores: ['src/graphql/**/*.ts'],
    },
    {
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
]

export default eslintConfig
