import type { Meta, StoryObj } from '@storybook/react'
import { DarkThemeDecorator } from 'shared/lib/decorators/DarkThemeDecorator'
import { Navbar } from './Navbar'
import { StoreDecorator } from 'shared/lib/decorators/StoreDecorator'

const meta = {
    title: 'widgets/Navbar',
    component: Navbar
} satisfies Meta<typeof Navbar>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    decorators: [StoreDecorator]
}

export const PrimaryDark: Story = {
    decorators: [DarkThemeDecorator, StoreDecorator]
}
