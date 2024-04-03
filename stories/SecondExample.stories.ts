import type { Meta, StoryObj } from '@storybook/vue3'
import SecondExample from '~/components/SecondExample.vue'

const meta = {
  title: 'Example/SecondExample',
  component: SecondExample,
  tags: ['autodocs'],

} satisfies Meta<typeof SecondExample>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
