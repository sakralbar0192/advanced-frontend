import type { Meta, StoryObj } from '@storybook/react'
import { DarkThemeDecorator } from 'shared/lib/decorators/DarkThemeDecorator'
import { PageLoader } from './PageLoader'

const meta = {
    title: 'widgets/PageLoader',
    component: PageLoader,
    tags: ['autodocs']
} satisfies Meta<typeof PageLoader>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
}

export const PrimaryDark: Story = {
    decorators: [DarkThemeDecorator]
}
