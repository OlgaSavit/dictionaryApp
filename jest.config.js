module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    '/node_modules/toggle-switch-react-native/ToggleSwitch.+\\.js$',
  ],

  setupFilesAfterEnv: ['./setupTests.js'],
};
