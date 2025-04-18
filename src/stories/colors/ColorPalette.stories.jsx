import React from 'react';
import { ColorSwatch } from '../../components/colors/ColorSwatch';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Foundations/Colors',
  component: ColorSwatch,
  parameters: {
    docs: {
      description: {
        component: 'Design system color palette tokens',
      },
    },
  },
} as Meta<typeof ColorSwatch>;

const Template: StoryFn<typeof ColorSwatch> = () => (
  <div className="space-y-8">
    <section aria-labelledby="primary-colors">
      <h2 id="primary-colors" className="text-xl font-bold mb-4">Primary Colors</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <ColorSwatch name="Primary 50" value="var(--primary-50)" />
        <ColorSwatch name="Primary 100" value="var(--primary-100)" />
        <ColorSwatch name="Primary 500" value="var(--primary-500)" />
        <ColorSwatch name="Primary 900" value="var(--primary-900)" />
      </div>
    </section>
    
    <section aria-labelledby="neutral-colors">
      <h2 id="neutral-colors" className="text-xl font-bold mb-4">Neutral Colors</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <ColorSwatch name="Gray 50" value="var(--gray-50)" />
        <ColorSwatch name="Gray 100" value="var(--gray-100)" />
        <ColorSwatch name="Gray 500" value="var(--gray-500)" />
        <ColorSwatch name="Gray 900" value="var(--gray-900)" />
      </div>
    </section>
  </div>
);

export const LightMode = Template.bind({});
LightMode.parameters = {
  backgrounds: { default: 'light' },
};

export const DarkMode = Template.bind({});
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
DarkMode.decorators = [
  (Story: StoryFn) => (
    <div className="dark">
      <Story />
    </div>
  ),
];
