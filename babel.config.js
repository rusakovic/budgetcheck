module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.jsx',
          '.js',
          '.tsx',
          '.ts',
          '.json',
        ],
        alias: {
          '@components': './components',
          '@assets': './assets',
          '@mocks': './mocks',
          '@types': './types',
          '@constants': './constants',
        },
      },
    ],
  ],
};
