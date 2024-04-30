import type { Meta, StoryObj } from '@storybook/react'
import { DarkThemeDecorator } from 'shared/lib/decorators/DarkThemeDecorator'
import { PageError } from './PageError'

const meta = {
    title: 'widgets/PageError',
    component: PageError
} satisfies Meta<typeof PageError>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
}

export const PrimaryDark: Story = {
    decorators: [DarkThemeDecorator]
}
