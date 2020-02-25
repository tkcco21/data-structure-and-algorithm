module.exports = {
  'parser': '@typescript-eslint/parser',
  'extends': [
    // 'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  'plugins': [
    '@typescript-eslint',
    'prettier'
  ],
  'parserOptions': {
    'sourceType': 'module',
    'project': './tsconfig.json'
  },
  'rules': {
    'import/prefer-default-export': 'off',
    'prettier/prettier': ['error', {
      'singleQuote': true,
      'semi': false,
      'trailingComma': 'all',
      'printWidth': 110
    }]
  }
}