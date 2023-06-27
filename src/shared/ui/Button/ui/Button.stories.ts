import type { Meta, StoryObj } from '@storybook/react'
import { DarkThemeDecorator } from 'shared/lib/decorators/DarkThemeDecorator'
import { Button, ButtonTheme } from './Button'

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.CLEAR
    }
}

export const PrimaryDark: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.CLEAR
    },
    decorators: [DarkThemeDecorator]
}

export const Outlined: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE
    }
}

export const OutlinedDark: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE
    },
    decorators: [DarkThemeDecorator]
}
