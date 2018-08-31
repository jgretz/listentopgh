module.exports = function(wallaby) {
  return {
    files: ['app/**/*.js'],
    tests: ['__tests__/**/*.test.js'],
    filesWithNoCoverageCalculated: [
      'app/babelHelpers.js',
      'app/util/configureStore.js',
      'app/features/shared/constants/*.js',
    ],

    env: {
      type: 'node',
      runner: 'node',
    },

    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel({
        babelrc: true,
        presets: ['env', 'react'],
      }),
    },

    testFramework: 'jest',
  };
};
