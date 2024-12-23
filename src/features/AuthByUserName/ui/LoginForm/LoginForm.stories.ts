import type { Meta, StoryObj } from '@storybook/react'
import { DarkThemeDecorator } from 'shared/lib/decorators/DarkThemeDecorator'
import { LoginForm } from './LoginForm'
import { StoreDecorator } from 'shared/lib/decorators/StoreDecorator'

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
    }
} satisfies Meta<typeof LoginForm>

export default meta

type Story = StoryObj

export const LightTheme: Story = { decorators: [StoreDecorator] }

export const DarkTheme: Story = {
    decorators: [DarkThemeDecorator, StoreDecorator]
}
