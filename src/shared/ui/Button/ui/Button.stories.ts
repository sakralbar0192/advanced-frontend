import type { Meta, StoryObj } from '@storybook/react'
import { DarkThemeDecorator } from 'shared/lib/decorators/DarkThemeDecorator'
import { Button, ButtonTheme, ButtonSize } from './Button'

const meta = {
    title: 'shared/Button',
    component: Button,
    args: {
        children: 'Ok',
        theme: ButtonTheme.CLEAR,
        size: ButtonSize.M,
        square: false
    },
    argTypes: {
        className: {
            table: {
                disable: true
            }
        },
        children: {
            control: 'text'
        },
        theme: {
            options: [ButtonTheme.CLEAR, ButtonTheme.OUTLINE, ButtonTheme.BACKGROUND_INVERTED, ButtonTheme.CLEAR_INVERTED],
            control: 'select'
        },
        square: {
            control: 'boolean'
        },
        size: {
            options: [ButtonSize.M, ButtonSize.L, ButtonSize.XL],
            control: 'select',
            defaultValue: {
                summary: ButtonSize.M
            }
        }
    }
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj

export const LightTheme: Story = {}

export const DarkTheme: Story = {
    decorators: [DarkThemeDecorator]
}
