import type { Meta, StoryObj } from '@storybook/react'
import { DarkThemeDecorator } from 'shared/lib/decorators/DarkThemeDecorator'
import { Input } from './Input'

const meta = {
    title: 'shared/Input',
    component: Input,
    args: {
        placeholder: 'Введите что нибудь'
    },
    argTypes: {
    }
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj

export const LightTheme: Story = {}

export const DarkTheme: Story = {
    decorators: [DarkThemeDecorator]
}
