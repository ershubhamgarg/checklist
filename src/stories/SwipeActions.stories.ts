import type {Meta, StoryObj} from '@storybook/react';

import MyListItem from '../components/MyListItem';
import {SwipeActions} from '../components/SwipeActions.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof SwipeActions> = {
  title: 'Example/SwipeActions',
  component: SwipeActions,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;
type Story = StoryObj<typeof SwipeActions>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    deletee: false,
    done: false,
    onPressDone: () => {},
    skip: false,
    submitted: false,
    personal: false,
    onPressDelete: () => {},
    uncheck: false,
    onPressSubmitted: () => {},
    onPressSkipped: () => {},
  },
};
