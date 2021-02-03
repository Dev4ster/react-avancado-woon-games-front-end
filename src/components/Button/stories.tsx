import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '.'
import { AddShoppingCart } from 'styled-icons/material-outlined'

export default {
  title: 'Button',
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
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
  children: 'Buy Now',
  icon: <AddShoppingCart />
}

export const AsLink: Story = (args) => <Button {...args} />

AsLink.args = {
  size: 'large',
  as: 'a',
  children: 'Buy Now',
  href: '/link'
}
