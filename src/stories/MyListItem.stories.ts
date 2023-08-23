import type {Meta, StoryObj} from '@storybook/react';

import MyListItem from '../components/MyListItem';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof MyListItem> = {
  title: 'Example/MyListItem',
  component: MyListItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;
type Story = StoryObj<typeof MyListItem>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    item: 'item',
    index: 1,
    input: 'input',
    text: 'text',
    onChange: (e: any) => {},
    onPressDelete: (e: any) => {},
    onPressDone: (e: any) => {},
  },
};
