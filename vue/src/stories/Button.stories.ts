import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    stylingType: {
      control: 'select',
      options: [undefined, 'primary', 'secondary', 'success', 'danger'],
    },
    stylingMode: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    circle: { control: 'boolean' },
    round: { control: 'boolean' },
    rect: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
  args: {
    // primary: false,
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    label: 'Button',
  },
};

export const Primary: Story = {
  args: {
    // primary: true,
    label: 'Button',
    stylingType: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    // primary: false,
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small',
  },
};
