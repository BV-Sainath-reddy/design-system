module.exports = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
      '@storybook/addon-links',
      '@storybook/addon-essentials',
      '@storybook/preset-create-react-app' //  Important for Create React App
    ],
    framework: {
      name: '@storybook/react-webpack5',
      options: {}
    },
    docs: {
      autodocs: true
    }
  };
  