module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    ['comma-dangle']: ['error', 'never'],
    semi: ['error', 'never', {beforeStatementContinuationChars: 'never'}],
    ['no-extra-boolean-cast']: 'off',
    ['react-hooks/exhaustive-deps']: 'off',
    ['react/react-in-jsx-scope']: 'off'
  }
}
