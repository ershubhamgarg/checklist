import type {Meta, StoryObj} from '@storybook/react';

import SwipableComponent from '../components/SwipableComponent';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof SwipableComponent> = {
  title: 'Example/SwipableComponent',
  component: SwipableComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;
type Story = StoryObj<typeof SwipableComponent>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    // children: JSX.Element;
    done: false,
    // setOpen?: (e: boolean) => void | undefined;
    deletee: false,
    skip: false,
    submitted: false,
    onPressDone: () => {},
    personal: false,
    onPressDelete: () => {},
    uncheck: false,
    onPressSubmitted: () => {},
    onPressSkipped: () => {},
  },
};
