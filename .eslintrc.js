module.exports = {
  root: true,
  env: {
    'react-native/react-native': true,
  },
  extends: [
    '@react-native-community',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react-native', 'simple-import-sort'],
  rules: {
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,
    '@typescript-eslint/ban-ts-comment': 0,
  },
}
