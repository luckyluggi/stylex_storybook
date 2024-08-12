import type { Meta, StoryObj } from '@storybook/react';
import { MyButton } from './myButton';

const meta: Meta<typeof MyButton> = {
  component: MyButton,
  title: 'MyButton',
};
export default meta;

type Story = StoryObj<typeof MyButton>;

export const Story1: Story = {
  args: {},
  render: ()=>(
    <MyButton>
      Test
    </MyButton>
  )
};
