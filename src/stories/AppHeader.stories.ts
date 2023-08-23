import type {Meta, StoryObj} from '@storybook/react';

import AppHeader from '../components/AppHeader';
import {Text} from 'react-native';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AppHeader> = {
  title: 'MarlowChecklist/AppHeader',
  component: AppHeader,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;
type Story = StoryObj<typeof AppHeader>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'title',
    // children: ()=>(<Text>this is child </Text>),
    onBackPress: () => {},
    backLabel: 'goback',
    backButtonBackgroundStyle: {},
  },
};
