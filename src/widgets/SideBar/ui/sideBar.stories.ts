import type { Meta, StoryObj } from '@storybook/react'
import { DarkThemeDecorator } from 'shared/lib/decorators/DarkThemeDecorator'
import { SideBar } from './SideBar'

const meta = {
    title: 'widgets/SideBar',
    component: SideBar,
    tags: ['autodocs']
} satisfies Meta<typeof SideBar>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'text'
    }
}

export const PrimaryDark: Story = {
    args: {
        children: 'text'
    },
    decorators: [DarkThemeDecorator]
}
