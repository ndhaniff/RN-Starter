module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true
  },
  'rules': {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'semi': ['error', 'never'],
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'max-len': 'off'
  },
  'globals': {
    'fetch': false,
    'alert': true,
    'require': true
  }
}
