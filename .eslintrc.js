module.exports = {
    plugins: [
        '@stylistic'
    ],
    parser: '@typescript-eslint/parser',
    rules: {
        '@stylistic/indent': ['error', 4],
        '@stylistic/quotes': ['error', 'single']
    }
}