import type { Meta, StoryObj } from '@storybook/react'
import { DarkThemeDecorator } from 'shared/lib/decorators/DarkThemeDecorator'
import { Navbar } from './Navbar'

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs']
} satisfies Meta<typeof Navbar>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
}

export const PrimaryDark: Story = {
    decorators: [DarkThemeDecorator]
}
