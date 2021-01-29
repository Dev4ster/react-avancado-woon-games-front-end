import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '.'

export default {
  title: 'Button',
  argTypes: {
    children: {
      type: 'string'
    }
  },
  component: Button
} as Meta

export const Default: Story = (args) => <Button {...args} />
Default.args = {
  children: 'Buy Now'
}

export const WithIcon: Story = (args) => <Button {...args} />

WithIcon.args = {
  size: 'small',
  children: 'Buy Now'
}
