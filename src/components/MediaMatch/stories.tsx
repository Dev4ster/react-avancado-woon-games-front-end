import { Story, Meta } from '@storybook/react/types-6-0'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: Story = () => (
  <MediaMatch greaterThen="medium">Only on desktop</MediaMatch>
)
export const Mobile: Story = () => (
  <MediaMatch lessThan="medium">Only on desktop</MediaMatch>
)
export const Default: Story = () => <MediaMatch>not displayed</MediaMatch>

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
