import nextConfig from 'eslint-config-next/core-web-vitals'
import eslintConfigPrettier from 'eslint-config-prettier'

const eslintConfig = [
    ...nextConfig,
    eslintConfigPrettier,
    {
        rules: {
            'no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
        },
    },
]

export default eslintConfig
