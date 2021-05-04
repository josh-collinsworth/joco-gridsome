import StorybookDecorator from '../src/components/StorybookDecorator.vue';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => ({
    template: `<StorybookDecorator><story /></StorybookDecorator>`
  }),
]
