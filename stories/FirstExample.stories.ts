import type { Meta, StoryObj } from '@storybook/vue3'
import FirstExample from '~/components/FirstExample.vue'

const meta = {
  title: 'Example/FirstExample',
  component: FirstExample,
  tags: ['autodocs'],

} satisfies Meta<typeof FirstExample>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
