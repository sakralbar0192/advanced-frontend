import type { Meta, StoryObj } from '@storybook/react'
import { DarkThemeDecorator } from 'shared/lib/decorators/DarkThemeDecorator'
import { LoginForm } from './LoginForm'

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
    }
} satisfies Meta<typeof LoginForm>

export default meta

type Story = StoryObj

export const LightTheme: Story = {}

export const DarkTheme: Story = {
    decorators: [DarkThemeDecorator]
}
